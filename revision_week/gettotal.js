function Calculator() {
  this.total = 0;

  this.add = function (x) {
    this.total += x;
    return function (y) {
      this.total += y;
      return function (z) {
        this.total += z;
        return this.total;
      };
    };
  };
}

const calc = new Calculator();
console.log(calc.add(5)(10)(15));

