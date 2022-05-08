import { JapaneseDateConverter } from "../../dist/japanese-date-converter";

describe("JapaneseDateConverter", () => {
  test("can be executed from ES Modules", () => {
    // in class or function
    const inputValue = "R01/05/01";
    const settings = {
      format: "yyyy/MM/dd",
    };
    const converter = new JapaneseDateConverter({ inputValue, settings });
    const convertedValue = converter.execute();

    expect(convertedValue).toBe("2019/05/01");
  });
});
