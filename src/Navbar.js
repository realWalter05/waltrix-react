import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light rounded m-5 p-4 shadow-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Waltrix</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Series, movies, genres" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Pirate...</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}
