import React from 'react';
import { Wrapper } from './SignInBodyStyle';

function SignIn() {
  return (
    <Wrapper>
      <div className="text-center">
        <main className="form-signin w-100 m-auto">
          <form>
            <img
              className="mb-4"
              src="assets/icons/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
          </form>
        </main>
      </div>
    </Wrapper>
  );
}

export default SignIn;
