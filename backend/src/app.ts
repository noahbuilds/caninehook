import express,{ Application, Request, Response} from 'express'



const app:express.Application = express()


app.get('/', (req:Request, res:Response)=>{
    res.json({
        msg: 'welcome'
    });
});




app.listen(4000, ()=>{
    console.log("App is running on PORT 4000")
})