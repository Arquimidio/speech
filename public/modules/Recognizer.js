export default class Recognizer {
    static SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    static recognition = new this.SpeechRecognition();

    static load() {
        this.recognition.continuous = false;
        this.recognition.lang = 'pt-BR';
        this.recognition.interimResults = false;
    }

    static getResult(event) {
        const result = event.results[0][0].transcript;
        return result;
    }

    static start() {
        this.recognition.start()

        return new Promise((resolve, reject) => {
            this.recognition.onresult = (event) => {
                resolve(this.getResult.call(this, event));
            }
        })
    }

    static stop() {
        this.recognition.stop();
    }

    static attachEvent(event, cb) {
        this.recognition.addEventListener(event, cb.bind(this));
    }
        
}