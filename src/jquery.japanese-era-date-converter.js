import jQuery from "jquery";
import JapaneseEraDateConverter from "./japanese-era-date-converter";

(function ($) {

  const japanese_era_date_converter = function (options) {

    const defaultSettings = {
      format: "geemmdd"
    };

    const settings = Object.assign(
      {},
      defaultSettings,
      options
    );

    this.on({
      "change": function (e) {
        const inputValue = $(this).val() || "";
        const converter = new JapaneseEraDateConverter({ inputValue, settings });
        $(this).val(converter.execute());
      }
    });
    return this;
  };

  $.fn.japanese_era_date_converter = japanese_era_date_converter;

})(jQuery);
