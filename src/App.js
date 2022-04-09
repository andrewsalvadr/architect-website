import './App.css';
import 'flowbite';
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration:1500
});

function App() {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_qlk1ry8', 'template_hiljcmc', 'L32JRkpcPjOPXHBoZ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}


  return (
<body className="bg-gray-50">
<header class="absolute w-full">
    <nav class="max-w-screen-xl flex flex-row flex-wrap justify-between my-3 mx-auto lg:items-start" role="navigation">
      <div class="flex items-center ml-3">
        <a class="flex" href="/">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.3333 12L16 2.66669L2.66663 12H14.6666V29.3334H17.3333V12H29.3333ZM16 5.92002L20.88 9.33335H11.12L16 5.92002Z"
              fill="#F3F4F6" />
            <path
              d="M5.51995 16L2.90662 16.4933L3.99995 22.32V29.3333H6.66662L6.69328 24H9.33328V29.3333H11.9999V21.3333H6.53328L5.51995 16ZM25.4666 21.3333H20V29.3333H22.6666V24H25.3066L25.3333 29.3333H28V22.32L29.0933 16.4933L26.4799 16L25.4666 21.3333Z"
              fill="#F3F4F6" />
          </svg>
          <span class="ml-2 uppercase font-bold text-2xl text-gray-100">Design at Decks</span>
        </a>
      </div>
    </nav>
    </header>

  <section className="bg-[url('./images/landingday.jpg')] bg-center bg-cover h-screen flex items-center justify-center" data-aos='zoom'>
    

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5 z-10"></div>
    <div className="flex flex-col justify-center items-center z-10">
      <h1 className="bg-yellow-400 bg-opacity-60 text-center mb-20 text-5xl lg:text-7xl uppercase text-gray-50 font-medium" data-aos='slide-right'>Design your lifestyle</h1>
     
      <div className="flex flex-col md:block">
        <a className="bg-yellow-400 bg-opacity-80 inline-block uppercase text-center font-semibold px-5 py-2 lg:px-10 border border-gray-500 text-gray-50 mx-2 lg:mx-8 hover:border-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-300"
          href="#quote" data-aos='slide-left'>Get Quote</a>
      </div>
    </div>
  </section>


 {/* ////////////////////////////////////////////////////////////INTERIOR EXTERIOR DESIGN SECTION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 

<section class="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">

<div class="bg-[url('./images/indoor.jpg')] bg-center bg-cover relative h-60 flex-grow-1 w-full" data-aos='slide-zoom'>
<a href="#interior">
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-5 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
    </div>
    <h2 
      class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
     Interior Designs</h2>
     </a>
</div>

<div class="bg-[url('./images/outdoor.jpg')] bg-center bg-cover  relative h-60 flex-grow-1 w-full">
  <a href="#exterior">
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-5 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
    </div>
    <h2
      class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
     Exterior Designs</h2>
  </a>
</div>

{/* ////////////////////////////////////////////////////////////ABOUT SECTION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



</section>

  <section className="pt-24 pb-36 lg:py-36 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl" id="about">
    <div>
      <div className="flex flex-col lg:mx-8 lg:flex-row">
        <div className="w-full mt-8 lg:mt-0">
          <h2 className="mt-4 mb-10 font-bold text-4xl text-gray-700">About Designs</h2>
          <p className="text-gray-600 leading-loose mb-6">
          Ergonomic design and well utilized space are two of the most important aspects of an ideal house. 
          A well-designed interior built with ergonomic design, with good space utilization can help make the rooms more spacious.
          </p>
          <p className="text-gray-600 leading-loose mb-6">
           We at Design at Decks are all of that.
          </p>
          <p className="text-gray-600 leading-loose mb-6">
           For us, having a modern design is not all about the latest but on how the family will reside can feel at home.
           Anything should easily be familiar with the design, comfort and most important of all security.
           When you require even the small details we will listen and will not overlook.
          </p>
          <p className="text-gray-600 leading-loose mb-6">
            We can recommend things that you never heard of, designs that you haven't seen yet but you will like it. Our portfolio is full
            of new designs that our clients are suprised and satisfied with our years of experienced. We are just a small company that's why
            we are hunger for innovation and satisfaction of our client is our main goal. 
          </p>
          <p className="text-gray-600 leading-loose mb-6">
            Design at decks would like to offer you free estimate costs, quote or maybe just an inquiry about your plans and we are happy to help.
            Just message us below in this simply website because we don't want to over complicate things for our future client and hopefully that is you.
          </p>
          <p className="text-gray-600 leading-loose mb-6">
            Thank you
          </p>
        </div>
        <div className="cust_offset-border relative w-full my-8 pb-96 lg:pb-0 lg:ml-44">
          <div className="bg-[url('./images/interior-text.jpg')] bg-cover bg-center w-full h-full z-20 cursor-pointer bg-opacity-70" data-modal-toggle="defaultModal10" type="button" data-aos='slide-left'>
          <div id="defaultModal10" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/interior-text.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
</div>
        </div>
      </div>
      </div>
</div>





{/* ////////////////////////////////////////////////////////////DAY AND NIGHT SECTION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

</section>


<section className="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2"  data-aos='zoom'>

<div className="bg-[url('./images/exteriorday.jpg')] bg-center bg-cover relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal8" type="button">
</div>


<div id="defaultModal8" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/exteriorday.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal8" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Close</button></div>


<div className="bg-[url('./images/exteriornight.jpg')] bg-center bg-cover  relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal9" type="button">
</div>
<div id="defaultModal9" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/exteriorday.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal9" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Close</button></div>




{/* ////////////////////////////////////////////////////////////INTERIOR SECTION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

</section>


<div className="p-20 flex justify-center">
  <h1 className="bg-yellow-50 p-5 font-semi-bold text-6xl" id="interior">INTERIOR</h1>
</div>

<section className="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">

<div className="bg-[url('./images/indoor1.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal" type="button"  data-aos='slide-right'>
</div>

<div id="defaultModal" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/indoor1.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Close</button></div>




<div className="bg-[url('./images/indoor2.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal1" type="button"  data-aos='slide-left'>
</div>

<div id="defaultModal1" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/indoor2.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal1" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>

</section>


<section className="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">


<div className="bg-[url('./images/indoor3.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal2" type="button" data-aos='slide-right' >
</div>

<div id="defaultModal2" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/indoor3.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal2" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>




<div className="bg-[url('./images/indoor4.jpg')] bg-center bg-cover  cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal3" type="button" data-aos='slide-left'>
</div>
<div id="defaultModal3" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/indoor4.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal3" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>


</section>


{/* ////////////////////////////////////////////////////////////EXTERIOR SECTION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


<div className="p-20 flex justify-center">
  <h1 className="bg-yellow-50 p-5 font-semi-bold text-6xl" id="exterior">EXTERIOR</h1>
</div>



<section className="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">

<div className="bg-[url('./images/outdoor1.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal4" type="button" data-aos='slide-down'>
</div>

<div id="defaultModal4" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/outdoor1.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal4" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>

<div className="bg-[url('./images/outdoor2.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal5" type="button" data-aos='slide-down'>
</div>

<div id="defaultModal5" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/outdoor2.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal5" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>

</section>


<section className="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">


<div className="bg-[url('./images/outdoor3.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal6" type="button" data-aos='slide-up'>
</div>

<div id="defaultModal6" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/outdoor3.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal6" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>

<div className="bg-[url('./images/outdoor4.jpg')] bg-center bg-cover cursor-pointer relative h-60 flex-grow-1 w-full" data-modal-toggle="defaultModal7" type="button" data-aos='slide-up'>
</div>

<div id="defaultModal7" tabindex="-1" aria-hidden="true" className="hidden bg-[url('./images/outdoor4.jpg')] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 2xl:inset-0 h-modal 2xl:bg-contain 2xl:bg-center bg-no-repeat xl:inset-0 h-modal xl:bg-contain xl:bg-center bg-no-repeat lg:inset-0 h-modal lg:bg-contain lg:bg-center bg-no-repeat md:inset-0 h-modal md:bg-contain md:bg-center bg-no-repeat sm:inset-0 h-modal sm:bg-cover sm:bg-center bg-no-repeat">
<button data-modal-toggle="defaultModal7" type="button" class="text-yellow bg-white bg-opacity-70 hover:bg-yellow-300-bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
          Close
                </button></div>


{/* ////////////////////////////////////////////////////////////GET QUOTE SECTION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


</section>

{/* ////////////////////////////////////////////////////////////FORM SECTION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

<div className='flex-col justify-center mb-20'>

          <div className='mt-6 p-6 text-center' id="quote">
        <h1 className='mt-5 p-0 text-4xl text-theme'>Get in touch</h1>
        <h1 className='mt-0 p-6 text-2xl text-theme'>Free Estimate Costs & Quote</h1>
        </div>
        <div className='mt-6 flex justify-center'>
    <form class="w-full max-w-lg" onSubmit={sendEmail}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" name="name"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Email" name="email"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Subject
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" name="subject "/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" value="Send Message" type="submit">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
</div>
</div>

{/* ////////////////////////////////////////////////////////////FOOTER SECTION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


  <footer class="pt-24 pb-16 bg-yellow-100">
    <div class="flex flex-col mx-4 lg:flex-row items-start justify-between lg:mx-auto max-w-screen-xl">

      <div class="flex flex-col lg:w-1/2 pb-12 lg:pb-0 border-b border-gray-200 lg:border-none ">

        <a class="flex items-center w-mc" href="/">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.6814 11.7333L15.6443 2.60742L2.6073 11.7333H14.3406V28.6815H16.948V11.7333H28.6814ZM15.6443 5.78846L20.4159 9.12594H10.8728L15.6443 5.78846Z"
              fill="#374151" />
            <path
              d="M5.3973 15.6444L2.84204 16.1268L3.91108 21.824V28.6814H6.51849L6.54456 23.4666H9.12589V28.6814H11.7333V20.8592H6.38812L5.3973 15.6444ZM24.9007 20.8592H19.5555V28.6814H22.1629V23.4666H24.7443L24.7703 28.6814H27.3777V21.824L28.4468 16.1268L25.8915 15.6444L24.9007 20.8592Z"
              fill="#374151" />
          </svg>
          <span class="ml-2 uppercase font-bold text-xl text-gray-700">Design at Decks</span>
        </a>
        <p class="leading-relaxed lg:text-sm mt-6 w-11/12 lg:w-4/5 text-gray-700">Ermita Manila, Luneta Park 500 Philippines</p>
        <p class="leading-relaxed lg:text-sm mt-6 w-11/12 lg:w-4/5 text-gray-700">Tel: 456-123-123</p>
        <p class="leading-relaxed lg:text-sm mt-6 w-11/12 lg:w-4/5 text-gray-700">Email: design@decks.ph</p>


      </div>

      <div class="flex flex-col mt-12 lg:mt-0 lg:w-1/5">
        <h3 class="uppercase text-sm font-bold text-gray-400">Helpful Links</h3>
        <ul class="font-medium mt-3 lg:mt-6 text-gray-700">
          <li class="mb-3 uppercase hover:text-gray-800 hover:underline"><a href="#interior">Designs</a>
          </li>
          <li class="mb-3 uppercase hover:text-gray-800 hover:underline"><a href="#about">About</a></li>
        </ul>
      </div>

      <div class="flex flex-col mt-12 lg:mt-0 lg:w-1/5">
        <h3 class="uppercase text-sm font-bold text-gray-400">Get in touch</h3>
        <ul class="font-medium mt-3 lg:mt-6 text-gray-600">
          <li class="mb-3 uppercase hover:text-gray-800 hover:underline"><a href="#quote">Contact</a>
          </li>
          <li class="mb-3 uppercase hover:text-gray-800 hover:underline"><a href="#quote">Request
              Quote</a>
          </li>
        </ul>
      </div>


      <div class="flex flex-col mt-12 lg:mt-0 lg:w-1/5">
        <h3 class="uppercase text-sm font-bold text-gray-400">Social</h3>
        <div class="flex mt-6 text-gray-500">
         
          <a class="hover:text-gray-700" href="/">
            <svg class="mr-4 fill-current" width="21" height="17" viewBox="0 0 21 17" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" />
            </svg>
          </a>
          <a class="hover:text-gray-700" href="/">
            <svg class="mr-4 fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path
                d="M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92V12.92H5.9V10.02H8.44V7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11V6.58H13.19C11.95 6.58 11.56 7.35 11.56 8.14V10.02H14.34L13.89 12.92H11.56V19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z" />
            </svg>
          </a>
          <a class="hover:text-gray-700" href="/">
            <svg class="mr-4 fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path
                d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
            </svg>
          </a>
        </div>
      </div>


    </div>

    <div class="flex flex-col items-center mt-24 text-xs text-gray-400">
      <div class="mb-4">
        <a class="mx-4 hover:text-gray-600" href="/privacy_policy.html" rel="nofollow">Privacy Policy</a>
        <a class="mx-4 hover:text-gray-600" href="/terms_and_conditions.html" rel="nofollow">Terms &amp;
          Conditions</a>
      </div>
      <span>&copy; Design at Decks 2022</span>
    </div>
  </footer>





</body>



  );
}

export default App;
