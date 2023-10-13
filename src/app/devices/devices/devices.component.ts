import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from 'src/app/models/devices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private deviceService: DevicesService, private router: Router) { }
  title!: string;
  devices: Device[] = []
  ngOnInit(): void {
    this.deviceService.getAllDevices().subscribe({
      next: (resp) => {
        console.log(resp);
        this.devices = resp.devices;
      }
    })
  }
  onEdit(_id?: string) {
    this.router.navigate(['/devices', 'edit', _id]);
  }
  onDelete() {
    console.log('Delete successfully');
  }
}
