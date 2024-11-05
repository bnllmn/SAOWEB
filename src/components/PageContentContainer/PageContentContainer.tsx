type Props = { children?: JSX.Element | JSX.Element[] };

export const PageContentContainer: React.FC<Props> = ({ children }) => (
  <div className="h-full w-4/5 bg-white mx-auto pb-8 bg-bg2 flex flex-col space-y-8 bg-opacity-95">
    {children}
  </div>
);
