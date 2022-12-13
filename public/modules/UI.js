import makeElement from "../helpers/makeElement.js";
import Memory from "./Memory.js";


export default class UI {
    static recordButton = document.querySelector('.record');
    static sendButton = document.querySelector('.send');

    static makeInputTd(value, name) {
        return {
            type: 'td',
            children: [
                {
                    type: 'input',
                    attr: {
                        value,
                        name
                    }
                }
            ]
        }
    }

    static addToTable(data) {
        const marca = prompt('Marca')?.toLowerCase();
        data.marca = marca;

        if(!marca) return false;

        const tr = makeElement({
            type: 'tr',
            parent: document.querySelector('tbody'),
            dataset: {
                identifier: data.id
            },
            children: [
                this.makeInputTd(data.id, 'id'),
                this.makeInputTd(data.tipo, 'tipo'),
                this.makeInputTd(data.corDe, 'corDe'),
                this.makeInputTd(data.corPara, 'corPara'),
                this.makeInputTd(data.marca, 'marca')
            ]
        })

        return tr;
    }

    
}