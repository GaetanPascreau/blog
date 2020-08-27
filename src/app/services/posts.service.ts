import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

	posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts(){
  	this.postsSubject.next(this.posts);
  }

  savePosts(){
  	firebase.database().ref('/posts').set(this.posts);
    //console.log(this.posts);
  }

  getPosts(){
  	firebase.database().ref('/posts')
  			.on('value', (data) => {
  				this.posts = data.val()? data.val(): [];
  				this.emitPosts();
  			})
  }

  createNewPost(newPost: Post){
  	this.posts.push(newPost);
  	this.savePosts();
    //console.log(newPost);
  	this.emitPosts();
    
  }

  removePost(post: Post){
  	const postIndexToRemove = this.posts.findIndex(
  		(postEl) => {
  			if(postEl === post){
  				return true;
  			}
  		}
  	);
  	this.posts.splice(postIndexToRemove, 1);
  	this.savePosts();
  	this.emitPosts();
  }

  lovePost(post: Post){
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  dontLovePost(post: Post){
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }

}
