import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {
 
  infoReceived1: string [] = [];
  infoReceived2: string [] = [];
  infoReceived3: string [] = [];

  getInfoFromService1(){
    this.infoReceived1 = this.dservice.info1
  }

  getInfoFromService2(){
    this.infoReceived2 = this.dservice.info2
  }

  getInfoFromService3(){
    this.infoReceived3 = this.dservice.info3
  }

  constructor(private dservice: DataService) { 

  }

  ngOnInit(): void {
  }

  updateInfoMethod(frm: any){
    this.dservice.addInfo(frm.value.location)
  }

}
