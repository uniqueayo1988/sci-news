<template>
  <div id="app" class="container-fluid text-white">
    <vue-particles
      color="#000"
      class="particle"
      shapeType="circle"
      :particleSize="10"
      :lineLinked="false"
      :linesWidth="5"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
    >
    </vue-particles>
    <nav class="container navbar navbar-expand-lg navbar-light bg-transparent py-4">
      <router-link class="navbar-brand text-white" to="/">
        <img class="imgNav" src="@/assets/earth-globe.svg" alt="science" title="Icons made by Freepik from www.flaticon.com">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/" exact>Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/news" exact>News</router-link>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btnHead text-light">Login</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <section class="footer">
      <footer class="text-center py-4">
        <p class="mb-0">Sci-New Media 2019</p>
        <p class="mb-0">FB TWITTER</p>
      </footer>
    </section>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.router-link-exact-active {
  color: tomato !important;
  font-weight: 700;
}
  .particle {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: linear-gradient(89deg, #311C72 0%, #5A3F97 100%)
  }
  .imgNav {
    width: 40px;
    border-radius: 10px;
    background-color: #FFF;
  }
  .btnHead {
    border-radius: 20px;
    background-color: tomato;
    font-weight: 700;
  }
  .btnHead:hover {
    background-color: white;
    color: tomato !important;
  }
</style>
