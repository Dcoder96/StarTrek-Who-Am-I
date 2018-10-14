
import { Planet } from './../../planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";

  
  planet:Planet = {
     
    info:
     { 
      "Mercury":"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png" ,
      "Venus":"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
      "Earth":"https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
      "Mars":"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg",
      "Jupiter":"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
      "Saturn":"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
      "Uranus":"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
      "Neptune":"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"
     },
     sat:{

      "Mercury": 0,
      "Venus": 0,
      "Earth": 1,
      "Mars": 2,
      "Jupiter": 79,
      "Saturn": 61,
      "Uranus": 27,
      "Neptune": 14
   }
}
  constructor() { 
   
  }


  ngOnInit() {
  }

}
