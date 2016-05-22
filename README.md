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

___scale(unit, size)___

```js
const wrapperWidth = scale('em', 60);
const textWidth = scale(wrapperWidth, 0.75);
```

___unit___ String or Scale. A string representing the measurement unit or another scale.

___size___ Number. Optional.  A multiplier to scale the input unit, set to `1` if omitted.

### Unwrapping a scale

As an intermediate value, a scale can be unwrapped into a string that can used with a tool like [Radium](https://github.com/FormidableLabs/radium).

```js
const wrapper = {
    maxWidth: wrapperWidth() // 60em
};

const textWrapper = {
    maxWidth: textWidth() // 45em
};
```

## License

MIT 