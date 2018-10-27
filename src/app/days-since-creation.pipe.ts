import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSinceCreation'
})
export class DaysSinceCreationPipe implements PipeTransform {

  transform(created_at){
    let dateAccountCreated = new Date(created_at);
    let secondsPast = dateAccountCreated.getTime()/1000;
    let daysPast = secondsPast/86400;
    let currentDate= new Date ();
    let secondsPastCD= currentDate.getTime()/1000;
    let daysPastCD = secondsPastCD/86400
    let daysPastSince:any= daysPastCD-daysPast
    return parseInt(daysPastSince)
  }
}


// transform(created_at){
//   let dateConvert = new Date(created_at);
//   let year = dateConvert.getFullYear();
//   let month: any = dateConvert.getMonth() + 1;
//   let dt: any = dateConvert.getDate();
//   if (dt < 10) {
//     dt = '0' + dt.toString()
//   }
//   if (month < 10) {
//     month = '0' + month
//   }
//   var useableDate = year + '-' + month + '-' + dt
//   console.log(`I am pipe and I say ` + useableDate)
//   return useableDate
// }