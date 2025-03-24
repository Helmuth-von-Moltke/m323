const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers2 = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers2);

const names2 = ["Alice", "Bob", "Charlie", "Diana"];
const longNames2 = names2.filter(name => name.length > 4);
console.log(longNames2);

const moreNumbers2 = [12, 45, 68, 100];
const numbersAbove502 = moreNumbers2.filter(num => num > 50);
console.log(numbersAbove502);

const words2 = ["Scala", "ist", "fantastisch"];
const wordsStartingWithS2 = words2.filter(word => word.startsWith("S"));
console.log(wordsStartingWithS2);

type Buch2 = {
    titel: string;
    autor: string;
    jahr: number;
};

const buecher2: Buch2[] = [
    { titel: "1984", autor: "George Orwell", jahr: 1949 },
    { titel: "Brave New World", autor: "Aldous Huxley", jahr: 1932 },
    { titel: "Fahrenheit 451", autor: "Ray Bradbury", jahr: 1953 }
];

const oldBookTitles2 = buecher2.filter(buch => buch.jahr < 1950).map(buch => buch.titel);
console.log(oldBookTitles2);
