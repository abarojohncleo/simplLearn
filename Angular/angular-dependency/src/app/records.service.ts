import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['Adam', 'EID231','Dept1'] 
  info2: string[] = ['John', 'EID256','Dept2'] 
  info3: string[] = ['Adam', 'EID564','Dept3'] 

  getInfo1(): string[]{
    return this.info1
  }
  getInfo2(): string[]{
    return this.info2
  }
  getInfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
