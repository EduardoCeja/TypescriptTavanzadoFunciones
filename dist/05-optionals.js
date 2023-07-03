"use strict";
const createProduct = (id, isNew, stock) => {
    return {
        id,
        stock: stock !== null && stock !== void 0 ? stock : 10,
        isNew: isNew !== null && isNew !== void 0 ? isNew : true
    };
};
// 0 === false
// '' === false
// false === false
const p1 = createProduct(1, true, 12);
console.log(p1);
const p2 = createProduct(1);
console.log(p2);
const p3 = createProduct(1, false, 0);
console.log(p3);
