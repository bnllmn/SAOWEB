import { Link, useParams } from 'react-router-dom';
import { PageContentContainer } from '../components/PageContentContainer/PageContentContainer';

import {
  posts,
  UpdatePostData
} from '../components/UpdatePosts/posts/updateposts';
import { UpdatePostLandingSummary } from '../components/UpdatePosts/components/UpdatePostSummary';
import { UpdatePostTitle } from '../components/UpdatePosts/components/UpdatePostTitle';

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
          <div className="updatepost-container rounded shadow-2xl shadow-black bg-gray-500 pt-6 pl-4 pr-10 pb-6 w-4/5 space-x-4 mx-auto flex flex-col">
            {post.picture ? (
              <img
                className="pict max-h-80 self-center bg-no-repeat bg-contain bg-top bg-center"
                src={'/' + post.picture}
              ></img>
            ) : (
              <></>
            )}
            <div
              className={
                'post' +
                (post.picture ? ' ' : '') +
                ' w-full text-sm sm:text-base'
              }
            >
              <div className="text-container">
                <UpdatePostTitle postData={post} />
                <div className="italic text-xs sm:text-sm">{post.postDate}</div>
                <UpdatePostLandingSummary postData={post} />
              </div>
              <div className="pt-4">
                <Link className="text-white hover:underline" to="/">
                  Back -{'>'}
                </Link>
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
