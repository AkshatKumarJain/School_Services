import schoolModel from "../models/school.model.js";
import express from "express"

// app.use(express.json());

export const getSchoolList = async (req, res) => {
    const {latitude, longitude} = req.query;

    if (!latitude || !longitude) {
    return res.status(400).json({ error: 'latitude and longitude are required' });
    } 

    try{
        const schools = await schoolModel.getAllSchools(
            parseFloat(latitude),
            parseFloat(longitude)
        );
        res.status(201).json(schools);
    }
    catch(err){
        console.log(err);
        res.status(500).send("server error");
    }
}

export const addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    const schools = req.body;

    // If it's an array, process each object
    if (Array.isArray(schools)) {
    try {
      for (const school of schools) {
        const { name, address, latitude, longitude } = school;
        await schoolModel.addSchool(name, address, latitude, longitude);
      }
      return res.status(201).json({ message: 'schools added successfully' });
    }
    catch (err) {
      console.error('Error adding schools:', err);
      return res.status(500).json({ error: 'Server error' });
    }
    }

    // if it is a single object
    else if(typeof schools==='object')
    {
    try{
        const schoolId = await schoolModel.addSchool(name, address, latitude, longitude);
        res.status(201).json({ id: schoolId, message: "school added successfuly." });
    }
    catch(err){
        console.error(err);
        res.status(500).send("adding school failed");
    }
}
    else{
        return res.status(400).json({ error: 'Invalid data format. Expected an object or an array of objects.' });
    }
}