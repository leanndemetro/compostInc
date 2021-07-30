const getDonutPrice = dollarAmount =>
  (Math.round(dollarAmount * 100) / 100).toFixed(2);

export default getDonutPrice;
