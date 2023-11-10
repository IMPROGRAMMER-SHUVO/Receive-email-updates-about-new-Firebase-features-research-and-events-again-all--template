import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authproviders";


const Register = () => {

const {user,createUser}=useContext(AuthContext);
console.log(createUser)
    const handleregister=(event)=>{
        event.preventDefault()
    const from=event.target;
    const name=from.name.value;
    const email=from.email.value;
    const password=from.password.value;
    console.log(name,email,password)
    

    createUser(email,password)
    .then(result=>{
      const loggeduser=result.user
      console.log(loggeduser)
    })
  .catch(error=>{
    console.log(error)
  })
    }


    return (
        <div>
         <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
      <form onSubmit={handleregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"name='password' required />
          <label className="label">
            <Link to="/Login" className="label-text-alt link link-hover"> Already have account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;