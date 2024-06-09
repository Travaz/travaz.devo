---
title: MongoDB Summary
description: Investigation of the MongoDB architecture
tags: []
image: /img/mongo.png
techs: [java, mongodb]
id: 'mongo-study' # must concide with file name
aside: false
start: 2020-04
end: 2020-05
---

### 🎯 Project Goals
As part of the Database course, I dived deep into MongoDB to understand its architecture, performance, and practical implementation. 
The goal was to thoroughly analyze MongoDB, benchmark its performance, and compare it with PostgreSQL. I loved every bit of it and even earned the highest grade! 

### 🔍 My Focus
I explored MongoDB's core components, such as the query manager, access methods, memory management with WiredTiger, and transaction handling. Additionally, I delved into how MongoDB scales with sharding and replica sets, which was fascinating.

For performance benchmarking, I compared MongoDB to PostgreSQL, focusing on ACID transactions and isolation levels. It was interesting to see PostgreSQL's superior performance but also how MongoDB offers higher isolation levels.

Using Docker containers, I set up a complete MongoDB cluster with version 4.2 Server Enterprise. I imported and sharded data collections, analyzing their impact on performance and transactions.

### 📈 Learnings and Insights
I gained a deep understanding of MongoDB and its architecture. Out of curiosity, I went beyond the course requirements to benchmark MongoDB against PostgreSQL, learning the core differences between them. Focusing heavily on ACID principles, which are crucial for database transactions, I now have a solid grasp of them.

Performance-wise, PostgreSQL outperformed MongoDB in ACID transactions, but MongoDB's higher isolation levels were a unique advantage. MongoDB's sharding capabilities make it highly scalable and suitable for distributed applications. Although MongoDB is slower in high isolation level transactions, its flexibility is a big plus.

### ❤️  Why I Loved This Project
This project was an incredible learning experience. It helped me develop a deep understanding of MongoDB, and I thoroughly enjoyed the process of comparing it with PostgreSQL. The additional benchmarks I conducted out of pure curiosity gave me valuable insights into database performance and scalability. **Achieving the highest grade was the cherry on top!** 😎

[Link to the report (Italian)](/doc/unimib-mongo.pdf)
