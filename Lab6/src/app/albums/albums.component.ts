import { Component, OnInit } from '@angular/core';
import { RestHttpServiceService } from '../rest-http-service.service';
//import { Album } from '../album' 
export class Album {
  userID: number  ;
  id: number ;
  title: string ;
  constructor(u: number, i: number, t: string){
    this.id = i;
    this.userID = u;
    this.title = t;
  }

}
export interface A{
  userID: number ;
  id: number ;
  title: string ;
}  

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent implements OnInit{
  albums : A[] = [];
  albumsC : Album[] = []
  //ids : number[] = [];
  //userIds: number[] = [];
  //titles: string[] = [];
  

  constructor(private api: RestHttpServiceService){}
  
  ngOnInit() {
    console = console
    this.api.getAlbums().subscribe((data : any[])=>{
      
      //console.log('JSON Response = ', JSON.stringify(data));
      //this.albums =  JSON.stringify(data);
      
      this.albums = JSON.parse(JSON.stringify(data))
      console.log(this.albums)
      console.log(this.albums[1].title)
      for ( let temp of this.albums){
        let a = new Album(temp.userID, temp.id, temp.title);
        this.albumsC.push(a)
        //this.ids.push(temp.id) 
        //this.titles.push(temp.title)
        //this.userIds.push(temp.userID)
      }
      //this.id = (this.albums as any)?.id;
      //this.title = (this.albums as any)?.title;
    });
  }
}
