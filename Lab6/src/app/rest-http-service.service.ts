import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestHttpServiceService {
  configURL = "assets/config.json"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

/*  getConfig(){
    return this.http.get<Config>(this.configURL)
  }
*/
  getAlbums(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  } 
  getAlbumById(id: number) :Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums/" + id)
  }
  postBlog(album: any) {
    let url = "https://sonplaceholder.typicode.com/albums";
    return this.http.post(url, album, this.httpOptions);
  }
  saveAlbum(album: any){
    
  }
  deleteById(id: number) :Observable<any> {
    return this.http.delete("https://jsonplaceholder.typicode.com/albums/" + id)
  }
}
