# scale-unit

A module for scaling measurements in javascript.  


## Install

```
$ npm install scale-unit 
```


## Usage

```js
const scale = require('scale-unit');

// define a size
const baseSize = scale('em', 1.5);

// scale the size
const headerSize = scale(baseSize, 2);

// unwrap the size 
const styles = { fontSize: baseSize() }; // 1.5em
const headerStyles = { fontSize: headerSize() }; // 3em

// unwrap and scale the size
const bigHeaderStyles = { fontSize: headerSize(1.5) }; // 4.5em
```


### Defining a scale


#### scale(unit, multiplier)

Returns an [measurement](#measurementsize) function who's value and unit label are tracked seperately.

```js
const wrapperWidth = scale('em', 60);
const textWidth = scale(wrapperWidth, 0.75);
```

___unit___ String or Scale. Optional. A string representing the measurement unit or another scale function.

___size___ Number. Optional.  A multiplier to scale the input unit, set to `1` if omitted.


### Unwrapping a measurement

A measurement is a function that can be unwrapped into a string that can used with a tool like [Radium](https://github.com/FormidableLabs/radium).


#### measurement(size)

___size___ Number. Optional.  A multiplier to scale the input unit, set to `1` if omitted.

```js
const wrapper = { maxWidth: wrapperWidth() } // 60em
const textWrapper = { maxWidth: textWidth() } // 45em
```

```js
const textWrapper = { maxWidth: wrapperWidth(0.75) } // 45em
```


### Sugars


#### scale(unit)

```js
const em = scale('em'); // 1em
const fiveEm = em(5); // 5em
const fiveEm = scale(em, 5); // 5em
```


#### scale(size)

```js
const ten = scale(10); // 10
const hundred = scale(ten, 10); // 100
```


## License

MIT 