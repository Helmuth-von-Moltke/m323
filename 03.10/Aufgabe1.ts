const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

const moreNumbers = [12, 45, 68, 100];
const halfNumbers = moreNumbers.map(num => num / 2);
console.log(halfNumbers);

type Adresse = {
    strasse: string;
    hausnummer: number;
    postleitzahl: string;
    stadt: string;
};

const adressen: Adresse[] = [
    { strasse: "Hauptstrasse", hausnummer: 10, postleitzahl: "12345", stadt: "Musterstadt" },
    { strasse: "Nebenstrasse", hausnummer: 5, postleitzahl: "23456", stadt: "Beispielburg" }
];

const formattedAddresses = adressen.map(
    adresse => `${adresse.strasse} ${adresse.hausnummer}, ${adresse.postleitzahl} ${adresse.stadt}`
);
console.log(formattedAddresses);

const fullNames = ["Max Mustermann", "Erika Mustermann"];
const firstNamesUpperCase = fullNames.map(name => name.split(" ")[0].toUpperCase());
console.log(firstNamesUpperCase);
