import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DevicesService } from '../devices.service';
import { Device } from 'src/app/models/devices';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private deviceService: DevicesService) { }
  device!: Device;
  deviceForm!: FormGroup;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      this.deviceService.getDevice(String(res.get('id'))).subscribe(resp => {
        console.log(resp);
        this.device = resp.device;
        this.deviceForm = this.buildForm(this.device);
      })
    });
  }

  buildForm(device: Device): FormGroup {
    return new FormGroup({
      _id: new FormControl(device._id, Validators.required),
      name: new FormControl(device.name, Validators.required),
      type: new FormControl(device.type, Validators.required)
    });
  }
  onSubmit() {

  }
}
