# Work Day Scheduler - Challenge 5

## USER STORY:

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## ACCEPTANCE CRITERIA

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## PSEUDOCODE

<!--  
1. build a home page with the current date at the top
2. create a section below with boxes for different times of the work day
2.1 left section will display time, center will be user input events, right will be a save feature
3. each time-block will be color-coded based on "past, present, or future"
3.1 create js to track time-blocks usage
4. each time block can be clicked on in order to add inner text
4.1 create event listener that enables user input on click
4.2 have a save button that saves user input to local storage, using onclick event listener
5. the saved events should remain even upon a refresh of the page (store info to local storage)  -->

## Description  
Holly is a web app that allows users to educate themselves about holidays and events that happen around the world every day and other interesting facts.  
## Built With  
This site was developed using the following technologies:  
* HTML (HyperText Markup Language)  
* CSS (Cascading Style Sheets)  
* JS (JavaScript)  
* jQuery
## Directions for Future Development  
* Make time-blocks change according to time of day, whether the block is in the past, present, or future
## Website  
The site can be accessed at the following hyperlink:  
https://antony-q.github.io/challenge-5/ 
## Screenshot:  
![Work Day Scheduler ](https://github.com/Antony-Q/challenge-5/blob/main/challenge_5_screenshot.png) 
## Contribution  
Authored by:    
Antony Quinones  