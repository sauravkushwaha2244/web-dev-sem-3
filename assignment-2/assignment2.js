const EventEmitter = require("events");

const student = new EventEmitter();

student.on("login", () => {
    console.log("Student logged successfully");
});

student.on("assign", () => {
    console.log("Assignment Submitted");
});

student.on("logout", () => {
    console.log("Student logged Out");
});

student.on("exit", () => {
    console.log("Exiting application");
});

student.emit("login");
student.emit("assign");
student.emit("logout");
student.emit("exit");