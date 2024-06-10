const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/user", async (req, res) => {
    let data = await userModel.create({
        name: "John",
        username: "john123",
        email: "uYtD1@example.com",
        password: "123456"
    })

    res.send(data);
    
});
app.get("/update", async (req, res) => {
    let updateuser = await userModel.findOneAndUpdate({name: "John"}, {name: "John Doe"}, {new: true}); 

    res.send(updateuser);
    
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})