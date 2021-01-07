const { func } = require('joi');
const skillsRoute = require('../routes/skills.routes');


module.exports = function (app) {
    app.use('/api/v1/skills', skillsRoute);
}