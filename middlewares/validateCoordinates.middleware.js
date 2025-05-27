// import schoolModel from "../models/school.model.js";

export const validateCoordinates = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;

    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      return res.status(400).json({
        error: 'Latitude and Longitude must both be numbers',
      });
    }

    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({
        error: 'Latitude must be between -90 and 90',
      });
    }

    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({
        error: 'Longitude must be between -180 and 180',
      });
    }

    next(); // continue if valid
  }
  catch (err) {
    console.error("Coordinate validation error:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
