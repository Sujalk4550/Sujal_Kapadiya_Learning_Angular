import {motorcycleList} from "../../Shared/data/mock-motorcycle";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Motorcycle} from "../../Shared/models/motorcycle";
import {Observable} from "rxjs";

export class InMemoryDataService implements InMemoryDbService {
  createDb():{motorcycle: Motorcycle[]} {

   const motorcycle: Motorcycle[] = [
    {
      id: 1,
      brand: "Harley - Davidson",
      date: new Date('2023-03-12'),
      name: "Street Glide",
      colour: "Red",
      type: "Touring",
      petrol: true,
      cost  : 22000,
      image: "src/assets/Img1-Harley.jpg"
    },
    {
      id: 2,
      brand: "Yamaha",
      date : new Date('2022-05-13'),
      name: "YZF-R1",
      colour: "Blue",
      type: "Sportbike",
      petrol: true,
      cost: 20000,
      image: "/assets/Img2-Yamaha.jpg"
    },
    {
      id: 3,
      brand: "BMW",
      date: new Date('2020-09-04'),
      name: "R1250 GS",
      colour: "White",
      type: "Adventure",
      petrol: false,
      cost: 15000,
      image: "/assets/Img3-BMW.jpg"
    },
    {
      id: 4,
      brand: "Ducati",
      date : new Date('2024-08-23'),
      name: "Scrambler Icon",
      colour: "Yellow",
      type: "Scrambler",
      petrol: true,
      cost : 300000,
      image: "/assets/Img4-Ducati.jpg"
    }];

  return {motorcycle};
  }
}
