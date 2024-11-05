import { Link } from 'react-router-dom';
import { UpdatePostData } from '../posts/updateposts';

type UpdatePostProps = {
  postData: UpdatePostData;
};

function UpdatePostLanding(props: UpdatePostProps) {
  console.log(props);
  return (
    <div className="updatepost-container rounded shadow-2xl shadow-black bg-gray-500 pt-6 pl-4 pr-10 pb-6 w-4/5 space-x-4 mx-auto flex flex-col sm:flex-row">
      {props.postData.picture ? (
        <Link
          to={'/post/' + props.postData.id}
          className="pict h-32 w-full sm:w-1/3 bg-no-repeat bg-contain bg-top bg-center hover:opacity-75"
          style={{
            backgroundImage: 'url(/' + props.postData.picture + ')'
          }}
        ></Link>
      ) : (
        <></>
      )}
      <div
        className={
          'post' +
          (props.postData.picture ? ' sm:w-2/3' : '') +
          ' w-full text-sm sm:text-base'
        }
      >
        <div className="text-container">
          <Link
            className="update-post-title text-lg sm:text-xl font-semibold hover:underline"
            to={'/post/' + props.postData.id}
          >
            {props.postData.title}
          </Link>
          <div className="update-post-date italic text-xs sm:text-sm">
            {props.postData.postDate}
          </div>
          <div className="update-post-landdingsummary p-2">
            {props.postData.landingsummary}
          </div>
        </div>
        <div className="pt-4">
          <Link
            className="text-white hover:underline"
            to={'/post/' + props.postData.id}
          >
            Read Full Post -{'>'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpdatePostLanding;
