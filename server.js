import express from "express";
import spotsRouter from './routes/spots.js';

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/api/spots", spotsRouter);

app.get("/spots/:slug", (req, res) => {
  res.sendFile("spot.html", {
    root: "public"
  });
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", {
    root: "public"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});