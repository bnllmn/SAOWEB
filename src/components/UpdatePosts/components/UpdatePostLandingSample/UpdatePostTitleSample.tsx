import { UpdatePostData } from '../../posts/updateposts';

type UpdatePostTitleProps = {
  postData: UpdatePostData;
};

export const UpdatePostTitleSample = (props: UpdatePostTitleProps) => {
  return <div className="text-xl font-semibold">{props.postData.title}</div>;
};
