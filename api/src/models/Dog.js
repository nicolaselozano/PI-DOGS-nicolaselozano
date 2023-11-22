const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {

    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isUrl: true,
        notNull:{
           msg: "Name is required"
        },
        notEmpty:{
          msg: "Name can't be empty"
        }, 
      },
    },
    height:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Name is required"
       },
       notEmpty:{
         msg: "Name can't be empty"
       },
      }
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Name is required"
       },
       notEmpty:{
         msg: "Name can't be empty"
       },
      }
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Name is required"
       },
       notEmpty:{
         msg: "Name can't be empty"
       },
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
        notNull:{
          msg: "Name is required"
       },
       notEmpty:{
         msg: "Name can't be empty"
       },
      },
    },

  }, { timestamps: false });

};
