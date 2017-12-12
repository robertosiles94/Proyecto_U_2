import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarPage } from './buscar';
import { ServicioBuscarProvider } from '../../providers/servicio-buscar/servicio-buscar';

@NgModule({
  declarations: [
    BuscarPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarPage),
  ],
  providers: [
    ServicioBuscarProvider
  ]
})
export class BuscarPageModule {}
