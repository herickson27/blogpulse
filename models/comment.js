'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(comment){
        comment.content = comment.content.toLowerCase();
      }
    }
  });
  comment.associate = function(models) {
    models.comment.belongsTo(models.post);
    // associations can be defined here
  };
  return comment;
};