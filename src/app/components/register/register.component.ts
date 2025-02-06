import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';

@Component({
  selector: 'app-register',
  imports: [IconsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
