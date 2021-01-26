'use strict';

function priceTotal(a) {
  return a + a * 0.21;
}
const price = 10;
const iva = '2,1';
const total = priceTotal(10);
console.log(
  'El precio sin IVA es ' + price + ', IVA: ' + iva + ' y Total: ' + total
);
