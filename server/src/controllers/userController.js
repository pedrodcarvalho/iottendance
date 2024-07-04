const getUser = async (req, res) => {
    try {
        delete req.user.data.password;

        res.status(200).json({ user: req.user.data });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUser
};
