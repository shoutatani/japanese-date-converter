interface JapaneseDateConverterInterface {
  inputValue: string,
  settings: {
    format: string
  }
}

interface Gengo {
  name: string,
  ligature: string,
  from: Date,
  to: Date,
  ggg: string,
  gg: string,
}

export default class JapaneseDateConverter {
  inputValue: string;
  settings: {
    format: string
  };
  gengo: Gengo
  gengoList: Gengo[]
  formatOptions: {
    years: string[],
    months: string[],
    days: string[]
  }

  constructor({ inputValue, settings }: JapaneseDateConverterInterface) {
    this.inputValue = inputValue;
    this.settings = settings;

    this.gengoList = [
      {
        name: "M",
        ligature: "㍾",
        from: new Date("1868-01-25"),
        to: new Date("1912-07-29"),
        ggg: "明治",
        gg: "明",
      },
      {
        name: "T",
        ligature: "㍽",
        from: new Date("1912-07-30"),
        to: new Date("1926-12-24"),
        ggg: "大正",
        gg: "大"
      },
      {
        name: "S",
        ligature: "㍼",
        from: new Date("1926-12-25"),
        to: new Date("1989-01-07"),
        ggg: "昭和",
        gg: "昭"
      },
      {
        name: "H",
        ligature: "㍻",
        from: new Date("1989-01-08"),
        to: new Date("2019-04-30"),
        ggg: "平成",
        gg: "平"
      },
      {
        name: "R",
        ligature: "\u32FF",
        from: new Date("2019-05-01"),
        to: new Date(),
        ggg: "令和",
        gg: "令"
      }
    ]
    this.formatOptions = {
      years: [
        "ggg", "gg", "g", "ee", "e", "yyyy", "yy"
      ],
      months: [
        "mmmmm", "mmmm", "mmm", "mm", "m"
      ],
      days: [
        "dd", "d"
      ]
    }
  }

  execute() {
    if (!this.checkValue()) {
      return this.inputValue;
    }
    return this.convert();
  }

  checkValue() {
    const MINIMUM_LENGTH: number = 7;
    if (this.inputValue.length < MINIMUM_LENGTH) {
      return false;
    }
    return true;
  }

  getGengoFromWarekiLetter(firstLetter: string): Gengo {
    let result: Gengo = null;
    this.gengoList.forEach((gengo, index) => {
      if (gengo.name === firstLetter || (index + 1) === Number.parseInt(firstLetter)) {
        result = gengo;
      }
    }, this.gengoList);
    return result;
  }

  hasWarekiLetter(): RegExpMatchArray {
    return (
      this.inputValue.match(/^\d{7}$/) ||
      this.inputValue.match(/^[A-Z1-9]{1}\d{6}$/)) ||
      this.inputValue.match(/^[A-Z1-9]{1}\d{2}.+\d{2}.+\d{2}/
    );
  }

  getGengoFromDate(date: Date): Gengo {
    let gengo: Gengo = this.gengoList.find(gengo => date >= gengo.from && date <= gengo.to);
    if (date < this.gengoList[0].from) {
      gengo = this.gengoList[0];
    }
    if (date > this.gengoList[this.gengoList.length - 1].from) {
      gengo = this.gengoList[this.gengoList.length - 1];
    }
    return gengo;
  }

  getSeirekiYear(gengo: Gengo, warekiYear: number): number {
    if (!gengo) {
      return null;
    }
    return gengo.from.getFullYear() + warekiYear - 1;
  }

  getWarekiYear(date: Date): number {
    const gengo: Gengo = this.getGengoFromDate(date);
    return date.getFullYear() - (gengo.from.getFullYear() - 1)
  }

  getDate(gengo?: Gengo): Date {
    let result = null;
    switch (this.inputValue.length) {
      case 7: {
        // 4300121
        // H300121
        const warekiYear: number = Number.parseInt(this.inputValue.substr(1, 2));
        const month: number = Number.parseInt(this.inputValue.substr(3, 2));
        const day: number = Number.parseInt(this.inputValue.substr(5, 2));
        const seirekiYear: number = this.getSeirekiYear(gengo, warekiYear);
        return new Date(seirekiYear, month - 1, day);
      }
      case 8: {
        // 20180121
        const seirekiYear: number = Number.parseInt(this.inputValue.substr(0, 4));
        const month: number = Number.parseInt(this.inputValue.substr(4, 2));
        const day: number = Number.parseInt(this.inputValue.substr(6, 4));
        return new Date(seirekiYear, month - 1, day);
      }
      case 9: {
        // H30/01/01
        // H30.01.21
        // 430/01/01
        // 430.01.01
        const warekiYear: number = Number.parseInt(this.inputValue.substr(1, 2));
        const month: number = Number.parseInt(this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/) ? this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)[1] : null);
        const day: number = Number.parseInt(this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/) ? this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)[1] : null);
        const seirekiYear: number = this.getSeirekiYear(gengo, warekiYear);
        return new Date(seirekiYear, month - 1, day);
      }
      case 10: {
        // 2018/01/01
        // 2018.01.01
        const seirekiYear: number = Number.parseInt(this.inputValue.substr(0, 4));
        const month: number = Number.parseInt(this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/) ? this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)[1] : null);
        const day: number = Number.parseInt(this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/) ? this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)[1] : null);
        return new Date(seirekiYear, month - 1, day);
      }
      default:
        break;
    }
    return result;
  }

  searchFormatTarget(format: string): string {
    const formatOptions = this.formatOptions;
    let formatTarget: string = null;

    formatTarget = formatOptions.years.find(yearFormat => format.includes(yearFormat));
    if (formatTarget) {
      return formatTarget;
    }

    formatTarget = formatOptions.months.find(monthFormat => format.includes(monthFormat));
    if (formatTarget) {
      return formatTarget;
    }

    formatTarget = formatOptions.days.find(dayFormat => format.includes(dayFormat));

    return formatTarget;
  }

  convertFormatTargetToValue(date: Date, gengo: Gengo, formatTarget: string): string {
    const monthNames: string[] = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    switch (formatTarget) {
      case "ggg":
        return gengo.ggg;
      case "gg":
        return gengo.gg;
      case "g":
        return gengo.name;
      case "ee":
        return this.getWarekiYear(date).toString().padStart(2, "0");
      case "e":
        return this.getWarekiYear(date).toString();
      case "yyyy":
        return date.getFullYear().toString();
      case "yy":
        return date.getFullYear().toString().substr(2, 2);
      case "mmmmm":
        return monthNames[date.getMonth()].substr(0, 1);
      case "mmmm":
        return monthNames[date.getMonth()];
      case "mmm":
        return monthNames[date.getMonth()].substr(0, 3);
      case "mm":
        return (date.getMonth() + 1).toString().padStart(2, "0");
      case "m":
        return (date.getMonth() + 1).toString();
      case "dd":
        return date.getDate().toString().padStart(2, "0");
      case "d":
        return date.getDate().toString();
      default:
        return null;
    }
  }

  convertDateByFormat(date: Date, gengo: Gengo, format: string): string {
    let replacedString: string = format;
    let formatTarget: string = this.searchFormatTarget(replacedString);
    while (formatTarget) {
      replacedString = replacedString.replace(formatTarget, this.convertFormatTargetToValue(date, gengo, formatTarget));
      formatTarget = this.searchFormatTarget(replacedString);
    }
    return replacedString;
  }

  convert(): string {
    let result: string = null;
    switch (this.inputValue.length) {
      // ex. 平成30年1月21日
      case 7: {
        // 4300121(和暦を数値で表すパターン)
        // H300121
        if (!this.hasWarekiLetter()) {
          return this.inputValue;
        }
        const gengo: Gengo = this.getGengoFromWarekiLetter(this.inputValue.substr(0, 1))
        const date: Date = this.getDate(gengo);
        const format: string = this.settings.format;
        return this.convertDateByFormat(date, gengo, format);
      }
      case 8:
        // 20180121
        if (this.inputValue.match(/\D/)) {
          return this.inputValue;
        }
        const date: Date = this.getDate();
        const format: string = this.settings.format;
        return this.convertDateByFormat(date, null, format)
      case 9: {
        // H30/01/01
        // H30.01.21
        // 430/01/01
        // 430.01.01
        if (!this.hasWarekiLetter()) {
          return this.inputValue;
        }
        const gengo: Gengo = this.getGengoFromWarekiLetter(this.inputValue.substr(0, 1))
        const date: Date = this.getDate(gengo);
        const format: string = this.settings.format;
        return this.convertDateByFormat(date, null, format)
      }
      case 10: {
        // 2018/01/01
        // 2018.01.01
        const date: Date = this.getDate();
        let gengo: Gengo = this.getGengoFromDate(date);
        const format: string = this.settings.format;
        return this.convertDateByFormat(date, gengo, format)
      }
      default:
        break;
    }

    return result;
  }
}
