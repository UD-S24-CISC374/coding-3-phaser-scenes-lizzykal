import Phaser from "phaser";

export default class DogDetailsScene extends Phaser.Scene {
    constructor() {
        super({ key: "DogDetails" });
    }

    create(data: { name: string; fact: string }) {
        const { name, fact } = data;
        this.add.text(100, 150, `Dog's Name: ${name}`, {
            fontSize: "24px",
            color: "#000",
        });
        const backButton = this.add
            .image(200, 400, "arrow")
            .setOrigin(0)
            .setInteractive(); // Using 'arrow' image asset
        backButton.on("pointerup", () => {
            this.scene.start("DogScene");
        });
        this.add.text(100, 100, `You picked: ${name}`, {
            fontSize: "32px",
            color: "#000",
        });
        this.add.text(100, 150, `Dog's Name: ${name}`, {
            fontSize: "24px",
            color: "#000",
        });
        this.add.text(100, 200, `Fun Fact: ${fact}`, {
            fontSize: "24px",
            color: "#000",
        });
    }
}
