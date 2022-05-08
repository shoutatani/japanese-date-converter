import { JapaneseDateConverter } from "../src/japanese-date-converter";

let converter: JapaneseDateConverter = null;
beforeEach(() => {
  converter = new JapaneseDateConverter({
    inputValue: "",
    settings: { format: "" },
  });
});

describe("JapaneseDateConverter", () => {
  describe("execute", () => {
    describe("inputValue", () => {
      const format = "yyyy/MM/dd";
      describe("when valid input value", () => {
        describe("when input value starts with numeric Gengo", () => {
          // without separator
          test.each([
            { inputValue: "1010125", format, expected: "1868/01/25" },
            { inputValue: "1450729", format, expected: "1912/07/29" },
            { inputValue: "2010730", format, expected: "1912/07/30" },
            { inputValue: "2151224", format, expected: "1926/12/24" },
            { inputValue: "3011225", format, expected: "1926/12/25" },
            { inputValue: "3640107", format, expected: "1989/01/07" },
            { inputValue: "4010108", format, expected: "1989/01/08" },
            { inputValue: "4310430", format, expected: "2019/04/30" },
            { inputValue: "5010501", format, expected: "2019/05/01" },
          ])(
            " when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator /
          test.each([
            { inputValue: "101/01/25", format, expected: "1868/01/25" },
            { inputValue: "145/07/29", format, expected: "1912/07/29" },
            { inputValue: "201/07/30", format, expected: "1912/07/30" },
            { inputValue: "215/12/24", format, expected: "1926/12/24" },
            { inputValue: "301/12/25", format, expected: "1926/12/25" },
            { inputValue: "364/01/07", format, expected: "1989/01/07" },
            { inputValue: "401/01/08", format, expected: "1989/01/08" },
            { inputValue: "431/04/30", format, expected: "2019/04/30" },
            { inputValue: "501/05/01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator .
          test.each([
            { inputValue: "101.01.25", format, expected: "1868/01/25" },
            { inputValue: "145.07.29", format, expected: "1912/07/29" },
            { inputValue: "201.07.30", format, expected: "1912/07/30" },
            { inputValue: "215.12.24", format, expected: "1926/12/24" },
            { inputValue: "301.12.25", format, expected: "1926/12/25" },
            { inputValue: "364.01.07", format, expected: "1989/01/07" },
            { inputValue: "401.01.08", format, expected: "1989/01/08" },
            { inputValue: "431.04.30", format, expected: "2019/04/30" },
            { inputValue: "501.05.01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );
        });

        describe("when input value starts with string Gengo", () => {
          // without separator
          test.each([
            { inputValue: "M010125", format, expected: "1868/01/25" },
            { inputValue: "M450729", format, expected: "1912/07/29" },
            { inputValue: "T010730", format, expected: "1912/07/30" },
            { inputValue: "T151224", format, expected: "1926/12/24" },
            { inputValue: "S011225", format, expected: "1926/12/25" },
            { inputValue: "S640107", format, expected: "1989/01/07" },
            { inputValue: "H010108", format, expected: "1989/01/08" },
            { inputValue: "H310430", format, expected: "2019/04/30" },
            { inputValue: "R010501", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator /
          test.each([
            { inputValue: "M01/01/25", format, expected: "1868/01/25" },
            { inputValue: "M45/07/29", format, expected: "1912/07/29" },
            { inputValue: "T01/07/30", format, expected: "1912/07/30" },
            { inputValue: "T15/12/24", format, expected: "1926/12/24" },
            { inputValue: "S01/12/25", format, expected: "1926/12/25" },
            { inputValue: "S64/01/07", format, expected: "1989/01/07" },
            { inputValue: "H01/01/08", format, expected: "1989/01/08" },
            { inputValue: "H31/04/30", format, expected: "2019/04/30" },
            { inputValue: "R01/05/01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator .
          test.each([
            { inputValue: "M01.01.25", format, expected: "1868/01/25" },
            { inputValue: "M45.07.29", format, expected: "1912/07/29" },
            { inputValue: "T01.07.30", format, expected: "1912/07/30" },
            { inputValue: "T15.12.24", format, expected: "1926/12/24" },
            { inputValue: "S01.12.25", format, expected: "1926/12/25" },
            { inputValue: "S64.01.07", format, expected: "1989/01/07" },
            { inputValue: "H01.01.08", format, expected: "1989/01/08" },
            { inputValue: "H31.04.30", format, expected: "2019/04/30" },
            { inputValue: "R01.05.01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );
        });

        describe("when input value is western year", () => {
          // without separator
          test.each([
            { inputValue: "18680125", format, expected: "1868/01/25" },
            { inputValue: "19120729", format, expected: "1912/07/29" },
            { inputValue: "19120730", format, expected: "1912/07/30" },
            { inputValue: "19261224", format, expected: "1926/12/24" },
            { inputValue: "19261225", format, expected: "1926/12/25" },
            { inputValue: "19890107", format, expected: "1989/01/07" },
            { inputValue: "19890108", format, expected: "1989/01/08" },
            { inputValue: "20190430", format, expected: "2019/04/30" },
            { inputValue: "20190501", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator /
          test.each([
            { inputValue: "1868/01/25", format, expected: "1868/01/25" },
            { inputValue: "1912/07/29", format, expected: "1912/07/29" },
            { inputValue: "1912/07/30", format, expected: "1912/07/30" },
            { inputValue: "1926/12/24", format, expected: "1926/12/24" },
            { inputValue: "1926/12/25", format, expected: "1926/12/25" },
            { inputValue: "1989/01/07", format, expected: "1989/01/07" },
            { inputValue: "1989/01/08", format, expected: "1989/01/08" },
            { inputValue: "2019/04/30", format, expected: "2019/04/30" },
            { inputValue: "2019/05/01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );

          // with separator .
          test.each([
            { inputValue: "1868.01.25", format, expected: "1868/01/25" },
            { inputValue: "1912.07.29", format, expected: "1912/07/29" },
            { inputValue: "1912.07.30", format, expected: "1912/07/30" },
            { inputValue: "1926.12.24", format, expected: "1926/12/24" },
            { inputValue: "1926.12.25", format, expected: "1926/12/25" },
            { inputValue: "1989.01.07", format, expected: "1989/01/07" },
            { inputValue: "1989.01.08", format, expected: "1989/01/08" },
            { inputValue: "2019.04.30", format, expected: "2019/04/30" },
            { inputValue: "2019.05.01", format, expected: "2019/05/01" },
          ])(
            "when format option is $format, $inputValue should be converted as $expected",
            ({ inputValue, format, expected }) => {
              converter.inputValue = inputValue;
              converter.settings.format = format;
              expect(converter.execute()).toBe(expected);
            }
          );
        });
      });
      describe("when invalid input value", () => {
        test.each([
          { inputValue: "1450730", format }, // the day after the last day of Meiji era
          { inputValue: "1460101", format }, // the first day after the last year of Meiji era
          { inputValue: "2010729", format }, // the day before the first day of Taisho era
          { inputValue: "2151225", format }, // the day after the last day of Taisho era
          { inputValue: "2160101", format }, // the first day after the last year of Taisho era
          { inputValue: "3011224", format }, // the day before the first day of Shouwa era
          { inputValue: "3640108", format }, // the day after the last day of Shouwa era
          { inputValue: "3650101", format }, // the first day after the last year of Shouwa era
          { inputValue: "4010107", format }, // the day before the first day of Heisei era
          { inputValue: "4310501", format }, // the day after the last day of Heisei era
          { inputValue: "4320101", format }, // the first day after the last year of Heisei era
          { inputValue: "5010430", format }, // the day before the first day of Reiwa era
        ])("$inputValue is not valid Wareki date", ({ inputValue, format }) => {
          converter.inputValue = inputValue;
          converter.settings.format = format;
          expect(() => {
            converter.execute();
          }).toThrowError("Invalid Wareki year is specified");
        });
      });
    });

    describe("settings.format", () => {
      test.each([
        {
          inputValue: "4020901",
          format: "ggg/mmmmm/dd",
          expected: "平成/S/01",
        },
        {
          inputValue: "4020901",
          format: "gg/mmmm/d",
          expected: "平/September/1",
        },
        {
          inputValue: "4020901",
          format: "g/mmm",
          expected: "H/Sep",
        },
        {
          inputValue: "4020901",
          format: "MM",
          expected: "09",
        },
        {
          inputValue: "4020901",
          format: "M",
          expected: "9",
        },
      ])(
        "when format option is $format, $inputValue should be converted as $expected",
        ({ inputValue, format, expected }) => {
          converter.inputValue = inputValue;
          converter.settings.format = format;
          expect(converter.execute()).toBe(expected);
        }
      );
    });
  });
});
