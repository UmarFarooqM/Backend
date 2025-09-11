"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const states_1 = require("./states");
const types_1 = require("./types");
let smartLight = new types_1.SmartLight(new states_1.OnState());
smartLight.changeLight();
smartLight.changeLight();
