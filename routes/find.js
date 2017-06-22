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
var content = {name:"Nick"};
var field = {name:2,age:2,sex:2};
monModel.find(content,field,function(err,result){
        if(err){
                console.log(err);
        }else{
                console.log(result);
        }
        db.close();
});