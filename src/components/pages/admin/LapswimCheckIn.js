const LapSwimCheckIn = () => {
    return (
        <div className='container'>
            <hi className='center-align'>Lap Swim Check In</hi>

        </div>
    );
}

export default LapSwimCheckIn;
// import React, { useState, useEffect } from 'react';
// import Modal from '../../layout/Modal';
// import Alert from '../../layout/Alert';
// import Confirm from '../../layout/Confirm';
// import LapSwimCheckInForm from './LapSwimCheckInForm';

// const LapSwimCheckIn = () => {
//     const [lapSwimCustomers, setLapSwimCustomers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
//     const [confirm, setConfirm] = useState({ show: false, msg: '', type: '', onConfirm: null });

//     useEffect(() => {
//         fetchLapSwimCustomers();
//     }, []);

//     const fetchLapSwimCustomers = async () => {
//         try {
//             const response = await fetch('/api/lapSwimCustomers');
//             const data = await response.json();
//             setLapSwimCustomers(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//         setLoading(false);
//     };

//     const onChange = (e) => setSearchTerm(e.target.value);

//     const getFilteredLapSwimCustomers = () => {
//         return lapSwimCustomers.filter((customer) =>
//             customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             customer.phone.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     };

//     const handleCheckIn = async (customer) => {
//         // Implement the check-in functionality using fetch
//     };

//     const handleCheckOut = async (customer) => {
//         // Implement the check-out functionality using fetch
//     };

//     const handleDelete = async (id) => {
//         // Implement the delete functionality using fetch
//     };

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col s12'>
//                     <h4 className='center-align'>Lap Swim Check In</h4>
//                     <input
//                         onChange={onChange}
//                         value={searchTerm}
//                         id='searchTerm'
//                         type='text'
//                         name='searchTerm'
//                         placeholder='Search'
//                     />
//                     {loading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <table className='striped centered'>
//                             <thead>
//                                 {/* Table headers */}
//                             </thead>
//                             <tbody>
//                                 {getFilteredLapSwimCustomers().map((customer) => (
//                                     <tr key={customer._id}>
//                                         {/* Table row data */}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                     <button onClick={() => setShowModal(true)} className='btn waves-effect waves-light'>
//                         Add Customer
//                     </button>
//                 </div>
//             </div>
//             <Modal show={showModal} handleClose={() => setShowModal(false)}>
//                 <LapSwimCheckInForm /* Props */ />
//             </Modal>
//             <Alert show={alert.show} handleClose={() => setAlert({...alert, show: false})} msg={alert.msg} type={alert.type} />
//             <Confirm show={confirm.show} handleClose={() => setConfirm({...confirm, show: false})} msg={confirm.msg} type={confirm.type} onConfirm={confirm.onConfirm} />
//         </div>
//     );
// }

// export default LapSwimCheckIn;
