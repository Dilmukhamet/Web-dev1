import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { A, Album, AlbumsComponent } from '../albums/albums.component'
import { RestHttpServiceService } from '../rest-http-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  albumDetail : A | undefined;
  constructor(private route: ActivatedRoute, private api: RestHttpServiceService, private albums: AlbumsComponent){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('albumId'));
    //this.album = this.albums.getAlbumById(productIdFromRoute)
    this.albumDetail = this.albums.getAlbumById(productIdFromRoute)
    /*this.api.getAlbumById(productIdFromRoute).subscribe((data : any)=>{
      
      this.albumDetail = JSON.parse(JSON.stringify(data))
      console.log(this.albumDetail)

    });*/
  } 
}


