import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { Cv } from '../../model/cv';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  
  listCv: Array<Cv>;

  constructor(private service :CvService) {}

  ngOnInit(): void {
    this.getAllCv();
  }

  getAllCv(): void{
    this.service.getAll().subscribe(data => { this.listCv = data ;
    console.log(this.listCv)})
  }
  
  deleteCv(id:number):void{
    if(window.confirm("ARE YOU SURE ABOUT THAT ?")){
      this.service.deleteById(id).subscribe(resultat => {
        this.listCv= this.listCv.filter(element => element.id !== id)
      })
    }
  }
  

}
