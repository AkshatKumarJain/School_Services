// import schoolModel from "../models/school.model.js";
import express from "express";
const app = express();

app.use(express.json());

export const validateCoordinates = async (req, res, next) => {
  try {
    const rawLat = req.body?.latitude ?? req.query?.latitude;
    const rawLon = req.body?.longitude ?? req.query?.longitude;

    const latitude = parseFloat(rawLat);
    const longitude = parseFloat(rawLon);

    // const { latitude, longitude } = req.body || req.query;

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
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
    req.latitude = latitude;
    req.longitude = longitude;

    next(); // continue if valid
  }
  catch (err) {
    console.error("Coordinate validation error:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
