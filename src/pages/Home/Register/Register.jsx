import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Register = () => {
     const handleRegister = (e) => {
       e.preventDefault();
       console.log(e.currenttarget);
       const form = new FormData(e.currenttarget);
       console.log(form.get("email"));
     };
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <h2 className="text-3xl my-10 mx-auto">Please Login</h2>
          <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
              <input
                type="photo"
                placeholder="Photo URL"
                name="Photo URL"
                className="input input-bordered"
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">
         Already not have an account
            <Link className="text-blue" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;