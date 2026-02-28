import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrekinderComponent } from './pages/prekinder/prekinder.component';
import { MetodologiaComponent } from './pages/metodologia/metodologia.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { AdmisionComponent } from './pages/admision/admision.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ExtranetComponent } from './pages/extranet/extranet.component';
import { ReservaVisitaPageComponent } from './pages/reserva-visita-page/reserva-visita-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prekinder', component: PrekinderComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'admision', component: AdmisionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'extranet', component: ExtranetComponent },
  { path: 'reserva-visita', component: ReservaVisitaPageComponent },
  { path: '**', redirectTo: '' }
];
