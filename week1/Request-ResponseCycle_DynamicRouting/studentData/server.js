
const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json()); // json body parser




app.get("/all-students", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  res.status(200).json({ msg: "List of students", students });
});


// path params
// get student by id

app.get("/student/:studentId",(req,res)=>{
    
   let studentId = req.params.studentId;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  let index = students.findIndex((student) => student.id == studentId);
  if (index == -1) {
    res.status(404).json({ msg: "student Not Found" });
  }else{
    students.forEach((el,id)=>{
        if(el.id == studentId){
            res.status(200).json({msg:"student Detail",student: el})
        }
    })
  }
} )

// query params 
/// get student by course through query paramter 

app.get("/students/search", (req,res)=>{
    // ?course=Intro To Express
    // { course: 'Intro to Express' }

    let course = req.query.course;
   // console.log(req.query)
        // read the student from db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  course_filter = students.filter((student)=>
    student.course.toLowerCase().includes(course.toLowerCase()))

  if(course_filter.length>0){
    res.send({course_filter})
  }
  else{
    res.status(404).json({ msg: "student Not Found" });
  }
  
   
})

// post request

app.post("/add-student", (req, res) => {
  let newstudent = req.body;
  
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
 
  let id = students[students.length - 1].id + 1;
  
  newstudent = { ...newstudent, id };
  students.push(newstudent);
 
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(201).json({ msg: "New student Added" });
});

app.put("/update-student/:id", (req, res) => {
 
  let id = req.params.id;
  let updatedstudent = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  let index = students.findIndex((student) => student.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "student Not Found" });
  } else {
    let updatedstudents = students.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updatedstudent };
      } else {
        return el;
      }
    });
    data.students = updatedstudents;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(201).json({ msg: "student Updated" });
  }
});

app.delete("/delete-student/:id", (req, res) => {
 
  let id = req.params.id;
 
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  
  let index = students.findIndex((student) => student.id == id);
  if (index == -1) {
    // if no, student not found
    res.status(404).json({ msg: "student Not Found" });
  } else {
    
    let updatedstudents = students.filter((el, i) => {
      return el.id != id;
    });
    
    data.students = updatedstudents;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ msg: "student Deleted" });
  }
});

app.use((req,res)=>{
  res.send({ "message": "No students found" })
})

app.listen(8000, () => {
  console.log("server started on port 8000");
});
