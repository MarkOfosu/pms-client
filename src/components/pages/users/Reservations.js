// import React, { useState, useEffect } from 'react';


// const Reservations = () => {
//     const [reservations, setReservations] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getReservations = async () => {
//             try {
//                 const res = await fetch.get('/api/reservations');
//                 setReservations(res.data);
//                 setIsLoading(false);
//             } catch (err) {
//                 setError(err);
//                 setIsLoading(false);
//             }
//         };
//         getReservations();
//     }, []);

//     return (
//         <div className="container">
//             <h1>Reservations</h1>
//             {error && <div className="error">{error.message}</div>}
//             {isLoading ? (
//                 <div className="loading">Loading...</div>
//             ) : (
//                 <div className="reservations">
//                     {reservations.map((reservation) => (
//                         <div className="reservation" key={reservation.id}>
//                             <div className="reservation__info">
//                                 <div className="reservation__info--left">
//                                     <div className="reservation__info--left--name">
//                                         {reservation.name}
//                                     </div>
//                                     <div className="reservation__info--left--date">
//                                         {reservation.date}
//                                     </div>
//                                 </div>
//                                 <div className="reservation__info--right">
//                                     <div className="reservation__info--right--time">
//                                         {reservation.time}
//                                     </div>
//                                     <div className="reservation__info--right--guests">
//                                         {reservation.guests}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="reservation__buttons">
//                                 <button className="reservation__buttons--edit">
//                                     Edit
//                                 </button>
//                                 <button className="reservation__buttons--cancel">
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Reservations;

const Reservations = () => {
    return (
        <div>
            <h1>Reservations</h1>
        </div>
    );
}

export default Reservations;