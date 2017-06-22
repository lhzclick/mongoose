// 引入模块
var mongoose = require('mongoose');
// 连接数据库
var db = mongoose.createConnection('mongodb://10.0.0.182:27017/mydb');
// cosole.log(db);
// 设置数据类型
var monSchema = new mongoose.Schema({
        name:{type:String,default:"name"},
        age:{type:Number},
        sex:{type:String}
});
// 选择集合
var monModel = db.model('site',monSchema);
// 原数据字段值
var oldValue  = {name:"Nick"};
// 单条件更新
//var newData = {$set:{name:"XM"}};
// 多条件更新
var newData = {$set:{name:"内容",age:2}};
monModel.update(oldValue,newData,function(err,result){
        if(err){
                console.log(err);
        }else{
                console.log("update");
        }
        db.close();
});