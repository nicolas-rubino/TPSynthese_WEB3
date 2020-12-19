import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cv } from 'src/app/model/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  id:number;
  cv:Cv;
  
  constructor(private service: CvService, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.cv = data;
    })
  }
}
