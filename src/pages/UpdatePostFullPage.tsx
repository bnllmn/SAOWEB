import { Link, useParams } from 'react-router-dom';
import { PageContentContainer } from '../components/PageContentContainer/PageContentContainer';
import { UpdatePostLandingSummary } from '../components/UpdatePosts/components/UpdatePostFull/UpdatePostLandingSummary';
import { UpdatePostTitle } from '../components/UpdatePosts/components/UpdatePostFull/UpdatePostTitleSample';
import {
  posts,
  UpdatePostData
} from '../components/UpdatePosts/posts/updateposts';

function UpdatePostFullPage() {
  const params = useParams();
  console.log(params);
  if (params.id) {
    const id = parseInt(params.id);
    const post: UpdatePostData | undefined = posts.updatePosts.find(
      (obj) => obj.id === id
    );
    if (post)
      return (
        <PageContentContainer>
          <div className="updatepost-container bg-gray-500 pt-6 pl-4 pr-10 pb-6 w-4/5 space-x-4 mx-auto flex">
            <button
              className="pict w-1/4 bg-no-repeat bg-contain hover:opacity-90"
              style={{
                backgroundImage: 'url(/skillsico.png)'
              }}
            ></button>
            <div className="post w-3/4">
              <div className="text-container">
                <UpdatePostTitle postData={post} />
                <UpdatePostLandingSummary postData={post} />
              </div>
              <div className="pt-4">
                <Link to={''}>Read Full Post</Link>
              </div>
            </div>
          </div>
        </PageContentContainer>
      );
  }
  return (
    <PageContentContainer>
      <div>Post Not Found.</div>
    </PageContentContainer>
  );
}

export default UpdatePostFullPage;
