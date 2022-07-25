type UpdatePostsData = {
  updatePosts: UpdatePostData[];
};

export type UpdatePostData = {
  id: number;
  author: string;
  postDate: string;
  title: string;
  landingsummary: string;
  body: string;
};

export const posts: UpdatePostsData = {
  updatePosts: [
    {
      id: 1,
      author: 'Ben',
      postDate: '7/25/22',
      title: 'Post #1 Website Launch!',
      landingsummary:
        'The website for Stone Age Online has launched! Keep up to date for announcements on the alpha server release. And read more for more development information.',
      body: ''
    }
  ]
};
