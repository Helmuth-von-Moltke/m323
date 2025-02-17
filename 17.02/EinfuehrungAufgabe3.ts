class TipCalculator {
    private names: string[] = [];
    private tipPercentage: number = 0;

    addPerson(name: string): void {
        this.names.push(name);
        this.updateTipPercentage();
    }

    private updateTipPercentage(): void {
        if (this.names.length === 0) {
            this.tipPercentage = 0;
        } else if (this.names.length > 5) {
            this.tipPercentage = 20;
        } else {
            this.tipPercentage = 10;
        }
    }

    getTipPercentage(): number {
        return this.tipPercentage;
    }

    getNames(): string[] {
        return [...this.names];
    }
}


const calculator = new TipCalculator();
calculator.addPerson("Alice");
calculator.addPerson("Bob");
console.log(calculator.getTipPercentage());




function calculateTipPercentage(names: string[]): number {
    if (names.length === 0) return 0;
    return names.length > 5 ? 20 : 10;
}


console.log(calculateTipPercentage(["Alice", "Bob"]));
console.log(calculateTipPercentage(["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]));
console.log(calculateTipPercentage([]));

