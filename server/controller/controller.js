var projectdb = require("../model/model");

//create and save new project
exports.create = (req, res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }
    const data = req.body;
    //new project
    const project = new projectdb({
        p_no: data['Pno'],
        p_name: data['Pname'],
        type: data['type'],
        sanction_date: data['sdate'],
        pdc_o_in_months: data['pdc'],
        cost_o_in_lakhs: data['cost'],
        pdc_r_in_months: data['rpdc'],
        cost_r_in_lakhs: data['rcost'],
        act_exp_in_lakhs: data['exp'],
        status: data['status']
    })

    //save project
    project.save(project).then(data=>{
        // res.send(data)
        res.redirect('/add-project')
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Some error occurred while creating a create operation"
        })
    })
}
//retrieve and return all uers / retrieve and return a single project
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        projectdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found use with id"+id})
            }else{
                res.send(data)
            }
        }).catch(err =>
            res.status(500).send({message:"Error retrieving project with id" + id}))
    }else{
    projectdb.find()
    .then(project => {
        res.send(project)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error occurred while retriving project information"})
    })}
}
//update a new identified project by id
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = req.params.id;
    console.log(req.params)
    projectdb.findByIdAndUpdate(id, req.body).
    then(data =>{
        if(!data){
            res.status(404).send({message:"Cannot update project with ${id}. Maybe project not found"})
        }else{
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({message: "Error update project information "})
    })
} 
//update a new identified project by id
exports.delete = (req, res)=>{
    const id = req.params.id;
    projectdb.findByIdAndDelete(id).then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot delete with id${id}. May be id is wrong!!`})
        }
        else{
            res.send({
                message:"project was deleted successfully!"
            })
        }
    }).catch(err =>{
        res.status(500).send({
            message:`Could not delete project with id ${id}`})
        })
    }
