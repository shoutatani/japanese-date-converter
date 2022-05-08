# japanese-date-converter

[![npm version](https://badge.fury.io/js/japanese-date-converter.svg)](https://badge.fury.io/js/japanese-date-converter)
[![main](https://github.com/shoutatani/japanese-date-converter/actions/workflows/main.yml/badge.svg?branch=master&event=push)](https://github.com/shoutatani/japanese-date-converter/actions/workflows/main.yml)

This module help you to convert Japanese date and Western years.

[Demo Page](https://shoutatani.github.io/japanese-date-converter/)

## Installation

### Using in CommonJS

In CommonJS, please use like this.

```
const { JapaneseDateConverter } = require('japanese-date-converter')

const inputValue = "R01/05/01";
const settings = {
  format: "yyyy/MM/dd"
};
const converter = new JapaneseDateConverter({ inputValue, settings });
const convertedValue = converter.execute();
console.log(convertedValue); // "2019/05/01"
```

### Using in ES Modules

In ES Modules, please use like this.

```
import { JapaneseDateConverter } from "japanese-date-converter";

const inputValue = "R01/05/01";
const settings = {
  format: "yyyy/MM/dd"
};
const converter = new JapaneseDateConverter({ inputValue, settings });
const convertedValue = converter.execute();
console.log(convertedValue); // "2019/05/01"
```

### Using in jQuery

Download script in dist folder, and include the script after loading your jQuery library.

```
<script src="../dist/jquery.japanese-date-converter.js"></script>
```

And, call like this.  
In this library, library catch `change` event, so inputted text will be formatted automatically after text entering.

```
<script>
  $(document).ready(function () {
    $("#target").japanese_date_converter({ format: "yyyy/MM/dd" });
  });
</script>
```

## Details

1. When text inputted, the text will be parsed internally in this library.

2. After parsed internally in this library, parsed date(time) will be formatted as given format.

- example
  - When format is "gee/MM/dd", "2019/04/30" will be formatted as "H31/04/30".
  - When format is "ggge年M月d日", "2019/04/05" will be formatted as "平成31年4月5日".
- If you'd like to know more, please check [Demo Page](https://shoutatani.github.io/japanese-date-converter/).

3. Supported format is as below.
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

1. fork this repository.
2. run `yarn install`
3. fix or add new feature.
4. after fix or add new feature, run these command.
  - `yarn lint`
  - `yarn test`
  - `yarn build`
5. if any warn or error occurred, fix your code and run above commands again.
6. commit your changes, and create Pull Request in GitHub.

## Authors

[shoutatani](https://github.com/shoutatani)
