import React from 'react';
import './App.css';







  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { jobTitle:'', jobDescription:'', date:'', location:'', applicants: '' };
    }

    componentDidMount(){
      
      //get request
      fetch('http://localhost/jobs.php')
      .then(res => res.json())
      .then( json => {
        this.setState({jobTitle: res.jobTitle, jobDescription: res.jobDescription, date: res.date, location: res.location, applicants: res.applicants
        }); 
      });
    }

    

    render() {
  return (
        <div className="App">
          <header className="header">
            <h1>JOB LISTS</h1>
          </header>

          <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>jobTitle</th>
              <th>jobDescription</th>
              <th>date</th>
              <th>location</th>
              <th>applicants</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.jobTitle}</td>
                  <td>{result.jobDescription}</td>
                  <td>{result.date}</td>
                  <td>{result.location}</td>
                  <td>{result.applicants}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>

          <footer className="footer">
            <p>This is the footer of the page</p>
          </footer>
        </div>
      );
    }
  }
  

export default App;
