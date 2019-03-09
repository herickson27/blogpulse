'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    models.tag.belongsToMany(models.post, {through: 'postsTags'});
    // associations can be defined here
  };
  return tag;
};

//show one post and displays tags of that post and place to add new tag
//each tag is a link to tag show page
//tag show page will show all posts with that tag 
