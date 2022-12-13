import Formatter from "./Formater.js";
import Recognizer from "./Recognizer.js";
import Inked from "./Inked.js"

export default class InkedRegister {
    static getInked(data) {
        const inkedArr = Formatter.toCleanArray(data);
        const inkedObj = new Inked(...inkedArr);

        return inkedObj;
    }

    static initInkedEvents() {
        Recognizer.attachEvent('speechend', Recognizer.stop);
    }

    static start() {
        this.initInkedEvents();
        Recognizer.load();
    }

    static async getData() {
        const speechData = await Recognizer.start();
        const inkedData = this.getInked(speechData);

        return inkedData;
    }
    
}