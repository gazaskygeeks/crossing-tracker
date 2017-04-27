import React from 'react';
import { Link } from 'react-router';
class HomePage extends React.Component {
  render() {
    return (
      <section className='data-wrp'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              gallary here
            </div>
            <div className='col-md-4 details'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>From</th>
                    <th>To</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8:30</td>
                    <td>Jerusalem</td>
                    <td>EREZ</td>
                    <td>
                      <Link to={'/tripDetails/'}>View Trip</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
