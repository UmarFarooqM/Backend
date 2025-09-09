"use strict";
// Problem Statement:
class AudioFile {
    play() {
        console.log("Playing audio file...");
    }
}
class VideoFile {
    play() {
        console.log("Playing video file...");
    }
}
class PDFFile {
    play() {
        console.log("Displaying PDF document...");
    }
}
class MediaPlayer {
    constructor(fileType) {
        this.fileType = fileType;
        this.fileType.play();
    }
}
let audioFile = new AudioFile();
let vedioFile = new VideoFile();
let pdfFile = new PDFFile();
const mediaPlayer = new MediaPlayer(audioFile);
new MediaPlayer(vedioFile);
new MediaPlayer(pdfFile);
