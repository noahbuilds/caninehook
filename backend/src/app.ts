import express, { Application, Request, Response, Router } from "express";
import httpStatus from "http-status";
import { ApiError } from "./utilities/apiError";
import configuration from "./configs/configs";
import mongoose, { ConnectOptions } from "mongoose";
import { Dog, User } from "./models/index";
import {userRouter, dogRouter}  from "./routes/index";


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
    await mongoose.connect(configuration.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    return console.log(`Successfully connected to ${configuration.MONGO_URL}`);
  } catch (error) {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  }
})();


app.use("/api/v1/user", userRouter )
app.use("/api/v1/dog", dogRouter)

app.use((req: Request, res:Response, next)=>{
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"))
})

app.listen(configuration.ENV_PORT, () => {
  console.log("App is running on PORT 4000");
});

