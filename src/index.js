import Git from './git/git';
import GitHub from './git/github/github';
import GitHubCredentials from './git/github/credentials/githubCredentials';
import fetchRepositories from './git/github/repositories/fetchRepositories';
import fetchCommitsForTimePeriod from './git/github/commits/fetchCommits';


const credentials = new GitHubCredentials('vaska', '123123');
const gitHub = new GitHub(
  [
    fetchRepositories,
    fetchCommitsForTimePeriod
  ]
);
const git = new Git(credentials, gitHub);

console.log(git.gitService.fetchRepositories(git.credentials.user, git.credentials.token));
