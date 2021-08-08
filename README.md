# japanese-date-converter

This module help you to convert Japanese date and Western years.

[Demo Page](https://shoutatani.github.io/japanese-date-converter/)

## Installation

### Using in ESModules

All you need is to call this in ESModule, please use like this.

```
// file top
import JapaneseDateConverter from "japanese-date-converter";

// in class or function
const inputValue = "R01/05/01";
const settings = {
  format: "yyyy/MM/dd"
};
const converter = new JapaneseDateConverter({ inputValue, settings });
const convertedValue = converter.execute();
```

### Using in CommonJS

All you need is to call this in CommonJS, please use like this.

```
// file top
const JapaneseDateConverter = require('japanese-date-converter').default

// in class or function
const inputValue = "R01/05/01";
const settings = {
  format: "yyyy/MM/dd"
};
const converter = new JapaneseDateConverter({ inputValue, settings });
const convertedValue = converter.execute();
```

### Using in jQuery

Download script in dist folder, and include the script after the jQuery library (unless you are packaging scripts somehow else):

```
<script src="../dist/jquery.japanese-date-converter.js"></script>
```

And, call like this.

```
<script>
  $(document).ready(function () {
    $("#target").japanese_date_converter({ format: "yyyy/MM/dd" });
  });
</script>
```

## Details

1. When text inputted, the text will be converted as format.

- example
  - When format is "gee/MM/dd", "2019/04/30" will be "H31/04/30".
- If you'd like to know more, please check [Demo Page](https://shoutatani.github.io/japanese-date-converter/).

2. Supported format is as below.
<table class="supported-styles">
    <caption>years</caption>
    <tr>
      <th>style</th>
      <th>example date</th>
      <th>converted example</th>
    </tr>
    <tr>
      <td>ggg</td>
      <td>2019/04/30</td>
      <td>平成</td>
    </tr>
    <tr>
      <td>gg</td>
      <td>2019/04/30</td>
      <td>平</td>
    </tr>
    <tr>
      <td>g</td>
      <td>2019/04/30</td>
      <td>H</td>
    </tr>
    <tr>
      <td>yyyy</td>
      <td>2019/04/30</td>
      <td>2019</td>
    </tr>
    <tr>
      <td>yy</td>
      <td>2019/04/30</td>
      <td>19</td>
    </tr>
    <tr>
      <td>ee</td>
      <td>1990/04/30</td>
      <td>02</td>
    </tr>
    <tr>
      <td>e</td>
      <td>1990/04/30</td>
      <td>2</td>
    </tr>
  </table>
  <table class="supported-styles">
    <caption>months</caption>
    <tr>
      <th>style</th>
      <th>example date</th>
      <th>converted example</th>
    </tr>
    <tr>
      <td>mmmmm</td>
      <td>2019/04/30</td>
      <td>A</td>
    </tr>
    <tr>
      <td>mmmm</td>
      <td>2019/04/30</td>
      <td>April</td>
    </tr>
    <tr>
      <td>mmm</td>
      <td>2019/04/30</td>
      <td>Apr</td>
    </tr>
    <tr>
      <td>MM</td>
      <td>2019/04/30</td>
      <td>04</td>
    </tr>
    <tr>
      <td>M</td>
      <td>2019/04/30</td>
      <td>4</td>
    </tr>
  </table>
  <table class="supported-styles">
    <caption>days</caption>
    <tr>
      <th>style</th>
      <th>example date</th>
      <th>converted example</th>
    </tr>
    <tr>
      <td>dd</td>
      <td>2019/04/02</td>
      <td>02</td>
    </tr>
    <tr>
      <td>d</td>
      <td>2019/04/02</td>
      <td>2</td>
    </tr>
  </table>

## Contributing

In preparation.

## Authors

[shoutatani](https://github.com/shoutatani)
