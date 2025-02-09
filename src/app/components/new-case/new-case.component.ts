import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-case',
  imports: [IconsModule, RouterLink],
  templateUrl: './new-case.component.html',
  styleUrl: './new-case.component.css'
})
export class NewCaseComponent {

}
