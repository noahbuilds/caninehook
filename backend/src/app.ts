import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";
import { ApiError } from "../utilities/apiError";
import configuration from "./configs/configs";
import mongoose, { ConnectOptions } from "mongoose";
import {userRouter, dogRouter, authRouter}  from "./routes/index";
import { auth } from "./middlewares/auth";


const app: Application = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// welcome page
app.get("/", async (req: Request, res: Response): Promise<any> => {
  return res.json({
    msg: "welcome",
  });
});


// database connection
(async function () {
  try {
    await mongoose.connect(configuration.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    return console.log(`Successfully connected to ${configuration.MONGO_URI}`);
  } catch (error) {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  }
})();


app.use("/api/v1/user", userRouter )
app.use("/api/v1/dog", auth, dogRouter)
app.use("/api/v1/auth", authRouter)

app.use((req: Request, res:Response, next)=>{
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"))
})

app.listen(configuration.ENV_PORT, () => {
  console.log("App is running on PORT 4000");
});

