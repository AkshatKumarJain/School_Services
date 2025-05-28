import connectDB from '../connection.js';

const schoolModel = {
  // for getting schools sorted according to the user's location
  async getAllSchools(latitude, longitude) {
    const db = await connectDB();

    // using Haversine formula for calculating geographical distance
    const [rows] = await db.execute(
      `SELECT *,
        (
        6371 * acos(
          cos(radians(?)) *
          cos(radians(latitude)) *
          cos(radians(longitude) - radians(?)) +
          sin(radians(?)) *
          sin(radians(latitude))
        )
      ) AS distance
    FROM school
    ORDER BY distance ASC`,
      [latitude, longitude, latitude],
    );
    return rows;
  },

  // for adding school/schools
  async addSchool(name, address, latitude, longitude) {
    const db = await connectDB();
    const [result] = await db.execute(
      `INSERT INTO school(name, address, latitude, longitude) values (?, ?, ?, ?)`,
      [name, address, latitude, longitude],
    );
    return result.insertId;
  },
};

export default schoolModel;
