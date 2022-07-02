<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}


/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

body > .container {
  padding: 60px 15px 0;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}

code {
  font-size: 80%;
}

</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="col col-8">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="/">Rate Exchange</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/benchmark">Benchmark</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-2 text-right">
          <span>></span>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
    <!--<footer class="footer">
      <div class="container">
        <span class="text-muted">open contributors</span>
      </div>
    </footer> -->
</template>

