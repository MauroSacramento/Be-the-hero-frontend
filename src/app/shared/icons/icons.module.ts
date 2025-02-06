import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { allIcons, Camera, Heart, LogIn } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  LogIn
};

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
