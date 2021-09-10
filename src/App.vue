<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <router-link to="/"><img src="./assets/r2d2-white.svg" height="30px" alt="" /></router-link>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navdropdownActivities" role="button" data-bs-toggle="dropdown" aria-expanded="false">Activities</a>
                <ul class="dropdown-menu dropdown-menu-dark text-nowrap" aria-labelledby="navdropdownActivities">
                  <li><router-link :to="{ name: 'ClassList' }" class="nav-link">Data Fetching</router-link></li>
                  <li><router-link :to="{ name: 'Grid' }" class="nav-link">Grid Stuff</router-link></li>
                  <li><router-link :to="{ name: 'BgBlend' }" class="nav-link">Background Blending</router-link></li>
                  <li><router-link :to="{ name: 'OffCanvas' }" class="nav-link">Off-Canvas</router-link></li>
                  <li><router-link :to="{ name: 'Posts' }" class="nav-link">Dynamic Routes</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contactus" class="nav-link">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="container pt-5 mt-5">
      <router-view />
    </div>
  </div>
</template>
