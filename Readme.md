### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**

* **getElementById :**
It select only one element by its unique id. So, id shouldn't be repeated.

* **getElementsByClassName :**
It selects by given class name. Usually class name can be repeat as per needed. For multiple elements, need to use loop like for of.

* **querySelector :**
querySelector select only the first element matches by given class name.

* **querySelectorAll :**
querySelectorAll selects all the elements matches by given class name.


### 2. How do you create and insert a new element into the DOM?

**Answer:** At first, I need to create an element with html tag. Then mention some content inner of the newly created element. Finally, this element have to append this the parent node as a child. Without doing this step the content or an element wouldn't be shown in the html page. Here is an example -

```js
// step - 1 : create a new element
const div = document.createElement("p");

// step - 2 : Add a text or attributes
p.innerText = "This is a paragraph!";

// step - 3 : append/insert it to the parent node
const container = document.getElementById("container");
container.appendChild(p);
```


### 3. What is Event Bubbling and how does it work?

**Answer:** Event Bubbling is the process where an event starts at the targeted element and then bubbles goes to upper parent nodes through its parent elements until it reaches the root.


### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer:** If I have multiple list items, I would add a separate click event to each one. That means writing lots of event listeners. But in event delegation, putting addEventListener() on each child item, I keep one addEventListener() on their parent node.

For the fewer listeners, it is very useful. Also it works for dynamically added elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

* **preventDefault() :**
It prevents the default operation. For example, when I submitted any form, the browser page reloads. But if I use preventDefault() function, it prevents default reloading web page. So without reloading form can be submitted by this preventDefault().

* **stopPropagation() :**
It prevents the event bubble to their parent node. That means, event is targeted but stopPropagation() block the event bubble.