Racing game release notes

Layout

Avoid the constraints of Bootstrap.  Build own CSS from scratch.  Layout is a title with two simple 'roads' that strech from left to right.  Finish line on the right, which is a checkered flag image.   Container with the two roads is a set 800px wide.  Using %s or ems would change the length of the race track on different screensizes. 

Cars

Cars are car images. PNG images with transparent backgrounds.  Yellow and red.   Each one is its own div, inside a race track div. 

Divs

Cars are HTML divs with classes or IDs "car 1 and car 2" that sit on the left of the div.

Movement

Use JQuery to trigger movement based on keyboard events.  On click, the car will move 20px to the right.  Need to assign click events to specific keys like "Q" and "Z".   

Finish line

When the car gets to the finish line div, the game is over.   I set the finish line to an absolute position which looks pretty bad if the user resizes the screen. 

Reset button

Like the Tic Tac Toe game, a reset button will clear all previous moves and start a new game.  In this case it really just moves the cars back to a position to the left.  

BONUS FEATURES TO ADD LATER

Display timer

When either cars starts moving forward, a timer displays. Show the winning time.  Displayed timer stops when a car hits the finish line. 

Animation

Would like to get puffs of smoke showing once they are racing.  And maybe a parachute pops out the back of both cars when one wins. 

BUGS TO FIX

1) Show winner

If the red cars wins, a 'red car wins' message is not displayed because the yellow car winning logic is below the red car logic in the JS file.  What I really want it to do is know if red car crosses first, display message that red car won, if yellow car crosses first, display message that yellow car won.  But for now it can only really understand one of those logic blocks, and the yellow car code is below the red car code. 

2) Absolute finish line

The finish line has an absolute position.  It looks bad if the screen is resized because the finish line does not appear relative to the race track. 

