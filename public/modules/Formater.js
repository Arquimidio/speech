export default class Formatter {
    static onlyLettersAndNums(inputString) {
        return inputString.replace(/[\?\.,]/gi, '');
    }

    static cleanInput(inputString) {
        return this.onlyLettersAndNums(inputString)
            .toLowerCase()
    }

    static padNumbers(inputString) {
        return inputString.replace(/[0-9]+/, (nums) => nums.padStart(6, '0'));
    }

    static toArray(inputString) {
        return inputString.split(' ');
    }

    static toCleanArray(inputString) {
        return this.toArray(
            this.cleanInput(
                this.padNumbers(inputString)
            )
        );
    }
}