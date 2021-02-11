import { Component, OnInit } from '@angular/core';
import { GitHubRepoList } from '../model/gitHub.model';
import { GetGitHubVL } from '../services/github.vl';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  gitRepos: GitHubRepoList;
  constructor() {
    this.gitRepos = new GitHubRepoList();
  }

  ngOnInit() {
    this.getRepoDetails();
  }
  getRepoDetails() {
    const gitHubVL = new GetGitHubVL();
    gitHubVL.getGithubList('Android',10).pipe().subscribe(data => {
      this.gitRepos = data;
    });   
  }

}
