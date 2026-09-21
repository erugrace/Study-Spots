import express from "express";
import spots from "./data/spots.json" with { type: "json" };
const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.get("/api/spots", (req, res) => {
  res.json(spots);
});
app.get("/api/spots/:slug", (req, res) => {
  const selectedSpot = spots.find(
    spot => spot.slug === req.params.slug
  );

  if (!selectedSpot) {
    return res.status(404).json({
      error: "Study spot not found"
    });
  }

  res.json(selectedSpot);
});
app.get("/spots/:slug", (req, res) => {
  const selectedSpot = spots.find(
    spot => spot.slug === req.params.slug
  );

  if (!selectedSpot) {
    return res.status(404).sendFile("404.html", {
      root: "public"
    });
  }

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