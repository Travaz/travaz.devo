---
title: Sonar Envy (usi)
description: Developed a custom Java rule to extend SonarQube’s static code analysis capabilities by detecting feature envy within codebases.
tags: []
image: /img/featureEnvy.webp
techs: [java]
id: 'sonar-envy' # must concide with file name
github: https://github.com/Gianlo98/Feature-Envy-sonarqube-plugin
aside: false
date: '2021-10-01'
end: '2021-10-01'
---

### Overview 📝

As part of a two-member team, I developed a custom SonarQube Java rule aimed at enhancing the static code analysis functionalities by detecting instances of feature envy. Feature envy is a code smell where a method tends to use more methods and data from other classes than from the class it resides in, indicating poor class encapsulation and high coupling.

### Goals and Objectives 🎯

Our primary goal was to create a SonarQube plugin that could efficiently identify this issue, thereby improving code quality and maintainability. 

### Development Process 🛠️

We began by researching the metrics and conditions that typically signify feature envy, such as:
- High external method calls compared to internal calls.
- Low ratio of internal to external calls.
- Overuse of static methods.
- Limited fan-out classes.

Our plugin was designed to visit class nodes, gather relevant metrics, and report feature envy when specific thresholds were met. This involved counting method calls, differentiating between internal and external calls, and tracking the use of instance variables and static methods.

### Results and Impact 📈
The project was a success. The plugin effectively identified feature envy instances in various codebases, providing valuable insights to developers. This contributed to better code quality and was well-received by our examiners, leading to us passing the course successfully.

### Conclusion 🎉
By extending SonarQube's capabilities, we demonstrated our ability to tackle real-world software engineering challenges, leveraging static code analysis to promote better software design principles.