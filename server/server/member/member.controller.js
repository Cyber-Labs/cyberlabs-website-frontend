const Member = require('./member.model');

/**
 * Load member and append to req.
 */
function load(req, res, next, id) {
  Member.get(id)
    .then((member) => {
      req.member = member; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get member
 * @returns {Member}
 */
function get(req, res) {
  return res.json(req.member);
}

/**
 * Create new member
 */
function create(req, res, next) {
  const member = new Member({
    name: req.body.name,
    website: req.body.website,
    bio: req.body.bio,
    guthubmembername: req.body.githubmembername,
    social: req.body.social,
    role: req.body.role,
    team: req.body.team
  });

  member.save()
    .then(savedMember => res.json(savedMember))
    .catch(e => next(e));
}

/**
 * Update existing member
 */
function update(req, res, next) {
  const member = req.member;
  member.name= req.body.name
  member.website= req.body.website
  member.bio= req.body.bio
  member.guthubusername= req.body.githubusername
  member.social= {...req.body.social}
  member.role= req.body.role
  member.team= [...req.body.team]

  member.save()
    .then(savedMember => res.json(savedMember))
    .catch(e => next(e));
}

/**
 * Get member list.
 * @property {number} req.query.skip - Number of members to be skipped.
 * @property {number} req.query.limit - Limit number of members to be returned.
 * @returns {Member[]}
 */
function list(req, res, next) {
  Member.list()
    .then(members => res.json(members))
    .catch(e => next(e));
}

/**
 * Delete member.
 * @returns {Member}
 */
function remove(req, res, next) {
  const member = req.member;
  member.remove()
    .then(deletedMember => res.json(deletedMember))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
