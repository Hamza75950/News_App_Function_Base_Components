import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(props)  {



    return (
      <div>
        {/* navbar navbar-expand-lg bg-body-tertiary */}
        <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}>
              News App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link"  to={`/`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/business`}>Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/entertainment`}>Entertainment </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/health`}>Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/science`}>Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/sports`}>Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/technology`}>Technology</Link></li>
                  <li className="nav-item">
                  <Link className="nav-link" to={`/techcrunch`}>Tech Crunch News</Link></li>
                  <li className="nav-item">
                  <Link className="nav-link" to={`/apple`}>Everything Apple News</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

