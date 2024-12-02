require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/project');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
      console.error('Connection error:', error);
  });

app.get('/api/projects', async (req, res) => {
  try {
      const projects = await Project.find();
      res.json(projects);
  } catch (error) {
      console.error(error); 
      res.status(500).send(error);
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
      const project = await Project.findById(req.params.id);
      res.json(project);
  } catch (error) {
      console.error(error); 
      res.status(500).send(error);
  }
});


app.post('/api/projects', async (req, res) => {
  const { name, description, imagePath } = req.body;
  
  const newProject = new Project({
      name,
      description,
      imagePath
  });

  try {
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
  } catch (error) {
      res.status(400).send(error);
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
