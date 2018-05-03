import { Component} from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})

export class DocsComponent {
  constructor(location: Location) {
    this.location = location;
  }
  location: Location;
  pagePath = '';
  title = '';
  routeLink = '';

  changeComponent(link:string): void {
    this.routeLink = link;
    this.location.replaceState(link);
  }
}