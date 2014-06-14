'use strict';

module.exports = function (arr, options) {

  var opts = options || {}

  var processAsObject = true;
  for (var i in arr) {
    if (arr.hasOwnProperty(i)) {
      if (typeof arr[i] !== 'object') {
        processAsObject = false
        break;
      }
    }
  }

  //sort objects
  if (processAsObject) {
    if (typeof opts.property === 'undefined')
      throw new Error("when sorting objects, 'property' must be set in options")
    return arr.sort(function (left, right) {
      if (left[opts.property] > right[opts.property]) return (opts.reverse) ? -1 : 1
      if (right[opts.property] > left[opts.property]) return (opts.reverse) ? 1 : -1
      if (left[opts.property] === right[opts.property]) return 0
    })

  }

  //sort strings and integers
  return arr.sort(function (left, right) {
    if (left > right) return (opts.reverse) ? -1 : 1
    if (right > left) return (opts.reverse) ? 1 : -1
    if (left === right) return 0
  })

}
