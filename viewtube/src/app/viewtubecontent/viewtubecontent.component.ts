import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { from, Observable, of } from 'rxjs';
import { VideoserviceService } from '../videoservice.service';
import * as moment from 'moment';
import "moment-duration-format";

@Component({
  selector: 'app-viewtubecontent',
  templateUrl: './viewtubecontent.component.html',
  styleUrls: ['./viewtubecontent.component.css']
})
export class ViewtubecontentComponent {
  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 1, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 1 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );
  video$: Observable<Array<any>>;
  constructor(private videoService: VideoserviceService,private breakpointObserver: BreakpointObserver) {
    this.video$ = this.videoService.video$.pipe(map(this.addRelativeTime));
    console.log("hiii");
    
  }

  addRelativeTime(videos: any) {
    console.log("helloo");
    
    return videos.map((video: any) => {
      // console.log("How are u");
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.contentDetails.length = moment.duration(video.contentDetails.duration,"minutes").format();
      // console.log("video snippet"+video.snippet.relativeTime);
      // console.log(video.contentDetails.length);
      // console.log(video.snippet.thumbnails.medium.url);
      // console.log(video.contentDetails.lengt);
      // console.log(video.snippet.title);
      // console.log(video.statistics.viewCount);
      // console.log(video.snippet.relativeTime);
      
      return video
      
    });
  }
  
}
