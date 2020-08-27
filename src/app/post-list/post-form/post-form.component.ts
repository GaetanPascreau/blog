import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	postForm: FormGroup;
  dateCreation = new Date;
  dateString = this.dateCreation.toDateString();

  constructor(private formBuilder: FormBuilder, 
  			      private postsService: PostsService, 
  			      private router: Router) { }

  ngOnInit(): void {
  	this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required],
  		created_at: [''],
  		loveIts: [0]
  	});
  }

  onSavePost(){
  	const title: string = this.postForm.get('title').value;
  	const content: string = this.postForm.get('content').value;
  	const created_at: string = this.dateString;
  	const loveIts: number = this.postForm.get('loveIts').value;
  	const newPost: Post = new Post(title, content, created_at, loveIts);
  	this.postsService.createNewPost(newPost);
  	this.router.navigate(['/posts']);
    //console.log(newPost);
  }

}
