import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VideoYoutube } from 'src/app/model/video';
import { YoutubePipe } from './youtube.pipe';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  videos: Array<VideoYoutube>;
  videosList: Array<VideoYoutube>;
  videoSelected: VideoYoutube
  yearSelected:number;
  year:string;

  constructor(private service:YoutubeService) { 
    this.yearSelected = 1;
  }

  ngOnInit(): void {
    this.getVideos(this.yearSelected);
  }

  public getVideos(year:number):void{
    this.videos = this.service.getVideos(year);
  }

  public select(video:VideoYoutube){
    this.videoSelected = video;
  }

  public onChange($event:any){
    this.yearSelected = $event.target.value;
    this.videos = this.service.getVideos(this.yearSelected);
  }


}
