const jwt = require("jsonwebtoken");

// Middleware to check authentication
const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Expecting 'Bearer [token]'
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user info to the request
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
    }
};

// Middleware to restrict access based on roles
const restrictTo = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Access is denied" });
        }
        next();
    };
};

module.exports = { protect, restrictTo };
