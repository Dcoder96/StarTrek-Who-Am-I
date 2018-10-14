import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


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
   },
   data: {

    name: ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
    image: [
            "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
            "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
            "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
            "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg",
            "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
            "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
            "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
            "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"
    ],
    enigme: {

            "Jupiter": [`Je suis deux fois plus massive que toutes les planetes
                        Je suis une géante gazeuse
                        J'ai un gros point rouge à ma surface
            
            `],
            
    }

    },

  }
  

  planetName:string;
  planetImage:string;
  planetEnigme:string;
  
    
  constructor() {
    this.planetName = this.planet.data.name;
    this.planetImage = this.planet.data.image;
    this.planetEnigme = this.planet.data.enigme;

    console.log(this.planetName);
    console.log(this.planetImage);
    console.log(this.planetEnigme["Jupiter"]);
   }


  ngOnInit() {
  }

}
