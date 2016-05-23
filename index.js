module.exports = function scale(unit, multi) {
  if (arguments.length === 1) {
    var type = typeof unit === 'number';
    multi = type ? unit : 1;
    unit = type ? '' : unit;
  } else if (arguments.length === 0) {
    multi = 1;
    unit = '';
  }

  // if unit is scale
  if (typeof unit === 'function') {
    return createScale(unit.unit, unit.num * multi);
  }

  // if unit is string or undefined
  return createScale(unit, multi);
}


function createScale(unit, num) {
  var scale = 
    () => scale.num + scale.unit;

  scale.unit = unit;
  scale.num = num;

  return scale;
}