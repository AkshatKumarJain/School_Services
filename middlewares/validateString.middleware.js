export const validateString = async (req, res, next) => {
    try {
        const { name, address } = req.body;
        if(typeof name != 'string' || typeof address != 'string')
        {
            return res.status(400).json({
            error: 'name and address both must be string!',
            });
        }
        next();
    }
    catch (err) {
    console.error("string validation error:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}