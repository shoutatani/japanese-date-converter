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
    constructor({ inputValue, settings }: JapaneseDateConverterInterface);
    execute(): string;
    private validate;
    private checkInvalidWarekiYear;
    private getGengoFromWarekiLetter;
    private hasWarekiLetter;
    private getGengoFromDate;
    private getSeirekiYear;
    private getWarekiYear;
    private getDate;
    private convertFormatTargetToValue;
    private convertDateByFormat;
    private convert;
}
export {};
