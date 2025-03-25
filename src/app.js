import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import setRoutes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for requests from localhost:5713
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
