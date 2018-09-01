const express = require("express");
const validate = require("express-validation");
const paramValidation = require("../../config/param-validation");
const projectCtrl = require("./project.controller");

const router = express.Router(); // eslint-disable-line new-cap

router.route("/")
  /** GET /api/projects - Get list of projects */
  .get(projectCtrl.list)

  /** POST /api/projects - Create new project */
  .post(projectCtrl.create);

router.route("/:projectId")
  /** GET /api/projects/:projectId - Get project */
  .get(projectCtrl.get)

  /** PUT /api/projects/:projectId - Update project */
  .put(projectCtrl.update)

  /** DELETE /api/projects/:projectId - Delete project */
  .delete(projectCtrl.remove);

/** Load project when API with projectId route parameter is hit */
router.param("projectId", projectCtrl.load);

module.exports = router;
