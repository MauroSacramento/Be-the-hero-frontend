import { Component, inject } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-case',
  imports: [IconsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './new-case.component.html',
  styleUrl: './new-case.component.css'
})
export class NewCaseComponent {
  private routes = inject(Router);

    caseForm = new FormGroup({
      title: new FormControl('', {validators: [Validators.required]}),
      description: new FormControl('', {validators: [Validators.required]}),
      valor: new FormControl('', {validators: [Validators.required]})
    });

    onSubmit(){
      if(this.caseForm.valid){
        this.routes.navigate(["/profile"]);
      }
      alert(this.caseForm.invalid);

    }

    cancel(){
      this.routes.navigate(["/profile"]);
    }
}
