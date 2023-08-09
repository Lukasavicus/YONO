const express = require('express');
const { v4: uuidv4 } = require('uuid');
const persist = require('node-persist');

const router = express.Router();


// Initialize node-persist
persist.initSync();

// Create a new project
router.post('/', (req, res) => {
  const { name, creationUser } = req.body;
  const project = {
    id: uuidv4(),
    name,
    creationUser,
    creationDate: new Date(),
    updateDate: null
  };

  projects.push(project);
  persist.setItemSync('projects', projects); // Update storage
  res.status(201).json(project);
});

// Retrieve all projects
router.get('/', (req, res) => {
  res.json(projects);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const project = projects.find(p => p.id === id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  project.name = name;
  project.updateDate = new Date();
  res.json(project);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const index = projects.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  const deletedProject = projects.splice(index, 1)[0];
  res.json(deletedProject);
});

module.exports = router;
