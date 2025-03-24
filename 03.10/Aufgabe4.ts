const numbers4 = [1, 2, 3, 4, 5];
const sum4 = numbers4.reduce((acc, num) => acc + num, 0);
console.log(sum4);

const strings4 = ["Hallo", " ", "Welt", "!"];
const combinedString4 = strings4.reduce((acc, str) => acc + str, "");
console.log(combinedString4);

type Point4 = [number, number];
const points4: Point4[] = [[1, 3], [2, 5], [4, 8], [6, 2]];

const total4 = points4.reduce(
  (acc, [x, y]) => [acc[0] + x, acc[1] + y],
  [0, 0]
);

const centroid4: Point4 = [total4[0] / points4.length, total4[1] / points4.length];
console.log(centroid4);
