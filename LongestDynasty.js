// const dynastyReign = [
//     { name: "San Dynasty", year: "MXLI" },
//     { name: "Viloria Dynasty", year: "MCCCIIII" },
//     { name: "Tan Dynasty", year: "MCCCXCVIII" },
//     { name: "Bon Dynasty", year: "MCDXLV" },
//     { name: "Maiko Dynasty", year: "MDCLXIV" },
//     { name: "Paul Dynasty", year: "MCMXLIX" },
//     { name: "Andre Dynasty", year: "MMMXICX" },
//   ];
  
//   const longestDynasty = () => {
//     if (dynastyReign.length === 0) {
//       return "No Data";
//     }
  
//     let longestReign = 0;
//     let longestDynastyName = "";
  
//     dynastyReign.forEach((currentDynasty) => {
//       const endYear = convertYear(currentDynasty.year);
  
//       if (endYear === "Invalid") {
//         return;
//       }
  
//       const reignDuration = endYear - 1000;
  
//       if (reignDuration > longestReign) {
//         longestReign = reignDuration;
//         longestDynastyName = currentDynasty.name;
//       }
//     });
  
//     return longestDynastyName;
//   };
  
//   const convertYear = (romanYear) => {
//     const romanNumerals = {
//       M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1,};
  
//     const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
//     if (!regex.test(romanYear)) {
//       return "Invalid";
//     }
  
//     let year = 0;
//     for (let i = 0; i < romanYear.length; i++) {
//       const currentSymbol = romanYear[i];
//       const nextSymbol = romanYear[i + 1];
//       if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
//         year -= romanNumerals[currentSymbol];
//       } else {
//         year += romanNumerals[currentSymbol];
//       }
//     }
//     return year;
//   };
  
//   console.log("Longest reigning dynasty:", longestDynasty());
  

const dynastyReign = [
    { name: "San Dynasty", year: "MXLI" },
    { name: "Viloria Dynasty", year: "MCCCIIII" },
    { name: "Tan Dynasty", year: "MCCCXCVIII" },
    { name: "Bon Dynasty", year: "MCDXLV" },
    { name: "Maiko Dynasty", year: "MDCLXIV" },
    { name: "Paul Dynasty", year: "MCMXLIX" },
    { name: "Andre Dynasty", year: "MMMXICX" },
  ];
  
  const findLongestAndShortestDynasties = () => {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = -Infinity;
    let shortestReign = Infinity;
    let longestDynastyName = "";
    let shortestDynastyName = "";
  
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
  
      if (reignDuration < shortestReign) {
        shortestReign = reignDuration;
        shortestDynastyName = currentDynasty.name;
      }
    });
  
    return {
      longestDynasty: longestDynastyName,
      shortestDynasty: shortestDynastyName,
    };
  };
  
  const convertYear = (romanYear) => {
    const romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
  
    const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!regex.test(romanYear)) {
      return "Invalid";
    }
  
    let year = 0;
    for (let i = 0; i < romanYear.length; i++) {
      const currentSymbol = romanYear[i];
      const nextSymbol = romanYear[i + 1];
      if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
        year -= romanNumerals[currentSymbol];
      } else {
        year += romanNumerals[currentSymbol];
      }
    }
    return year;
  };
  
  const { longestDynasty, shortestDynasty } = findLongestAndShortestDynasties();
  
  console.log("Longest reigning dynasty:", longestDynasty);
  console.log("Shortest reigning dynasty:", shortestDynasty);
  