import Phaser from "phaser";

export default class DogScene extends Phaser.Scene {
    private imageName: string;

    constructor(imageName: string) {
        super({ key: imageName });
        this.imageName = imageName;
    }

    preload() {
        this.load.image("breadDog", `assets/img/breadDog.jpg`);
        this.load.image("heartglasses", "assets/img/heartglasses.jpg");
        this.load.image("threepugs", "assets/img/threepugs.jpg");
        this.load.image("weinerDog", "assets/img/weinderDogs.jpg");
    }

    create() {
        const dogImage = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            this.imageName
        );
        dogImage.setInteractive();

        dogImage.on("pointerup", () => {
            this.scene.start("DogDetails", { name: this.imageName });
        });
    }
}
