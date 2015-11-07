Racing game release notes

Layout

Avoid the constraints of Bootstrap.  Build own CSS from scratch.  Layout is a title with two simple 'roads' that strech from left to right.  Finish line on the right, which is a checkered flag image.   Container with the two roads is a set 800px wide.  Using %s or ems would change the length of the race track on different screensizes. 

Cars

Cars are car images.  Ideally PNG images with transparent backgrounds.  Yellow and red. 

Divs

Cars are HTML divs with classes or IDs "car 1 and car 2" that sit on the left of the div.

Movement

Use JQuery to trigger movement based on keyboard events.  On click, the car will move 20px to the right.  Need to assign click events to specific keys like "Q" and "Z". 

Finish line

When the car gets to the finish line div, the game is over.   This might be a conditional Javascript function like if "car 1" or "car 2" touch another div then disable the click event functionality?  Maybe "collision detection."

Reset button

Like the Tic Tac Toe game, a reset button will clear all previous moves and start a new game.  Not sure if this means clear the div or go back to all default behavior?

