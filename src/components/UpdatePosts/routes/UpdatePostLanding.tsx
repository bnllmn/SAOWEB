import { Link } from 'react-router-dom';
import { UpdatePostLandingSummary } from '../components/UpdatePostLandingSample/UpdatePostLandingSummary';
import { UpdatePostTitle } from '../components/UpdatePostLandingSample/UpdatePostTitle';
import { UpdatePostData } from '../posts/updateposts';

type UpdatePostProps = {
  postData: UpdatePostData;
};

function UpdatePostLanding(props: UpdatePostProps) {
  console.log(props);
  return (
    <div className="updatepost-container bg-gray-500 pt-6 pl-4 pr-10 pb-6 w-4/5 space-x-4 mx-auto flex">
      <button
        className="pict w-1/4 bg-no-repeat bg-contain hover:opacity-90"
        style={{
          backgroundImage: 'url(/skillsico.png)'
        }}
      ></button>
      <div className="post w-3/4">
        <div className="text-container">
          <UpdatePostTitle {...props} />
          <UpdatePostLandingSummary {...props} />
        </div>
        <div className="pt-4">
          <Link to={''}>Read Full Post</Link>
        </div>
      </div>
    </div>
  );
}

export default UpdatePostLanding;
