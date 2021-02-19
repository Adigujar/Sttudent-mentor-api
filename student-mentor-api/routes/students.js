var express = require('express');
var router = express.Router();

/* GET users listing. */

let students = [
  { id: 1, name: 'student-1' },
  { id: 2, name: 'student-2' },
  { id: 3, name: 'student-3' },
  { id: 4, name: 'student-4' },
];
router.get('/students', function (req, res, next) {
  res.json(students);
});
router.get('/new-students', function (req, res, next) {
    let new_student = {
        name:req.body.name,
        id:students.length+1
    }
    students.push(new_student)
    res.json(students);
  });

router.post('/student-mentor/:id', function (req, res, next) {
    const student = students.find((ele) => ele.id === parseInt(req.params.id));
    student.mentor = req.body.mentor;
    res.json(students);
});

module.exports = router;