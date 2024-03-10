import Phaser from "phaser";
import { CONFIG } from "./config";

window.addEventListener("load", () => {
    const game = new Phaser.Game(CONFIG);

    // Add event listener to start DogDetailsScene when a dog image is clicked
    game.scene.getScenes(true).forEach((scene: Phaser.Scene) => {
        if (scene instanceof Phaser.Scene && scene.scene.key !== "DogDetails") {
            scene.input.on(
                "gameobjectup",
                (
                    pointer: Phaser.Input.Pointer,
                    gameObject: Phaser.GameObjects.Image
                ) => {
                    game.scene.start("DogDetails", {
                        name: gameObject.texture.key,
                    });
                }
            );
        }
    });

    console.info("Started main game:", game);
});
