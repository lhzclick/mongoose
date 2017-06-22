// 引入模块
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// 连接数据库
var db = mongoose.createConnection('mongodb://10.0.0.182:27017/mydb');
// 设置数据类型
var monSchema = new mongoose.Schema({
        name:{type:String,default:"username"},
        age:{type:Number},
        sex:{type:String}
});
// 选择集合 查看时+s
var monModel = db.model('user',monSchema);
// 数据集
var content = {name:"Tom",age:23,sex:'男'};
// 实例化对象并插入数据
var monInsert = new monModel(content);
monInsert.save(function(err,data,num){
        if(err){
                console.log(err);
        }else{
                console.log('成功插入数据');
                console.log(data)
        }
        db.close();
});