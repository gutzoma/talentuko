import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../_services/profile.service';

declare let $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ],
  providers: [ProfileService]
})

export class PerfilComponent {

  public generales!: any;
  public redes!: any;
  public fotos!: any;
  public plataformas!: any;
  public videos!: any;

  constructor(private _router:ActivatedRoute, private _profileservice: ProfileService) { }

  ngOnInit (){
this._router.params.subscribe(params => {
  this.getGenerales(params['id']);
  this.getRedes(params['id']);
  this.getFotos(params['id']);
  this.getPlataformas(params['id']);
  this.getVideos(params['id']);
});
}

getGenerales(params: any) {
  this._profileservice.getGenerales(params).subscribe(
    response => {
      if(response != 'No existen'){
        this.generales = response[0];
        $('body').addClass(this.generales.tema);
        $('.acerca-de').html(this.generales.acerca_de);
        $('.info').html(this.generales.info);
      }else{
        window.location.href = "/#/home";
      }
    },
    error => {
      console.log(<any>error);
    }
  );
}
getRedes(params: any) {
  this._profileservice.getRedes(params).subscribe(
    response => {
      if(response != 'No existen'){
        this.redes = response;
      }
    },
    error => {
      console.log(<any>error);
    }
  );
}
getFotos(params: any) {
  this._profileservice.getFotos(params).subscribe(
    response => {
      if(response != 'No existen'){
        this.fotos = response;
      }
    },
    error => {
      console.log(<any>error);
    }
  );
}
getPlataformas(params: any) {
  this._profileservice.getPlataformas(params).subscribe(
    response => {
      if(response != 'No existen'){
        this.plataformas = response;
      }else{
        this.plataformas = '';
      }
    },
    error => {
      console.log(<any>error);
    }
  );
}

getVideos(params: any) {
  this._profileservice.getVideos(params).subscribe(
    response => {
      if(response != 'No existen'){
        this.videos = response;
        setTimeout(() => {
          $(".video1").attr("src", "https://www.youtube.com/embed/" + this.videos[0].url);
          $(".video1").addClass('active');
          $(".video2").attr("src", "https://www.youtube.com/embed/" + this.videos[1].url);
          $(".video3").attr("src", "https://www.youtube.com/embed/" + this.videos[2].url);
        }, 1500);
      }
    },
    error => {
      console.log(<any>error);
    }
  );
}
}
