function removeParentheses(s) {
  const countClosings = (str) => str.split('').filter(x => x == ')').length
  let arr = s.split('('), result = ""
  for(let i = arr.length - 1; i >= 0; i--){
      let skip = countClosings(arr[i])
      result = arr[i].slice(arr[i].lastIndexOf(')') + 1) + result
      if(skip > 1){
        let oldSkip = skip
        skip = arr.slice(i - oldSkip + 1, i + 1).reduce((acc, curr) => acc + countClosings(curr), 0)
        while(oldSkip != skip){
          oldSkip = skip
          skip = arr.slice(i - oldSkip + 1, i + 1).reduce((acc, curr) => acc + countClosings(curr), 0)
        }
        i -= skip - 1
      }
  }
  return result
}
console.log(removeParentheses("example(unwanted thing)example"), "exampleexample")
console.log(removeParentheses("example (unwanted thing) example"), "example  example")
console.log(removeParentheses("a (bc d)e"), "a e")
console.log(removeParentheses("a(b(c))"), "a")
console.log(removeParentheses("hello example (words(more words) here) something"), "hello example  something")
console.log(removeParentheses("(first group) (second group) (third group)"), "  ")

// [
//   'tuFnpqZtJnpLW Sco ',
//   'WyoygFiNGzObBI',
//   'aeQETSU',
//   'hnA MfcjPa lNKMojA)lqAJZCH)bhjwgeFg)IL',
//   '',
//   'wT)W)VcCB',
//   'E  XCO Rl',
//   'BzYnru',
//   'wrRaNWadTmozkvcwZk eLnNNb)Rmi qXCg)nCOTgZ)lqKYyBSTKRAv',
//   'ayS)',
//   'q',
//   'PQ)rt',
//   'xDoJ jEqGhWhi)yjHxSZuiJ',
//   'B Rc',
//   'GJmPzbRsMmPWry)QPlViaCCvzQm)AR)JRwlZA',
  // '',
  // 'htYj)hIpR dqiNFiXJgD x',
  // 'MJovw',
  // 'OihavpMpEZeowPTb)icRhQxP)IADCX)pNfYpPFQBoMQdCxMSL',
  // 'XsEXtnFlYF',
  // 'J yGEahcKAMA)ak)d',
  // 'FrCP)UTRkSEcER',
  // 'ccvXikQaI okaObgAQ R LD)xxCk',
  // 'MEo )NokQlvh '
// ]

// NokQlvh
// xxCk
// UTRkSEcER
// d
// pNfYpPFQBoMQdCxMSL
// JRwlZA
// rt
// q

// lqKYyBSTKRAv
// VcCB
// IL
// tuFnpqZtJnpLW Sco

// tuFnpqZtJnpLW Sco ILVcCBlqKYyBSTKRAvqrtJRwlZApNfYpPFQBoMQdCxMSLdUTRkSEcERxxCkNokQlvh
const text = "tuFnpqZtJnpLW Sco (WyoygFiNGzObBI(aeQETSU(hnA MfcjPa lNKMojA)lqAJZCH)bhjwgeFg)IL((wT)W)VcCB(E  XCO Rl(BzYnru(wrRaNWadTmozkvcwZk eLnNNb)Rmi qXCg)nCOTgZ)lqKYyBSTKRAv(ayS)(q(PQ)rt(xDoJ jEqGhWhi)yjHxSZuiJ(B Rc(GJmPzbRsMmPWry)QPlViaCCvzQm)AR)JRwlZA((htYj)hIpR dqiNFiXJgD x(MJovw(OihavpMpEZeowPTb)icRhQxP)IADCX)pNfYpPFQBoMQdCxMSL(XsEXtnFlYF(J yGEahcKAMA)ak)d(FrCP)UTRkSEcER(ccvXikQaI okaObgAQ R LD)xxCk(MEo )NokQlvh "
console.log(removeParentheses(text))
// const expected = 'tuFnpqZtJnpLW Sco ILVcCBlqKYyBSTKRAvqrtJRwlZApNfYpPFQBoMQdCxMSLdUTRkSEcERxxCkNokQlvh '
// const got = 'tuFnpqZtJnpLW Sco ILVcCBlqKYyBSTKRAvJRwlZApNfYpPFQBoMQdCxMSLdUTRkSEcERxxCkNokQlvh '
// const text = "tuFnpqZtJnpLW Sco (WyoygFiNGzObBI(aeQETSU(hnA MfcjPa lNKMojA)lqAJZCH)bhjwgeFg)IL((wT)W)VcCB(E  XCO Rl(BzYnru(wrRaNWadTmozkvcwZk eLnNNb)Rmi qXCg)nCOTgZ)lqKYyBSTKRAv(ayS)(q(PQ)rt(xDoJ jEqGhWhi)yjHxSZuiJ(B Rc(GJmPzbRsMmPWry)QPlViaCCvzQm)AR)JRwlZA((htYj)hIpR dqiNFiXJgD x(MJovw(OihavpMpEZeowPTb)icRhQxP)IADCX)pNfYpPFQBoMQdCxMSL(XsEXtnFlYF(J yGEahcKAMA)ak)d(FrCP)UTRkSEcER(ccvXikQaI okaObgAQ R LD)xxCk(MEo )NokQlvh "

// const text = "(q(PQ)rt(xDoJ jEqGhWhi)yjHxSZuiJ(B Rc(GJmPzbRsMmPWry)QPlViaCCvzQm)AR)JRwlZA((htYj)hIpR dqiNFiXJgD x(MJovw(OihavpMpEZeowPTb)icRhQxP)IADCX)pNfYpPFQBoMQdCxMSL(XsEXtnFlYF(J yGEahcKAMA)ak)d(FrCP)UTRkSEcER(ccvXikQaI okaObgAQ R LD)xxCk(MEo )NokQlvh "
// const expected = 'qrtJRwlZApNfYpPFQBoMQdCxMSLdUTRkSEcERxxCkNokQlvh '
// const got = 'JRwlZApNfYpPFQBoMQdCxMSLdUTRkSEcERxxCkNokQlvh '