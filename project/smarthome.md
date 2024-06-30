---
title: SmartHome (unimib)
description: Customizable MQTT-Based Smart Controller for Home Automation.
tags: []
image: /img/smart-home.png
techs: [java, MQTT, electron]
id: 'smarthome' # must concide with file name
github: https://github.com/Gianlo98/Smart-Home
aside: false
date: '2020-01-01'
end: '2020-02-01'
---

### Introduction 📚

The primary goal of this software was to create a logic system that manages the vast array of possible situations within a home environment. We aimed for versatility and customizability, avoiding preset restrictions like a "standard" environment. This required handling concurrency and conflicts typical of an event-driven system, akin to a "smart home brain".

One standout feature is the system's ability to classify situations into two types: those resolved through automation (automatic) and those requiring user intervention (semi-automatic). Once set up, the software autonomously manages most situations unless unknown user preferences arise.

Users can customize their home environment by modifying a JSON file containing specific automations for each situation, divided into conditions that must be met and resulting consequences. Another feature is data logging within the home, laying the groundwork for potential extensions like statistical analysis, user preference estimation, machine learning capabilities, and more.

### My Role and Responsibilities 🛠️

**This project was part of our software engineering class at the University of Milan-Bicocca, and our team achieved the highest grade (30L/30).** I was one of the three contributors, focusing on developing and documenting the software's core functionalities. My specific contributions included:

- Implementing the MQTT-based communication logic.
- Developing the JSON-based configuration system for user-defined automations.
- Collaborating on the creation of a custom simulator to support our smart home management software.

### Challenges and Learning Outcomes 🌱

One noteworthy aspect is the `MonitorService` class. While we aimed for broader functionality including statistical analysis and user preference estimation, these were not implemented but remain as potential extensions due to the project's open nature.

From a personal perspective, this project provided invaluable hands-on experience in software development. The management and implementation dynamics significantly enriched our knowledge in software engineering, transitioning from theory to practical application. Working with GitHub as a collaborative platform, we efficiently organized work sessions based on assigned tasks under "issues" and managed changes through dedicated branches. This prevented versioning errors and overlaps, helping us meet deadlines without undue stress.

### Documentation and Design 📑

We meticulously documented every engineering aspect, including:

1. **Use Case Analysis**: Detailed scenarios and requirements.
2. **Class Diagrams**: Design structures such as `EntityManager`, `Request`, `ErrorSupervisor`, and more.
3. **Sequence Diagrams**: State changes and activity flows for key components.
4. **Software Architecture Diagrams**: Package structures and state diagrams for different device types.
5. **Activity Diagrams**: Specific activities for core components like `SEC` and `EMAC`.

### Conclusion 🎓

All our objectives were successfully met. The project not only strengthened our technical skills but also provided practical insights into collaborative software development, preparing us for future professional challenges.
