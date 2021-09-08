/*
Functional Component for inserting commas in numbers after every third number
*/

module.exports = function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
