export default class Helpers {
    createImage(imageSrc) {
        const image = new Image()
        image.src = imageSrc

        return image;
    }
}