const getToday = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  return year + month + day;
};

const getTime = () => {
  var today = new Date();

  var hours = ('0' + today.getHours()).slice(-2);
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2);

  if (0 < minutes < 30) {
    minutes = '00';
  } else {
    minutes = '30';
  }
  var timeFormat = hours + minutes;
  return timeFormat;
};

export {getToday, getTime};
