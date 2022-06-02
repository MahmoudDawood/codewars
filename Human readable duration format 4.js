function formatDuration (seconds) {
  if(seconds == 0) return 'now'
  // Calculate time values in order from seconds, subtract from total & store in an object
  const obj = {}
  obj['year'] = Math.floor(seconds / (60 * 60 * 24 * 365))
  seconds -= obj['year'] * 365 * 24 * 60 * 60
  obj['day'] = Math.floor(seconds / (60 * 60 * 24))
  seconds -= obj['day'] * 24 * 60 * 60
  obj['hour'] = Math.floor(seconds / (60 * 60))
  seconds -= obj['hour'] * 60 * 60
  obj['minute'] = Math.floor(seconds / 60)
  seconds -= obj['minute'] * 60
  obj['second'] = seconds
  // console.log(obj)

  // add each pair as value then key to an array, if value > 1, add 's' to key, if value = 0, ignore
  const arr = []
  for(const [key, value] of Object.entries(obj)){
    if(value == 0) continue
    arr.push(value)
    if(value > 1) arr.push(' ' + key + 's')
    else arr.push(' ' + key)
    arr.push(', ')
  }
  arr.pop()
  // console.log(arr)

  // join them with ', ' then find last comma and replace it with ' and ', return it
  // return arr.join(', ')
  const idx =  arr.lastIndexOf(', ')
  if(idx > 0) arr.splice(idx, 1, ' and ')
  return arr.join('')
}
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
console.log(formatDuration(0))

// Parameters: +ve number of seconds
// Returns: Human readable format
// Examples:
  // (formatDuration(1), "1 second")
  // (formatDuration(62), "1 minute and 2 seconds")
  // (formatDuration(120), "2 minutes")
  // (formatDuration(3600), "1 hour")
  // (formatDuration(3662), "1 hour, 1 minute and 2 seconds")
  // (formatDuration(0), "now")
// Pseduocode:
  // Calculate time values in order from seconds, subtract from total & store in an object
  // add each pair as value then key to an array, if value > 1, add 's' to key
  // join them with ', ' then find last comma and replace it with ' and ', return it
