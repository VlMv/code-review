export const mockCommits = [{
  sha: '1AA',
  commit: {
    author: {
      name: 'John',
      date: '2023-01-15T09:12:34Z'
    },
    message: 'Fix bug 1',
  },
  files: [
    {
      filename: 'src/auth.js',
      status: 'modified',
      patch: 'the commit code 1.1'
    },
    {
      filename: 'src/index.js',
      status: 'added',
      patch: 'the commit code 1.2'
    }
  ]
}, {
  sha: '2BB',
  commit: {
    author: {
      name: 'Nick',
      date: '2023-01-15T10:12:34Z'
    },
    message: 'Fix bug 2',
  },
  files: [
    {
      filename: 'src/vendor.js',
      status: 'modified',
      patch: 'the commit code 2.1'
    },
    {
      filename: 'src/shop.js',
      status: 'added',
      patch: 'the commit code 2.2'
    }
  ]
}];
