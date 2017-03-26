const usefulFunctions = require('./useful.js');

var sendMe = ':(';

module.exports = () => {
  var gif = ['34','41'];
  var jpg = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','25','27','28','29','30','31','32','35','37','38','39','42'];
  var png = ['21','22','23','24','26','33','36','40'];

  var roll = Math.random();
  roll *= 43;
  roll = Math.floor(roll);

  if (usefulFunctions.inArray(roll, gif) == true) {
    sendMe = ('./merp/merp' + roll + '.gif');
  }

  else if (usefulFunctions.inArray(roll,jpg) == true) {
    sendMe = ('./merp/merp' + roll + '.jpg');
  }

  else if (usefulFunctions.inArray(roll,png) == true) {
    sendMe = ('./merp/merp' + roll + '.png');
  };

  console.log('merp was called, sending ' + sendMe);
  return (sendMe);
};
