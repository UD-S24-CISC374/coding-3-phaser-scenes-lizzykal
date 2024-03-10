import Phaser from "phaser";
import DogScene from "./scenes/DogScenes";
import DogDetailsScene from "./scenes/DogDetailsScene";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export const CONFIG = {
    title: "Dog Picking Game",
    version: "1.0.0",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [DogScene, DogDetailsScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
};
