const express = require("express");
const { getAllemployees, addemployee, updateemployeeById, deleteemployeeById, getemployeeById, getemployeeByQuery } = require("../controllers/employee.controller");
const dataCheck = require("../middlewares/dataCheck");


const employeeRouter = express.Router();

employeeRouter.get("/all-employees",getAllemployees );

// update employee
employeeRouter.put("/update-employee/:id",updateemployeeById );

//delete employee
employeeRouter.delete("/delete-employee/:id",deleteemployeeById );


employeeRouter.get("/employee/:employeeId", getemployeeById);


employeeRouter.get("/employee", getemployeeByQuery);

employeeRouter.post("/add-employee",dataCheck,addemployee );

module.exports = employeeRouter;
