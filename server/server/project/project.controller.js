const Project = require("./project.model");

/**
 * Load project and append to req.
 */
function load(req, res, next, id) {
  Project.get(id)
    .then((project) => {
      req.project = project; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get project
 * @returns {Project}
 */
function get(req, res) {
  return res.json(req.project);
}

/**
 * Create new project
 * @property {string} req.body.name - The name of project.
 * @returns {Project}
 */
function create(req, res, next) {
  const project = new Project({
    name: req.body.name,
    about: req.body.name,
    liveUrl: req.body.name,
    description: req.body.name,

    projects: req.body.projects.split(",")

  });

  project.save()
    .then(savedProject => res.json(savedProject))
    .catch(e => next(e));
}

/**
 * Update existing project
 * @property {string} req.body.name - The name of project.
 * @returns {Project}
 */
function update(req, res, next) {
  const project = req.project;
  project.name = req.body.name,
  project.about = req.body.name,
  project.liveUrl = req.body.name,
  project.description = req.body.name

  project.save()
    .then(savedProject => res.json(savedProject))
    .catch(e => next(e));
}

/**
 * Get project list.
 * @property {number} req.query.skip - Number of projects to be skipped.
 * @property {number} req.query.limit - Limit number of projects to be returned.
 * @returns {Project[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Project.list({ limit, skip })
    .then(projects => res.json(projects))
    .catch(e => next(e));
}

/**
 * Delete project.
 * @returns {Project}
 */
function remove(req, res, next) {
  const project = req.project;
  project.remove()
    .then(deletedProject => res.json(deletedProject))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
