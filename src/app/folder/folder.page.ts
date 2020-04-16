import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public nombre;
  public username;
  public email;
  public myDate;
  public apellido;



  constructor(
    private activatedRoute: ActivatedRoute,
    public alertctrl:AlertController,
    private storage:Storage
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  agregar_usuario(){
    console.log(this.nombre+" "+this.apellido+" " +this.email+" "+this.myDate+" ");
    this.storage.set('nombre',this.nombre).then(
      ()=>{
        this.storage.set('email',this.email).then(
          ()=>{
            this.storage.set('password',this.myDate).finally(
              ()=>{
                console.log("Guardado realizado");
              }
            );
          }
        );
      }
    );

    
  }


}
