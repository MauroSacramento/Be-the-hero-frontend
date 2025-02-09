import { Component, inject } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [IconsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private route = inject(Router);

  LoginForm = new FormGroup({
    id: new FormControl('', {validators: [Validators.required]})
  });

  onSubmit(){
    if(this.LoginForm.invalid){
      return
    }
    const id = this.LoginForm.controls.id;
    this.route.navigate(['/profile'])
  }

}
