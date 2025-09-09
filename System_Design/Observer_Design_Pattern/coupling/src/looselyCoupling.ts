interface Device {
  code(): void;
}

class losselyCoupledLaptop implements Device {
  model: String;
  constructor(model: String) {
    this.model = model;
  }
  code(): void {
    console.log(`Coding using ${this.model} Laptop!!!`);
  }
}

class losselyCoupledDesktop implements Device {
  code(): void {
    console.log("Coding using Desktop!!!");
  }
}

class losselyCoupledTab implements Device {
  code(): void {
    console.log("Coding using Tab");
  }
}

class looselyCoupledProgrammer {
  device: Device; // depending on interface (Abstraction)
  constructor(device: Device) {
    this.device = device;
  }

  performCoding(): void {
    this.device.code();
  }
  setDevice(device: Device) {
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
