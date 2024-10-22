---
layout: home

title: 👋 Hey, I'm Daniel 🧑🏻‍💻! 
titleTemplate: Portfolio

hero:
  name: "<span id=\"greetings\">Hey!</span> 👋 I'm"
  text: "<span id=\"myname\">Daniel Travaglia</span>"
  actions:
    - theme: alt
      text: 👨‍💻 Solftware Engineer
    - theme: alt
      text: 🏔️🎾🏃🏻 Sport Enthusiast
    - theme: alt
      text: 🎺 Trumpet Player
  image:
    src: /dani.jpg
    alt: Daniel Travaglia

features:
  - title: 📖 About Me
    details: Hello there! 👋 I'm Daniel, a <span id="agePlaceholder">26</span>-year-old MSc graduate in Software and Data Engineering from USI 🎓. I work as an IT Consultant at a boutique engineering firm in Mendrisio, Switzerland 🇨🇭. We specialize in helping large organizations optimize their Enterprise Content Management (ECM) workflows. <br><br>Besides work, I'm an avid reader 📚—especially into self-growth and biographies. I love staying updated with the latest trends in my areas of passion 🔍. When the sun is shining, you'll find me hiking 🥾 or swimming in the lake 🏊‍♂️. Winter seasons is all about hitting the slopes for some skiing 🎿.
    
  - title: 🎯 My Skills
    details: On a daily basis, I have the chance to dive into Full Stack Development 🖥️, ensuring that business logic is properly handled and the user experience feels great for our clients. Through my journey, I've had the pleasure of developing and maintaining customer interactions 🤝, which has pushed me out of my comfort zone and allowed me to develop relational skills—whether it's presenting, conducting demos, or understanding client needs. <br><br> I'm proficient in Full Stack Development 🌐 (with a special love for frontend development) and have recently developed an interest in Artificial Intelligence applications 🤖.

---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(
    120deg,
    rgba(255, 105, 180, 0.8) 30%,   /* Hot Pink */
    rgba(0, 191, 255, 0.8) 70%,     /* Deep Sky Blue */
    rgba(50, 205, 50, 0.8) 100%     /* Lime Green */
  );
  --vp-home-hero-image-filter: blur(18px);
  --vp-home-hero-image-border-radius: 35px;
  --gradient-first-color: #ff69b4;  /* Hot Pink */
  --gradient-second-color: #00bfff; /* Deep Sky Blue */
  --gradient-third-color: #32cd32;  /* Lime Green */
}

#myname {
  background: linear-gradient(45deg, 
      var(--gradient-first-color) 0%, 
      var(--gradient-second-color) 35%, 
      var(--gradient-third-color) 65%
    );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  background-size: 300% 300%;
  background-position: 0;
  animation-fill-mode: forwards;
}

/* Gradient shift animation for more dynamic visuals */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPImage {
    -webkit-animation: droplet 8s ease-in-out infinite;
    animation: droplet 8s ease-in-out infinite;
    border: 3px solid var(--vp-home-hero-name-color);
}

@keyframes droplet {
    0% {
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; 
    }
    25% {
      border-radius: 45% 55% 55% 45% / 55% 60% 40% 45%; 
    }
    50% {
      border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%; 
    }
    75% {
      border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; 
    }
    100% {
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; 
    }
}

@keyframes slideIn {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 20%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.item, .action, .vp-doc {
  /*opacity: 0;*/
  /* animation: fadeIn 1s ease-in-out; */
  animation-delay: 1s;
  animation-fill-mode: forwards; 
}

  #greetings {
    white-space: nowrap;
    overflow: hidden;
  }
</style>

<script setup>
  import { onMounted } from 'vue'

  const names = ["Hey!", "Ciao!", "Uella!", "Hallo!", "Hola!", "Salut!"];
  let currentIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeSpeed = 150; 
  const deleteSpeed = 150;
  const delayBetween = 5000;

  function typeWriter() {
    const currentName = names[currentIndex];
    const heroNameElement = document.getElementById('greetings');

    if (!heroNameElement) {
      return;
    }

    if (deleting) {
      heroNameElement.textContent = currentName.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        currentIndex = (currentIndex + 1) % names.length;
        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, deleteSpeed);
      }
    } else {
      heroNameElement.textContent = currentName.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentName.length) {
        deleting = true;
        setTimeout(typeWriter, delayBetween);
      } else {
        setTimeout(typeWriter, typeSpeed);
      }
    }
  }

  function setAge() {
    const BDAY = "1998-07-30";
    const diff = new Date(new Date() - new Date(BDAY))
    const age = diff.getUTCFullYear() - 1970;
    agePlaceholder.textContent = age;
  }

  function shouldRunAnimation() {
    return !localStorage.getItem('hasVisited');
  }

  function setVisitedFlag() {
    localStorage.setItem('hasVisited', 'true');
  }

  function applyInitialAnimations() {
    document.querySelectorAll('.item, .action, .vp-doc').forEach(element => {
      element.style.opacity = '0';
      element.style.animation = 'fadeIn 1s ease-in-out';
      element.style.animationDelay = '1s';
      element.style.animationFillMode = 'forwards';
    });
  }


onMounted(() => {
  if (shouldRunAnimation()) {
     setVisitedFlag();
     applyInitialAnimations();
  }

  typeWriter();
  setAge();
});

</script>

<!--@include: ./parts/experience.md-->
<!-- @include: ./parts/highlighted_projects.md -->
<!-- @include: ./parts/education.md -->