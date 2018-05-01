var removeFromArray = function(array,...values) {
 return  values.reduce( (acc,value)=> acc.filter(item => item != value) , array )
}

module.exports = removeFromArray
