class Logger {

    logger(message) {
        console.log(message);
    }

}

class CalorieTracker {

    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories) {
            new Logger().logger("Max calories exceeds");
        } else {
            new Logger().logger("No calories exceeds");
        }
    }
}

new CalorieTracker(2000).trackCalories(6900);