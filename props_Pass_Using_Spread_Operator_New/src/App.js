import './App.css';
import Button from './Button';

// function App() {
//   const obj = {
//     "dark": true,
//     "style": {
//         "background": "black",
//         "color": "white"
//     }
//   }
//   return (
//     <div>
//       For checking purpose

//       <Button dark={true} style={{background: "black", color: "white"}} />
//       <Button {...obj} />
//     </div>
//   );
// }


function App() {
  return (
    <div>
      For checking purpose 

      <Button dark={true} style={{background: "black", color: "white"}} />
      <Button {"dark": "true", "style": {background: "black", color: "white"} } />
    </div>
  );
}

export default App;

// Question:

// you are not understand what i am saying to you 
// when we write this line 
// <Button {...obj} />
// ... operator spread all properties in this {}

// means it 
// {...obj} becomes this {"dark": "true", "style": {background: "black", color: "white"} }

// so why it work <Button {...obj} />
// and it not 
// <Button {"dark": "true", "style": {background: "black", color: "white"} } />

// Answer:

// I see what you're asking now. 
// The reason <Button {...obj} /> works 
// while <Button {"dark": "true", "style": {background: "black", color: "white"} } /> 
// does not work is because of the JSX syntax.

// In JSX, when you use the spread operator {...obj}, 
// it spreads the properties of the obj object as 
// individual props to the Button component. This is a valid JSX syntax.

// However, <Button {"dark": "true", "style": {background: "black", color: "white"} } /> 
// is not valid JSX syntax. When you provide props in JSX, you need to follow the syntax 
// propName={propValue} within curly braces.

// So, the correct way to pass props in JSX is either by using 
// the spread operator to spread an object's properties, like {...obj}, 
// or by providing props individually, like propName={propValue}. 
// The latter syntax is not followed in 
// <Button {"dark": "true", "style": {background: "black", color: "white"} } />, 
// hence it's not valid JSX.