var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const classroomController =   require('../controllers/classroom');
// Retrieve all employees
router.get('/classroom/', classroomController.list);
// Create a new employee
router.post('/classroom/', classroomController.add);
// Retrieve a single employee with id
router.get('/classroom/:id', classroomController.getById);
// Update a employee with id
router.put('/classroom/:id', classroomController.update);
// Delete a employee with id
router.delete('/classroom/:id', classroomController.delete);
module.exports = router
module.exports = router;
