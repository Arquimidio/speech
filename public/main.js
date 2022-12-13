import InkedRegister from "./modules/InkedRegister.js"
import Memory from "./modules/Memory.js";
import UI from "./modules/UI.js";
import Downloader from "./modules/Downloader.js";
import FileDate from "./modules/FileDate.js";
import Recognizer from "./modules/Recognizer.js";

function editMemoryData(event) {
    const { target } = event;
    const identifiedParent = target.closest('tr');

    Memory.edit.call(
        Memory,
        identifiedParent.dataset.identifier,
        target.name,
        target.value
    )
}
        
InkedRegister.start();

Recognizer.attachEvent('audiostart', () => {
    UI.recordButton.classList.add('recording');
})

Recognizer.attachEvent('audioend', () => {
    UI.recordButton.classList.remove('recording')
})

UI.recordButton.addEventListener('click', async () => {
    const data = await InkedRegister.getData();
    const trElement = UI.addToTable(data);
    if(trElement) {
        Memory.store(data)
        const trInputs = [...trElement.querySelectorAll('input')];
        trInputs.forEach(input => {
            input.addEventListener('input', editMemoryData)
        })
    }
})

UI.sendButton.addEventListener('click', async () => {
    const dataToSend = Memory.toSendable(Memory.getData());

    const receivedData = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dataToSend
    })


    const blob = await receivedData.blob();
    Downloader.downloadBlob(blob, FileDate.getTodayDate(), 'csv');
})
