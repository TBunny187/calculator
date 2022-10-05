# calculator

In this project, I will be making a calculator using HTML, CSS, and JavaScript.

I have a general idea of how the layout will look, but I will need to experiment quite a bit on that.
I'm thinking that I'll need a main div, that will be the actual outline of the calculator.
Then I'll need another for the output(screen).
I'll also need to make a bunch of buttons, for each of the, well, buttons that can be pressed.
To start, I'll make all of those using HTML and CSS.
I'll add the JavaScript at the end of everything.

This calculator, from the very start, will be as basic as possible.
It will not include square root... I'm not an expert math person, I don't remember all of the names.
It will ONLY include add, subtract, multiply, divide, and exponent.
Therefor, I will only include butons for each of those, and an equals.

I will update this README as I finish different parts.
Here's a breakdown.

Create calculator div, including background color.
Create "screen" div at the top, for the outcomes.
Create div to hold the buttons.
Potentially broken into 3 divs total, 1 for the top buttons, divide, multipy, and exponent.
Then another div under that to hold number buttons and add, subtract, and equals.
The numbers buttons should only be 3 wide.
Ok, I need a few other buttons...
Parenthesis, clear, CE, and percentage.
As well as a way to make a number negative.

Getting into the JavaScript part of things:
Variable to hold current total.
A way to check if user is trying to divide by 0, and simply alert them that they can't do that, without crashing everything.
From there, everything should be easy...
Include functions for all of the different buttons.
The CE button should only clear what is currently shown on the screen, without clearing the variable holding the total so far.
Parenthesis should add an open when first pressed, then if pressed again, should check if there is a number after the current one.
If there is, then add a close.
Otherwise, add another parenthesis.
I might do away with the parenthesis at this point, since I'm not entirely confortable with my current skills to be able to check for all of that.