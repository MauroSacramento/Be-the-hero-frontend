import { OngService } from './../../services/ong.service';
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
  private ongService = inject(OngService);

  ongName: string= "";

  LoginForm = new FormGroup({
    id_: new FormControl('', {validators: [Validators.required]})
  });

  async onSubmit(){
      const data = {
        "id": this.LoginForm.controls.id_
      }
    if(this.LoginForm.invalid){
      return
    }

    try {
      // localStorage.setItem("ongId", this.id);
      // localStorage.setItem("ongName", this.ongName);
      this.route.navigate(['/profile'])
    } catch (error) {
      alert("Erro no login")
    }



  }

}
