let burger = document.getElementById('burger'),
            nav    = document.getElementById('main-nav');
            body   = document.body; // Select the body element
            
    
        burger.addEventListener('click', function(e){
            this.classList.toggle('is-open');
            nav.classList.toggle('is-open');
            body.classList.toggle('no-scroll'); // Toggle the 'no-scroll' class
        });

        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
        }
        let calcScrollValue = () => {
            let scrollProgress = document.getElementById("progress");
            let progressValue = document.getElementById("progress-value");
            let pos = document.documentElement.scrollTop;    
            let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollValue = (pos / calcHeight) * 100;
            if(pos>100){
                scrollProgress.style.display = "grid";
            } else {
                scrollProgress.style.display = "none";
            }
            scrollProgress.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
            scrollProgress.style.background = `conic-gradient( #43b6bd ${scrollValue}%, #f4f4f4 ${scrollValue}%)`;     
        };
        window.onscroll = calcScrollValue;
        window.onload = calcScrollValue;