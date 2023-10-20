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
  public search!: any;

  constructor(private _profileservice: ProfileService) {}

  ngOnInit() {
    $('.search').click(() => {
      console.log('search');
      if ($('.data').val() == '') {
        alert('ingresa una busqueda');
      } else {
        console.log($('.data').val());
      }
    });
  }
}
