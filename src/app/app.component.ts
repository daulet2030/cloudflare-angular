import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cloudflare-angular';
  constructor(private http: HttpClient) {}

  onApiRequest() {
    this.http
      .get('https://google.com')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
