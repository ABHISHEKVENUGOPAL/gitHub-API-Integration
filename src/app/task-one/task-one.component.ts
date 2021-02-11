import { Component, OnInit } from '@angular/core';
import { GitHubRepoList } from '../model/gitHub.model';
import { GetGitHubVL } from '../services/github.vl';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {
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
