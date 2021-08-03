const User = require('../models/User.js');
const Role = require('../models/Role.js');

class authController{
    async registration(req,res){
        try{

        } catch(err){

        }
    }

    async login(req,res){
        try{

        } catch(err){

        }

    }

    async getUsers(req,res){
        try{
            const userRole = new Role();
            const adminRole = new Role({value:'admin'});
            await userRole.save();
            await adminRole.save();
            res.json('server work');
        } catch(err){

        }

    }

}

module.exports = new authController