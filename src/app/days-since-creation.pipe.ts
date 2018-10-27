import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSinceCreation'
})
export class DaysSinceCreationPipe implements PipeTransform {

  transform(memberSince): number {
    let today: Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(memberSince-todayWithNoTime);
    const secondsInADay = 86400;

    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter=dateDifferenceSeconds/secondsInADay;

    if(dateCounter>=1 && memberSince> todayWithNoTime){
      return dateCounter
    }else{
      console.log(`What's going on here, this guy a hacker`)
    }
  }

}
// export class DateCountPipe implements PipeTransform {

//   transform(value: any): number {
//     let today: Date = new Date(); //get current date and time
//     let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
//     var dateDifference = Math.abs(value - todayWithNoTime)// returns value in milliseconds
//     const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

//     var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

//     var dateCounter = dateDifferenceSeconds / secondsInADay;

//     if (dateCounter >= 1 && value > todayWithNoTime) {
//       return dateCounter;
//     } else {
//       return 0;
//     }
//   }
// }