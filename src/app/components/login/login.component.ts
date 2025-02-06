import { Component, inject } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [IconsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private route = inject(Router);

}
