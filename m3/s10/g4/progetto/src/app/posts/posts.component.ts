import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
posts: Post[]= [];

constructor (private postsService: PostsService) { }

ngOnInit(): void {
  this.postsService.getPosts().subscribe(posts => this.posts=posts);
}

}
