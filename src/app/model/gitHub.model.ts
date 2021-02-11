export class GitHubRepoDetails {
    repoName?: String;
    repoOwnerLogin?: String;
    repoDescription?: String;
    repoAvatarURL?: String;
}

export class GitHubRepoList {
    list?: Array<GitHubRepoDetails>;
    constructor() {
        this.list = [];
    }
}