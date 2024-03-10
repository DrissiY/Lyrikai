import app from "./app.js";
import { connectToDatabse } from "./db/connection.js";
import morgan from 'morgan'
import appRouter from "./routes/index.js";


app.use(morgan("dev"))
app.use("/api/v1", appRouter);

app.get("/", (req, res) => {
  res.send("hello");
});


connectToDatabse().then(() => {
  app.listen(process.env.PORT, () => console.log('app running correctly :D'));
}).catch((err) => console.log(err))

