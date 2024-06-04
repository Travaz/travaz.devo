---
layout: home

title: 👋 Hey, I'm Gianlorenzo 🍕! 
titleTemplate: Portfolio

hero:
  name: <span id="greetings">Hey!</span> 👋 I'm
  text: <span id="myname">Gianlorenzo Occhipinti </span>
  actions:
    - theme: alt
      text: 👨‍💻 Solftware Engineer
    - theme: alt
      text: ☁️ Cloud Services
    - theme: alt
      text: 🧠 ML & AI
  image:
    src: /gianlo.jpeg
    alt: Gianlorenzo Occhipinti, Pizza Lover

features:
  - title: 📖 A Bit About Me
    details: Hey there! My name is Gianlorenzo, but you'll end up calling me Gianlo. I'm a <span id="agePlaceholder">XX</span>-year-old MSc graduate. I am currently working as a Software Engineer at Renuo AG in Zürich 🇨🇭 <br><br> Besides my work, I love working on projects to broaden my vision and serve as the CTO of a startup, driving innovation and technology 🚀🔥
  - title: 🎯 My Skills
    details: Proficient in Full Stack Development, DevOps, and Cloud Technologies, with foundational expertise in Artificial Intelligence and Data Visualization 🤖📊 <br><br> My entrepreneurial skills focus on cost-optimizing 💰 every process and pioneering new solutions. 🚀
  - title: 🍕 Fun Facts
    details: When I'm not coding, I enjoy team-based games and playing chess ♟️. I'm into finance 📈 and love exploring market trends. Food is a big passion, and of course, pizza 🍕 is my favorite!  <br><br> Whether it's new tech, games, or culinary delights, I bring enthusiasm 🤩 to everything I do.

---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-home-hero-image-border-radius: 20px;
}

#myname {
  background: -webkit-linear-gradient(180deg, #bd34fe 50%, #47caff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes zoomInBounce {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.item, .action, .vp-doc {
    animation: zoomInBounce 1s ease-in-out;

}

  #greetings {
    white-space: nowrap;
    overflow: hidden;
  }
  .name, .text {
      animation: 1s ease-out 0s 1 slideInFromLeft;

  }
</style>

<script setup>
  import { onMounted } from 'vue'

  const names = ["Hey!", "Ciao!", "Grüezi!", "Hallo!", "Hola!", "Salut!", "Hej!"];
  let currentIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeSpeed = 100; 
  const deleteSpeed = 50;
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
    // Yes, I am a very lazy person, but that is also my virtue

    const BDAY = "10-14-1998";
    const diff = new Date(new Date() - new Date(BDAY))
    const age = diff.getUTCFullYear() - 1970;
    agePlaceholder.textContent = age;
  }


onMounted(() => {
  typeWriter();
  setAge();
});

</script>

<!--@include: ./parts/experience.md-->
<!--@include: ./parts/highlighted_projects.md-->
<!--@include: ./parts/education.md-->


