import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link,Navigate  } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import React, { Component,useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
       axios
          .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
          .then((response) => {
             setPosts(response.data);
          })
          .catch((err) => {
              console.log(err);
          });
    }, []);

    function handleClick() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?_limit=3');
        xhr.onload = function() {
            console.log(xhr.responseText);
          if (xhr.status === 200) {
            setData(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
      }

  return (
      <>
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
        {posts.map((post) =>{
            return(<div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>)
        })}
        <button onClick={handleClick}>Get Data</button>
      {data ? <div>
        {data.map((post) =>{
            return(<div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>)
        })}</div> : <div>Loading...</div>}
        </>
  )
}

export default App;
