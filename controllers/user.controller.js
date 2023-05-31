const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, getUser, getUsers, updateUser, deleteUser } = require('function/function'); // Supposons que vous ayez défini vos fonctions CRUD dans userFunctions.js

exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = { ...req.body, password: hashedPassword };

        user = await createUser(user);

        const token = jwt.sign({ user_id: user._id, email: user.email }, process.env.TOKEN_KEY, { expiresIn: "2h" });
        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Similar controllers for getUsers, updateUser, deleteUser...