import Phaser from "phaser";

export default class DogScene extends Phaser.Scene {
    constructor() {
        super({ key: "DogScene" });
    }

    preload() {
        // Load all images
        this.load.image("breadDog", `assets/img/breadDog.jpg`);
        this.load.image("heartglasses", "assets/img/heartglasses.jpg");
        this.load.image("threepugs", "assets/img/threepugs.jpg");
        this.load.image("weinerDog", "assets/img/weinerDog.jpg");
        this.load.image("arrow", "assets/img/arrow.png");
    }

    create() {
        // Create images for all dogs
        const weinerDog = this.add
            .image(150, 150, "weinerDog")
            .setInteractive();
        const breadDog = this.add.image(150, 400, "breadDog").setInteractive();
        const heartGlasses = this.add
            .image(500, 150, "heartglasses")
            .setInteractive();
        const threePugs = this.add
            .image(500, 400, "threepugs")
            .setInteractive();

        // Set pointerup event for each image
        weinerDog.on("pointerup", () => {
            this.scene.start("DogDetails", {
                name: "Hotdog",
                fact: "Looks like Dobby",
            });
        });
        breadDog.on("pointerup", () => {
            this.scene.start("DogDetails", {
                name: "Henry",
                fact: "Emergency bread holder",
            });
        });
        heartGlasses.on("pointerup", () => {
            this.scene.start("DogDetails", {
                name: "Valentino",
                fact: "Favorite Holiday is Valentines day",
            });
        });
        threePugs.on("pointerup", () => {
            this.scene.start("DogDetails", {
                name: "Pugalicious",
                fact: "Thrice the fun!",
            });
        });
    }
}
