import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GitHubRepoList } from '../model/gitHub.model';
import { GetGitHubVL } from '../services/github.vl';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {
  gitRepos: GitHubRepoList;
  model: string;
  modelChanged = new Subject<string>();
  constructor() {
    this.gitRepos = new GitHubRepoList();
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
      this.getRepoDetails();
    });
  }

  ngOnInit() {
    this.getRepoDetails(true);
  }

  changed(event) {
    this.modelChanged.next();
  }

  getRepoDetails(init?) {
    if (this.model || init) {
      const gitHubVL = new GetGitHubVL();
      gitHubVL.getGithubList(this.model).pipe().subscribe(data => {
        this.gitRepos = data;
      });
    }
  }

}
