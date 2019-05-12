import jQuery from "jquery";
import JapaneseEraDateFormatter from "./japanese-era-date-formatter";

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
        const formatter = new JapaneseEraDateFormatter({ inputValue, settings });
        $(this).val(formatter.execute());
      }
    });
    return this;
  };

  $.fn.japanese_era_date_converter = japanese_era_date_converter;

})(jQuery);
