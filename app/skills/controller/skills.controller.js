const { Skills } = require('../models/skills.models');


module.exports.create = async (req, res) => {

    console.log(req.route, "sssss")


    const skill = await Skills.create({
        title: req.body.title,
        description: req.body.description
    });
    skill.save();
    res.json({ message: "Successfully Created" });


}

module.exports.update = async (req, res) => {


    const skill = await Skills.findByIdAndUpdate(req.params._id,

        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        },
        { new: true }
    );
    res.save(skill);
    return res.json({ message: "success" });


}