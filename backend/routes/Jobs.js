const router = require('express').Router();
let Job = require('../models/Job.model');

router.route('/').get((req, res) => {
  Job.find()
    .then(Jobs => res.json(Jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const JobTitle = req.body.JobTitle;
  const Pay = Number(req.body.Pay);
  const industry = (req.body.industry);
  const type = (req.body.type);
  const Description = (req.body.Description);
  const createdAt = Date.parse(req.body.createdAt);

  const newJob = new Job({
    JobTitle,
    Pay,
    industry,
    type,
    Description,
    createdAt,
  });

  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Job.findById(req.params.id)
    .then(Job => {
      Job.JobTitle = req.body.JobTitle;
      Job.Pay = Number(req.body.Pay);
      Job.industry = (req.body.industry);
      Job.type = (req.body.type);
      Job.Description = (req.body.Description);
      Job.createdAt = Date.parse(req.body.createdAt);

      Job.save()
        .then(() => res.json('Job updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;