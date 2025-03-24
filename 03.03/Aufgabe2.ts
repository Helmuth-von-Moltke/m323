function addToCartPure(cartItems: string[], item: string): string[] {
    return [...cartItems, item];
}

console.log(addToCartPure([], 'apple'));
console.log(addToCartPure(['apple'], 'banana'));
console.log(addToCartPure(['apple', 'banana'], 'orange'));

function multiplyWithGivenRandom(number: number, randomValue: number): number {
    return number * randomValue;
}

console.log(multiplyWithGivenRandom(5, 0.5));
console.log(multiplyWithGivenRandom(10, 0.8));

function returnString(str: string): string {
    return str;
}

console.log(returnString("bruh"));