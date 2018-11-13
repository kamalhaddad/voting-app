const db = require('../models');

exports.showPolls = async (req, res, next) => {
    try {
        const polls = await db.Poll.find();
        res.status(200).json(polls);
    } catch (errs) {
        errs.status = 400;
        next(err);
    } 
};

exports.createPolls = async (req, res, next) => {
    try {
        const {question, options} = req.body;
        const poll = await db.Poll.create({
                question,
                options: options.map(option =>({option, votes: 0}))
        });
        res.status(201).json(poll);
    } catch(err) {
        err.status = 400;
        next(err);
    }

};