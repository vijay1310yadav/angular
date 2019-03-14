import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors(){
    return ["Author1","Author2","Author3","Author4","Author5","Author6","Author7","Author8"];
  }
}
