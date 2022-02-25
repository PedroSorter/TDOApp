export class Image {
    constructor(imageId: string, imageDescription: string, imagePath: string) {
        this.imageId = imageId;
        this.imageDescription = imageDescription;
        this.imagePath = imagePath;
    }

    public imageId: string;
    public imageDescription: string;
    public imagePath: string;
}
