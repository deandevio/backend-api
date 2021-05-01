const { response } = require("express");
const Bootcamp = require("../models/Bootcamp");

exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ succuess: true, msg: "Show all bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ succuess: true, msg: `Show bootcamp ${req.params.id}` });
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ succuess: true, msg: `update a bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send({ succuess: true, msg: "Delete bootcamp" });
};
