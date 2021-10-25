import { Component, OnInit } from '@angular/core';
import { Post } from '../post'; 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allPosts: Post[] = [
    {title: 'Grand Circus', thought: 'Grand Circus is cool'},
    {title: 'Angular', thought: 'I miss C#'},
    {title: 're: Angular', thought: 'Angular is pretty neat though'}
  ]

  posttitle: string = '';
  postthoughts: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.allPosts.push({title: this.posttitle, thought: this.postthoughts})
  }

}
