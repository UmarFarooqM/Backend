import { PlayState } from "./States";
import { MediaPlayer } from "./types";



let player = new MediaPlayer(new PlayState())
player.play()
player.stop()
player.pause()
player.play()
player.pause()
player.play()