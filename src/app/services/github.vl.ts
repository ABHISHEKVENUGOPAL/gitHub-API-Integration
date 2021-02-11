import { map } from 'rxjs/operators';
import { GitHubRepoDetails, GitHubRepoList } from '../model/gitHub.model';
import { Communication } from '../communication/communication';
export class GetGitHubVL {
    constructor() {

    }
    getGithubList(search?, limit?) {
        let param = { search: search, limit: limit }
        return Communication.getInstance().call(param).pipe(map((response) => {
            return this.mapGitHubResponse(response);
        }));
    }

    mapGitHubResponse(response) {
        let repoList = new GitHubRepoList();
        response.items.forEach(element => {
            let repoItem = new GitHubRepoDetails();
            repoItem.repoName = element.name;
            repoItem.repoAvatarURL = element.owner.avatar_url;
            repoItem.repoDescription = element.description;
            repoItem.repoOwnerLogin = element.owner.login;
            repoList.list.push(repoItem);
        });
        return repoList;
    }

}