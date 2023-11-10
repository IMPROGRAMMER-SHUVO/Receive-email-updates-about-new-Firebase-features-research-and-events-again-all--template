import { useContext } from "react";
import { AuthContext } from "../Providers/Authproviders";



const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" className="max-w-sm rounded-3xl border-l-rose-600 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">firebase</h1>
      <p className="py-6">Firebase, Inc. is a set of backend cloud computing services and application development platforms provided by Google.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
};

export default Home;