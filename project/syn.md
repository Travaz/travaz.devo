---
title: SYN (usi)
description:  A novel approach to visualizing and understanding software evolution using interactive visual depictions and auditive portrayals.
tags: []
image: /logo/syn.webp
techs: ['java', 'graphql', 'react', 'docker']
id: 'syn' # must concide with file name
aside: false
start: 2021-10
end: 2022-07
github: https://github.com/USIREVEAL/SYN
---


When I began my master’s thesis, my supervisor, Michele Lanza, set an ambitious and seemingly impossible goal: analyze the history of the [Linux](https://github.com/torvalds/linux) repository, the largest repository on GitHub. 😱

At first, this goal seemed overwhelming, but I grew to believe in its feasibility. Fueled by motivation and determination, I dedicated myself to achieving this impossible task. This journey was incredibly tough, yet it provided invaluable life lessons, for which I am deeply grateful to Michele and the rest of the team. It was the hardest project I have ever worked on, but in the end, it was a triumph. 😆

As part of this project, I developed **SYN**, a web application designed to enhance the comprehension of software evolution by leveraging the concept of [synesthesia](https://en.wikipedia.org/wiki/Synesthesia). SYN aims to address the challenges posed by the vast amount of complex information generated during software development, making the comprehension process more intuitive and manageable.

A fun fact discovered while working on this project: have you ever seen the [first commit](https://github.com/torvalds/linux/commit/1da177e4c3f41524e886b7f1b8a0c1fc7321cac2) of the Linux repository? 👀 

Through SYN, I implemented an interactive visual and auditory depiction of software artifacts' evolution. The most significant achievement was successfully analyzing the Linux repository, which includes over one million commits and more than 100,000 evolving files. This accomplishment not only showcased SYN’s capabilities but also underscored the potential for innovative approaches to software evolution comprehension.

![Linux Repository Representation](/img/syn-linux.png)

### Project Highlights

- **Mining and Modeling Large Git Repositories**: I developed an approach to traverse and analyze the entire history of a git repository, starting from the first commit. This involved extracting and serializing information about modified files for each commit, ensuring logical tracking even when files were moved or renamed, and automating the analysis process to scale horizontally.
- **Sensorial Software Evolution Visualization**: I implemented an interactive visual depiction of evolving software artifacts. This allowed users to customize visualization properties such as colors, shapes, and metrics, providing a more intuitive understanding of software evolution.
- **Auditive Portrayal of Evolution**: I developed guidelines for composing audio sounds to represent the evolution of a project. This method was tested with real-life systems, including the Linux kernel, adding an auditory dimension to the visual data.

One of the main challenges was the parallel analysis of large repositories. Each worker produced a partial history, which then needed to be merged without duplicating file histories. By ensuring consistency in the identification of file histories and managing the historical sequence, we successfully overcame this obstacle. The most significant achievement was successfully analyzing the Linux repository, which included over one million commits and more than 100,000 evolving files.

### 🌟 Impact and Recognition 🌟

- 📚 **Publication**: Our findings and methodology were [published](https://ieeexplore.ieee.org/document/10174050), highlighting SYN's effectiveness in handling ultra-scale software systems. This publication showcases the innovative approach we developed and its broad applicability.
- 🏆 **Award**: I was awarded the **prize for the best presentation** of the thesis, an honor that recognized the hard work and dedication put into this project. This accolade is a testament to the project's impact and my commitment to excellence.
- 🎓 **Academic Excellence**: Thanks to this project, I received the highest possible grade at my Italian university, **110L/110L**. This grade reflects the quality and significance of the work completed.


![Me Winning the Best Presentation Prize](/img/syn-award.jpg)

## 
📹 **Demo**:
<iframe src="https://www.youtube.com/embed/YXytmPp48_E" title="SYN // Tool Demo @ ICPC 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📄 **Thesis**: [Link to Thesis](/doc/syn-thesis.pdf).

📊 **Presentation**: [Link to Presentation](/doc/syn-presentation.pdf).

🌐 **Website**: [SYN Project](https://syn.si.usi.ch/web/index.html).