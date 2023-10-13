import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DevicesComponent },
  { path: 'edit/:id', component: DeviceEditComponent },
  { path: 'create', component: DeviceEditComponent }

]


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DevicesModule { }
