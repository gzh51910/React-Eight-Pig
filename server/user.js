const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')

//用户相关的
Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})
//登陆
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user:user},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
    
})
//注册功能
Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    // console.log("req.body",req.body);
    
    User.findOne({user},function(err,doc){
        //如果查询到，说明当前用户已经存在
        if(doc){//表示用户不存在，为0表示存在
            //code为1
            return res.json({code:1,msg:'用户名重复'})
        }
        //如果不存在，就创建一个新的
        User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info',function(req,res){
    return res.json({code:1})
})



//用来暴露此页面的接口（加上之后，才可以调用）
module.exports = Router
