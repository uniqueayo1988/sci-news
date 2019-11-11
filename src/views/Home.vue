<template>
  <div class="text-white">
    <div class="row align-items-center pb-5">
      <div class="col-md-8 col-sm-12 headWrapper">
        <h1 class="appHead">Join the Revolution in writing world-class STEM news...</h1>
        <p class="">STEM is a curriculum based on the idea of educating students in four specific disciplines — science, technology, engineering and mathematics — in an interdisciplinary and applied approach... This campaign also addresses the inadequate number of teachers skilled to educate in these subjects.
        </p>
        <button type="button" class="btn btnHead text-light">Join us</button>
      </div>

      <div class="col-md-4 col-sm-12">
        <img class="imgHead" src="@/assets/chemistry.svg" alt="science" title="Icons made by Surang from www.flaticon.com">
      </div>
    </div>

    <section class="about text-dark py-5">
      <div class="col-md-4 offset-md-4 col-sm-12 text-center px-2">
        <h2 class="text-uppercase">About sci-news</h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </section>

    <section class="text-dark p-5">
      <div class="card-deck mb-4">
        <div class="card">
          <!-- <img src="@/assets/logo.png" class="card-img-top" alt="sci-fi" style="max-width: 50%, margin: auto"> -->
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/logo.png" class="" alt="sci-fi">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial text-dark py-5">
      <div class="col-md-8 offset-md-2 col-sm-12 text-center">
        <h2 class="text-uppercase">Testimonials</h2>
        <vue-swimlane :words="testimony" :scale="1" :rows="4" :pauseOnHover="true" :transitionDuration="500" :transitionDelay="250" style="margin-left: -30px; padding-right: 10px"></vue-swimlane>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      testimony: [
        '',
        '<p class="lead text-break">Reading on Sci-News calms down my nerves.</p>',
        '<br class="breakText"/>',
        '<small class="font-italic">Helen J.</small>',
        '<br />',
        '<p class="lead text-break">I enjoy the articles from Sci-News. They are informative.</p>',
        '<br class="breakText"/>',
        '<small class="font-italic">Michelle Bayo</small>',
        '<br />',
        '<p class="lead text-break">I like writing using Sci-News because it is user-friendly.</p>',
        '<br class="breakText"/>',
        '<small class="font-italic">Ade James</small>',
        '<br />',
        '<p class="lead text-break">Read here... write here... get better...</p>',
        '<br class="breakText"/>',
        '<small class="font-italic">Sarah D.</small>',
        '<br />',
        '<p class="lead text-break">I learn just everything about STEM here!</p>',
        '<br class="breakText"/>',
        '<small class="font-italic">A. Drogba</small>',
        ''
      ]
    }
  }
}
</script>

<style scoped="">
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
      padding: 20px;
    }
  }
  @media (min-width: 575px) {
    .breakText {
      display: none;
    }
  }
</style>
