let product_path = document.getElementsByClassName('product_path')[0]
let showcase_path = document.getElementsByClassName("showcase_path")[0]
let home_path = document.getElementsByClassName('home_path')[0]
let gallery_path = document.getElementsByClassName('gallery_path')[0]
let contact_path = document.getElementsByClassName('contact_path')[0]

let home = document.getElementById("mainboxes")
let productpage = document.getElementById("productpage")
let showcase = document.getElementById("showcase")
let gallerypage = document.getElementById("gallerypage")
let footerpage = document.getElementById('footerpage')

//insert cards in grid
let productgrid = document.getElementById("productgrid")
let ul_class = document.getElementsByClassName("ul_class")[0]
let clickBool = false

document.addEventListener('DOMContentLoaded',()=> {
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });

/*
   let scrollReveal = ScrollReveal()
   
   scrollReveal.reveal('.modelcard', {
    delay:500,
    duration:1000,
    origin:'bottom',
    distance:'50px'
})

scrollReveal.reveal('.productcard', {
    delay:500,
    duration:1000,
    origin:'bottom',
    distance:'50px'
})

  
scrollReveal.reveal('.galleryitem', {
    delay:500,
    duration:1000,
    origin:'bottom',
    distance:'50px'
})

*/

    contact_path.addEventListener("click",()=> {
        $('.nav-link').on('click',function() {
            $('.navbar-collapse').collapse('hide');
          });

        home.style.zIndex ="-1"
        gallerypage.style.display="none"
        productpage.style.display="none"
        showcase.style.display = "none"
        footerpage.style.display="block"

    })


   showcase_path.addEventListener("click",()=> {
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });
     
       home.style.zIndex ="-1"
       gallerypage.style.display="none"
       productpage.style.display="none"
       showcase.style.display = "block"
       footerpage.style.display="none"
   })
   
   
   product_path.addEventListener("click", ()=> {
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });
      
       home.style.zIndex ="-1"
       productpage.style.display ="block";
       showcase.style.display="none"
       gallerypage.style.display="none"
       footerpage.style.display="none"
   })
   
   home_path.addEventListener("click", ()=> {
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });

       home.style.zIndex ="3"
       productpage.style.display ="none";
       showcase.style.display="none"
       gallerypage.style.display="none"
       footerpage.style.display="none"
   })
   
   gallery_path.addEventListener("click", ()=> {
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });
   
       home.style.zIndex ="-1"
       productpage.style.display ="none";
       showcase.style.display="none"
       gallerypage.style.display="block"
       footerpage.style.display="none"
   })

})



