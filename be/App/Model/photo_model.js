module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("images", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
    //   data: {
    //     type: DataTypes.BLOB("long"),
    //   },
    },{
    sequelize,
  
    tableName: 'images',

    timestamps: true,

    indexes: [

      {

        name: "PRIMARY",

        unique: true,

        using: "BTREE",

        fields: [

          { name: "id" },

        ]

      },

    ]

  });
  
    
    return Image;
  };