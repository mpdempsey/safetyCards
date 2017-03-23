import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular'
import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PopoverController } from 'ionic-angular'
import { MenuPopoverPage } from '../../pages/menu-popover/menu-popover';
import {FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
purchaseForm;
  items: FirebaseListObservable<any[]>;

  constructor(public _navCtrl: NavController, private _angularFire: AngularFire, private _formBuilder: FormBuilder, private _auth: AuthService, private _popoverCtrl: PopoverController) {
  }


ngOnInit() {
   
    this.purchaseForm = this._formBuilder.group({
      purchaseItem: ['', [Validators.required]],
      purchaseCost: ['', [Validators.required]]
    })
  }
  presentMenuPopover(myEvent) {
    let popover = this._popoverCtrl.create(MenuPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}