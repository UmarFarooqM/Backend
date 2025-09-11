"use strict";
// Create a BookFactory that returns either a PremiumBook or a RegularBook based on the price.
// If price > 1000 → return PremiumBook, else RegularBook.
class PremiumBook {
    getCategory() {
        return "Premium Book";
    }
}
class RegularBook {
    getCategory() {
        return "Regular Book";
    }
}
class BookFactory {
}
class FactoryOfBook extends BookFactory {
    createBook(name, price) {
        if (price > 1000) {
            return new PremiumBook();
        }
        else
            return new RegularBook();
    }
}
let bookFactory = new FactoryOfBook();
const b1 = bookFactory.createBook("Design Patterns", 1500);
console.log(b1.getCategory()); // Premium Book
const b2 = bookFactory.createBook("JavaScript Guide", 1330);
console.log(b2.getCategory()); // Regular Book
