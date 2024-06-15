---
title: Smart Garden IoT System
description: Developed an autonomous, fully configurable Smart Garden IoT system to monitor and water plants efficiently using various sensors and decentralized control.
tags: [IoT, Smart Garden, Microcontrollers, MQTT, Sensors]
image: /img/smartgarden.png
techs: [cpp, MQTT, docker, mysql, influxDB]
id: 'smart-garden'
aside: false
start: 2022-03
end: 2022-06
github: https://github.com/Gianlo98/smart-garden-IoT
---

### 🎯 Project Objectives
The main goal of the Smart Garden IoT project was to create an autonomous system that monitors soil moisture levels and waters plants intelligently based on environmental conditions. The system integrates multiple sensors and operates in a decentralized manner to avoid a single point of failure. The project aimed to provide a customizable, user-friendly solution for garden maintenance, leveraging IoT technology to optimize water usage and ensure plant health.

### 🔍 Key Areas of Focus
The Smart Garden system was designed with a focus on flexibility, modularity, and intelligent automation. It includes a variety of sensors to monitor environmental conditions and control watering:

- **Moisture Sensor:** Monitors soil moisture levels to determine when watering is needed.
- **Weather Sensor (via API):** Retrieves weather forecasts to avoid watering before predicted rain.
- **Photoresistor:** Measures ambient light levels to adjust watering schedules.
- **DHT11:** Tracks temperature and humidity for comprehensive environmental monitoring.
- **Water Tank Level Sensor:** Ensures there is sufficient water for the system to operate effectively.

The system features a smart rain function to prevent watering if rain is predicted, provided soil moisture is not critically low. It operates with decentralized control, meaning each node can dynamically assume master roles, ensuring robustness and eliminating single points of failure. 

### 🛠️ Work Done
In this project, I developed a network of microcontrollers, each capable of functioning independently. Here are the key functionalities and components implemented:

- **Decentralized Control:** Nodes communicate using MQTT and can dynamically assume the master role if the current master node goes offline. This ensures continuous operation without a single point of failure.
- **Smart Watering System:** The system makes intelligent decisions about when to water plants based on soil moisture levels and weather forecasts. If rain is predicted and the soil moisture is not critically low, the system will skip watering to conserve water.
- **User Interface:** A web interface allows users to monitor sensor values and system status, and configure settings such as sensor update intervals and moisture thresholds. Configuration changes are saved in an SQL database.
- **Data Storage:** The master node can optionally use an SQL database for storing network topology, configurations, and alarms, and InfluxDB for logging sensor data.

### 📈 Insights Gained
This project provided numerous insights into the development and deployment of robust IoT systems. Key takeaways include:

- **Modular Design:** Designing a system with modular components allows for greater flexibility and customization. Users can enable or disable modules based on their specific needs.
- **Decentralized Networks:** Implementing a decentralized architecture enhances fault tolerance and system resilience. By allowing any node to become the master, the system avoids a single point of failure.
- **Transfer Learning:** I applied transfer learning by reimplementing a simplified version of Cassandra's election protocol for the decentralized control mechanism. This approach helped ensure efficient and reliable master node election in the network.

### ❤️ Project Highlights
Working on the Smart Garden IoT system was incredibly rewarding. My passion, commitment, and curiosity for IoT drove me to create a system that not only works efficiently but also adapts to changing environmental conditions. The project was both fun and challenging, as it required integrating various technologies and solving complex problems. 

One of the most satisfying aspects was implementing the decentralized control mechanism, which ensured the system's robustness. Additionally, the smart rain feature demonstrated the practical benefits of IoT in conserving resources. **Achieving top grades and seeing the system work seamlessly was incredibly satisfying!** 😎

![Smart Garden IoT Board](/img/smartgarden-board.png)

[Link to the report (PDF)](/doc/unimib-smartgarden.pdf)
