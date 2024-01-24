// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

// const Profile = () => {
//     const [user, setUser] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         city: "",
//         state: "",
//         zip: "",
//         password: "",
//         confirmPassword: "",
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({});

//     const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();

//         try {
//             const response = await fetch("/api/users/update", {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(user)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 setErrors(errorData);
//                 return;
//             }

//             const updatedUser = await response.json();
//             setUser({ ...updatedUser, password: '', confirmPassword: '' });
//             toast.success("Profile updated successfully!");
//         } catch (err) {
//             console.error('Error:', err);
//             setErrors({ form: 'Unable to update profile.' });
//         }
//     };

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const response = await fetch("/api/users/current");
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch user');
//                 }
//                 const userData = await response.json();
//                 setUser(userData);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchUser();
//     }, []);

//     const renderInputField = (name, type, label, value, error) => (
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//             <input
//                 type={type}
//                 className={`form-control ${error ? 'is-invalid' : ''}`}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             />
//             {error && <div className="invalid-feedback">{error}</div>}
//         </div>
//     );

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-8 m-auto">
//                     <h1 className="display-4 text-center">Profile</h1>
//                     <p className="lead text-center">Update your profile information</p>
//                     <form onSubmit={onSubmit}>
//                         {renderInputField("firstName", "text", "First Name", user.firstName, errors.firstName)}
//                         {renderInputField("lastName", "text", "Last Name", user.lastName, errors.lastName)}
//                         {/* ... other input fields */}
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <div className="input-group">
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                                     name="password"
//                                     value={user.password}
//                                     onChange={onChange}
//                                 />
//                                 <div className="input-group-append">
//                                     <button
//                                         className="btn btn-outline-secondary"
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                     >
//                                         <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} />
//                                     </button>
//                                 </div>
//                                 {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                             </div>
//                         </div>
//                         {/* ... confirmPassword field similar to password field */}
//                         <input type="submit" className="btn btn-info btn-block mt-4" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;

const Profile = () => {
    return (
        <div className="profile">
            <h1> User Profile</h1>
        </div>
    );
}

export default Profile;

