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
  picture?: string;
};

export const posts: UpdatePostsData = {
  updatePosts: [
    {
      id: 2,
      author: 'Ben',
      postDate: '18th October 2024',
      title: 'Ongoing Development and Early Beta Launch',
      landingsummary:
        'Back in development! Open beta on the way, continue to check for announcements.',
      body: 'With off and on development the past 2 years and trying setups for the server the early alpha launch is getting close, check the website for a post when the download is live.',
      picture: 'earlypic2.png'
    },
    {
      id: 1,
      author: 'Ben',
      postDate: '25th July 2022',
      title: 'Website Launch!',
      landingsummary:
        'The first post on StoneAgeOnline.com to mark the start of the project!',
      body: 'Keep up to date for announcements on the alpha server release. And read more for more development information.',
      picture: 'earlyscreenshot.png'
    }
  ]
};
