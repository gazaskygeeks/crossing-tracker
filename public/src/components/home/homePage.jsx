import React from 'react';
import {Link} from 'react-router';
import Calendar from './calendar.jsx';
import TripsHomeDisplay from './tripsSection.jsx';

class HomePage extends React.Component {
    render() {
        return (
            <section className='data-wrp'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <Calendar/>
                        </div>
                        <div className='col-md-4 details'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <TripsHomeDisplay />
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomePage;
