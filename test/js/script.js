(function () {
  'use strict';

  var arr = [1, 2, 3, 4 ,5];
  var newArr = [];
  _.forEach(arr, function (item) {
    newArr.push(item * 2);
  });
  console.log('newArr: ', newArr);
})();
