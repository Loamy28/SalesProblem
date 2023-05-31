const dynastyReign = [
    { name: "San Dynasty", year: "MXLI" },
    { name: "Viloria Dynasty", year: "MCCCIIII" },
    { name: "Tan Dynasty", year: "MCCCXCVIII" },
    { name: "Bon Dynasty", year: "MCDXLV" },
    { name: "Maiko Dynasty", year: "MDCLXIV" },
    { name: "Paul Dynasty", year: "MCMXLIX" },
    { name: "Andre Dynasty", year: "MMMXICX" },
  ];
  
  const longestDynasty = () => {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynastyName = "";
  
    dynastyReign.forEach((currentDynasty) => {
      const endYear = convertYear(currentDynasty.year);
  
      if (endYear === -1) {
        return;
      }
  
      const reignDuration = endYear - 1000;
  
      if (reignDuration > longestReign) {
        longestReign = reignDuration;
        longestDynastyName = currentDynasty.name;
      }
    });
  
    return longestDynastyName;
  };
  
  const convertYear = (Year) => {
    const romanNumerals = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  
    let year = 0;
    for (let i = 0; i < Year.length; i++) {
      const currentSymbol = Year[i];
      const currentSymbolValue = romanNumerals[currentSymbol];
      const nextSymbol = Year[i + 1];
      const nextSymbolValue = romanNumerals[nextSymbol] || 0;
  
      if (currentSymbolValue < nextSymbolValue) {
        year -= currentSymbolValue;
      } else {
        year += currentSymbolValue;
      }
    }
    
    if (Year !== convertToRoman(year)) {
      return -1;
    }
    
    return year;
  };
  
  const convertToRoman = (number) => {
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
  
    let roman = "";
    for (const numeral of romanNumerals) {
      while (number >= numeral.value) {
        roman += numeral.symbol;
        number -= numeral.value;
      }
    }
    return roman;
  };
  
  console.log("Longest reigning dynasty:", longestDynasty());