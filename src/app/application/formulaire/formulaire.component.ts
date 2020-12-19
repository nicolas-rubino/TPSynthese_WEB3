import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { Cv } from '../../model/cv';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {



  cv: Cv;

  messageValidation: String = "";

  cvForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    naissance: new FormControl('', [Validators.required, Validators.min(1920), Validators.max(2020)]),
    diplome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    permisConduire: new FormControl(false)
  })

  constructor(private service: CvService,private router: Router) { }

  listCv: Array<Cv>;

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.listCv = data;
      this.findId();
      console.log(this.listCv)
    });
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

  findId() {
    let compteur = 0;
    if (this.listCv) {
      this.listCv.forEach(element => {
        compteur++;
        if (element.id != compteur) {
          this.cv.id = compteur;
          console.log("value compteur" + compteur);
          return;
        }
      });
      this.cv.id = compteur;
      console.log("value compteur" + compteur);
    }
  }

  onSubmit(): void {
    if(this.cvForm.valid){
      this.service.post(this.cvForm.value).subscribe(data =>{
        this.cvForm.reset();
        this.router.navigateByUrl('/crud');
      })
    }
    else{
      window.confirm("ERROR \n"+"please fill the form correctly")
    } 
  }


}
