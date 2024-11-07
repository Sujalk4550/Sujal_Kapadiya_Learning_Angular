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
      name: "Street Glide",
      colour: "Red",
      type: "Touring",
      petrol: true,
      image: "src/assets/Img1-Harley.jpg"
    },
    {
      id: 2,
      brand: "Yamaha",
      name: "YZF-R1",
      colour: "Blue",
      type: "Sportbike",
      petrol: true,
      image: "/assets/Img2-Yamaha.jpg"
    },
    {
      id: 3,
      brand: "BMW",
      name: "R1250 GS",
      colour: "White",
      type: "Adventure",
      petrol: false,
      image: "/assets/Img3-BMW.jpg"
    },
    {
      id: 4,
      brand: "Ducati",
      name: "Scrambler Icon",
      colour: "Yellow",
      type: "Scrambler",
      petrol: true,
      image: "/assets/Img4-Ducati.jpg"
    }];

  return {motorcycle};
  }
}
