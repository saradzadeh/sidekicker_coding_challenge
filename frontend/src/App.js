import React from 'react';
import './App.css';







  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { jobTitle:'', jobDescription:'', date:'' };

      this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(){
      
    //   //get request
    //   fetch('http://localhost/jobs.php')
    //   .then(res => res.json())
    //   .then( json => {
    //     this.setState({jobTitle: res.jobTitle, jobDescription: res.jobDescription, date: res.date, location: res.location, applicants: res.applicants
    //     }); 
    //   });
    // }

    

    handleClick () {
      this.setState ({
        location:'Melbourne', applicants: 'Sara'
      })
    }

    

    render() {
  return (
        <div className="App">
          <header className="header">
            <h1>JOB LISTS</h1>
          </header>

          <main>
            <h3 onClick = {this.handleClick}>Job Title</h3>
            <h2>{this.state.jobTitle}</h2>
            <h3>Job Description</h3>
            <p>{this.state.jobDescription}</p>
            <h3>Date</h3>
            <p>{this.state.date}</p>
            <h3>Location</h3>
            <p>{this.state.location}</p>
            <h3>Applicants</h3>
            <p>{this.state.applicants}</p>
          </main>

          <footer className="footer">
            <p>This is the footer of the page</p>
          </footer>
        </div>
      );
    }
  }
  

export default App;
