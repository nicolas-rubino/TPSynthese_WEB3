import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/model/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  id:number;
  cv:Cv;

  cvForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    naissance: new FormControl('', [Validators.required, Validators.min(1920), Validators.max(2020)]),
    diplome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    permisConduire: new FormControl(false)
  })

  constructor(private service: CvService, private router: Router, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.cv = data;
    })
  }

  submitUpdate(): void {
    if (this.cvForm.valid) {
      this.service.put(this.id,this.cvForm.value).subscribe(data => {
        this.router.navigateByUrl('/crud');
      },(err)=>{
        console.log(err);
      })
    }
  }
  get fullName():any{
    return this.cvForm.get('fullName');
  }
  get naissance():any{
    return this.cvForm.get('naissance');
  }
  get email():any{
    return this.cvForm.get('email');
  }
}
