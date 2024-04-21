const services = [
  {
    dataAosDelay: 200,
    iClass: "bi bi-code",
    title: "Web Designing",
    desc: `Crafting captivating digital experiences through innovative design solutions tailored to your
    brand's unique identity.`
  },
  {
    dataAosDelay: 300,
    iClass: "bi bi-globe-asia-australia",
    title: "Web Hosting",
    desc: `Reliable and secure hosting solutions ensuring your website stays online 24/7, backed by expert
    technical support.`
  },
  {
    dataAosDelay: 400,
    iClass: "bi bi-kanban",
    title: "Coding Projects",
    desc: `Engaging coding projects to enhance skills and foster innovation in tech enthusiasts and students.`
  },
  {
    dataAosDelay: 500,
    iClass: "bi bi-printer",
    title: "Printed Material",
    desc: `Printed material is also provided by us - Manuals and Blackbooks for IT Projects.`
  }
] 
const projects = [
  {
    title: "Typing Test Web-app",
    desc: `Experience the ultimate typing challenge with our web application offering three
      skill levels - simple, medium, and hard. Compete against top scores, accessible seamlessly on any
      device.`,
    link: "https://13jagadish10.github.io/typing_test/",
    img: "typing_logo.png"
  },
  {
    title: "Text formatting Web-app",
    desc: `Elevate your text formatting tasks effortlessly with our web application. Convert
      text to uppercase, capitalize words and sentences, remove extra spaces, and effortlessly gauge word
      count and reading time.`,
    link: "https://13jagadish10.github.io/txt_format/",
    img: "txtformat_logo.png"
  },
  {
    title: "Calculator",
    desc: `Streamline your calculations with our versatile web application, equipped to
      handle all your basic mathematical needs with ease and efficiency.`,
    link: "https://13jagadish10.github.io/calculator/",
    img: "calculator_logo.png"
  },
  {
    title: "Tic Tac Toe",
    desc: `Dive into the classic fun of Tic Tac Toe with our interactive web application,
      offering thrilling multiplayer matches and challenging AI opponents.`,
    link: "https://13jagadish10.github.io/ox-game/",
    img: "tictactoe_logo.png"
  },
  {
    title: "Click the Bubble",
    desc: `Sharpen your focus and concentration with our engaging web application, Click the
      Bubble Game, designed to enhance cognitive skills through interactive gameplay.`,
    link: "https://13jagadish10.github.io/bubble_game/",
    img: "bubble_logo.png"
  },
  {
    title: "Code Editor",
    desc: `Elevate your coding experience with our versatile web application, a
      mobile-responsive code editor enabling seamless editing of HTML, CSS, and JavaScript directly in your
      browser, with automatic local storage for convenience.`,
    link: "https://13jagadish10.github.io/code_editor/",
    img: "codeeditor_logo.png"
  },
  {
    title: "Task List",
    desc: `Boost your productivity with our intuitive web application task list, perfect for
      organizing daily tasks and ensuring timely completion. Effortlessly track past task history for
      enhanced efficiency and workflow management.`,
    link: "https://13jagadish10.github.io/tasklist/",
    img: "tasklist_logo.png"
  },
  {
    title: "Twitter UI Clone",
    desc: `Experience the familiar interface of Twitter on any device with our
      mobile-responsive web application, offering a sleek and intuitive UI clone for seamless browsing and
      interaction.`,
    link: "https://13jagadish10.github.io/twitter/",
    img: "twitter_logo.png"
  }
] 
const testimonial = [
  {
    img: 'bhavesh.JPG', name: 'Bhavesh Gharat', desc: 'Full stack web developer', content: `IT Circle has been instrumental in advancing my programming skills and career. The supportive community, valuable resources, and collaborative environment have provided me with the tools and inspiration to excel in the IT field.`,
  },
  {
    img: 'rohan.png', name: 'Rohan Rasalkar', desc: 'Programmer', content: `Working with IT Circle has been an incredible experience. Their expertise in web development and dedication to delivering high-quality solutions have helped our clients achieve their goals efficiently and effectively.`,
  },
  {
    img: 'harshal.png', name: 'Harshal Bhondave', desc: 'Programmer, Marketing agent', content: `I've had the pleasure of being a part of IT Circle for some time now, and it has been an enriching experience. Not only have I honed my programming skills, but I've also gained valuable insights into marketing strategies, thanks to the supportive team environment.`,
  },
  {
    img: 'raj.png', name: 'Raj Dagale', desc: 'Freelancer', content: `Joining IT Circle has been a game-changer for me. The collaborative atmosphere and collective knowledge of the team have empowered me to tackle complex programming challenges with confidence and creativity. I'm  grateful to be a part of such an inspiring community.`,
  }
] 
const members = [
  {
    name: "Bhavesh Gharat",
    desc: `Bhavesh is a skilled full-stack web developer proficient in PHP and MERN stack, adept at creating dynamic and innovative web solutions.`,
    social: {
      twitter:"https://twitter.com/BhaveshGharat07",
      facebook: "https://www.facebook.com/bhavesh.gharat",
      insta:"https://www.instagram.com/bhavesh.gharat.7",
      linkedin:"https://www.linkedin.com/in/bhavesh-gharat-27833a293"
    },
    img: "bhavesh.JPG"
  }, 
  {
    name: "Rohan Rasalkar",
    desc: `Rohan is a talented programmer with expertise in various technologies, known for his problem-solving skills and commitment to excellence in software development.`,
    social: {
      twitter:"#",
      facebook: "#",
      insta:"#",
      linkedin:"#"
    },
    img: "rohan.png"
  }, 
  {
    name: "Harshal Bhondave",
    desc: `Harshal is a versatile programmer and effective marketing agent, combining technical expertise with strategic marketing skills to drive success for IT Circle.`,
    social: {
      twitter:"#",
      facebook: "#",
      insta:"#",
      linkedin:"#"
    },
    img: "harshal.png"
  }, 
  {
    name: "Raj Dagale",
    desc: `Raj is a dedicated programmer known for developing elegant and functional software solutions, with a passion for continuous learning and innovation in the IT field.`,
    social: {
      twitter:"#",
      facebook: "#",
      insta:"#",
      linkedin:"#"
    },
    img: "raj.png"
  }, 
]

document.addEventListener('DOMContentLoaded', () => {
  function loadExcessContent() {
    const projectscontainer = document.getElementById("projectscontainer")
    const servicescontainer = document.getElementById("servicescontainer")
    const testimonialcontainer = document.getElementById("testimonialcontainer")
    const memberscontainer = document.getElementById("memberscontainer")

    projects.forEach((elem) => {
      let i = 100;
      projectscontainer.innerHTML += `
        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="${i}"> <div class="service-item d-flex"> <div class="icon flex-shrink-0"><img src="assets/img/logos/${elem.img}" class="proj_logo"></div> <div> <h4 class="title"><a href="${elem.link}" class="stretched-link" target="_blank">${elem.title}</a></h4> <p class="description">${elem.desc}</p> </div> </div> </div>
        
        `
      i += 100
    })
    services.forEach((elem) => {
      let i = 100;
      servicescontainer.innerHTML += `
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="${i}"> <div class="icon-box"> <i class="${elem.iClass}"></i> <h3>${elem.title}</h3> <p>${elem.desc}</p> </div> </div>
        `;
      i += 100;
    })
    testimonial.forEach((elem) => {
      testimonialcontainer.innerHTML += `
      <div class="swiper-slide"> <div class="testimonial-item"> <div class="d-flex"> <img src="assets/img/team/${elem.img}" class="testimonial-img flex-shrink-0" alt=""> <div> <h3>${elem.name}</h3> <h4>${elem.desc}</h4> <div class="stars"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </div> </div> </div> <p> <i class="bi bi-quote quote-icon-left"></i> <span>${elem.content}</span> <i class="bi bi-quote quote-icon-right"></i> </p> </div> </div>  
      `;
    })
    members.forEach((elem)=>{
      let i = 100;
      memberscontainer.innerHTML+=`
      <div class="col-lg-4 col-md-8 member" data-aos="fade-up" data-aos-delay="${i}">
      <div class="member-img">
        <img src="assets/img/team/${elem.img}" class="img-fluid" alt="">
        <div class="social">
          <a href="${elem.social.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>
          <a href="${elem.social.facebook}" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="${elem.social.insta}" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="${elem.social.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>${elem.name}</h4>
        <span>Member of IT Circle</span>
        <p>${elem.desc}</p>
      </div>
    </div>
      `
      i += 100;
    })
  }
  window.addEventListener('load', loadExcessContent);
})
function submitFormData(obj) {
  const formData = new FormData();
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      formData.append(prop, obj[prop]);
    }
  }
  return fetch('https://backenditcircle.000webhostapp.com/index.php', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'credentials': 'include'
    },
    body: formData
  })
    .then(response => {
      return response.json();
    })
    .then(data => { 
      return data; 
    })
    .catch(error => {
      console.error('There was a problem with the POST request', error);
      return { success: false, message: 'An error occurred while submitting the form data' };
    });
}
function showSpinner(element, size = 20) {
  if (element.innerHTML) {
    element.innerHTML = `<div class="spinner-border text-light" style="height:${size}px; width:${size}px;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`}
}
function hideSpinner(element, text = "Submit") {
  if (element.innerHTML) {
    element.innerHTML = text;
  }
}
function resetLoginModal(body = "", footer = "") {
  const bodycontainer = document.getElementById('loginFormBody')
  const footercontainer = document.getElementById('loginModalFooter')
  if (body !== "") {
    bodycontainer.innerHTML = body;
  } else {
    bodycontainer.innerHTML = `<div class="mb-2"><label for="loginEmail" class="form-label">Email address</label><input type="email" class="form-control" id="loginEmail" required></div><div class="mb-2"><label for="loginpass" class="form-label">Password</label>
    <input type="password" class="form-control" id="loginpass" minlength="7" required><div id="forgotPass" class="form-text text-danger cptr">Forgot password?</div></div>`;
  }
  if (footer !== "") {
    footercontainer.innerHTML = footer;
  } else {
    footercontainer.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <button type="submit" class="btn btn-primary" id="submitLogin">Login</button>`;
  }

}
function resetRegisterModal(body = "", footer = "") {
  const bodycontainer = document.getElementById('registerFormBody')
  const footercontainer = document.getElementById('regmodalfooter')
  if (body !== "") {
    bodycontainer.innerHTML = body;
  } else {
    bodycontainer.innerHTML = `<label for="registerName" class="form-label">Your Name</label> <input type="text" class="form-control" id="registerName" required> </div>  <div class="mb-2"> <label for="registerContact" class="form-label">Contact no</label> <input type="text" class="form-control" id="registerContact" required> </div>  <div class="mb-2"> <label for="registerEmail" class="form-label">Email address</label> <input type="email" class="form-control" id="registerEmail" required> </div> <div class="mb-2"> <label for="registerPass" class="form-label">Password</label> <input type="password" class="form-control" id="registerPass" minlength="7" required> </div> <div> <label for="registerPassCon" class="form-label">Confirm Password</label> <input type="password" class="form-control" id="registerPassCon" minlength="7" required> <div id="registerPassHelp" class="form-text text-danger"></div> </div>`;
  }
  if (footer !== "") {
    footercontainer.innerHTML = footer;
  } else {
    footercontainer.innerHTML = `<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="submit" class="btn btn-primary" id="submitRegister">Submit</button>`;
  }
}
function launchModals() {
  document.getElementById('launchRegModal').addEventListener('click',  ()=>{resetRegisterModal()})
  document.getElementById('launchLoginModal').addEventListener('click',  ()=>{resetLoginModal()})
  document.getElementById('loginModal').addEventListener('shown.bs.modal', () => {
    document.getElementById('forgotPass') && document.getElementById('forgotPass').addEventListener('click', () => {
      resetLoginModal(body = `<div class="mb-2"><label for="forgotPassEmail" class="form-label">Enter your email id</label><input type="email" class="form-control" id="forgotPassEmail" required></div>`, footer = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <button type="submit" class="btn btn-primary" value="submitforgotpass" id="submitforgotpass">Send Otp</button>`)
    })
  })
}
function formHandler() {
  const loginForm = document.getElementById('loginForm')
  const registerForm = document.getElementById('registerForm') 
  const registerPrimary = (e) => {
    e.preventDefault();
    var name = registerForm.elements[1].value;
    var contact = registerForm.elements[2].value;
    var email = registerForm.elements[3].value;
    var password = registerForm.elements[4].value;
    var conpass = registerForm.elements[5].value;
    var passErr = document.getElementById('registerPassHelp');
    if (password === conpass) {
      showSpinner(document.getElementById('submitRegister')); 
      passErr.innerHTML = "";
      submitFormData({name, email, action: 'sendotptoregister'})
      .then(response => {
        if (response.success) { 
          hideSpinner(document.getElementById('submitRegister'), 'Submit');
          resetRegisterModal(body = `<div class="mb-2"> <label for="registerOTP" class="form-label">Enter Email OTP</label>  <input type="text" class="form-control" id="registerOTP" required> </div>`)
          registerForm.removeEventListener('submit', registerPrimary) //removing the previous event listener of requesting otp
          registerForm.addEventListener('submit', (e) => { //adding new eventlistener to submit otp
            e.preventDefault();
            var otp = registerForm.elements[1].value;
            showSpinner(document.getElementById('submitRegister'));
            submitFormData({ email, name, password, contact, otp, action: 'register'})
              .then(response => { 
                if (response.success) {
                  hideSpinner(document.getElementById('submitRegister'), 'Submit'); 
                  console.log('Form submitted successfully:', response);
                  resetRegisterModal(body = `<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Thank you!</h4> <hr> <p>${response.message}</p> </div>`)
                } else if (response.invalidOTP) {
                  resetRegisterModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Ouchhh!</h4> <hr> <p>${response.message}</p> </div>`)
                  setTimeout(() => { window.location.reload() }, 2000)
                } else {
                  resetRegisterModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Ouchhh!</h4> <hr> <p>Something went wrong! please try again!</p> </div>`)
                  hideSpinner(document.getElementById('submitRegister'), 'Submit'); 
                  console.error('Form submission failed:', response.message);
                }
                document.getElementById('submitRegister').remove(); 
              })
              .catch(error => { 
                console.error('An error occurred:', error);
              }); 
          })
        } else {
          hideSpinner(document.getElementById('submitRegister'), 'Submit');
          console.error('Failed to send OTP:', response.message); 
        }
      })
        .catch(error => {
          hideSpinner(document.getElementById('submitRegister'), 'Submit');
          console.error('An error occurred:', error); 
        }); 
    } else {
      passErr.innerText = "Password does not match";
    }  
  }
  registerForm.addEventListener('submit', registerPrimary)

  const login = (e) => {
    e.preventDefault();
    var purpose = loginForm.elements[1].id;
    let email = loginForm.elements[1].value;
    if (purpose == "loginEmail") {
      var password = loginForm.elements[2].value;
      showSpinner(document.getElementById('submitLogin'))
      submitFormData({ email, password, action:'login' })
        .then(response => {
          if (response.success) {
            hideSpinner(document.getElementById('submitLogin'), 'Submit'); 
            console.log('Logged successfully:', response);
            resetLoginModal(body = `<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Thank you!</h4> <hr> <p>${response.message}</p> </div>`)
          } else if (response.invalidCred) {
            resetLoginModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Ouchhh!</h4> <hr> <p>${response.message}</p> </div>`) 
            setTimeout(() => { window.location.reload() }, 2000)
          } else {
            resetLoginModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Ouchhh!</h4> <hr> <p>Something went wrong! please try again!</p> </div>`) 
            console.error('Form submission failed:', response.message);
            hideSpinner(document.getElementById('submitLogin'), 'Submit');
          } 
        })
        .catch(error => { 
          console.error('An error occurred:', error);
        });
    } else if (purpose == "forgotPassEmail") {
      showSpinner(document.getElementById('submitforgotpass'))
      submitFormData({ email, action: 'forgotPass'})
        .then(resp => {
          if (resp.success) {
            resetLoginModal(body = `<div class="mb-2"> <label for="resetPassOTP" class="form-label">Enter Email OTP</label>  <input type="text" class="form-control" id="resetPassOTP" required> </div>
          <div class="mb-2"> <label for="fpass" class="form-label">Password</label> <input type="password" class="form-control" id="fpass" minlength="7" required> </div>  <div> <label for="fpasscon" class="form-label">Confirm Password</label> <input type="password" class="form-control" id="fpasscon" minlength="7" required> <div id="forgotpasshelp" class="form-text text-danger"></div> </div>`, footer = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <button type="submit" class="btn btn-primary" id="submitLogin">Submit</button>`)
          } else {
            resetLoginModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Oops!</h4> <hr> <p>${resp.message}</p> </div>`, footer = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`)
          }
        }) 
    } else if (purpose == "resetPassOTP") {
      const otp = loginForm.elements[1].value;
      const password = loginForm.elements[2].value;
      const conpass = loginForm.elements[3].value; 
      if (password === conpass) {
        submitFormData({ otp, password, action: 'resetPassOTP' })
          .then((resp) => {
            if (resp.success) {
              resetLoginModal(body = `<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Thank you!</h4> <hr> <p>${resp.message}</p> </div>`)
              setTimeout(() => {
                resetLoginModal()

              }, 1500)


            } else {
              resetLoginModal(body = `<div class="alert alert-danger" role="alert"> <h4 class="alert-heading">Oops!</h4> <hr> <p>${resp.message}</p> </div>`)
            }
          })
      } else {
        document.getElementById('forgotpasshelp').innerHTML = "Password does not match!";
      }
    }
  }
  loginForm.addEventListener('submit', login)
}
window.addEventListener('load', formHandler);
window.addEventListener('load', launchModals);