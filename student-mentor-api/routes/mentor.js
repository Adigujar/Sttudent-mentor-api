var express = require('express');
var router = express.Router();

let mentors = [
  { id: 1, name: 'mentor-1' },
  { id: 2, name: 'mentor-2' },
  { id: 3, name: 'mentor-3' },
  { id: 4, name: 'mentor-4' },
];
router.get('/mentors', function (req, res, next) {
  res.json(mentors);
});
router.get('/new-mentor', function (req, res, next) {
  let new_mentor = {
      name:req.body.name,
      id:mentors.length+1
  }
  students.push(new_mentor)
  res.json(mentors);
});

router.post('/mentor-students/:id', function (req, res, next) {
  if(req.body.array){
    const mentor = mentors.find((ele) => ele.id === parseInt(req.params.id));
    mentor.students = req.body.array;
    res.json({mentors})
  }
  else{res.json({
      message: "Array should be an array of objects"
  })}
});


module.exports = router;
