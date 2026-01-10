import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('rpg-manager');

  constructor(private authService: AuthService) {}

  ngOnInit() {
  if (this.authService.getToken()) {
    this.authService.loadCurrentUser().subscribe({
      error: () => this.authService.logout(),
    });
  }
}
}
