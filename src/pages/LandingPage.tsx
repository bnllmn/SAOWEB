import { PageContentContainer } from '../components/PageContentContainer/PageContentContainer';
import UpdatePostLanding from '../components/UpdatePosts/routes/UpdatePostLanding';
import { posts } from '../components/UpdatePosts/posts/updateposts';

function LandingPage() {
  console.log(posts);
  return (
    <PageContentContainer>
      <div
        className="test flex ml-auto mr-auto"
        style={{
          backgroundImage: 'url(/saologo_v1.png)',
          height: '200px', // Specify height
          width: '200px', // Specify width
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="welcome-message text-white text-center flex-col">
        Welcome!
      </div>
      <UpdatePostLanding postData={posts.updatePosts[0]} />
      <UpdatePostLanding postData={posts.updatePosts[1]} />
    </PageContentContainer>
  );
}

export default LandingPage;
