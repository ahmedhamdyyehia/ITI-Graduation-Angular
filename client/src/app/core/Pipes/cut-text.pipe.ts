import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(val:string): string {
    if(val.length > 40){
      return val.slice(0,40)+'...'
    }
    else{
      return val;
    }
  }

}
