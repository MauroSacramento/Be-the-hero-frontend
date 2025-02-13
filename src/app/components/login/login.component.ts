import { OngService } from './../../services/ong.service';
import { Component, inject } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';

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
    const id_ = this.LoginForm.controls.id_.value;

    const dados = {
      "id": id_,
    }

    if(this.LoginForm.invalid){
      return
    }

    try {
      await this.ongService.login(dados).pipe(map((res: string) => res)).subscribe(resData => {
        this.ongName = resData;
        this.route.navigate(['/profile'])
      });

    } catch (error) {
      alert("Erro no login")
    }

  }

}
