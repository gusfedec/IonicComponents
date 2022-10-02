import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      // subHeader: 'Example subheader',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
          handler() {
            console.log('deleted');
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler() {
            console.log('shared');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          data: {
            action: 'share',
          },
          handler() {
            console.log('Playing');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          data: {
            action: 'share',
          },
          handler() {
            console.log('favorite');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
          handler() {
            console.log('cancel');
          },
        },
      ],
    });
    await actionSheet.present();

    // const result = await actionSheet.onDidDismiss();
    // this.result = JSON.stringify(result, null, 2);
  }
}
