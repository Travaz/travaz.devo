---
title: LMC (unimib)
description: A university project implementing a Little Man Computer simulator using Prolog. 
tags: []
image: /img/lmc.jpeg
techs: [prolog]
id: 'lmc' # must concide with file name
aside: false
start: 2018-11
end: 2019-01
---

### 🚀 Project Overview

The **Little Man Computer (LMC)** is a simplified model of a computer designed for educational purposes. It features 100 memory cells (numbered 0 to 99), each capable of holding a number from 0 to 999. The computer includes an accumulator register, an input queue, and an output queue. LMC supports a limited set of instructions and a simplified assembly language.

### 🎯 Project Goals

The primary objectives of this project were to develop:
1. An LMC simulator that, given the initial memory content (a list of 100 numbers) and a sequence of input values, simulates LMC's behavior and produces the output queue content after the LMC halts.
2. An assembler that converts a file written in LMC's simplified assembly language into the initial memory content.

### 🧑‍💻 The challenge

My main challenge was to implement the LMC simulator using **Prolog**, applying theoretical knowledge from the programming languages course. Initially, it was challenging to adapt to Prolog's unique logic programming paradigm. However, with persistence, I gained proficiency in Prolog, which I found incredibly rewarding and enjoyable. Here’s a snippet of the Prolog code that demonstrates the logic used in the project:

```prolog
check_instruction_cell([[L, I] | Xs], C, [[I] | Ys]) :-
    lmc_text_instruction(I, _Pred),
    !,
    assert(label(L, C)),
    NC is C + 1,
    check_instruction_cell(Xs, NC, Ys).
```

This snippet defines a predicate to check each instruction cell, ensuring it follows the LMC's simplified assembly rules. The predicate processes a list `[[L, I] | Xs]`, where `L` is a label and `I` is an instruction, with the current cell index `C`, producing a list of instructions `[[I] | Ys]` without labels. It verifies if `I` is a valid LMC instruction using `lmc_text_instruction(I, _Pred)`, commits to the current choice with the cut operator `!`, associates the label `L` with the cell index `C` using `assert(label(L, C))`, increments the cell index (`NC is C + 1`), and recursively processes the rest of the list (`check_instruction_cell(Xs, NC, Ys)`). What a beauty, right? This line showcases the elegance of Prolog's pattern matching and logical flow, embodying the joy of solving complex problems with concise code.


### 🌟 Impact and Reflection
This project not only deepened my understanding of Prolog but also strengthened my problem-solving skills in logic programming. Despite the difficulties, the experience was highly educational and enjoyable, solidifying my appreciation for Prolog. It was super FUN, and I love Prolog. I will never forget this beautiful language! 🥰
