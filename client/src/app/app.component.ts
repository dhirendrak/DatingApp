import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'client';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}
