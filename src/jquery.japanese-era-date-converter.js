import $ from "jquery";
import JapaneseEraDateFormatter from "./japanese-era-date-formatter";

const japanese_era_date_converter = function () {
  this.on({
    "change": function (e) {
      const inputValue = $(this).val();
      const formatter = new JapaneseEraDateFormatter({ inputValue });
      alert(formatter.execute());
    }
  });
};

export default japanese_era_date_converter;

$.fn.japanese_era_date_converter = japanese_era_date_converter;
