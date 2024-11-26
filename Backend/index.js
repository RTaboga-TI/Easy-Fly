import express from "express";
import cors from "cors";
import mysql from "mysql"

const app =  express();

var con = mysql.createConnection({
   host: "127.0.0.1",
    port: "6066",
    user: "root",
    password: "123321",
    database: "mydb"
  });
  
  con.connect(function(err) {
      if (err) throw err;
      });
    
app.use(express.json());
app.use(cors());

app.use("/", function(request, response){
    con.query("SELECT * FROM reserva", function(err, result, campos){response.write(result)})

});

app.listen();