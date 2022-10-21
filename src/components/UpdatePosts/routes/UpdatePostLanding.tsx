import { Link } from 'react-router-dom';
import { UpdatePostLandingSummarySample } from '../components/UpdatePostLandingSample/UpdatePostLandingSummarySample';
import { UpdatePostTitleSample } from '../components/UpdatePostLandingSample/UpdatePostTitleSample';
import { UpdatePostData } from '../posts/updateposts';

type UpdatePostProps = {
  postData: UpdatePostData;
};

function UpdatePostLanding(props: UpdatePostProps) {
  console.log(props);
  return (
    <div className="updatepost-container rounded shadow-2xl shadow-black bg-gray-500 pt-6 pl-4 pr-10 pb-6 w-4/5 space-x-4 mx-auto flex">
      <button
        className="pict w-1/4 bg-no-repeat bg-contain hover:opacity-90"
        style={{
          backgroundImage: 'url(/skillsico.png)'
        }}
      ></button>
      <div className="post w-3/4">
        <div className="text-container">
          <UpdatePostTitleSample {...props} />
          <UpdatePostLandingSummarySample {...props} />
        </div>
        <div className="pt-4">
          <Link to={'/post/' + props.postData.id}>Read Full Post</Link>
        </div>
      </div>
    </div>
  );
}

export default UpdatePostLanding;
