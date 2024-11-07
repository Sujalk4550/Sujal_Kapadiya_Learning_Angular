import {Component, OnInit} from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {MotorcycleListItemComponent} from "../motorcycle-list-item/motorcycle-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MotorcycleService} from "../Services/motorcycle.service";
import {motorcycleList} from "../../Shared/data/mock-motorcycle";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-motorcycle-list',
  standalone: true,
  imports: [
    MotorcycleListItemComponent,
    RouterLink,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './motorcycle-list.component.html',
  styleUrl: './motorcycle-list.component.css'
})
export class MotorcycleListComponent implements OnInit{
 motorcycleList: Motorcycle[]=[];
 error : string | null = null;


  constructor(private motorcycleService: MotorcycleService,
              private router: Router) {
  }

  ngOnInit(){
   this.motorcycleService.getMyMotorcycle().subscribe({
     next:(data: Motorcycle[]) => {
       this.motorcycleList = data;
       this.error =null;
   },
     error: err => {
       this.error = 'Error fetching motorcycle';
       console.error("Error fetching Motorcycle",err);
     },
     complete: () => console.log("Motorycle data fetch complete!")
  });
  }

  delete(id: Number):void {
    this.motorcycleList = this.motorcycleList.filter(motorcycle => motorcycle.id!==id);
  }

  update(): void{
    this.router.navigate(['/modify-motorcycle']);
  }

}
