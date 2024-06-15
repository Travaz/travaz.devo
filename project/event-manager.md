---
aside: false
title: Event Manager 
description: It all started from there 🤩 I was the event manager of one of the most important Italian Minecraft servers. 
tags: [moderator, minecraft]
image: /public/img/spawn-head.png
techs: ['minecraft']
id: 'event-manager' # must concide with file name
start: '2013-10'
end: '2014-10'
--- 

When I was 14, I was eager to contribute to one of the most important Minecraft servers in Italy. 
The day after my 15th birthday, I interviewed and started as a **helper**, supporting customers with relevant in-game questions. 

After a few months, thanks to my demonstrated logical skills and efforts to learn a minecraft bukkit plugin called [Variable Triggers](https://web.archive.org/web/20170927060133/https://dev.bukkit.org/projects/variabletriggers), I was promoted to **Moderator**. 
My responsibility was to organize and execute daily recurring events for our customers. I was extremely excited as I always had enjoyed game design. 

The events were highly competitive, with one of the most successful being "Simon Says." Every day before the event, I planned sneaky questions with mental tricks.
The game involved four colors on the ground, and each player had to choose one. Colors of wrong answers were removed, causing players to fall and be eliminated. It was super fun for both me and the players.

I developed the arena with numerous automations, creating a control room that allowed me to manage arena elements such as teleporting players to the spawn point and removing colored floors.
Before each event, I meticulously planned the session, including tricky questions that involved swapping colors during reasoning.

To give an example of the scripts used, here is a simplified script for welcoming new players:

```
/vtevent Join @ADDINT $<playername>.joincount 1
/vtevent Join @IF i $<playername>.joincount = 1
/vtevent Join @BROADCAST Welcome <playername> This is the first time we have seen you. Have a sword.
/vtevent Join @DROPITEM Iron_Sword 1 FireAspect:2 <playerloc>
/vtevent Join @ELSE
/vtevent Join @BROADCAST Welcome <playername>, you have joined $<playername>.joincount times
/vtevent join @ENDIF
```

The impact of these events was significant, as we noticed a peak in logged-in players 30 minutes before the daily event start, indicating their strong influence on login activities. 
This period was very beneficial for the community, which unfortunately closed a few months after I left the project due to player inactivity.
