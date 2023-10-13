import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/devices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  API_URL: string = '/api/devices';
  constructor(private http: HttpClient) { }

  getAllDevices(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
  getDevice(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + '/' + id);
  }
  addDevice(device: Device) {
    return this.http.post(this.API_URL, device);
  }
}
