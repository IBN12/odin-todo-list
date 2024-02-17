import { compareAsc, format } from "date-fns";
import { InitializeDomContent } from "./modules/Dom-Content";
import './style/style.css';
/** |Todo List Project|
 * => Assignment:
 * 1. Your 'todos' are going to be objects that you'll want to dynamically create, which means 
 * either using factories or constructors/classes to generate them. 
 * 
 * 2. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should 
 * have a title, description, dueDate and priorty. You might also want to include notes or even a
 * checklist.
 * You will need:
 * todo title
 * todo description
 * todo dueDate
 * todo priorty
 * todo notes
 * 
 * 8. We haven't learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their 
 * todos will disappear! You should add some persistence to this todo app using the Web Storage API.
 * 
 * LocalStorage allows you to save data on the user's computer. The downside here is that the data is only accessible on
 * the computer that it was created on. Even so, it's pretty handy!
 * 
 * Set up a function that saves the projects (and todos) to local storage every time a new project (or todo) is created, and another function 
 * that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get 
 * tripped up: 
 * -> Make sure your app doesn't crash if the data you may want to retrieve form localStorage isn't there!
 * 
 * -> You can inspect data you saved in localStorage using DevTools! To do this, open the 'Application' tab in DevTools and click on the 
 * 'Local Storage' tab under 'Storage'. Every time you add, update and delete data from  localStorage in your app, those changes will be
 * reflected in DevlTools. 
 * 
 * -> localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. Keep in mind you
 * cannot store functions in JSON, so you'll have to figure out how to add methods back to your object properties once you fetch them. 
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Practicing with Local Storage|
/** |Basic Concepts|
 * => Storage objects are simple key-value stores, similar to objects, but they stay intact through page loads. The keys and the values 
 * are always strings (note that, as with objects, integer keys will be automatically converted to strings). You can access these values like an objects, or with
 * the 'Storage.getItem()' and 'Storage.setItem()' methods. These three lines all set the (same) colorSetting entry: 
 * 
 * localStorage.colorSetting = '#a4509b'; 
 * localStorage["colorSetting"] = "#a4509b";
 * localStorage.setItem("colorSetting", "#a4509b");
 * 
 * Note: It's recommended to use the Web Storage API(setItem, getItem, removeItem, key, length) to prevent the pitfalls associated with using plain objects as
 * key-value stores. 
 * 
 * => The teo mechanisms within Web Storage are as follows:
 * 1. SessionStorage maintains a separate storage area for each given origin that's available for the duration of the page sessions (as long as the browser is open,
 * including page reloads and restores).
 * 
 * 2. localStorage does the same thing, but persists even when the browser is closed and reopened. 
 * 
 * => JSON: Storage only supports storing and retrieving strings. If you want to save other data types, you have to convert them to strings. For plain objects
 * and arrays, you can use 'JSON.stringify()'.
 */

console.log('|Practicing with Local Storage|');
let testOne = 333;
localStorage.setItem('test', testOne); 

let returnOne = Number(localStorage.getItem('test'));
console.log('Value: ', returnOne);
console.log('Value Type: ', typeof(returnOne)); 
console.log('Local Storage Length: ', localStorage.length); 
console.log('\n');

console.log('=> Deleting key from local storage...');
localStorage.removeItem('test');
console.log('Local Storage Length: ', localStorage.length);
console.log('\n'); 


console.log('=> Adding an object to the local storage...');
const testObj = {nameOne: 'Isom'};
localStorage.setItem('testObj', JSON.stringify(testObj));
console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
console.log('\n'); 

console.log('=> Adding a property to the local storage object...');
testObj['nameTwo'] = 'Jordan';
localStorage.setItem('testObj', JSON.stringify(testObj)); 
console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj')));
console.log('\n'); 

console.log('=> Adding a another property to the local storage object...');
testObj['nameThree'] = 'Brock';
localStorage.setItem('testObj', JSON.stringify(testObj));
console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
console.log('\n');

console.log('=> Adding another object to the local storage...');
const randomObj = {random: null};
localStorage.setItem('randomObj', JSON.stringify(randomObj));
console.log('Object Value: ', JSON.parse(localStorage.getItem('randomObj')));
console.log('\n'); 

console.log('=> Deleting the random object from the local storage...'); 
localStorage.removeItem('randomObj'); 
console.log('Object Value: ', JSON.parse(localStorage.getItem('randomObj')));
console.log('\n'); 

console.log('=> Deleting a property from test object in local storage...');
delete testObj.nameTwo; 
localStorage.setItem('testObj', JSON.stringify(testObj));
console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
console.log('\n'); 

console.log('=> Deleting test object from the local storage...');
localStorage.removeItem('testObj');
console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj')));
console.log('\n'); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Practicing with Date-fns|
console.log("|Practicing with Date-Fns|"); // Testing 

const dateOne = new Date();
console.log('Basic Date One: ', dateOne); 
console.log('Date One Day of the week : ', dateOne.getDay());
console.log('Date One Day: ', dateOne.getDate()); 
console.log('Date One Month: ', dateOne.getMonth() + 1); 
console.log('Date One FullYear: ', dateOne.getFullYear()); 
console.log('\n'); 

const result = format(new Date(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate()), 'MMM/dd/yyyy');
console.log('Result using format: ', result);
console.log('\n'); 
console.log('---------------------------------------------------------');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

InitializeDomContent(); 

