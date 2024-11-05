import { UpdatePostData } from '../posts/updateposts';

type UpdatePostBodyProps = {
  postData: UpdatePostData;
};

export const UpdatePostLandingSummary = (props: UpdatePostBodyProps) => {
  return (
    <div className="p-2 space-y-4">
      <div>{props.postData.landingsummary}</div>
      <div>{props.postData.body}</div>
    </div>
  );
};
