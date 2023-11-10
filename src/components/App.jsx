// ca36f092d65c5702293abafc88e9f6b7;

import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink className="header-nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-nav-link" to="/movies">
          Movies
        </NavLink>
      </header>
    </div>
  );
};
