import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string [] = ['John Cleo' , 'ES34', 'java']
  info2: string [] = ['JC' , 'ES344', 'python']
  info3: string [] = ['JCDA' , 'ES4564', 'javascript']

  getInfo1(): string[] {
    return this.info1
  };

  getInfo2(): string[] {
    return this.info2
  };

  getInfo3(): string[] {
    return this.info3
  };

  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
