const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
    {
      title:String,
description:String,
priority:String,
isCompleted:Boolean,
completionDate:Date.now(),
dueDate:String
    }
)

const taskModel = mongoose.model("task", taskSchema );
module.exports = taskModel;


