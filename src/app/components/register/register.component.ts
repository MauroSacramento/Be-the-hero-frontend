import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IconsModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required]}),
    email: new FormControl(''),
    whatsapp: new FormControl(''),
    address: new FormGroup({
      cidade: new FormControl(''),
      estado: new FormControl('')
    }),
  });


  cadastrar (formData: NgForm){
    const name = this.form.controls.name.value;
    const email = this.form.controls.email.value;
    const whatsapp = this.form.controls.whatsapp.value;
    const cidade = this.form.controls.address.controls.cidade.value;
    const state = this.form.controls.address.controls.estado.value;

    const data = {
      name,
      email,
      whatsapp,
      cidade,
      state
    }
  }

}
