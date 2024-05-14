import express from "express";//make api calls ,middleware and routing(request to diff url)
import cors from "cors";//
import morgan from "morgan";//http request
import dotenv from "dotenv";//sensitive info
import colors from "colors";
import connectDb from "./config/connectDb.js";
import router1 from "./routes/userRoute.js";
import router from "./routes/transectionRoutes.js";
import path from 'path';



const __dirname = path.dirname(new URL(import.meta.url).pathname);

//config dotenv file
dotenv.config();

//database call
connectDb();

//rest object
const app=express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
// app.get('/',(req,res)=>{
//   res.send("<h1>Hello from Server</h1>")
// });


//user routes
app.use("/api/v1/users",router1)

//transection routes
app.use("/api/v1/transections",router)

//static files
app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});


//port
const port=8080 || process.env.port;

//listen server
app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});

