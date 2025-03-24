const usdRates: Map<string, number> = new Map([
    ["Eur", 0.82]
]);
console.log(usdRates);

usdRates.set("GBP", 0.75);
console.log(usdRates);

usdRates.delete("Eur");
console.log(usdRates);

const greetings = new Set(["Hello", "Hi there"]);
const names = new Set(["Alice", "Bob"]);

const combined = [...greetings].flatMap(greeting =>
    [...names].map(name => `${greeting}, ${name}!`)
);
console.log(combined);

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const person: [string, number] = ["Joe", 34];
console.log(person);

const people: [string, number][] = [
    ["Joe", 25],
    ["Max", 16],
    ["Joe", 12],
    ["Kirstin", 20]
];

people.forEach(([name, age]) => {
    if (name === "Joe") console.log("Found Joe!");
    else if (age >= 18) console.log(name);
});

function applyFunction(f: (x: number) => number, value: number): number {
    return f(value);
}

const double = (x: number) => x * 2;
console.log(applyFunction(double, 5));

function createMultiplier(factor: number): (x: number) => number {
    return (x: number) => x * factor;
}

const triple = createMultiplier(3);
console.log(triple(10));

function combine(f: (x: number) => number, g: (x: number) => number): (x: number) => number {
    return (x: number) => g(f(x));
}

const square = (x: number) => x * x;
const doubleAndSquare = combine(double, square);
console.log(doubleAndSquare(3));
