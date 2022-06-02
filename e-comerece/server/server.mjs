import Gun from "gun";
import cors from 'cors';
import  express  from "express";

const app = express();
const port = 5000;

app.use(Gun.serve);
app.use(cors());

app.get('/', (_, res)=>{
    res.status(200).send("Dicord Server is Alive");
})

const server = app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
})

Gun({web: server})