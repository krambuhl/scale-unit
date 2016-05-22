var scale = require('../index');
var test = require('tape');

test('scale()', t => {
  const em = scale();

  t.plan(1);
  t.equal(em(), '1');
});

test('scale(15) :: unitless', t => {
  const def1 = scale(1.5);
  const def2 = scale(15);

  t.plan(2);
  t.equal(def1(), '1.5');
  t.equal(def2(), '15');
});

test('scale(em)', t => {
  const em = scale('em');

  t.plan(1);
  t.equal(em(), '1em');
});

test('scale(em, 2)', t => {
  const em = scale('em', 2);

  t.plan(1);
  t.equal(em(), '2em');
});

test('scale(inherit, 2)', t => {
  const em = scale('em', 2);
  const my = scale(em, 2);

  t.plan(2);
  t.equal(em(), '2em');
  t.equal(my(), '4em');
});

test('scale(inheritUnitless, 2)', t => {
  const def1 = scale(10);
  const def2 = scale(def1, 2);

  t.plan(2);
  t.equal(def1(), '10');
  t.equal(def2(), '20');
});


test('scale(inheritDeep, 2)', t => {
  const em = scale('em', 2);
  const my = scale(em, 2);
  const ch = scale(my, 2);

  t.plan(3);
  t.equal(em(), '2em');
  t.equal(my(), '4em');
  t.equal(ch(), '8em');
});