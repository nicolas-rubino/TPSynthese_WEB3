import { Injectable } from '@angular/core';
import { VideoYoutube } from 'src/app/model/video';
import { PLAYLIST } from './customPlaylist';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  videos : Array<VideoYoutube>
  constructor() { }


  getVideos(year:number):Array<VideoYoutube>{
    this.videos = PLAYLIST[year - 1].items;
    return this.videos; 
   }

}
