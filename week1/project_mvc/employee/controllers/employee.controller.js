const { getData, addOrUpdateemployee } = require("../models/employee.model");

const getAllemployees = (req, res) => {
  let employees = getData().employees;
  res.status(200).json({ msg: "List of employees", employees });
};

const addemployee = (req, res) => {
  let newemployee = req.body;
  let data = getData().data;
  let employees = getData().employees;
  let id = employees[employees.length - 1].id + 1;
  newemployee = { ...newemployee, id };
  employees.push(newemployee);
  data.employees = employees;
  addOrUpdateemployee(data);
  res.status(201).json({ msg: "New employee Added" });
};

const updateemployeeById = (req, res) => {
  let id = req.params.id;
  let updatedemployee = req.body;
  let data = getData().data;
  let employees = getData().employees;
  let index = employees.findIndex((employee) => employee.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "employee Not Found" });
  } else {
    let updatedemployees = employees.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updatedemployee };
      } else {
        return el;
      }
    });
    data.employees = updatedemployees;
    addOrUpdateemployee(data);
    res.status(201).json({ msg: "employee Updated" });
  }
};

const deleteemployeeById = (req, res) => {
  let id = req.params.id;
  let data = getData().data;
  let employees = getData().employees;

  let index = employees.findIndex((employee) => employee.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "employee Not Found" });
  } else {
    let updatedemployees = employees.filter((el, i) => {
      return el.id != id;
    });
    data.employees = updatedemployees;
    addOrUpdateemployee(data);
    res.status(200).json({ msg: "employee Deleted" });
  }
};

const getemployeeById = (req, res) => {
  let employeeId = req.params.employeeId;
  let employees = getData().employees;
  let index = employees.findIndex((employee) => employee.id == employeeId);
  if (index == -1) {
    res.status(404).json({ msg: "employee Not Found" });
  } else {
    employees.forEach((el, id) => {
      if (el.id == employeeId) {
        res.status(200).json({ msg: "employee Detail", employee: el });
      }
    });
  }
};

const getemployeeByQuery = (req, res) => {
  let title = req.query.title;
  let employees = getData().employees;
  let flag = true;
  employees.forEach((el, i) => {
    if (el.title.includes(title)) {
      flag = false;
      res.json({ msg: "employee", employee: el });
    }
  });
  if (flag == true) {
    res.status(404).json({ msg: "employee Not Found" });
  }
};

module.exports = {
  getAllemployees,
  addemployee,
  updateemployeeById,
  deleteemployeeById,
  getemployeeById,
  getemployeeByQuery,
};
