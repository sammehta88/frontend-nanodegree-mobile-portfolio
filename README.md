## Website Performance Optimization portfolio project

### How to Run

Follow this link to open the website [http://sammehta88.github.io/frontend-nanodegree-mobile-portfolio/](http://sammehta88.github.io/frontend-nanodegree-mobile-portfolio/)

Or open index.html on your favorite browser.

####Part 1: Optimize PageSpeed Insights score for index.html

* Used grunt to perform minification of CSS and JS, as well as image optimizations.
* Inlined critical CSS.
* Async'ed JS.

####Part 2: Optimize Frames per Second in pizza.html

#####Pizza Resize

* Moved everything outside of FOR loop except for the code that sets the new width.  
* Stopped FSL by moving offsetWidth out of loop.
* Created arry to hold results of getElementsByClassName
* Deleted determineDX function and modified sizeSwitcher to only work in percentages

#####Animated Pizzas

* Created items array in global scope to store location information on the animated pizzas.
* Replaced querySelectorAll with getElementsByClassName
* Created 5 element array for all possible phase values and moved outside FOR loop
* Moved everything out of FOR loop except setting style 
* Debounced scroll events 
* Number of pizzas generates determined by viewport size
