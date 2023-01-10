import {Skill} from "../models/skill.js";


function index(req,res){
Skill.find({})
.then(skills =>{
  res.render('skills/index',{
    title:'skills',
    skills,
  })
})
.catch(err =>{
  console.log(err)
  res.redirect('/')
})
}

function create(req,res){
Skill.find({})
req.body.confident = Boolean(req.body.confident)
Skill.create(req.body)
.then(skill=>{
  res.redirect('/skills')
})
.catch(err=>{
  console.log(err)
  res.redirect('/')
})
}

function newSkill(req,res){
  res.redirect('/skills/new')
}

function show(req, res){
  Skill.findById(req.params.id)
  .then(skill=>{
    res.render('skills/show',{
      title:'A Skill',
      skill:skill,
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/')
  })
}
function edit(req,res){
  Skill.findById(req.params.id)
  .then(skill=>{
    res.render(`skills/${req.params.id}/edit`,{
      title:'edit skill',
      skill,
    })
  })
  .catch(error=>{
    console.log('error')
    res.redirect('/')
  })

}
function update(req,res){
  req.body.confident = !!req.body.confident
  Skill.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(skill=>{
    res.redirect('/skills')
  })
  .catch(error=>{
    console.log('error')
    res.redirect('/')
  })
}
function deleteSkill(req,res){
  Skill.findByIdAndDelete(req.params.id)
  .then(skill =>{
    res.redirect('/skills')
  })
  .catch(error=>{
    console.log('error')
    res.redirect('/')
  })
}

export{
  create,
  newSkill as new,
  index,
  show,
  edit,
  update,
  deleteSkill as delete,
}
