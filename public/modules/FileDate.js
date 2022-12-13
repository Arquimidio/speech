export default class FileDate {
    static today = new Date();

    static getDay() {
        return this.today.getUTCDate();
    }

    static getMonth() {
        return this.today.getUTCMonth() + 1;
    }

    static getYear() {
        return this.today.getUTCFullYear();
    }

    static getTodayDate() {
        return `${this.getDay()}-${this.getMonth()}-${this.getYear()}`;
    }
}