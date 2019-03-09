'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    models.post.belongsTo(models.author);
    models.post.hasMany(models.comment);
    models.post.belongsToMany(models.tag, {through: 'postsTags'});
    // associations can be defined here
  };
  return post;
};