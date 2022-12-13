export default class Memory {
    static data = [];

    static setData(data) {
        this.data = data;
    }

    static getData() {
        return this.data;
    }

    static edit(id, prop, value) {
        const item = this.getData()
            .find(element => element.id === id)
        
        if(item) {
            item[prop] = value;
        }
    }

    static store(newData) {
        this.data.push(newData);
    }

    static toSendable(data) {
        return JSON.stringify(data);
    }
}