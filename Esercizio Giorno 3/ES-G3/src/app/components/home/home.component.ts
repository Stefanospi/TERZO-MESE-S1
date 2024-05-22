import { IPost } from './../../Models/i-post';
import { IArticole } from './../../Models/i-articole';

import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  apiUrl: string = '../../../assets/db.json';

  postArr: IPost[] = [];

  ngOnInit() {
    this.getPost();
  }

  async getPost(): Promise<void> {
    let response = await fetch(this.apiUrl);
    let posts = <IArticole>await response.json();

    this.postArr = posts.posts;
    //uso <iUser[]> per spiegare a ts che mi aspetto oggetti iUser

    // setTimeout(()=>{
    //   this.artArr = users;
    // }, 5000)
  }
}
