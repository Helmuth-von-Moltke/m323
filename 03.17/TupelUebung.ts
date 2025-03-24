function getWeather(): [string, string, number] {
    const weatherDescription = "sonnig";
    const currentTime = new Date().toLocaleTimeString();
    const currentTemperature = 25;

    return [weatherDescription, currentTime, currentTemperature];
}
console.log(getWeather());

const weatherData: [string, number][] = [
    ["Berlin", 18],
    ["Zürich", 22],
    ["Paris", 21],
    ["Oslo", 15]
];

function filterWarmCities(data: [string, number][]): string[] {
    return data.filter(([_, temp]) => temp > 20).map(([city]) => city);
}
console.log(filterWarmCities(weatherData));

function trending(rates: number[]): boolean {
    return rates.slice(0, -1).every((value, index) => value < rates[index + 1]);
}

console.log(trending([1, 4, 3, 8]));
console.log(trending([1, 2, 3, 8]));
