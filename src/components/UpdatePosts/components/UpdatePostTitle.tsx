import { UpdatePostData } from '../posts/updateposts';

type UpdatePostTitleProps = {
  postData: UpdatePostData;
};

export const UpdatePostTitle = (props: UpdatePostTitleProps) => {
  return (
    <div className="text-lg sm:text-xl font-semibold">
      {props.postData.title}
    </div>
  );
};
