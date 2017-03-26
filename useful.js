module.exports.test = () => {
  console.log('The module has been loaded.');
};

module.exports.getTime = () => {
  var time = new Date();
  var timestamp = (time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
  return timestamp;
};

module.exports.inArray = (string, array) => {
  var arrayLength = array.length;
  var i = 1;
  for (x = 0; x < array.length; x ++) {
    if (array[x] == string) {
      //console.log('true');
      return true;
    }

    else {
      i ++;
    }

    if (i == arrayLength) {
      //console.log('false');
      return false;
    }

  };
};
