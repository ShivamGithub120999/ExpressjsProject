const express=require('express');
const path=require('path');
const hbs = require("hbs");
const app = express();
const staticPath=path.join(__dirname,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{   
    res.render("index");
});

app.get("/About",(req,res)=>{   
    res.render("about");
});

app.get("/Weather",(req,res)=>{   
    res.render("weather");
});

app.get("*",(req,res)=>{   
    res.render('404Error',{
        errorMsg:'Opps! Page Not Found'        
    });
});

app.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port number 8000");
    });