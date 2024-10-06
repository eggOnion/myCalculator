# My Calculator App using React

This project was built for my Cousera's assignment - React Basics with Meta. Here are some of my learnings, as well as the scope of this project.

---

## 2 types of Components in React. 

* Class Component
* Functional Component

## Class Component
Before React 16.8, class component are the standard way of defining components. They are still used in some legacy codebases and for certain complex use cases.

## Functional components
Fast forward, functional component was introduced and enhance further with the help of React hooks in React 16.8, Feb 2019. Today, it is widely used in most of the modern web application.

---

## React Hooks

#### Some of the hooks are:
* useState
* useRef
* useEffect
* useContext
* useReducer

## What is Hook?
Hooks are special function in React that allow you to handle and manage state inside a function componenet.

## What is State?
State are like variables that holds/stores a data or value within the componenet itself. These data or values are dynamic, they can mutable over 
the time. When the State changes, the component will auto update and re-render to reflect the changes.

## What is Prop?
Props are data recevied from the parent component who are the one managing and handling the state. These 
props are immuatable, read-only & cannot be modifiy directly. Meaning, we don't "hard-code" value directly inside them. 

The Child Componenet use this data (props) to perform business logics and renders the UI. Any modification 
to props are done using functions such as; callback functions or event handlers.

---

## In this Calculator App

![calculatorApp](https://github.com/eggOnion/my-test2/blob/main/assestsForReadMe/Calculator.png?raw=true)
![calculatorInputField](https://github.com/eggOnion/my-test2/blob/main/assestsForReadMe/cal_inputField.png?raw=true)

## The scope of the app is to build 6 functions;
* 4 functions on add, subtract, multiply & divide.
* 2 functions on reset input & reset result.
  * The reset input function reset the input field to value 0.
  * The reset result function reset the result field to value 0.

## Checking on Edge Cases
>Anything that divides by 0 leads to either infinity or undefined, thus it must be prevented.

![calDivby0Code](https://github.com/eggOnion/my-test2/blob/main/assestsForReadMe/cal_edgeCases.png?raw=true)
![calDivby0UI](https://github.com/eggOnion/my-test2/blob/main/assestsForReadMe/cal_edgeCase_Division.png?raw=true)


## The Folder Structure 
The code was structured into 7 components, each having its own functionalities. This makes the codes cleaner and 
easier to manage in the future.

![folderStructure](https://github.com/eggOnion/my-test2/blob/main/assestsForReadMe/cal_folderStructure.png?raw=true)


## Calculator Componenet (Parent)
>The data are being passed from parent to child component using props(setResult, result, inputRef).
>The useState and useRef hooks are also used here.

### Syntax of useState:

```const [result, setResult] = useState(0);```

* result: The variable that holds the data.
* setResult: The method/function that mutates that data.
* useState: The hook that initialize the data at the beginning.

### Syntax of useRef:

```const inputRef = useRef(null);```<br>
```const resultRef = useRef(null);```

* inputRef: This will be used to reference the input field where the user types a number.
* resultRef: This will be used to reference the paragraph that displays the result.

>The useRef hook allow the app to focus on the input field when user type a number, or focus on the result field when 
a button is clicked. Both actions are execute without having to re-render the entire page, making it easier to reference the DOM elements directly.

---

## Addition Component (Child)

>Callback functions & Event handlers are being used here.

It recevied the data from the Calculator Component(Parent) and apply the business logic.

This component accepts 3 props (setResult, result, inputRef) from its parent.

* setResult: A function that updates the result state.
* result: The current result value (though it's not used within this component).
* inputRef: A reference to an input element, which allows the component to access the input's current value.

## Event Handler function
```function plus(e){}``` This is an event handler named plus that gets called when the button is clicked.

## Prevent Default Behavior
```e.preventDefault()``` is called to prevent the default form submission behavior (Eg; when button is pressed it prevent rendering/refreshing the webpage)
The ```e.``` refers to the event object that is passed to an event handler (like a click, form submission, or key press)

## Callback Function (updating the result in parent)
```setResult((result) => result + Number(inputRef.current.value))``` This updates the result state. 
It takes the current value of result, converts the value from the inputRef to a number using Number(), and adds it to the current result.