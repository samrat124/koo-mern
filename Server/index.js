const express = require('express');
const { connect } = require('./database/connect');
const userRouter = require('./routes/userroute');
const { authentication } = require('./middleware/authentication');
const cors = require('cors');
const { postRouter } = require('./routes/postroute');
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

const PORT = process.argv[2] ||3050

connect().then(res=>app.listen(PORT,()=>{
    console.log(`Server listening at `,PORT);
}))
    