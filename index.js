const express = require("express")
const { connection } = require("./Config/db")
const {userRouter} =  require("./Routes/userRoute")
const {quizRouter} = require("./Routes/quizRoute")
const app = express() 

const cors = require("cors")

require("dotenv").config()

app.use(cors())

app.use("/user" ,userRouter )
app.use("/quiz" ,quizRouter)

app.get("/", (req, res) => {
    res.send("This is Quiz Home Page")
})

app.listen(process.env.PORT, async () => {

    try {

        connection;

        console.log(`server connected to mongoAtlas`);

    } catch (error) {

        console.log(error)
    }

    console.log(`Server is running at PORT ${process.env.PORT}`);
})