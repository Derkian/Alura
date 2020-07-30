import { Injectable } from '@angular/core';
import { MatSnackBar  } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  duration : number = 2000;

  constructor(private snackBar : MatSnackBar) { }

  showSucess(messages, className : string = 'notification-sucess') : void {

      if (messages instanceof Array) {

        messages.forEach( (message, index) => {

          debugger;

          setTimeout(() => {
            
              this.snackBar.open(message, 'Fechar', {
                  duration: this.duration,
                  verticalPosition: 'bottom', 
                  horizontalPosition: 'end', 
                  panelClass: [className],
              });
              

          }, index * (this.duration+500)); // 500 - timeout between two messages

      });
        
      } else {

        this.snackBar.open(messages, 'Fechar', {
          duration : 2000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          panelClass : [className]
        });

      }
  }

  showError(messages, className : string = 'notification-error') : void {

      if (messages instanceof Array) {
        
        messages.forEach( (message, index) => {
          
          setTimeout(() => {
            
            this.snackBar.open(message, 'Fechar', {
              duration : this.duration,
              horizontalPosition: 'start',
              verticalPosition: 'bottom',
              panelClass : [className]
            });            

          }, index * (this.duration+500)); // 500 - timeout between two messages

        });

      } else {

        this.snackBar.open(messages, 'Fechar', {
          duration : 2000,
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
          panelClass : [className]
        });
        
      }
  }

}
