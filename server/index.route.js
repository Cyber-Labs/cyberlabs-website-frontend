const express = require('express');
const projectRoutes = require('./server/project/project.route');
const authRoutes = require('./server/auth/auth.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/projects', projectRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

module.exports = router;
