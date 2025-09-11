"use strict";
// Implement a CharacterFactory that returns different characters like Warrior, Archer, and Mage.
// Each class should implement a method getStats() that returns unique properties.
class Warrior {
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Warrior ${this.name} : Strength: 70 Power: 85`;
    }
}
class Archer {
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Archer ${this.name} - Agility: 80, Strength: 40`;
    }
}
class Mage {
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Mage ${this.name} - Intelligence: 90, Mana: 100`;
    }
}
class CharacterFactory {
}
class FactoryOfCharacters extends CharacterFactory {
    createCharacter(type, name) {
        switch (type) {
            case "Warrior":
                return new Warrior(name);
            case "Mage":
                return new Mage(name);
            case "Archer":
                return new Archer(name);
            default:
                throw new Error("Invalid character type");
        }
    }
}
let characterFactory = new FactoryOfCharacters();
const archer = characterFactory.createCharacter("Archer", "Eldrin");
console.log(archer.getStats());
// Output: Archer Eldrin - Agility: 80, Strength: 40
const mage = characterFactory.createCharacter("Mage", "Gandalf");
console.log(mage.getStats());
// Output: Mage Gandalf - Intelligence: 90, Mana: 100
let warrior = characterFactory.createCharacter("Warrior", "Aswartha");
console.log(warrior.getStats());
