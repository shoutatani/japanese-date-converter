export default class JapaneseEraDateFormatter {
  constructor({ inputValue, options }) {
    this.inputValue = inputValue;
  }

  execute() {
    if (!this.checkValue()) {
      return "";
    }
    return this.inputValue;
  }

  checkValue() {
    return this.inputValue ? true : false;
  }
}
