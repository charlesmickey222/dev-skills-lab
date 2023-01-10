import {Skill} from "../models/skill.js";

function create(req,res){
Skill.find({})
req.body.confident = Boolean(req.body.confident)
Skill.create(req.body)
.then(skill=>{
  res.redirect('/skills')
})
}

function newSkill(req,res){
  res.redirect('/skills/new')

}

export{
  create,
  newSkill as new,
  
}
