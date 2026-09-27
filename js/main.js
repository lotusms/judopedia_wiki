jQuery(document).ready(function($){
  let url = window.location.origin
 
  async function loadSlider() {

    const response = await fetch(`${url}/data/homeslider.json`);
    const data = await response.json();
  
    $("#slides").html(`
      ${data.map(slide => `  
        <li>
          <div class="banner ${slide.imgclass} uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-img">
          <div class="uk-container">
            <div class="uk-position-center uk-position-small uk-text-center">
              <h2 class="main-banner-h1 uk-margin-remove">${slide.heading}</h2>
              <p class="lead uk-margin-remove">${slide.subheading}</p>
              ${slide.link ? `<a href="${slide.link}" class="uk-button uk-button-primary uk-margin-top">Find Out More</a>` : ``}
            </div>
          </div>
        </li>   
      `).join('')}						
    `) 
  }


  async function loadGallery() {

    const response = await fetch(`${url}/data/gallery.json`);
    const data = await response.json();
  
    $("#gallery").html(`
      ${data.map(image => `  
        <div>
          <div uk-lightbox>
            <a href="${url}/assets/images/gallery/${image.img}">
              <img src="${url}/assets/images/gallery/${image.img}" alt="${image.alt}">
            </a>
          </div>
        </div>   
      `).join('')}						
    `) 
  }

  loadGallery();    
  loadSlider();    
   
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.nav-header').addClass('scrolled');
      $('.uk-navbar-dropdown li').addClass('solid');
    } else {
      $('.nav-header').removeClass('scrolled');
      $('.uk-navbar-dropdown li').removeClass('solid');
    }
  });

});
