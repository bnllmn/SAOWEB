import { Link } from 'react-router-dom';

type TopNavProps = unknown;

export const TopNav = (props: TopNavProps) => {
  return (
    <header className="website-header fixed w-full">
      <div
        className="header-container w-full h-full"
        style={{
          backgroundImage: 'url(/bg-concept.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <nav className="page-navigation flex">
          <Link className="ml-auto" to="/">
            <button
              className="rounded-xl w-36 h-16 bg-gradient-radial from-transparent to-black text-white"
              //style={{
              //  backgroundImage: 'url(/button-black-lighter.png)',
              //  backgroundSize: '150px 75px'
              //}}
            >
              <div className="rounded-xl text-white hover-color bg-black bg-opacity-50 hover:bg-opacity-70 active:bg-opacity-75 active:text-white/25 h-full pt-4">
                Home
              </div>
            </button>
          </Link>
          <Link className="mr-auto" to="/download">
            <button
              className="rounded-xl w-36 h-16 bg-gradient-radial from-transparent to-black text-white"
              //style={{
              //  backgroundImage: 'url(/button-black-lighter.png)',
              //  backgroundSize: '150px 75px'
              //}}
            >
              <div className="rounded-xl text-white hover-color bg-black bg-opacity-50 hover:bg-opacity-70 active:bg-opacity-75 active:text-white/25 h-full pt-4">
                Download
              </div>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
