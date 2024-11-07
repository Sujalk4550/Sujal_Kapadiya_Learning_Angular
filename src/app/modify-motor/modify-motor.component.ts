import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MotorcycleService} from "../Services/motorcycle.service";
import {Motorcycle} from "../../Shared/models/motorcycle";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-modify-motor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-motor.component.html',
  styleUrl: './modify-motor.component.css'
})
export class ModifyMotorComponent implements OnInit{

  motorcycleForm : FormGroup;
  motorcycle : Motorcycle| undefined;

  constructor(
    private fb: FormBuilder,
    private route :ActivatedRoute,
    private motorcycleService : MotorcycleService,
    private router : Router
  ) {
    this.motorcycleForm = this.fb.group({
      id: ['',Validators.required],
      brand :['',Validators.required],
      name :['',Validators.required],
      colour :['',Validators.required],
      type :['',Validators.required],
      petrol : [false],
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.motorcycleService.getMotorcycleById(+id).subscribe(motorcycle => {
        if (motorcycle) {
          this.motorcycle = motorcycle;

          this.motorcycleForm.patchValue(motorcycle);

        }
      });
    }

  }


  onSubmit():void{
    const motorcycle : Motorcycle = this.motorcycleForm.value;

    if(motorcycle.id){
      this.motorcycleService.updateMotorcycle(motorcycle);
    }else {
      const newId = this.motorcycleService.generateNewId();
      motorcycle.id= newId;
      this.motorcycleService.addMotorcycle(motorcycle);
    }
    this.router.navigate(['/motorcycle']);
  }

  navigateToMotorcycleList(): void{
    this.router.navigate(['/motorcycle']);
  }
}
