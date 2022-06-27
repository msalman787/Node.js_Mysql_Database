const dbConfig = require("../config/dbconfig")

const {Sequelize , DataTypes} = require("sequelize")


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases:false, // optional

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("Connented ")
})
.catch((err)=>console.log("Error",err))

const db = {}

db.Sequelize =  Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.reveiws = require('./reveiwModel.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log("Yes Server Are Runing ")
})

module.exports = db













