interface JapaneseDateConverterInterface {
  inputValue: string;
  settings: {
    format: string;
  };
}

interface Gengo {
  name: string;
  ligature: string;
  from: Date;
  to: Date;
  ggg: string;
  gg: string;
}

export default class JapaneseDateConverter {
  inputValue: string;
  settings: {
    format: string;
  };
  gengo: Gengo;
  gengoList: Gengo[];
  formatOptions: {
    yearsOfString: string[];
    yearsOfNumber: string[];
    monthsOfString: string[];
    monthsOfNumber: string[];
    days: string[];
  };

  constructor({ inputValue, settings }: JapaneseDateConverterInterface) {
    this.inputValue = inputValue;
    this.settings = settings;

    this.gengoList = [
      {
        name: "M",
        ligature: "㍾",
        from: new Date(1868, 0, 25),
        to: new Date(1912, 6, 29),
        ggg: "明治",
        gg: "明",
      },
      {
        name: "T",
        ligature: "㍽",
        from: new Date(1912, 6, 30),
        to: new Date(1926, 11, 24),
        ggg: "大正",
        gg: "大",
      },
      {
        name: "S",
        ligature: "㍼",
        from: new Date(1926, 11, 25),
        to: new Date(1989, 0, 7),
        ggg: "昭和",
        gg: "昭",
      },
      {
        name: "H",
        ligature: "㍻",
        from: new Date(1989, 0, 8),
        to: new Date(2019, 3, 30),
        ggg: "平成",
        gg: "平",
      },
      {
        name: "R",
        ligature: "\u32FF",
        from: new Date(2019, 4, 1),
        to: new Date(),
        ggg: "令和",
        gg: "令",
      },
    ];

    this.formatOptions = {
      yearsOfString: ["ggg", "gg", "g"],
      yearsOfNumber: ["ee", "e", "yyyy", "yy"],
      monthsOfString: ["mmmmm", "mmmm", "mmm"],
      monthsOfNumber: ["MM", "M"],
      days: ["dd", "d"],
    };
  }

  execute() {
    if (!this.validate()) {
      return this.inputValue;
    }
    return this.convert();
  }

  private validate() {
    const MINIMUM_LENGTH = 7;
    if (this.inputValue.length < MINIMUM_LENGTH) {
      return false;
    }
    this.checkInvalidWarekiYear();
    return true;
  }

  private checkInvalidWarekiYear() {
    if (!this.hasWarekiLetter()) {
      return;
    }
    const specifiedGengo = this.getGengoFromWarekiLetter(
      this.inputValue.substr(0, 1)
    );
    const date = this.getDate(specifiedGengo);
    // 明治46年などの指定(ex. 1461231)がされた場合に大正1年として変換されるが、それは不正な和暦年として扱う。
    if (date && specifiedGengo !== this.getGengoFromDate(date)) {
      throw new Error("Invalid Wareki year is specified");
    }
  }

  private getGengoFromWarekiLetter(firstLetter: string): Gengo {
    let result: Gengo = null;
    this.gengoList.forEach((gengo, index) => {
      if (
        gengo.name === firstLetter ||
        index + 1 === Number.parseInt(firstLetter)
      ) {
        result = gengo;
      }
    }, this.gengoList);
    return result;
  }

  private hasWarekiLetter(): boolean {
    return !!this.inputValue.match(
      /^\d{7}$|^[A-Z1-9]{1}\d{6}$|^[A-Z1-9]{1}\d{2}\D+\d{2}\D+\d{2}/
    );
  }

  private getGengoFromDate(date: Date): Gengo {
    let gengo = this.gengoList.find(
      (gengo) => date >= gengo.from && date <= gengo.to
    );
    if (date < this.gengoList[0].from) {
      gengo = this.gengoList[0];
    }
    if (date > this.gengoList[this.gengoList.length - 1].from) {
      gengo = this.gengoList[this.gengoList.length - 1];
    }
    return gengo;
  }

  private getSeirekiYear(gengo: Gengo, warekiYear: number): number {
    if (!gengo) {
      return null;
    }
    return gengo.from.getFullYear() + warekiYear - 1;
  }

  private getWarekiYear(date: Date): number {
    const gengo = this.getGengoFromDate(date);
    return date.getFullYear() - (gengo.from.getFullYear() - 1);
  }

  private getDate(gengo?: Gengo): Date {
    let result = null;
    switch (this.inputValue.length) {
      case 7: {
        // 4300121
        // H300121
        const warekiYear = Number.parseInt(this.inputValue.substr(1, 2));
        const month = Number.parseInt(this.inputValue.substr(3, 2));
        const day = Number.parseInt(this.inputValue.substr(5, 2));
        const seirekiYear = this.getSeirekiYear(gengo, warekiYear);
        return new Date(seirekiYear, month - 1, day);
      }
      case 8: {
        // 20180121
        const seirekiYear = Number.parseInt(this.inputValue.substr(0, 4));
        const month = Number.parseInt(this.inputValue.substr(4, 2));
        const day = Number.parseInt(this.inputValue.substr(6, 4));
        return new Date(seirekiYear, month - 1, day);
      }
      case 9: {
        // H30/01/01
        // H30.01.21
        // 430/01/01
        // 430.01.01
        const warekiYear = Number.parseInt(this.inputValue.substr(1, 2));
        const month = Number.parseInt(
          this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)
            ? this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)[1]
            : null
        );
        const day = Number.parseInt(
          this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)
            ? this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)[1]
            : null
        );
        const seirekiYear = this.getSeirekiYear(gengo, warekiYear);
        return new Date(seirekiYear, month - 1, day);
      }
      case 10: {
        // 2018/01/01
        // 2018.01.01
        const seirekiYear = Number.parseInt(this.inputValue.substr(0, 4));
        const month = Number.parseInt(
          this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)
            ? this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)[1]
            : null
        );
        const day = Number.parseInt(
          this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)
            ? this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)[1]
            : null
        );
        return new Date(seirekiYear, month - 1, day);
      }
      default:
        break;
    }
    return result;
  }

  private convertFormatTargetToValue(
    date: Date,
    gengo: Gengo,
    formatTarget: string
  ): string {
    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
      case "MM":
        return (date.getMonth() + 1).toString().padStart(2, "0");
      case "M":
        return (date.getMonth() + 1).toString();
      case "dd":
        return date.getDate().toString().padStart(2, "0");
      case "d":
        return date.getDate().toString();
      default:
        return null;
    }
  }

  private convertDateByFormat(
    date: Date,
    gengo: Gengo,
    format: string
  ): string {
    let replacedString = format;

    const yearFormatOfString = this.formatOptions.yearsOfString.find(
      (yearFormatOption) => replacedString.includes(yearFormatOption)
    );
    replacedString = replacedString.replace(
      yearFormatOfString,
      this.convertFormatTargetToValue(date, gengo, yearFormatOfString)
    );
    const yearFormatOfNumber = this.formatOptions.yearsOfNumber.find(
      (yearFormatOption) => replacedString.includes(yearFormatOption)
    );
    replacedString = replacedString.replace(
      yearFormatOfNumber,
      this.convertFormatTargetToValue(date, gengo, yearFormatOfNumber)
    );

    const monthFormatOfString = this.formatOptions.monthsOfString.find(
      (monthFormatOption) => replacedString.includes(monthFormatOption)
    );
    replacedString = replacedString.replace(
      monthFormatOfString,
      this.convertFormatTargetToValue(date, gengo, monthFormatOfString)
    );
    const monthFormatOfNumber = this.formatOptions.monthsOfNumber.find(
      (monthFormatOption) => replacedString.includes(monthFormatOption)
    );
    replacedString = replacedString.replace(
      monthFormatOfNumber,
      this.convertFormatTargetToValue(date, gengo, monthFormatOfNumber)
    );

    const dayFormat = this.formatOptions.days.find((dayFormatOption) =>
      replacedString.includes(dayFormatOption)
    );
    replacedString = replacedString.replace(
      dayFormat,
      this.convertFormatTargetToValue(date, gengo, dayFormat)
    );

    return replacedString;
  }

  private convert(): string {
    let result: string = null;
    switch (this.inputValue.length) {
      // ex. 平成30年1月21日
      case 7: {
        // 4300121(和暦を数値で表すパターン)
        // H300121
        if (!this.hasWarekiLetter()) {
          return this.inputValue;
        }
        const gengo = this.getGengoFromWarekiLetter(
          this.inputValue.substr(0, 1)
        );
        const date = this.getDate(gengo);
        const format = this.settings.format;
        return this.convertDateByFormat(date, gengo, format);
      }
      case 8:
        // 20180121
        if (this.inputValue.match(/\D/)) {
          return this.inputValue;
        }
        const date = this.getDate();
        const format = this.settings.format;
        return this.convertDateByFormat(date, null, format);
      case 9: {
        // H30/01/01
        // H30.01.21
        // 430/01/01
        // 430.01.01
        if (!this.hasWarekiLetter()) {
          return this.inputValue;
        }
        const gengo = this.getGengoFromWarekiLetter(
          this.inputValue.substr(0, 1)
        );
        const date = this.getDate(gengo);
        const format = this.settings.format;
        return this.convertDateByFormat(date, null, format);
      }
      case 10: {
        // 2018/01/01
        // 2018.01.01
        const date = this.getDate();
        let gengo = this.getGengoFromDate(date);
        const format = this.settings.format;
        return this.convertDateByFormat(date, gengo, format);
      }
      default:
        break;
    }

    return result;
  }
}
