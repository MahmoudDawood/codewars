function WhatIsTheTime(timeInMirror) {
  // Split the time into array of hours and minutes
  let time = timeInMirror.split(':')
  // Transform the minutes into the 60s compliment modulus 60
  time = [(23 - time[0] + (+time[1] ? 0 : 1)) % 12 || 12, (60 - +time[1]) % 60]

  // If the minutes have no value >> 24 - hours modulus 12 >> if result is 0 make it 12
  // else 23 - hours modulus 12
  
  // In array elementsIndent 0 to it to become (2 char string) if it's a single number
  // Return string "el1:el2"
  return time.map(t => t.toString().padStart(2, '0')).join(':')
}
console.log(WhatIsTheTime("12:22"), "11:38")
console.log(WhatIsTheTime("05:25"), "06:35")
console.log(WhatIsTheTime("01:50"), "10:10")
console.log(WhatIsTheTime("11:58"), "12:02")
console.log(WhatIsTheTime("12:01"), "11:59")

// Params: Time in mirror
// Returns: Actual time
// Ex:
  // 12:22 --> 11:38
  // 05:25 --> 06:35
  // 01:50 --> 10:10
  // 11:58 --> 12:02
  // 12:01 --> 11:59