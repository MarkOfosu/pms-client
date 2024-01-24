// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const CreateAdmin = () => {
//     const [admin, setAdmin] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         password2: '',
//         errors: {},
//     });

//     const { firstName, lastName, email, password, password2, errors } = admin;

//     const onChange = e => setAdmin({ ...admin, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         const newAdmin = { firstName, lastName, email, password, password2 };

//         // Assuming the endpoint to create an admin is '/api/admins/create'
//         // Replace with your actual endpoint
//         fetch('/api/admins/create', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newAdmin),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Handle success
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle errors
//             console.error('Error:', error);
//             setAdmin({ ...admin, errors: error });
//         });
//     };

//     const renderInputField = (name, type, label, value, error) => (
//         <div className='input-field col s12'>
//             <input
//                 onChange={onChange}
//                 value={value}
//                 id={name}
//                 type={type}
//                 name={name}
//                 className={`validate ${error ? 'invalid' : ''}`}
//             />
//             <label htmlFor={name}>{label}</label>
//             {error && <span className='red-text'>{error}</span>}
//         </div>
//     );

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col s8 offset-s2'>
//                     <Link to='/adminPortal' className='btn-flat waves-effect'>
//                         <i className='material-icons left'>keyboard_backspace</i>
//                         Back to admin portal
//                     </Link>
//                     <div className='col s12'>
//                         <h4><b>Create</b> admin</h4>
//                         <p className='grey-text text-darken-1'>
//                             Already have an account? <Link to='/login'>Log in</Link>
//                         </p>
//                     </div>
//                     <form noValidate onSubmit={onSubmit}>
//                         {renderInputField("firstName", "text", "First Name", firstName, errors.firstName)}
//                         {renderInputField("lastName", "text", "Last Name", lastName, errors.lastName)}
//                         {renderInputField("email", "email", "Email", email, errors.email)}
//                         {renderInputField("password", "password", "Password", password, errors.password)}
//                         {renderInputField("password2", "password", "Confirm Password", password2, errors.password2)}
//                         <div className='col s12'>
//                             <button
//                                 type='submit'
//                                 className='btn btn-large waves-effect waves-light hoverable blue accent-3'
//                                 style={{ width: '150px', borderRadius: '3px', letterSpacing: '1.5px', marginTop: '1rem' }}
//                             >
//                                 Create
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateAdmin;

const CreateAdmin = () => {
    return (
        <div>
            <h1>Create Admin</h1>
        </div>
    );
}

export default CreateAdmin;