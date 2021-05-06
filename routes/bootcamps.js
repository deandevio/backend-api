const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamp");

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);
router.route("/").get(getBootcamps).post(createBootcamp);
router.route("/:id").get(getBootcamp).delete(deleteBootcamp).put(updateBootcamp);

module.exports = router;
