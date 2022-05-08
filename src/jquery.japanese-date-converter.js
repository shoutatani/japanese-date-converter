import { JapaneseDateConverter } from "./japanese-date-converter";

(function ($) {
  const japanese_date_converter = function (options) {
    const defaultSettings = {
      format: "geemmdd",
    };

    const settings = Object.assign({}, defaultSettings, options);

    this.on({
      change: function (e) {
        const inputValue = ($(this).val() || "").toString();
        const converter = new JapaneseDateConverter({ inputValue, settings });
        try {
          $(this).val(converter.execute());
        } catch (error) {
          console.error(
            "Invalid value was passed. the input value was",
            inputValue
          );
        }
      },
    });
    return this;
  };

  $.fn.japanese_date_converter = japanese_date_converter;
})(jQuery);
