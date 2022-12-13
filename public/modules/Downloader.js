export default class Downloader {

    static downloadBlob(blob, filename, extension) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${filename}.${extension}`;
        link.click();
        link.remove();
    }

}
