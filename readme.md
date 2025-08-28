1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById(id):
Selects only one element that has the given id.IDs should be unique in HTML, so you’ll only ever get one element.

document.getElementsByClassName(className):
A live HTMLCollection of all elements with that class name.HTMLCollection (not an array, but array-like).It’s live, meaning if the DOM changes, the list updates automatically.

querySelector(cssSelector):
Selects the first element that matches the given CSS selector.

querySelectorAll(cssSelector):
Selects all elements that match the CSS selector.

2. How do you **create and insert a new element into the DOM**?

Answer:
Creating and inserting a new element into the DOM is the process in which JavaScript is used to create a new HTML element (using the createElement method) and then add it into the existing DOM structure (using methods like appendChild).

3. What is **Event Bubbling** and how does it work?

Answer:
Event bubbling is a way events work in the DOM.
When you click (or trigger an event) on a child element, the event first runs on that element, then moves up (or "bubbles") to its parent, then grandparent, and so on until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:

Event Delegation is a technique where a parent element handles events for its child elements instead of adding separate event listeners to each child.
It uses event bubbling to catch events on children from the parent.

Why it’s useful
   Less code: You don’t need a separate listener for every child element.
   Works for new elements: If new child elements are added dynamically, the parent listener still works.
   Better performance: Fewer event listeners reduce memory usage and improve speed.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
preventDefault()
  Purpose: Stops the default browser action of an element.
Example default actions:
 Clicking a link (<a>) navigating to a URL
 Submitting a form
 Pressing Enter in an input field
 Does NOT stop event bubbling.

stopPropagation()
  Purpose: Stops the event from bubbling up (or capturing down) the DOM.
  Does NOT prevent the default action.
  Useful to limit the event to a specific element.