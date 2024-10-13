type Props = { children?: JSX.Element | JSX.Element[] };

export const PageContentContainer: React.FC<Props> = ({ children }) => (
  <div className="h-max w-4/5 bg-white mx-auto bg-bg2">{children}</div>
);
