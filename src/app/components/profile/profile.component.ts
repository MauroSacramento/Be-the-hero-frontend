import { Component, inject, OnInit } from '@angular/core';
import { IconsModule } from '../../shared/icons/icons.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OngService } from '../../services/ong.service';
import { Case } from '../../model/ong';
import { tick } from '@angular/core/testing';
import { map } from 'rxjs/internal/operators/map';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [IconsModule, RouterLink, RouterOutlet, CurrencyPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private ongService = inject(OngService);
  caseList: Case[] = [];

  ongName = localStorage.getItem("ongName");
  ongID = localStorage.getItem("ongID");

  constructor(){
    this.ongService.listarCasos(this.ongID).pipe(map(data => data)).subscribe(data => {
      this.caseList = data;
    });
  }

}
