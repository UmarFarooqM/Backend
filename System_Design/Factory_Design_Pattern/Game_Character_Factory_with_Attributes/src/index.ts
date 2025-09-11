// Implement a CharacterFactory that returns different characters like Warrior, Archer, and Mage.
// Each class should implement a method getStats() that returns unique properties.

interface Character {
  getStats(): string;
}

class Warrior implements Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getStats(): string {
    return `Warrior ${this.name} : Strength: 70 Power: 85`;
  }
}
class Archer implements Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getStats(): string {
    return `Archer ${this.name} - Agility: 80, Strength: 40`;
  }
}
class Mage implements Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getStats(): string {
    return `Mage ${this.name} - Intelligence: 90, Mana: 100`;
  }
}

abstract class CharacterFactory {
  abstract createCharacter(type: string, name: string): Character;
}
class FactoryOfCharacters extends CharacterFactory {
  createCharacter(type: string, name: string): Character {
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

let characterFactory: CharacterFactory = new FactoryOfCharacters();

const archer = characterFactory.createCharacter("Archer", "Eldrin");
console.log(archer.getStats());
// Output: Archer Eldrin - Agility: 80, Strength: 40

const mage = characterFactory.createCharacter("Mage", "Gandalf");
console.log(mage.getStats());
// Output: Mage Gandalf - Intelligence: 90, Mana: 100

let warrior = characterFactory.createCharacter("Warrior","Aswartha")
console.log(warrior.getStats());

