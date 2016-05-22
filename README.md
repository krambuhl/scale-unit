# scale-unit

A module for scaling css units in javascript.  

## Install

```
$ npm install scale-unit 
```

## Usage

```js
const scale = require('scale-unit');

// define a size
const baseSize = scale('em', 1.4);

// scale the size
const headerSize = scale(baseSize, 2);
```

### Defining a scale

#### scale(unit, multiplier)

Returns an intermediate function. It's value and measurement unit are tracked seperately.

```js
const wrapperWidth = scale('em', 60);
const textWidth = scale(wrapperWidth, 0.75);
```

___unit___ String or Scale. Optional. A string representing the measurement unit or another scale.

___size___ Number. Optional.  A multiplier to scale the input unit, set to `1` if omitted.

### Unwrapping a scale

As an intermediate function, a scale can be unwrapped into a string that can used with a tool like [Radium](https://github.com/FormidableLabs/radium).

```js
const wrapper = {
    maxWidth: wrapperWidth() // 60em
};

const textWrapper = {
    maxWidth: textWidth() // 45em
};
```

### Sugars

#### scale()

```js
const one = scale(); // 1
const two = scale(one, 2); // 2m
```

#### scale(unit)

```js
const oneEm = scale('em'); // 1em
const oneEm = scale(oneEm, 5); // 5em
```

#### scale(size)

```js
const ten = scale(10); // 10
const hundred = scale(ten, 10); // 100
```

## License

MIT 