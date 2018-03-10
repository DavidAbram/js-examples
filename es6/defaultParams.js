var link = function (height, color, url) {
  var height = height || 50
  var color = color || 'red'
  var url = url || 'https://student.racunarstvo.hr'
  return {
    height: height,
    color: color,
    url: url
  }
}

var link = function(height = 50, color = 'red', url = 'https://student.racunarstvo.hr') {
  return {
    height,
    color,
    url
  }
}