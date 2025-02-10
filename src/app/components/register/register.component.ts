import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { routes } from '../../app.routes';
import { AlertTriangle } from 'angular-feather/icons';
import { OngService } from '../../services/ong.service';
import { map, reduce } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IconsModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  id: string ="";
  private routes = inject(Router);
  private ongService = inject(OngService);


  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required]}),
    email: new FormControl(''),
    whatsapp: new FormControl(''),
    address: new FormGroup({
      cidade: new FormControl(''),
      estado: new FormControl('')
    }),
  });


  async cadastrar (){
    const name = this.form.controls.name.value;
    const email = this.form.controls.email.value;
    const whatsapp = this.form.controls.whatsapp.value;
    const city = this.form.controls.address.controls.cidade.value;
    const uf = this.form.controls.address.controls.estado.value;


    const data = {
      "name": name,
      "email": email,
      "whatsapp": whatsapp,
      "city": city,
      "uf": uf,
    }
    try {
      const response = await this.ongService.create_ong(data).pipe(
        map(data => data)
      ).subscribe(resData => this.id = resData)

      alert(response)
    } catch (error) {
      alert("Erro ao cadastrar");
    }

  }

}
