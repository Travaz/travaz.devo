---
title: Rotation Monitor
description: Not sure about the right display orientation? Adjust them based on your needs!
tags: []
image: /img/rotation-monitor.png
techs: [csh]
id: 'rotation-monitor' # must concide with file name
aside: false
start: '2019-07'
end: '2019-08'
---

Not sure about the right display orientation? Adjust them based on your needs! Rotation Monitor is a smart device designed to automatically adjust your monitor's orientation based on its position. This hobby project was developed to enhance user experience by optimizing the screen layout for different activities. I found vertical orientation perfect for reading documents, while horizontal orientation works better for emails and multitasking.

### 💡 The Spark of Innovation
The idea for Rotation Monitor came from a simple observation: switching between different tasks often required changing my monitor's orientation manually. I saw an opportunity to optimize this process and make my workflow smoother and more efficient. By leveraging my skills in both hardware and software, I set out to create a device that would handle this task automatically, enhancing the overall user experience.

The journey was quite intresting! I Used an Arduino UNO equipped with a gyroscope, to send real-time orientation data to the computer (real-time = every 5s 🤥). The core of the system is a daemon program written in C#, utilizing the Windows API to constantly poll the serial port for gyroscope data. This program adjusts the display orientation based on the monitor's position, seamlessly switching between vertical and horizontal modes. It was incredibly satisfying to see my idea come to life and work as intended, merging my interests in IoT and IT into a practical solution.

🌟 Quick summary of the developed features
- 🌀 Automatic Orientation Adjustment: The device switches between vertical and horizontal orientations based on the monitor's position, making it perfect for various tasks.
- 📊 Gyroscope Data Integration: An Arduino UNO with a gyroscope sensor sends real-time orientation data to the computer.
- 👹 Daemon Program: A C# program utilizing the Windows API continuously polls the serial port for gyroscope data and adjusts the display orientation accordingly.

This project was a fantastic way to merge my interests in hardware and software, and it was incredibly satisfying to see it come to life!

![Demo](/img/rotation-monitor.gif)
