
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WaysToBankComponent } from './components/ways-to-bank/ways-to-bank.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ways-to-bank', component: WaysToBankComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
