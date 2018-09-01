const express = require("express");
const validate = require("express-validation");
const paramValidation = require("../../config/param-validation");
const memberCtrl = require("./member.controller");

const router = express.Router(); // eslint-disable-line new-cap

router.route("/")
  /** GET /api/members - Get list of members */
  .get(memberCtrl.list)

  /** POST /api/members - Create new member */
  // .post(validate(paramValidation.createMember), memberCtrl.create);
  .post(memberCtrl.create);

router.route("/:memberId")
  /** GET /api/members/:memberId - Get member */
  .get(memberCtrl.get)

  /** PUT /api/members/:memberId - Update member */
  // .put(validate(paramValidation.updateMember), memberCtrl.update)
  .put(memberCtrl.update)

  /** DELETE /api/members/:memberId - Delete member */
  .delete(memberCtrl.remove);

/** Load member when API with memberId route parameter is hit */
router.param("memberId", memberCtrl.load);

module.exports = router;
