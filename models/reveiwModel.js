
module.exports = (sequelize, DataTypes)=>{

    const Reveiw = sequelize.define("reveiw",{
        rating:{
            type:DataTypes.INTEGER,
        },
        description:{
            type:DataTypes.TEXT,
        },
        
    })
        return Reveiw
}