import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';

export const Form = () => {
  const { theme } = useContext(ThemeContext); 
  return (
    <>
      <div className={`container border w-50 mt-5 p-5  shadow-lg ${theme}-theme`}>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="confirm-check" />
            <label className="form-check-label" htmlFor="confirm-check">
              Check me out
            </label>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};
