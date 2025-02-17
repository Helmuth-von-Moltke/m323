var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
        this.bookAdded = false;
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
        if (item.toLowerCase() === "book") {
            this.bookAdded = true;
        }
    };
    ShoppingCart.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        if (item.toLowerCase() === "book" && !this.items.includes("book")) {
            this.bookAdded = false;
        }
    };
    ShoppingCart.prototype.getDiscountPercentage = function () {
        return this.bookAdded ? 5 : 0;
    };
    ShoppingCart.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    return ShoppingCart;
}());
var cart = new ShoppingCart();
cart.addItem("book");
cart.addItem("laptop");
console.log(cart.getDiscountPercentage());
cart.removeItem("book");
console.log(cart.getDiscountPercentage());
function getDiscountPercentage(items) {
    return items.includes("book") ? 5 : 0;
}
var items = ["book", "laptop"];
console.log(getDiscountPercentage(items));
console.log(getDiscountPercentage(["phone", "tablet"]));
