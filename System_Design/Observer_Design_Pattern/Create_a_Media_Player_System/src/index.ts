// Problem Statement:

// You're building a MediaPlayer class that plays different types of media files.

// Create an interface MediaFile with method play()
// Implement AudioFile, VideoFile, and PDFFile
// Create a MediaPlayer class that accepts any MediaFile and calls its play() method


interface MediaFile{
    play():void;
}
class AudioFile implements MediaFile{
    play(): void {
        console.log("Playing audio file...");
    }
}


class VideoFile implements MediaFile{
    play(): void {
        console.log("Playing video file...");
    }
}

class PDFFile implements MediaFile{
    play(): void {
        console.log("Displaying PDF document...");
    }
}
class MediaPlayer{
    fileType : MediaFile 
    constructor(fileType:MediaFile){
        this.fileType = fileType
        this.fileType.play()
    }
}
let audioFile = new AudioFile()
let vedioFile = new VideoFile()
let pdfFile = new PDFFile()

const mediaPlayer = new MediaPlayer(audioFile)
new MediaPlayer(vedioFile)
new MediaPlayer(pdfFile)

