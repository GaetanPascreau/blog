import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	posts: Post[];
	postSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
  	this.postSubscription = this.postsService.postsSubject.subscribe(
  		(posts: Post[]) => {
  			this.posts = posts;
  		}
  	);
  	this.postsService.getPosts();
  	this.postsService.emitPosts();
  }

  onNewPost(){
  	this.router.navigate(['/posts', 'new']);
  }

  onViewPost(id: number){
  	this.router.navigate(['/posts', 'view', id]);
  }
  
  ngOnDestroy(){
  	this.postSubscription.unsubscribe();
  }

}


