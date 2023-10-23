const createHttpError = require('http-errors')
const bcrypt =require('bcrypt');
const AdminModel= require('../model/admin');
const jwt =require('jsonwebtoken');

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Missing required parameters');
        }

        const admin = await AdminModel.findOne({ email: email }).exec();

        if (!admin) {
            throw createHttpError(400, 'User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials');
        }

        const user = await AdminModel.findOne({ email: email }).exec();

        const token = jwt.sign(
            {
                user_id: user._id,
                email: user.email,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: '4h',
            }
        );
        user.token = token;
        await user.save(); // Save the user with the updated token

        res.status(200).send(user); // Send the user object as a response
    } catch (error) {
        next(error);
    }
}

exports.register = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        if (!email || !password ) {
            throw createHttpError(400, 'Missing required parameters');
        }

        const isAdminAvailable = await AdminModel.findOne({ email: email }).exec();

        if (isAdminAvailable) {
            throw createHttpError(400, 'Admin already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = new AdminModel({

            email: email,
            password: hashedPassword,
        });

        const result = await admin.save();
        res.status(201).send(result); // Send the created admin object as a response
    } catch (error) {
        next(error);
    }
}
