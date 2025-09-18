const API_KEY = "mysecretkey";

export const apiKeyHandler = (req, res, next) => {
    console.log("API Key Middleware Invoked");


    const key = req.header('x-api-key');

    if (!key) {
        return res.status(401).json({ error: "API key missing" });
    }
    if (key !== API_KEY) {
        return res.status(403).json({ error: "Invalid API key" });
    }
    next();
};
 