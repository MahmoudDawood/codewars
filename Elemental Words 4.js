const ELEMENTS = {
  H: 'Hydrogen',
  He: 'Helium',
  Li: 'Lithium',
  Be: 'Beryllium',
  B: 'Boron',
  C: 'Carbon',
  N: 'Nitrogen',
  O: 'Oxygen',
  F: 'Fluorine',
  Ne: 'Neon',
  Na: 'Sodium',
  Mg: 'Magnesium',
  Al: 'Aluminium',
  Si: 'Silicon',
  P: 'Phosphorus',
  S: 'Sulfur',
  Cl: 'Chlorine',
  Ar: 'Argon',
  K: 'Potassium',
  Ca: 'Calcium',
  Sc: 'Scandium',
  Ti: 'Titanium',
  V: 'Vanadium',
  Cr: 'Chromium',
  Mn: 'Manganese',
  Fe: 'Iron',
  Co: 'Cobalt',
  Ni: 'Nickel',
  Cu: 'Copper',
  Zn: 'Zinc',
  Ga: 'Gallium',
  Ge: 'Germanium',
  As: 'Arsenic',
  Se: 'Selenium',
  Br: 'Bromine',
  Kr: 'Krypton',
  Rb: 'Rubidium',
  Sr: 'Strontium',
  Y: 'Yttrium',
  Zr: 'Zirconium',
  Nb: 'Niobium',
  Mo: 'Molybdenum',
  Tc: 'Technetium',
  Ru: 'Ruthenium',
  Rh: 'Rhodium',
  Pd: 'Palladium',
  Ag: 'Silver',
  Cd: 'Cadmium',
  In: 'Indium',
  Sn: 'Tin',
  Sb: 'Antimony',
  Te: 'Tellurium',
  I: 'Iodine',
  Xe: 'Xenon',
  Cs: 'Caesium',
  Ba: 'Barium',
  Hf: 'Hafnium',
  Ta: 'Tantalum',
  W: 'Tungsten',
  Re: 'Rhenium',
  Os: 'Osmium',
  Ir: 'Iridium',
  Pt: 'Platinum',
  Au: 'Gold',
  Hg: 'Mercury',
  Tl: 'Thallium',
  Pb: 'Lead',
  Bi: 'Bismuth',
  Po: 'Polonium',
  At: 'Astatine',
  Rn: 'Radon',
  Fr: 'Francium',
  Ra: 'Radium',
  Rf: 'Rutherfordium',
  Db: 'Dubnium',
  Sg: 'Seaborgium',
  Bh: 'Bohrium',
  Hs: 'Hassium',
  Mt: 'Meitnerium',
  Ds: 'Darmstadtium',
  Rg: 'Roentgenium',
  Cn: 'Copernicium',
  Uut: 'Ununtrium',
  Fl: 'Flerovium',
  Uup: 'Ununpentium',
  Lv: 'Livermorium',
  Uus: 'Ununseptium',
  Uuo: 'Ununoctium',
  La: 'Lanthanum',
  Ce: 'Cerium',
  Pr: 'Praseodymium',
  Nd: 'Neodymium',
  Pm: 'Promethium',
  Sm: 'Samarium',
  Eu: 'Europium',
  Gd: 'Gadolinium',
  Tb: 'Terbium',
  Dy: 'Dysprosium',
  Ho: 'Holmium',
  Er: 'Erbium',
  Tm: 'Thulium',
  Yb: 'Ytterbium',
  Lu: 'Lutetium',
  Ac: 'Actinium',
  Th: 'Thorium',
  Pa: 'Protactinium',
  U: 'Uranium',
  Np: 'Neptunium',
  Pu: 'Plutonium',
  Am: 'Americium',
  Cm: 'Curium',
  Bk: 'Berkelium',
  Cf: 'Californium',
  Es: 'Einsteinium',
  Fm: 'Fermium',
  Md: 'Mendelevium',
  No: 'Nobelium',
  Lr: 'Lawrencium'
}
function elementalForms(word) {
  // Create combinations array
  const combinations = []
  possibleCombination(word.toLowerCase(), [])
  // Create recursion function (word, elements)
  function possibleCombination(word, combination){

    // Base case: word is completely divided >> push combinations to result array
    if(!word) {
      combinations.push(combination)
      return
    }
        
    // Check for available elements options (1, 2, 3)
    const options = [] // Object.entries(ELEMENTS)
    for(const [element, name] of Object.entries(ELEMENTS)){
      if(word.indexOf(element.toLowerCase()) == 0) options.push([element, name])
    }

    // if there's no options >> return
    if(!options.length) return
    // Iterate over options
    options.forEach(option => {
      const newWord = word.slice(option[0].length)
      const newCombinations = combination.concat([`${option[1]} (${option[0]})`])
      possibleCombination(newWord, newCombinations)
    })
      // Call recursive func with (new word & comb + el)
  }
  return combinations.length && combinations[0].length ? combinations : []
}

console.log(elementalForms('beach'))
console.log(elementalForms('snack'))
console.log(elementalForms(''))
console.log(elementalForms('z'))
// ['beach', [['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)']] ],
// ['snack', [
//             ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)'],
//             ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
//             ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)']
//           ]]