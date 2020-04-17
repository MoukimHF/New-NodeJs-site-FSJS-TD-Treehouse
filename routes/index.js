const express = require('express');
const router = express.Router();
const data=require('../data.json').projects;
router.get("/", (req, res) => {
    res.render('index',{ data });
  });
  
 router.get("/about", (req, res) => {
    res.render('about');
 });
 
 
 router.get("/projects/:id", (req, res, next) => {
   const id = parseInt(req.params.id);
   const projectLength = data.length;
 console.log(projectLength);
   if (id > projectLength) {
     const err = new Error(' Not Found');
     err.status = 404;
     console.log(err);
     res.render("projectError", { error: err });
     next(err);
   } else {
     res.render("project", { project: data[id] });
   }
 });
 
 
 module.exports = router;