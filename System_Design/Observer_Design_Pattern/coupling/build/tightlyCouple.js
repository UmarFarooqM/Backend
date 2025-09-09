"use strict";
// tightly coupled
class Laptop {
    code() {
        console.log("Coding using Laptop");
    }
}
class Desktop {
    code() {
        console.log("Coding using Desktop");
    }
}
class Programmer {
    constructor(divice) {
        this.device = divice;
    }
    performCoding() {
        this.device.code();
    }
}
let programmer1 = new Programmer(new Laptop);
programmer1.performCoding();
