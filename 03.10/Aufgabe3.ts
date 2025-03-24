type Mitarbeiter3 = {
    name: string;
    abteilung: string;
    gehalt: number;
};

const mitarbeiter3: Mitarbeiter3[] = [
    { name: "Max Mustermann", abteilung: "IT", gehalt: 50000 },
    { name: "Erika Musterfrau", abteilung: "Marketing", gehalt: 45000 },
    { name: "Klaus Klein", abteilung: "IT", gehalt: 55000 },
    { name: "Julia Gross", abteilung: "HR", gehalt: 40000 }
];

const filteredEmployees3 = mitarbeiter3
    .filter(emp => emp.abteilung === "IT" && emp.gehalt >= 50000)
    .map(emp => emp.name.split(" ")[0].toUpperCase());

console.log(filteredEmployees3);

const kurse3 = [
    "Programmierung in Scala",
    "Datenbanken",
    "Webentwicklung mit JavaScript",
    "Algorithmen und Datenstrukturen"
];

const filteredCourses3 = kurse3
    .filter(course => course.includes("Daten"))
    .map(course => course.replace(/\s/g, ""));

const sortedCourses3 = [...filteredCourses3].sort();
const reversedSortedCourses3 = [...filteredCourses3].sort().reverse();

console.log(sortedCourses3);
console.log(reversedSortedCourses3);
