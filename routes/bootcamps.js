const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send({succuess: true, msg: 'Show all bootcamps'})
})

router.get("/:id", (req, res) => {
    res.status(200).send({succuess: true, msg: `Show bootcamp ${req.params.id}`})
})

router.post("/", (req, res) => {
    res.status(201).send({succuess: true, msg: 'Create new bootcamp'})
})

router.put("/:id", (req, res) => {
    res.status(200).send({succuess: true, msg: `update a bootcamp ${req.params.id}`})
})

router.delete("/:id", (req, res) => {
    res.status(200).send({succuess: true, msg: `delete bootcamp ${req.params.id}`})
})

module.exports = router