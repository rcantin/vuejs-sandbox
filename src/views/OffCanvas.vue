<template>
  <div>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Button with data-bs-target</button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title fw-light" id="offcanvasExampleLabel">Choose Stuff</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row row-cols-3 gx-2 gy-5 text-center fw-light">
          <div class="col">
            <img src="https://picsum.photos/350/200?random=1" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Something</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=2" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Another Thing</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=3" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Some Stuff</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=4" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Many Things</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=5" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Lots of Things</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=6" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Lots of Stuff</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=7" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Other Items</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=8" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Many Others</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=9" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Things</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=10" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>Items &amp; More</div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/350/200?random=11" alt="..." class="img-fluid" style="clip-path: circle()" />
            <div>The Rest</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
