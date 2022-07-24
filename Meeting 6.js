function meeting(s) {
  return s.split(';').map(x => x.toUpperCase().split(':'))
    .sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]))
    .map(x => "(" + x.reverse().join(', ') + ")").join('')
}
console.log(meeting(s = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))