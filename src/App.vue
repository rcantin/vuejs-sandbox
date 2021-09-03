<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./assets/tdclogo-whitetext.svg" height="30px" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contactus" class="nav-link"
                  >Contact Us</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li><a class="dropdown-item" href="#">Dance</a></li>
                  <li><a class="dropdown-item" href="#">Gymnastics</a></li>
                  <li><a class="dropdown-item" href="#">Martial Arts</a></li>
                  <li><a class="dropdown-item" href="#">Ninja</a></li>
                  <li><a class="dropdown-item" href="#">Camps</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/classes" class="nav-link"
                  >Classes</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="container pt-5 mt-4">
      <router-view />
    </div>
  </div>
</template>
