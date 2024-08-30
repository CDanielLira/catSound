import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'catSound';
  private audio: HTMLAudioElement | undefined;
  public audioStarted : boolean = false

  constructor() {
    
  }

  ngOnInit(): void {
    this.playSound();
  }

  playSound(): void {
    if (!this.audio) {
      this.audio = new Audio('assets/catSound.mp3');
      this.audio.addEventListener('ended', () => {
        this.audioStarted = false;
      });
    }
    this.audio.play();
    this.audioStarted = true;
  }
}
