const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
  getContactStats,
  exportContacts,
} = require("../controllers/contactController");

const authMiddleware = require("../middlewares/validateRequest");
const { body } = require("express-validator");

/* ===============================
   PUBLIC ROUTE (Landing Page)
================================ */
router.post(
  "/contact",
  [
    body("firstName").trim().notEmpty().isLength({ max: 100 }),
    body("lastName").trim().notEmpty().isLength({ max: 100 }),
    body("email").trim().notEmpty().isEmail().normalizeEmail(),
    body("phone")
      .optional({ checkFalsy: true })
      .matches(/^\+?[0-9]{7,15}$/)
      .withMessage("Invalid phone number"),
    body("interest").trim().notEmpty().isLength({ max: 150 }),
    body("message").trim().notEmpty().isLength({ max: 1000 }),
  ],
  createContact,
);

/* ===============================
   DASHBOARD ROUTES
================================ */
router.get("/contacts", authMiddleware, getContacts);
router.put("/contacts/:id", authMiddleware, updateContactStatus);
router.delete("/contacts/:id", authMiddleware, deleteContact);
router.get("/contacts/stats", authMiddleware, getContactStats);
router.get("/contacts/export", authMiddleware, exportContacts);

module.exports = router;
