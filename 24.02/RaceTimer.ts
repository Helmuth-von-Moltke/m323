class RaceTimer {
  private readonly lapTimes: number[] = [];

  addLapTime(time: number): void {
    this.lapTimes.push(time);
    console.log(`Lap time added: ${time}s`);
  }

  getTotalRaceTime(): number {
    if (this.lapTimes.length <= 1) return 0;
    return this.lapTimes.slice(1).reduce((total, time) => total + time, 0);
  }

  getAverageLapTime(): number {
    if (this.lapTimes.length <= 1) return 0;
    const totalTime = this.getTotalRaceTime();
    return totalTime / (this.lapTimes.length - 1);
  }
}

const race = new RaceTimer();
race.addLapTime(60);
race.addLapTime(58);
race.addLapTime(55);
race.addLapTime(62);

console.log("Total Race Time:", race.getTotalRaceTime(), "seconds");
console.log("Average Lap Time:", race.getAverageLapTime(), "seconds");
