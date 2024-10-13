import { PageContentContainer } from '../components/PageContentContainer/PageContentContainer';
import UpdatePostLanding from '../components/UpdatePosts/routes/UpdatePostLanding';
import { posts } from '../components/UpdatePosts/posts/updateposts';

function LandingPage() {
  console.log(posts);
  return (
    <PageContentContainer>
      <div>
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
        <div className="welcome-message text-white text-center py-6">
          Welcome!
        </div>
        <UpdatePostLanding postData={posts.updatePosts[0]} />
        <UpdatePostLanding postData={posts.updatePosts[0]} />
      </div>
    </PageContentContainer>
  );
}

export default LandingPage;
