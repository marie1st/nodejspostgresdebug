const Classroom = require('../models/classroom')//.Classroom;
const Student = require('../models/student')//.Student;


exports.list = function(req, res) {
    Classroom.findAll(function(err, classroom) {
         console.log('controller')
         if (err)
            res.send(err);
         console.log('res', classroom);
         res.send(classroom);
}
       /* include: [{
          model: Student,
          as: 'students'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Student, as: 'students' }, 'createdAt', 'DESC'],
        ],
      })
      .then((classrooms) => res.status(200).send(classrooms))
      .catch((error) => { res.status(400).send(error); }); */
    );
  };

  exports.getById = function(req, res) {
    Classroom.findById(req.params.id, function(err, classroom)  {
      if (err)
        res.send(err);
      res.json(classroom);
    });/*{
      if (err)
        include: [{
          model: Student,
          as: 'students'
        }],
      })
      .then((classroom) => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return res.status(200).send(classroom);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      }); */
  };

  exports.add = function(req, res) {
    return Classroom
      .create({
        class_name: req.body.class_name,
      })
      .then((classroom) => res.status(201).send(classroom))
      .catch((error) => res.status(400).send(error));
  };

  exports.addWithStudents = function(req, res) {
    return Classroom
      .create({
        class_name: req.body.class_name,
        students: req.body.students,
      }, {
      	include: [{
          model: Student,
          as: 'students'
        }]
      })
      .then((classroom) => res.status(201).send(classroom))
      .catch((error) => res.status(400).send(error));
  };

  exports.update = function(req, res) {
    return Classroom
      .findByPk(req.params.id, {
        include: [{
          model: Student,
          as: 'students'
        }],
      })
      .then(classroom => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .update({
            class_name: req.body.class_name || classroom.class_name,
          })
          .then(() => res.status(200).send(classroom))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  };

  exports.delete = function(req, res) {
    return Classroom
      .findByPk(req.params.id)
      .then(classroom => {
        if (!classroom) {
          return res.status(400).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  };
