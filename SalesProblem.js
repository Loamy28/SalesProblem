const productProfitArray = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
];

const topProduct = () => {
  let top = { profit: -Infinity };
  productProfitArray.forEach((product) => {
    if (product.profit > top.profit) {
      top = product;
    }
  });
  
  console.log(`Top product = name: ${top.name}, profit: ${top.profit}`);
};
topProduct();

const bottomProduct = () => {
  let bottom = { profit: Infinity };
  productProfitArray.forEach((product) => {
    if (product.profit < bottom.profit) {
      bottom = product;
    }
  });
  console.log(`Bottom product = name: ${bottom.name}, profit: ${bottom.profit}`);
};
bottomProduct();

const zeroProfitProduct = () => {
  let zero = { profit: Infinity };
  productProfitArray.forEach((product) => {
    if (Math.abs(product.profit) < Math.abs(zero.profit)) {
      zero = product;
    }
  });
  console.log(`Zero Profit product = name: ${zero.name}, profit: ${zero.profit}`);
};
zeroProfitProduct();
