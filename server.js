const exp = require("express")
const app = exp()

app.set("view-engine") //used for accessing the vars
app.get("/",(req,res)=>{ //path to the index file
    res.render("index.ejs", {name : "Rat"})
})
//creating routes for login and register
app.get("/login" ,(req,res)=>{
    res.render("login.ejs")
})
app.get("/register", (req,res)=>{
    res.render("register.ejs")
})
app.listen(3000)