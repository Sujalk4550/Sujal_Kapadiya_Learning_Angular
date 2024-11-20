import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MotorcycleService} from "../Services/motorcycle.service";
import {Motorcycle} from "../../Shared/models/motorcycle";
import {NgIf} from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";


@Component({
  selector: 'app-modify-motor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-motor.component.html',
  styleUrl: './modify-motor.component.css'
})
export class ModifyMotorComponent implements OnInit {

  motorcycleForm: FormGroup;
  motorcycle: Motorcycle | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private motorcycleService: MotorcycleService,
    private router: Router
  ) {
    this.motorcycleForm = this.fb.group({
      id: [motorcycleService.generateNewId()],
      brand: ['', Validators.required],
      name: ['', Validators.required],
      colour: ['', Validators.required],
      type: ['', Validators.required],
      petrol: [false],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.motorcycleService.getMotorcycleById(id).subscribe({
        next: motorcycle => {
          if (motorcycle) {
            this.motorcycleForm.patchValue(motorcycle);

          }
        },
        error: err => {
          this.error = 'Error fetching motorcycle';
          console.error('Error fetching motorcycle:', err);
        }
      });

    }
  }


  onSubmit(): void {
    if (this.motorcycleForm.valid
    ) {
      const motorcycle: Motorcycle = this.motorcycleForm.value;

      if (motorcycle.id) {
        this.motorcycleService.updateMotorcycle(motorcycle).subscribe(() => this.router.navigate(['/motorcycle']));
      } else {
        motorcycle.id = this.motorcycleService.generateNewId();
        this.motorcycleService.addMotorcycle(motorcycle).subscribe(() => this.router.navigate(['/motorcycle']));
      }
    }
  }


  navigateToMotorcycleList(): void {
    this.router.navigate(['/motorcycle']);
  }

}
