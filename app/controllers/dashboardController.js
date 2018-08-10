const { Category, Snippet } = require('../models');

module.exports = {
    async index(req, res, next) {
        try {
            const categories = await Category.findAll({
                include: [Snippet],
                where: {
                    UserId: req.session.user.id,
                },
            });
            return res.render('dashboard/index', { categories });
        } catch (err) {
            next(err);
        }
    },
};
