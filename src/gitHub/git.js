import GitHubRepositories from './gitRepositories';

export default class GitHub {
  constructor(user) {
    this.user = user;
    this.repositories = new GitHubRepositories(this.user);
  }
}
