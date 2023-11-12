
const nav = document.querySelector('#Experience')
const nav1 = document.querySelector('.aze2')
const nav12 = document.querySelector('#Education')

nav12.addEventListener('click', ()=> {
    nav1.classList.remove('active');
    
    window.location.replace("index.html#Skills")
})
nav.addEventListener('click', ()=> {
    nav1.classList.add('active');
})

{/* <div class="projets_ordi">
            <div class="services_ord" id="pro1">
                <div class="rtpm1">

                </div>
                <!-- <img src="./image/project-1.jpg" width="100%" height="100%" style="border-radius: 10px;" alt=""> -->
            </div>
            <div class="services_ord" id="pro2">
                <div class="rtpm1">

                </div>
            </div>
            <div class="services_ord" id="pro3">
                <div class="rtpm1">

                </div>
            </div>
            <div class="services_ord" id="pro4">
                <div class="rtpm1">

                </div>
            </div>
            <div class="services_ord" id="pro5">
                <div class="rtpm1">

                </div>
            </div>
            <div class="services_ord" id="pro6">
                <div class="rtpm1">
                    <h1> </h1>
                </div>
            </div> */}


{/* <div class="projets_ordi">
            <div class="services_ord" id="pro11">
                <div class="rtpm">
                    <h3 >Full Name</h3>
                    <p style="padding-top: 7px;">Designer</p>
                </div>
            </div>
            <div class="services_ord" id="pro12">
                <div class="rtpm">
                    <h3 >Full Name</h3>
                    <p style="padding-top: 7px;">Designer</p>
                </div>
            </div>
            <div class="services_ord" id="pro13">
                <div class="rtpm">
                    <h3 >Full Name</h3>
                    <p style="padding-top: 7px;">Designer</p>
                </div>
            </div>
            
            
        </div> */}