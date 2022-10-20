function getParticipants(handshakes){
    let n = 0
    while (n * (n - 1) / 2 < handshakes) n++
    return n
}

console.log(getParticipants(0), 0)
console.log(getParticipants(1), 2)
console.log(getParticipants(3), 3)
console.log(getParticipants(6), 4)
console.log(getParticipants(7), 5)