exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ succuess: true, msg: "Show all bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ succuess: true, msg: `Show bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
  res.status(201).send({ succuess: true, msg: "Create new bootcamp" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ succuess: true, msg: `update a bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send({ succuess: true, msg: "Delete bootcamp" });
};
