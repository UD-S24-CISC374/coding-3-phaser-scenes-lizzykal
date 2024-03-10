import Phaser from "phaser";

export default class DogDetailsScene extends Phaser.Scene {
    constructor() {
        super({ key: "DogDetails" });
    }

    create(data: { name: string }) {
        const { name } = data;
        this.add.text(100, 100, `You picked: ${name}`, {
            fontSize: "32px",
            color: "#000",
        });
        this.add.text(100, 150, `Dog's Name: ${name}`, {
            fontSize: "24px",
            color: "#000",
        });
    }
}
