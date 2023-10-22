import { Component } from '@angular/core';
import { ProfileService } from '../../_services/profile.service';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [ProfileService],
})
export class HomeComponent {
  public searchs!: any;
  public tags!: any;

  constructor(private _profileservice: ProfileService) {}

  ngOnInit() {
    this.getTags();

    $('.search').click(() => {
      console.log('search');
      if ($('.data').val() == '') {
        alert('ingresa una busqueda');
      } else {
        this.getSearch($('.data').val());
      }
    });
  }

  getTags() {
    this._profileservice.getTags().subscribe(
      (response) => {
        if (response != 'No existen') {
          this.tags = response;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  searchTag(tag: any){
   this.getSearch(tag);
  }

  getSearch(data: any) {
    this._profileservice.getSearch(data).subscribe(
      (response) => {
        if (response != 'No existen') {
          $('.search-text').html('Estos son los resultados de: ' +'"'+ data +'"');
          this.searchs = response;
        }else{
          $('.search-text').html('No has tenido suerte con la palabra: ' +'"'+ data +'"'+ ' intenta con alguna otra');
          $('.search-result').addClass('disp-n');
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }


}
