// 引入模块
var mongoose = require('mongoose');
// 连接数据库
var db = mongoose.createConnection('mongodb://10.0.0.182:27017/mydb');
// 设置数据类型
var monSchema = new mongoose.Schema({
        name:{type:String,default:"name"},
        age:{type:Number},
        sex:{type:String}
});
// 选择集合
var monModel = db.model('site',monSchema);
// 要删除的条件
var del  = {sex:"男"};

monModel.remove(del,function(err,result){
        if(err){
                console.log(err);
        }else{
                console.log("delete");
        }
        db.close();
});