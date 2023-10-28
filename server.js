import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.get("/",(req, res) => {
    return res.send({ success: true });
})

app.get("/health",(req, res) => {
    return res.send({ success: true });
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
