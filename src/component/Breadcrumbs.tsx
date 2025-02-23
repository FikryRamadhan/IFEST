import { Link } from 'react-router-dom';

const Breadcrumbs = ({page}) => {
  return (
    <nav className="flex  items-center justify-center pt-5 pb-5 bg-slate-100 text-gray-600 text-sm font-medium">
      <ol className="flex flex-col items-center space-x-2">
        <li>
          <Link 
            to="/" 
            className="hover:text-gray-900 text-lg transition-colors"
          >
            Home /
          </Link>
        </li>
        <li className="text-gray-900 text-xl" aria-current="page">
          {page}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;