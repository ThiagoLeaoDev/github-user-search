export interface ICommit {
  commit: {
    author: {
      date: string;
      email: string;
      name: string;
    };
  comment_count: number;
  message: string;
  }
  sha: string;
  url: string;
}