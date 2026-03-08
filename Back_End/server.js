// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoute");
const authRoute = require("./routes/authRoute");

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://real-estate-leadtracking-landingpage-1.onrender.com",
  "https://real-estate-leadtracking-landingpage-2.onrender.com",
];

const corsOptions = {
  origin: function (origin, callback) {
  
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

// ------------------------
// Middleware
// ------------------------
app.use(express.json()); // parse JSON bodies

// ------------------------
// Routes
// ------------------------
app.use("/api", contactRoutes, authRoute);

// Root endpoint
app.get("/", (req, res) => {
  res.send("RealEstate API Running with PostgreSQL...");
});

// ------------------------
// Error handling middleware
// ------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// ------------------------
// Start server
// ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
