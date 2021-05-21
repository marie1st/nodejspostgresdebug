'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database_development', 'mariebouquin', 'Digit@l111', {
  dialect: 'postgres'
})

const Classroom = sequelize.define('Classroom', {
  //Model attributes are defined here
  class_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

console.log(Classromm === sequelize.models.Classroom);

Classroom.list = function(result) {
  const classrooms = await Classroom.findAll();
  console.log(classrooms.every(classroom => classroom instanceof Classroom));  //true
  console.log("All classrooms:", JSON.stringigy(classrooms, null, 2));
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('employees : ', res);
    result(null, res);
  }
}
/*module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    static associate(models) {
      Classroom.hasMany(models.Student, {
        foreignKey: 'classroom_id',
        as: 'students',
      });
    }
  };
  Classroom.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    class_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};
*/
