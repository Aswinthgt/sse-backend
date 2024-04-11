import express from "express";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(cors());

app.get("/curr-count", (req, res) => {

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let value = 0;

    setInterval(() => {
        res.write(`data: ${JSON.stringify({count: value++})}\n\n`);
    },2000)
})

server.listen(3000, () => {
    console.log("server started at port 3000");
})