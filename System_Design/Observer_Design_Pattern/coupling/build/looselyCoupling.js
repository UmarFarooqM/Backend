"use strict";
class losselyCoupledLaptop {
    constructor(model) {
        this.model = model;
    }
    code() {
        console.log(`Coding using${this.model} Laptop!!!`);
    }
}
class losselyCoupledDesktop {
    code() {
        console.log("Coding using Desktop!!!");
    }
}
class losselyCoupledTab {
    code() {
        console.log("Coding using Tab");
    }
}
class looselyCoupledProgrammer {
    constructor(device) {
        this.device = device;
    }
    performCoding() {
        this.device.code();
    }
    setDevice(device) {
        this.device = device;
    }
}
let myLaptop = new losselyCoupledLaptop("HP");
let myDesktop = new losselyCoupledDesktop();
let myTab = new losselyCoupledTab();
let programmer = new looselyCoupledProgrammer(myDesktop);
programmer.performCoding();
programmer.setDevice(myLaptop);
programmer.performCoding();
programmer.setDevice(myTab);
programmer.performCoding();
