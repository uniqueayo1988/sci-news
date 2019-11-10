<template>
  <div class="container-fluid text-white">
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
      <a class="navbar-brand text-white" href="#">
        <img class="imgNav" src="@/assets/earth-globe.svg" alt="science" title="Icons made by surang from www.flaticon.com">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            <router-link class="nav-link text-white" to="/">Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">News</a> -->
            <router-link class="nav-link text-white" to="/about">News</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link text-white" href="#">Login</a> -->
            <button type="button" class="btn btnHead text-light">Login</button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="row align-items-center pb-5">
      <div class="col-md-8 col-sm-12 headWrapper">
        <h1 class="appHead">Join the Revolution in writing world-class STEM news...</h1>
        <p class="">STEM is a curriculum based on the idea of educating students in four specific disciplines — science, technology, engineering and mathematics — in an interdisciplinary and applied approach... This campaign also addresses the inadequate number of teachers skilled to educate in these subjects.
        </p>
        <button type="button" class="btn btnHead text-light">Join us</button>
      </div>

      <div class="col-md-4 col-sm-12">
        <img class="imgHead" src="@/assets/chemistry.svg" alt="science" title="Icons made by surang from www.flaticon.com">
      </div>
    </div>

    <section class="about text-dark py-5">
      <div class="col-md-4 offset-md-4 col-sm-12 text-center">
        <h2 class="text-uppercase">About sci-news</h2>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
      </div>
    </section>

    <section class="text-dark p-5">
      <div class="card-deck mb-4">
        <div class="card">
          <!-- <img src="@/assets/logo.png" class="card-img-top" alt=""> -->
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <!-- <img src="@/assets/logo.png" class="card-img-top" alt=""> -->
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial text-dark py-5">
      <div class="col-md-4 offset-md-4 col-sm-12 text-center">
        <h2 class="text-uppercase">About sci-news</h2>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
        <p class="">Light weight text. whwhwhhhhw hesjrnsfsnd hwnekkjnfj ksnfksjnfdnnd </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped="">
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
  .headWrapper {
    padding: 100px;
  }
  .appHead {
    padding-bottom: 50px;
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
  .imgHead {
    max-width: 100%;
    background-color: #FFF;
    padding: 50px;
  }
  .about {
    background: #F4F4F4;
  }
  .testimonial {
background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
    #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  }
  @media (max-width: 1000px) {
    .headWrapper {
      padding: 10px;
    }
  }
</style>
