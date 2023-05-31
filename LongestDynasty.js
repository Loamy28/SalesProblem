const dynastyReign = [
    { name: "San Dynasty", year: "MXLI", },
    { name: "Viloria Dynasty", year: "MCCCIIII", },
    { name: "Tan Dynasty", year: "MCCCXCVIII", },
    { name: "Bon Dynasty", year: "MCDXLV", },
    { name: "Maiko Dynasty", year: "MDCLXIV", },
    { name: "Paul Dynasty", year: "MCMXLIX", },
    { name: "Andre Dynasty", year: "MMMXICX", },
  ];
  
  const longestDynasty = () => {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynastyName = "";
  
    dynastyReign.forEach((currentDynasty) => {
      const endYear = convertYear(currentDynasty.year);
  
      if (endYear === "Invalid") {
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
      const nextSymbol = Year[i + 1];
  
      if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
        year -= romanNumerals[currentSymbol];
      } else {
        year += romanNumerals[currentSymbol];
      }
    }
    return year;
  };
  
  console.log("Longest reigning dynasty:", longestDynasty());