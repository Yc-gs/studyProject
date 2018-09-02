import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public noneShow: boolean = true;
  constructor() { }
}
