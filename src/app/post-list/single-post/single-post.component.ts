import { Component, Input, OnInit } from '@angular/core';
import {Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  
@Input() title: string;
@Input() content: string;
@Input() created_at: Date;
@Input() loveIts: number;
@Input() id: number;
@Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onLoveIt(post: Post){
  	this.postsService.lovePost(post);
  }

  onDontLoveIt(post: Post){
  	this.postsService.dontLovePost(post);
  }

  onDeletePost(post: Post){
    let testSup = confirm("Voulez-vous vraiment supprimer le post \" " + this.title + " \" ?");
      if(testSup){
        this.postsService.removePost(post);
      }
  }

}
