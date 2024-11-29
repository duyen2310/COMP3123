import React, { Component } from 'react';
import axios from 'axios';
import "./PersonList.css"; 
class PersonList extends Component {
    state = {
        persons: [], // Define state default values
    };

    // Fetch data using Axios after the component is mounted
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }


    // render() {
    //     return (
    //         <div>
    //             <h2>Person List</h2>
    //             <ul>
    //                 {this.state.persons.map((person, index) => (
    //                     <li key={index}>
    //                         {person.name.first} {person.name.last}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // }
    render() {
        return (
            <div className="container mt-4">
                <h2 className="mb-4">User List</h2>
                    {this.state.persons.map((person, index) => (
                        <li key={index} className="list-group-item mb-3">
                        {/* Header with Name and UUID */}
                        <div className="header-box mb-3 p-2">
                            <strong>
                                {person.name.title} {person.name.first} {person.name.last}
                            </strong> - {person.login.uuid}
                        </div>

                        {/* Picture and Info Box */}
                        <div className="content-box d-flex p-3 align-items-center">
                            {/* Picture on the Left */}
                            <div className="me-4">
                                <img
                                    src={person.picture.thumbnail}
                                    alt="Profile"
                                    className="rounded-circle"
                                />

                                <div className='detail-box'>Details</div>
                            </div>
        
                            {/* Info on the Right */}
                            <div className="info-content">
                                <div className="info-row">
                                    <span className="info-label">Username:</span>
                                    <span className="info-value">{person.login.username}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Gender:</span>
                                    <span className="info-value">{person.gender}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Time Zone Description:</span>
                                    <span className="info-value">{person.location.timezone.description}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Address:</span>
                                    <span className="info-value">
                                        {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}
                                    </span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Email:</span>
                                    <span className="info-value">{person.email}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Birth Date and Age:</span>
                                    <span className="info-value">{person.dob.date} ({person.dob.age})</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Register Date:</span>
                                    <span className="info-value">{person.registered.date}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Phone#:</span>
                                    <span className="info-value">{person.phone}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Cell#:</span>
                                    <span className="info-value">{person.cell}</span>
                                </div>
                            </div>

                        </div>
                    </li>
                    ))}
            </div>
        );
    }
}

export default PersonList;
