import { Injectable } from '@angular/core';
import { MatSnackBar  } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar : MatSnackBar) {

  }

  showSucess(message : string, 
            className : string = 'notification-sucess') : void {
    this.snackBar.open(message, 'Fechar', {
      duration : 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass : [className]
    });
  }

  showError(message : string, 
            className : string = 'notification-error') : void {
    
    this.snackBar.open(message, 'Fechar', {
                                            duration : 2000,
                                            horizontalPosition: 'start',
                                            verticalPosition: 'bottom',
                                            panelClass : [className]
                                          });
  }

}
