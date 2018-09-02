import { Pipe, PipeTransform } from '@angular/core';
import {GlobalService} from '../service/global.service';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  constructor(private noneShowGlobal: GlobalService) { }
  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      this.noneShowGlobal.noneShow = true;
      return list;
    }
    let result = list.filter(item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
    if (result.length == 0) {
      this.noneShowGlobal.noneShow = false;
    }else{
      this.noneShowGlobal.noneShow = true;
    }

    return result;
  }
}
