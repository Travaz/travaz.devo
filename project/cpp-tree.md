---
title: Binary Search Tree C++
description: Implementation of a binary search tree (BST) in C++ with support for custom data types and comparison operators.
tags: []
image: /img/bst.png
techs: [cpp]
id: 'cpp-tree' # must concide with file name
aside: false
start: 2020-04
end: 2020-05
github: https://github.com/Gianlo98/BST
---

During my C++ programming course at uni, I embarked on a project to implement a Binary Search Tree (BST). This project was a fantastic opportunity to deepen my understanding of C++, a language I was already familiar with due to my work on IoT projects 🌐. My goal was to create a robust and efficient BST, and I’m proud to say that with this project **I got the highest grade in the course**.

### Key Features and Functionalities 🚀
I designed the BST with a focus on efficient memory management and flexibility. The nodes were implemented as structs to facilitate easy access and manipulation, each containing pointers to their parent, left, and right children. To ensure efficient memory use, I employed the RAII (Resource Acquisition Is Initialization) principle for managing heap-allocated nodes.

One of the most exciting parts of this project was allowing custom comparison strategies. This flexibility was achieved using functors, which enabled tailored comparison needs for different data types. This feature was particularly satisfying as it allowed for efficient comparisons, focusing on specific attributes such as primary key fields.

The project also involved developing core methods for initializing, copying, and deleting the tree, ensuring deep copying and preventing memory leaks. I implemented various support methods for subtree copying, node searching, and maintaining the BST properties. Additionally, I created a custom exception to handle duplicate value insertions, ensuring the tree’s integrity.

### Personal Insights 🌟
I thoroughly enjoyed implementing this fundamental algorithm in C++. The process of managing memory and custom operators was both challenging and rewarding. This project not only reinforced my understanding of data structures but also honed my skills in C++ template programming and memory management. My enthusiasm for C++ and my experience with IoT projects fueled my passion for this challenge.

The successful completion of this project and achieving the highest grade demonstrates my commitment to excellence and my ability to handle programming tasks efficiently. This experience has solidified my love for C++ and data structures, and I’m excited to apply these skills in future projects 🔥.







