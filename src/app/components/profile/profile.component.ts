import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [IconsModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
