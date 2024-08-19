import React from "react";
import photo from '../Assets/codeCraft.jpeg'

const SignIn = () => {



    const UserForm = () => {
        const [formData, setFormData] = useState({
          email: '',
          username: '',
          password: '',
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          // You can add further processing here, such as sending the data to an API.
        };
    };



    return (
        <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <img src={photo} alt="this is a test photo" /> 
    </div>
    )

};

export default SignIn;