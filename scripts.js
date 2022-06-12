console.log("%cHey!", "font-size: 2em; color: cyan");

/*
window.alert("Hey");

Data Types: (typeof > recognizes the data type)
String: "Hello"
Number: 564,85
Object: [a, b, c] - [1, 2, 3] - {name: "ex", age: 17}
Boolean: true false
Undefined: undefined
Null: null

Variables: var | name | assignment op | value  >  var user = "Ex";

Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function
Let
- Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function  

\character > character escape
character\ new line > line continue
\n > new line

concatenation:
let a = "he"; let b = "y"  >  console.log(a + b)  >  console.log("hey")   OR   console.log(`${a} ${b}`)

Increment [post(print then calc) > num++ | pre(calc then post) > ++num]
Decrement [same shit]

Unary Plus [coverts back into a number if there is] > consol.log(+"100")  >  100    |   consol.log(+null)  >  0
Unary Negation [converts back into a number if there is and duplicate it with -] > consol.log(-"100")  >  -100    |  consol.log(-true)  >  -1

Type Coercion: if we want the lang to treat a string as a number we add + or -

Assignment Operators: if [let a = 10;] and [a += 10; => a = a + 10;] result > 20 

Number Methods:
  toString() > consol.log((100).toString()) => converts the number into a string
  toFixed() > consol.log(100.626262.toFixed(2))  => converts the number into a string with the closest 2 decimals > 100.63
  parseInt() > consol.log(parseInt("100 Osama")) => displays the number in the string if it has a number
  parseFloat() > consol.log(parseFloat(100.66 Osama")) => same thing but does not remove the decimals
  isInteger() > consol.log(Number.isInteger("100")) => checks if the result is an integer number
  isNaN() > consol.log(Number.isNaN(X / 2)) => checks if the result is not a number

Math Objects:
round() - ceil () - floor() - min() - max() - pow() - random() - trunc()
ex: consol.log(Math.pow(2, 5));

String Methods:
  index > (Name[3]);  /   charAt > (Name.charAt(3))   /   (Name.length)
  trim: removes spaces > (Name.trim())  /  toUpperCase()  /  toLowerCase()
  indexOf(value, start): بيبحث عن حاجة معينة انت بتكتبها في القيمة المراده
                        ممكن تكتب يبدأ منين أو متكتبش غير المراد البحث عنه وهو هيبدأ من البداية
  lastIndexOf(): نفس الشيء بس بيجبلك آخر نسخة من اللي انت طالب البحث عنه، مش أول واحدة يلاقيها
    ex: let a = "Hey" > consol.log(a.indexOf("e")) > result: 1
  slice(start, end[optional]); > بيقطع جزء من القيمة انت بتحدد بدايتها ونهايتها
  repeat(); > بتكرر بعدد المرات المكتوبة
  split(Separator[Optional], Limit[Opt]); > بيقص من القيمة حسب ما تحدد فين ولإمتى
    ex: let a = "Hey"; > consol.log(a.split("", 2)) > result: ["H", "e"]
  substring(start, end)  /  substr(start, # of characters)
  includes(value, start)  /  startswith(value, start)  /  endswith(value, length)

Operators:
== > equal   /   === > Identical 
!= > not equal   /   !== > not Identical
> > bigger than  /  >= bigger than or equal
! > not  ex: console.log(!(10 == "10")) > result: false
&& > and: used to add another condition
|| > or: used to add optional condition > console.log(10 == 10 && 10 > 20)

Conditions:
  if (condition) {
    code
    if () {
      code
    } else () {
      code
    }
  } else if (condition) {
    code
  } else {
    code
  }
>> If Ternary:
condition ? if true : if false;
or nested\ condition ? if true : condition ? if true : else;
  ex:
  age >= 30 ? consol.log("30 and older") : age < 30 ? console.log("younger than 30") : age < 20 ? console.log("Younger than 20");

Logical or || بيرجعلك القيمة سواء كانت null أو Undefined أو Falsy Value
Nullish op ?? بيرجعلك القيمة إلا لو كانت Fasly Value
ex: if [let price = 0]...
(`Price is ${price || 20}`) > result: 20
(`Price is ${price ?? 20}`) > result: 0

switch:
switch (var) {
case smth:
  code
  break;
case smth:
  code
  break;
default:
  code
}

Array:
Array = [0, 1, [a, b]];  >  Array[2][1] = b
to change an element > Array[2][0] = new value
to specify the array > Array.isArray(Array) > true
Array.length = Array length
to edit last value always:
Array[Array.length - 1] = "new value"
to add an element to array start:
Array.unshift("New Element")
to add an element to array end:
Array[Array.length] = New Element
Array.push("New Element")
to remove an element from array start:
Array.shift()
to remove an element from array end:
Array.pop()
  >> after the element is removed, it's saved to clipboard and u can use it as
  a variable this way: let Element = Array.shift()
indexOf(Element, Start Point) > Array.indexOf(Sayed, 3 "or don't specify it")
lastIndexOf() > Same but starting from the end
  >> if the Element doesn't exist using indexOf(), the return is -1
includes(smth) > true/false
Array.sort() / Array.reverse()
Array.slice(start, end'op');
Array.splice(start, delete count'op', items to add'op')
  ex: Myhomies.splice(0, 0, "SHIKA", "Bux")
Array1.concat(Array2) > New Array: [Array1 + Array2] > type of new Array is Array
  another ex: Array.concat(Array_2, [1, 2], "String")
Array.join(Seperator type): groups Array's elements together as a string output
  ex: Array = ["One", "Two"] > Array.join(" - ") > Array = "One" - "Two"
Array.map(function()) > applies a code to each element in the Array.
  ex: let myArray = Array.map((el) => el += el);
Array.filter(function()) > if the statement of the function is true, output the element
  ex: let myArray = Array.filter((el) => isNaN(el)) > outputs the element if it's a string(el)
Array.reduce(function(accumulator, current, index, array){...}, accumulator(op))
  the accumulator value is set to be as the first element in the array if the value is not given.
  - the reduce takes the accumulator and then does anything with the current element in the loop,
    for example, we can add them to each other this way:
    let Array = [10, 20, 30, 40];  !! note that the acc value is not given so it's set to 10 (first element value)
    Array.reduce((acc, curr, i, arr) => {return acc + curr}); > prints: 100 > (10 + 20 = 30 / 30 + 30 = 60 / 60 + 40 = 100)


Loop:
- When to start.
- When to stop.
- How to get to the next item.

var time = 0             < When to start
while (time >= 100) {    < When to stop
  console.log(time);
  time += 1;             < How to get to the next item;
}
for ( start; stop; step ) {
  // do this thing
}

Do while loop:
runs a block of code before starting to check whether the condition is true.

Do {
  block of code
} while (condition)



Function:
function function_name(parameter/s) {
  return // do this with parameters;
}
to set the default value for parameters:
function function_name(parameter/s = "value") {
  return // do this with parameters;
}
  ex on using the function: console.log(function_name(parameters));
  >> real example:
      function welcome(user = "User", lastSign = 0) {
        return `Welcome ${user}, your last sign in was ${lastSign} days ago.`;
      }
      console.log(welcome("S A R U", 36));
        returns: Welcome S A R U, your last sign in was 36 days ago.
      if no values given > console.log(welcome());
        returns: Welcome User, your last sign in was 0 days ago.

Function types:
1- Function
    function myFunc () {
    }
2- Function Expression
    var myFunc = function(){
    }
3- Named Function Expression
    var myFunc = function Named() {
    }
>> The order of normal functions does not really matter, as you can place it anywhere in the script,
    but it's better to place it at the very top of the script.
    When it comes to  Variables as functions, hositing does not happen, and you MUST to place it at the top.

Array.forEach(function(element, index, array) {
})
  ex: Array.forEach(function(element, index, arr) {
        if (element % 3 === 0) {
            arr[index] += 100;
        }
})
Tip: use forEach when you are NOT going to change arrays' elements values.

Arrow Function:
let variable = (empty or has parameter/s) => {
  block of code
}
  - if your Arrow function has no parameter u can replace the empty brackets with _
    let variable = _ => {...}
  - if your Arrow function has 1 statement u can remove the curly brackets
    let variable = () => console.log("Hi");
  - if your Arrow function has 1 parameter u can remove the brackets
    let variable = num => console.log(num);

Object:
let objectName = {
  property: "value",
  property: "value",
  property: "value"
}
  ex:
    let donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 },
    { removeDonut: function(index) {
        donuts.splice(index, 1);
        return donuts;
    },
    ];
to call a property: ObjectName.property
  ex: donuts[0].type;   >   "Jelly".
to call a method: ObjectName.method
  ex: donuts[4].removeDonut(3);

- if you wanna save values in variables from an array or object, you can use distructuring in ES6
  ex: const Array: [10, 20, 30, 40];
      const [first, , third, fourth] = Array;
      console.log(first, third, fourth);   >>  10 30 40 
  ex2: const Object: {lane: bot, class: marksman, price: 4800BE}
      const {lane, class, price} = Object;
      console.log(lane, class, price);   >>   bot marksman 4800BBE;

- if you assign values to variables and then used it in an object like this, and u can also call the function without function:
  let name = "SHIKA"; let age = "26"; let gender = "Male";
  let Object = {name: name, age: age, gender: gender, myFunc: function(){...}};
    > Object = {name, age, gender, myFunc(){...}};
calling the property that does NOT exist in the object creates that property in the object:
'let object = {};' ... object.age = 30 ... if that property existed before, this will change its value.
- similar to 'let a = {name: "Samir"}', you can create an object using 'let a = new Object({name = "Samir"})'

- this: refers to the element that you are within, for example if we printed 'console.log(this)' it'll print window
  which we are at right now! if we used 'this' in a function, it referts to the element that this functions is assigned to.
  or refers to the object that is the parent of this method(function)... u get the idea right?
- 'let obj = Object.create({example})' > creates an opject identical with the example object you give
  that you've created before.
- 'Object.assign(target-object, object1, object2...)' > assigns an object(s) properties to another targeted object.
  Q: Can I assign the obj properties to a new object? I mean I don't have a targeted object to assign propertise to.
  A: Yes, using this code: 'let newObject = Object.assign({}, object1, object2);
  Q: Can I assign properties and values to the object using the same code?
  A: Yes, using this code: 'let newObject = Object.assign({}, object1, {property: "value"})



for of loop:
the best way to loop.
instead of > for (let i = 0; i < Array.length; i++) {
                console.log(Array[i]);
              }
we can use > for (const element of elements) {
                console.log(element);
              }
AND we can stop the loop anytime! for example if we wanna stop the loop if the number is divisable by 2:
for (const number of numbers) {
  if (number % 2 === 0) {
    break;
  }
  console.log(number);
};
if we want to skip the step when the condition is met, we use "continue" instead
LABLES:
- in case of nested loops, we can give our main loop a lable (e.g: mainLoop) and our nested loop another lable (e.g. nestedLoop)
  to easily control both loops anywhere inside the loop using <break mainLoop> or <break nestedLoop>


Spread Operator:
  used to spread an array into multiple elements.
  ex: const Array1 = [1, 2]; const Array2 = [3, 4]
      let Array3 = [...Array1, ...Array2];
      console.log = [Array3];  >>  [1, 2, 3, 4]

Rest Parameter:
  allows to represent an indefinite number of elements as an array.
  ex: const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
      const [total, subtotal, tax, ...items] = order;
      console.log(total, subtotal, tax, items); > 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
  another use: function sum(...nums) {
                let total = 0;  
                for(const num of nums) {
                  total += num;
                }
                return total;
}
The DOM:
Server[bytes] > browser -converts-into-> tags -browser-read-through-tags-to-create-> tokens -tokens-are-convereted-to->
                nodes -which-are-read-through-as-> tree construction page > which is the DOM
The DOM stands for "Document Object Module". It is the representation of the HTML elements and its relation with
any other thing, it is also not created or provided by Javascript, but can be accessed through an object called document.
document.getElementById("ID");
document.getElementsByClassName("Class");
document.getElementsByTagName("Tag");
document.querySelector("#ID");
document.querySelector(".Class");
document.querySelector("Tag");
>> querySelector returns a Single Element, the first one it encounters.
document.querySelectorAll(""); > selects all the Elements with the same class/tag.
document.Element.innerHTML > outputs the inner HTML code of an element
document.Element.outerHTML > outputs the element HTML code and its content.
document.Element.textContent > outputs the text inside the element ignoring the CSS.
document.Element.innerText > outputs the text inside the element with its CSS.
document.createElement("") > creates an Element.
document.createComment("") > creates a Comment.
document.createTextNode("") > creates a text.
Parent.appendChild(child) > inserts the element inside a parent as a last child.
>> if the element already exists, the .appendChild() will move it to the new location u specified in .appendChild().
.insertAdjacentHTML(position, element as text) > inserts the element anywhere in the page.
  positions are:
    <!-- beforebegin -->
      <p>
        <!-- afterbegin -->
        Existing text/HTML content
        <!-- beforeend -->
      </p>
    <!-- afterend -->
  ex: 
  mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
  another way to insert the element using the same position with different values:
    <!-- before -->
      <p>
        <!-- prepend -->
        Existing text/HTML content
        <!-- append -->
      </p>
    <!-- after -->
  element.position(child) > parent.prepend(child)
Element.parentElement > outputs the Element's parent.
Element.firstElementChild > outputs the Element's first element child, means that it'll ignore any non-element child like comment
Element.firstChild > outputs the Element's first child, iocluding non-element child like comment
  > The difference between .firstChild and .firstElementChild, is that .firstElementChild will always return
  the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting
  of the underlying HTML source code.
Element.nextSibling > returns the next sibling of an element including comments and text
Element.nextElementSibling > returns the next element sibling of an elemtn excluding comments and text
> there are also: .previousSibling - .previousElementSibling
Parent.removeChild(Child) > removes the selected child from a parent element.
Smart Example: Element.parentElement.removeChild(Element)
Element.remove() > removes the Element directly
Element.style.color = "color" > changes the element's color. (addes 1 style only)
  > you can add 1 style at a time, and replace .color with anything such as .fontSize
Element.style.cssText = "" > addes multiple styles at once.
  ex > Element.style.cssText = "background-color: red; color: white; border: 1px solid black";
- You can remove CSS style properties using:
  Element.style.removeProptery("color")
  & you can set a new property:
  Element.style.setProperty("color", "red")
- You can also modify the CSS stylesheets by selecting the stylesheet then the rule then the style
  document.stylesheets[0].rules[0].style.remove/addProperty("")
- You can get element attribute using this code:
  Element.attribute > or even attr value > Element.attribute.value
  Image.src = "new source" / Image.className = "new-class" / Element.id
- You can also get element attr value using this code:
  Element.getAttribut("class") > returns the attribute value
  >> and you can set the attribute using this code: Element.setAttribute("Attribute", "Value")
    Element.setAttribute("id", "#one");
- And you can set an empty attribute to control it later using: setAttributeNode("attr")
- You can check if the element has a specific attribute using this code: .hasAttribute("title") > returns: true-false
- >> u can check if the element has ANY attributes or not using .hasAttributes() > returns: true-false
- You can also remove the attribute: .removeAttribute("title")
Element.className > outputs any classes on the Element as a string.
Element.classList > outputs any classes on the Element as an Array, which we can manipulate using Array methods [e.g. push(), pop()].
  The .classList property has a number of properties of its own. Some of the most popularly used ones are:
    .add() - to add a class to the list
    .remove() - to remove a class from the list
    .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
    .contains() - returns a boolean based on if the class exists in the list or not
    .length - shows how many classes are there
    .item(i) - displays the class based on the position index u give
>> .classList is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your
    JavaScript code.
- 'Element.children' > returns the children elements of a parent
- Element.cloneNode(false/true) *if you don't give a value then it's set to false
  this code clones an element to create an identical copy, and if you set the deep: true
  Element.cloneNode(true) > then the element's descendants will be cloned too.

Events:
<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
  ex: 
  const mainHeading = document.querySelector('h1');
  
  mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
  });

<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);
>> an example I made >>>
const element = document.querySelector(".announcement1");

function MyFunc() { 
    element.style.color = "yellow";
    console.log("The page has been clicked.");
};

- currentTarget: > used to select the current target in the event
  ex: 
  elements forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.currentTarget);
    })
  })

document.addEventListener("click", MyFunc);
document.removeEventListener("click", MyFunc);

Event handlers:
onclick, oncontextmenu, onmouseenter, onmouseleave, onload, onscroll, onresize, onfocus, onblur, onsubmit
element.onclick = func(){..}
Events:
focus, click, scroll...
ex: element.focus()

Event Phases:
- The Capturing phase ⬇️
- The at target phase
- The Bubbling phase ⬆️
the event listener is set by default to bubbling phase, to change this:
document.addEventListener("click", MyFunc, true); > now it's set to occur on capturing phase.
>> document.addEventListener(event, listener, onCapture?)
[Ps: The Event Object: is the information stored whenever we make an event, like the mouse position and such.]
> By giving the function that runs when the event occurs a parameter called anything (e.g: event)...
document.addEventListener("click", MyFunc(event), true) :> and then adding a way to prevent the default event,
like switching to the href when clicking on an <a> link and such...
we can prevent this default action by giving the event .preventDefault() method in the function. 
  EXAMPLE:
  const links = document.querySelectorAll('a');
  const thirdLink = links[2];
  
  thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
  });

If we want an event for each one of the 200 <p> that are inside of a <div>,
instead of giving an event for each <p>, we can give the event listener to the div and target the textContent:
document.querySelector('div').addEventListener('click', function (event) {
    console.log('A span was clicked with text ' + event.target.textContent);
});     >--> that's called Event Delegation
but what if there was some spans in the <p>? we can use Node Type in Event Delegation to verify if the element is span
document.querySelector('div').addEventListener('click', function (event) {
    if (event.target.nodeName === 'SPAN') {           // ← verifies target is desired element
        console.log('A span was clicked with text ' + event.target.textContent);
    }
});
The .nodeName property will return a capital string, not a lowercase one.
So when you perform your check make sure to either:
- check for capital letters
  if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
  }
- convert the .nodeName to lowercase
  if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
  }

If we want any javascript code to run after the DOM content is loaded so that we don't get an error,
we can use the document event .DOMContentLoaded to make the code run after the DOM is loaded.
That doesn't mean we should put all of our js code in the <head> and run this event!
instead, we can place our js file at the bottom of the <body>.
  ex:
  <head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>

BOM: Browser Module Object
- Alert: window.alert(msg) || alert(msg)
- Confirm: confirm(msg) > returns boolean 
- Prompt: prompt(msg, default msg'op') > returns a string with the input

Performance:
- Use performance.now() before the code and after to test the efficiency of the code
  ex: console.log(timeBefore - timeAfter) > how long it took the code to run. the lower the better.
- A reflow and a repaint happen everytime you update a content, so it's better to choose the best way to cause the less
  number of reflows and repaints.
- Use .createDocumentFragment() to create an element that's not a part of the DOM, where we can store
  other elements temporarily before adding it to the DOM, hence, increasing the performance.
- If we want to modify contained elements on the screen, we can hide it temporarily then display it again after applying
  the changes. That's why people prefer to use libraries such as "Virtual DOM", as it's saves the changes in another
  structure and the library calculates the best way to update the screen to match the new content you want to add.
- The Call Stack: is the order of scripts such as functions in javascript engine.
  > Refer to Udacity - Professional Track - Lesson 5: The Call Stack... in case you forgot what it was.
- The Event Loop: explains where the APIs are placed until they are called (ex: a "click" event is called when clicking),
  when the event is read it's moved to the browser, and when it's called it's moved to the Queue, if the Call Stack is
  empty, then the function or the event is executed.
- setTimeout(function, delay in ms, argument1(op), argument2(op)):
  ex: setTimeout(function sayHi() {
        console.log('Howdy');
      }, 1000);                   -:> the code will run after 1 second delay
  the arguments are for the function, in case u want to set parameters for the function:
    function sayHi(phrase, who) {
      alert( phrase + ', ' + who );
    }
    setTimeout(sayHi, 1000, "Hello", "John");     // Hello, John
  ⚠️ If the first argument in setTimeout is a string, then JavaScript creates a function from it, But using strings is not recommended,
  use arrow functions instead of them, like this:
  setTimeout(() => alert('Hello'), 1000);
  We can use the setTimeout to run a function after everything else is executed from the Call Stack by giving it
  a delay of 0; this will move the function to the browser then the Queue since it's called immediately (delay 0),
  and then move it to the Call Stack then execute it whenever the Call Stack is empty.
  This way the user will be able to interact with the page while the function is running.
- clearTimeout(var that contains the setTimeout): clears the TimeOut and it never happens.
  ex:
  let timerId = setTimeout(() => alert("never happens"), 1000);
  alert(timerId); // timer identifier
  clearTimeout(timerId);
  alert(timerId); // same identifier (doesn't become null after canceling)
- setInterval: The setInterval method has the same syntax as setTimeout, but runs the code repeatedly with a time of what
  your choise between every repeat.
  ex: let timerId = setInterval(() => console.log("tick"), 1000);   > "tick" will be printed to the console every 1 second.
- ⚠️ if we want to stop the setInterval after some time, we can use setTimeOut to start a function called clearInterval()
      after a delay of the time of our choise, for example if I wanted to stop the code above after 5 seconds:
      setTimeout(() => { clearInterval(timerId), console.log("the Interval has been cleared"); }, 5000);

- Window:
alert() - confirm() - prompt()
- window.location / location
  location.href > to get or edit the current window link
  location.host > to get or edit the current window host with port if there is any (e.g. google.com)
  location.host > to get or edit the current window host ONLY (e.g. google.com)
  location.hash > to get or edit the current window hashtag 'location in page e.g. #section2'
  location.protocol > to get or edit the current window protocol 'e.g. https'
  location.reload() > to reload the window
  location.replace() > to move to & replace in history the current window link with another
    e.g.: location.replace("https://google.com")
  location.assign() to move to another link or assign it to the current window
  
  window.close() > closes the window that was open using .open() method
  window.open() > opens a desired window, also window.(open) takes 4 argument
    window.open(URL, target(op), features(op), replace(boolean)(op))
    URL: can be any link
    target: whether to open it in the same page "_self", or in another "_blank"
    features: there are plenty, such as window height&width - position, etc...
    replace: whether to replace the window in history or not like we mentioned before
    FULL EXAMPLE: window.open("https://google.com", "_blank", "width=500, height=500", true)
  
  history.back() > return back by 1 page
  history.forward() > goes forward by 1 page (undefined if the current window is the latest in history)
  history.go(index) > goes to a page specified with its index in history, -1 means to go back by 1 page

  scrollTo() / scroll()'not supported in safari': scrolls to specific position of the window دا بيتحرك لمكان معين
    scrollTo(x, y) || scrollTo({top: 0, left: 0, behavior: "smooth"})
  scrollBy > scrolls by a given distance. 'scrollBy({top: 1300, left: 0, behavior: smooth}) دا بيتحرك بقدر معين
  window.scrollY || .pageYOffset > displays the currently scrolled distance in pixels in Y Axis
  window.scrollX || .pageXOffset > displays the currently scrolled distance in pixels in X Axis
  
  Local Storage: the data saved in a browser
  window.localStorage.setItem(key, value) || window.localStorage.key = value > saves a key to the local storage
    window.localStorage.setItem("color", "value") || window.localStorage.color = "red" || window.localStorage["color"] = "red"
  window.localStorage.getItem(key) || window.localStorage.key > returns a value for a key
    window.localStorage.setItem("color", "value") || window.localStorage.color = "red" || window.localStorage["color"] = "red"
  window.localStorage.removeItem(key) > removes a key and its value from the local storage
    window.localStorage.removeItem("color")
  window.localStorage.clear() > clears all local storage keys and values
  window.localStorage.key(index) > to access a key using its position in local storage
    window.localStorage.key(0) > returns the key (e.g. fontSize)
  
  
  
*/
function stats(user = "User", series = 0, chapters = 0, points = 0, ...fav) {
  document.write(`<div>
            <h2>Member ${user}</h2>
            <p>Series watched ${series}</p>
            <p>Chapters watched ${chapters}</p>
            <span>Points left ${points}</span>`);
  for (let i = 0; i < fav.length; i++) {
    document.write(`<p>Favorite manga ${fav[i]}.</p>`);
  }
  document.write(`</div>`);
}

stats("S A R U", 40, 1350, 628, "TBATE", "SL", "TWATF");

function createLines(length) {
  let line = "";
  for (let i = 0; i <= length; i++) {
    line += "* ";
  }
  return line + "\n";
}

function createTriangle(length) {
  let triangle = "";
  for (i = 1; i <= length; i++) {
    triangle += createLines(i);
  }
  return triangle;
}
console.log(createTriangle(9));

let myFunc = function (count) {
  let laugh = "";
  for (let i = 0; i < count; i++) {
    laugh += "ha";
  }
  return laugh;
};

