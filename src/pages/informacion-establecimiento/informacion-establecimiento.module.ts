import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacionEstablecimientoPage } from './informacion-establecimiento';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    InformacionEstablecimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacionEstablecimientoPage),
  ],
  providers: [
    GoogleMaps
  ]
})
export class InformacionEstablecimientoPageModule {}
