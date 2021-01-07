const { Skills } = require('../models/skills.models');


module.exports.create = async (req, res) => {

    console.log(req.body.title, req.body.description)


    const skill = await Skills.create({
        title: req.body.title,
        description: req.body.description
    });
    skill.save();
    res.json({ message: "Successfully Created" });


}