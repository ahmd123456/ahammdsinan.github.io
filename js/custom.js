

       


   


   

    



    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('nav').addClass('fixed-header');
        }
        else {
            $('nav').removeClass('fixed-header');
        }
    });



    // scroller

    document.addEventListener('DOMContentLoaded',function (){
        var navLinks=document.querySelectorAll('#navbar ul .nav-item .nav-link');
        var sections= document.querySelectorAll('.scroller');
        function updateActiveLinks(){
            let index = sections.length;
            while(--index&&window.scrollY + 50 < sections[index].offsetTop){}
            navLinks.forEach((link)=>{
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');   
        }
        navLinks.forEach(function(link){
            link.addEventListener('click',function(){
                document.querySelector('#navbar ul .nav-item .nav-link.active').classList.remove('active');
                this.classList.add('active');
            });
        });
        document.addEventListener('scroll',function(){
            updateActiveLinks();
        });
    });
   