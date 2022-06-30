const axios = require('axios');
const PORT = process.env.PORT || 8000;


exports.homeRoutes = (req, res) => {
    //make a get request to /api/projects
    axios.get(`http://localhost:${PORT}/api/projects`)
    .then(function(response){
        // console.log(response.data)
        res.render('index', {projects:response.data})
    }).catch(err => {
        res.send(err);
    })

}

exports.add_project = (req, res)=>{
    res.render('add_project')
};
exports.update_project = (req, res)=>{
    axios.get(`http://localhost:${PORT}/api/projects`, {params:{id:req.query.id}}).then(function(projectdata){
        res.render("update_project", {project: projectdata.data})
    }).catch(err => {
        res.send(err)
    })
};