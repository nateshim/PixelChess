import {Link} from 'react-router-dom';

function BackButton() {
  return (
    <Link className="BackButton" to="/">
      <button>Back</button>
    </Link>
  );
};

export default BackButton;