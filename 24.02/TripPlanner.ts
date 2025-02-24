class TripPlanner {
    private destinations: string[] = [];

    addDestination(destination: string): void {
        this.destinations.push(destination);
        console.log(`Added: ${destination}`);
    }

    removeDestination(destination: string): void {
        this.destinations = this.destinations.filter(dest => dest !== destination);
        console.log(`Removed: ${destination}`);
    }

    modifyRoute(newRoute: string[]): void {
        this.destinations = [...newRoute];
        console.log("Updated route:", this.destinations);
    }

    getRoute(): string[] {
        return this.destinations;
    }
}

const trip = new TripPlanner();
trip.addDestination("Paris");
trip.addDestination("Berlin");
trip.removeDestination("Berlin");
trip.modifyRoute(["Rome", "Amsterdam", "Madrid"]);
console.log(trip.getRoute());
