if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (fn, thisArg) {
    let out = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) out[i] = fn.call(thisArg, this[i], i, this);
    }
    return out;
  };
}

if (!Array.prototype.mySort) {
  Array.prototype.mySort = function () {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let a = this[j],
          b = this[j + 1];
        if (String(a) > String(b)) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
    return this;
  };
}

if (!String.prototype.myStartsWith) {
  String.prototype.myStartsWith = function (str) {
    if (str.length > this.length) return false;
    for (let i = 0; i < str.length; i++) {
      if (this[i] !== str[i]) return false;
    }
    return true;
  };
}

let arr = [5, 3, 8, 1];
console.log(
  "map:",
  arr.myMap((x) => x * 2)
);
console.log("sort:", arr.mySort());

let words = ["banana", "apple", "cherry"];
console.log("sort strings:", words.mySort());

let s = "hello world";
console.log("starts with he:", s.myStartsWith("he"));
console.log("starts with wo:", s.myStartsWith("wo"));
