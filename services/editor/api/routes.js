const router = require("express").Router();

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "Success",
    message: "Editor Service API is working",
  });
});
// Import controller
var connectionController = require("./connectionController");

// 2 Routes - GET to create and return the connection
// DELETE to delete the connection once the session ends
router
  .route("/connection")
  .get(connectionController.index)
  .post(connectionController.create);

router
  .route("/connection/:session_id")
  .get(connectionController.retrieve)
  .delete(connectionController.delete);

// Export API routes
module.exports = router;
