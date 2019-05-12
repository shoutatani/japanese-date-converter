# jquery.japanese-era-date-converter
A simple jQuery Plugin to Japanese date converter.

[Demo Page](https://shoutatani.github.io/jquery.japanese-era-date-converter/)

## Installation
Download script in dist folder, and include the script after the jQuery library (unless you are packaging scripts somehow else):

```
<script src="../dist/jquery.japanese-era-date-converter.js"></script>
```

## Usage

1. What you need is to only call this library, like this.

```
<script>
  $(document).ready(function () {
    $("#target").japanese_era_date_converter({ format: "yyyy/mm/dd" });
  });
</script>
```

2. When text entered into the text field, the text will be converted as format.
  * example
    + When format is "gee/mm/dd", "2019/04/30" will be "H31/04/30".
  * If you'd like to know more, please check [Demo Page](https://shoutatani.github.io/jquery.japanese-era-date-converter/).

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
        <td>mm</td>
        <td>2019/04/30</td>
        <td>04</td>
      </tr>
      <tr>
        <td>m</td>
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
