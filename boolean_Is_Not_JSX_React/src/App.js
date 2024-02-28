import Check from './Check';

function App() {
  return (
    <div>
      Hello
      <Check dark={true} />
    </div>
  );
}


export default App;

// ---------------------------------------------------------------------------------

// my question is :--- when we pass boolean props as true it not print in this line
//       Value of props : {props.dark}


// but when we pass string props as "true" it print in this line
//       Value of props : {props.dark}

// why

// I see, now I understand your question. The reason behind this behavior lies in how 
// JavaScript and React handle boolean values and strings.

// When passing boolean props as true:
// If you pass a boolean prop as true, it's interpreted as a JavaScript boolean value. 
// In React, when you render {props.dark}, it actually renders the boolean value true, 
// but because React doesn't render boolean values as text directly in JSX, it doesn't 
// display anything. React treats {true} as a valid expression but renders nothing 
// because it's not valid JSX content.

// When passing string props as "true":
// When you pass "true" as a prop, it's treated as a string. 
// React can render string values directly in JSX. So, when you render {props.dark}, 
// it displays the string "true" as text.

// To illustrate this, consider the following:

// When passing boolean props as true
//  <Check dark={true} /> 
// In the Check component, {props.dark} renders nothing because it's a boolean value

// When passing string props as "true"
//  <Check dark={"true"} /> 
// In the Check component, {props.dark} renders "true" as text

// ---------------------------------------------------------------------------------

// import './App.css';
// import Button from './Button';

// function App() {
//   return (
//     <div>
//       <Check dark />
//       <Check />
//     </div>
//   );
// }

// export default App;



// In the above code, the <Check dark /> syntax is using a shorthand for passing 
// a prop named dark to the Check component. When you write <Check dark />, it's 
// equivalent to <Check dark={true} />. So, the value of dark is implicitly set to 
// true when you use this shorthand.

// Therefore, in the App component:

//  <Check dark />  

// It's passing the dark prop with a value of true to the first Check component, 
// indicating that this Check should have the dark theme applied. However, 
// in the second Check component:

// <Check /> 

// No dark prop is passed explicitly, so its value is undefined or false. 
// Without the dark prop, the Check component will not apply any specific 
// dark theme and will use the default styles.

// So, in summary, by writing <Check dark />, you are indeed passing the value 
// of dark as true to the Check component.















