"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special = exports.Formhouse = exports.Cheese = void 0;
class Margherita {
    prepare() {
        console.log("Praparing Margherita Pizza");
    }
    bake() {
        console.log("Baking Margherita Pizza");
    }
    cut() {
        console.log("Cutting Margherita Pizza");
    }
    box() {
        console.log("Boxing Margherita Pizza");
    }
}
class Cheese {
    prepare() {
        console.log("Praparing Cheese Pizza");
    }
    bake() {
        console.log("Baking Cheese Pizza");
    }
    cut() {
        console.log("Cutting Cheese Pizza");
    }
    box() {
        console.log("Boxing Cheese Pizza");
    }
}
exports.Cheese = Cheese;
class Formhouse {
    prepare() {
        console.log("Praparing Formhouse Pizza");
    }
    bake() {
        console.log("Baking Formhouse Pizza");
    }
    cut() {
        console.log("Cutting Formhouse Pizza");
    }
    box() {
        console.log("Boxing Formhouse Pizza");
    }
}
exports.Formhouse = Formhouse;
class Special {
    prepare() {
        console.log("Praparing Special Pizza");
    }
    bake() {
        console.log("Baking Special Pizza");
    }
    cut() {
        console.log("Cutting Special Pizza");
    }
    box() {
        console.log("Boxing Special Pizza");
    }
}
exports.Special = Special;
exports.default = Margherita;
