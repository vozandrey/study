import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options:string[];
  isEdit: boolean;


  constructor() { }


  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый>',
      salon: 'Черный',
      wheels: 'Серебристый'
    };
    this.options = ["ABS", "Autopilot", "Autoparking"]
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  addOpt(option){
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }

    }

  }

  carSelect(carName){
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      };
      this.options = ["ABS", "Autopilot", "Autoparking"]
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 325;
      this.model = 'R8';
      this.colors = {
        car: 'Желтый',
        salon: 'Черный',
        wheels: 'Черный'
      };
      this.options = ["ABS", "Autoparking"]
    } else if (carName == 'mer') {
      this.name = 'Mersedes';
      this.speed = 225;
      this.model = 'G63';
      this.colors = {
        car: 'Черный',
        salon: 'Черный',
        wheels: 'Черный'
      };
      this.options = ["ABS"]
    }

  }


}


interface Colors {
  car: string,
  salon: string,
  wheels: string
}
