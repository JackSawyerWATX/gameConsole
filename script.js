// TODO: Create a class named 'GameConsole'
class GameConsole {

    // TODO: Add a constructor that takes 'brand' and 'model' as parameters
    constructor(brand, model) {
        console.log("An instance of GameConsole has been created");
        this.brand = brand;
        this.model = model;
    }

    // TODO: Create a method named 'describe' that outputs the brand and model in a console log
    describe() {
        console.log(`My console is a ${this.brand} ${this.model}.`)
    }
}
let myConsole = new GameConsole('Sony', 'PS2');
myConsole.describe(); // Should output: 'My console is a Sony PS2.'