// Create a BookFactory that returns either a PremiumBook or a RegularBook based on the price.
// If price > 1000 → return PremiumBook, else RegularBook.

interface Book {
  getCategory(): string;
}

class PremiumBook implements Book {
  getCategory(): string {
    return "Premium Book";
  }
}

class RegularBook implements Book {
  getCategory(): string {
    return "Regular Book";
  }
}

abstract class BookFactory {
  abstract createBook(name: string, price: number): Book;
}

class FactoryOfBook extends BookFactory {
  createBook(name: string, price: number): Book {
    if (price > 1000) {
      return new PremiumBook();
    } else return new RegularBook();
  }
}

let bookFactory: FactoryOfBook = new FactoryOfBook();
const b1 = bookFactory.createBook("Design Patterns", 1500);
console.log(b1.getCategory()); // Premium Book

const b2 = bookFactory.createBook("JavaScript Guide", 500);
console.log(b2.getCategory()); // Regular Book
