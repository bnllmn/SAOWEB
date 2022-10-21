import { UpdatePostData } from '../../posts/updateposts';

type UpdatePostBodyProps = {
  postData: UpdatePostData;
};

export const UpdatePostLandingSummarySample = (props: UpdatePostBodyProps) => {
  return <div className="p-2">{props.postData.landingsummary}</div>;
};
