import React, { Component } from 'react';
import './App.css';
import Boba from './Boba';

// Made objects for each boba drink
const defaultBoba = new Boba('', '', 'https://i.imgur.com/XdAnrtO.gif');
const mintSereno = new Boba('Mint Sereno', 'The Mint Sereno blend is made from fresh mint, real cream and brown sugar.', 'https://7leavescafe.com/wp-content/uploads/IMG-7074-scaled-e1578445612853.jpg');
const jasmineMilk= new Boba('Jasmine Milk Tea', 'A Sweet Mix of Jasmine Green Tea and Milk', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_JasmineMilkTea-540x360.jpg');
const japaneseMatchaSoy = new Boba('Japanese Matcha Soy Tea', 'Japanese Matcha Tea is the delicious merge between the health boosting matcha and organic soy milk.', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_MatchaSoy-540x360.jpg');
const vietCoffee = new Boba('Vietnamese Coffee', 'Traditional Vietnamese Iced Coffee ', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_VietnameseCoffee-e1577493600380-540x519.jpg');
const houseCoffee= new Boba('House Coffee', 'Authentic Vietnamese Style Creamy Iced Coffee', 'https://7leavescafe.com/wp-content/uploads/drink-1-540x341.jpg');
const japaneseMatcha = new Boba('Japanese Matcha Tea', 'Matcha is known today as the healthiest, rarest and most premium of all tea varieties from Japan.', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_JapaneseMatchaTea-540x360.jpg');
const taroMilk = new Boba('Taro Milk Tea', 'Fresh Taro Root Cooked with Loose-Leaf Jasmine Tea', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_TaroMilkTea-540x360.jpg');
const thai = new Boba('Thai Tea', 'A Blend of Black Teas, Vanilla Bean, Cardamom, and Anise', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_Thai_Tea-540x360.jpg');
const seaCreamJasmine = new Boba('Sea Cream Jasmine Tea', 'Jasmine Green Tea Topped with Whipped Sea Cream', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_SeaCreamJasmineTea-540x360.jpg');
const seaCreamBlackCoffee = new Boba('Sea Cream Black Coffee','Special Blend Black Coffee Topped with Whipped Sea Cream','https://7leavescafe.com/wp-content/uploads/Drinks_Cold_SeaCreamBlackCoffeelogocolored-540x360.jpg')
const herbal = new Boba('Herbal Tea', 'Brewed from Seven Types of Herbs and Teas', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_HerbalTea_Square-540x540.gif');
const strawberryHibiscus = new Boba('Strawberry Hibiscus Tea', 'Brewed with Real Fruits, Hibiscus Flowers, and Rooibos Teas', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_StrawberryHibiscusTea-540x360.jpg');
const mungBeanMilk = new Boba('Mung Bean Milk Tea', 'Jasmine Tea with Mung Bean and Pandan Leaves', 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_MungBeanMilkTea_04-copy-540x362.jpg');
const sunsetPassion = new Boba('Sunset Passion', 'Hand Squeezed Passion Fruit', 'https://7leavescafe.com/wp-content/uploads/drink-2-540x341.jpg');
const assamMilkandOolongMilk = new Boba('Assam Milk Tea & Oolong Milk Tea', 'Full-Bodied and Creamy Milk Teas', 'https://7leavescafe.com/wp-content/uploads/AO_0609171-540x537.jpg');
const summerMint = new Boba('Summer Mint', 'Green Tea and Real Passion Fruit With Hints of Mint and Orange. ', 'https://7leavescafe.com/wp-content/uploads/Summer-Mint_3.26.2019-3-540x360.jpg');

// Placed objects into arrays
const bobaMenu = [defaultBoba, mintSereno, jasmineMilk, japaneseMatchaSoy, vietCoffee, houseCoffee, japaneseMatcha, taroMilk, thai, seaCreamJasmine, seaCreamBlackCoffee, herbal, strawberryHibiscus, mungBeanMilk, sunsetPassion, assamMilkandOolongMilk, summerMint];
const ice = ['None', 'light', 'regular'];
const sweetener = ['None', 'light ', 'medium', 'heavy'];
const toppings = ['None', 'grass jelly', 'aloe vera', 'boba', 'custard pudding', 'strawberry pieces'];

let choice = 0;
let iceChoice = 0;
let toppingsChoice = 0;
let sweetenerChoice = 0;

// React stuff
class App extends Component {
  render () {
    // Button logic
      function handleClick(e) {
        e.preventDefault();

        // Random for Javascript
        choice = Math.floor(Math.random() * bobaMenu.length);
        iceChoice = Math.floor(Math.random() * ice.length);
        toppingsChoice = Math.floor(Math.random() * toppings.length);
        sweetenerChoice = Math.floor(Math.random() * sweetener.length);

        // Boba default breaks program
        if (choice == 0)
        {
          choice+= 1;
        } 
        document.getElementById('boba-name').innerHTML = `${bobaMenu[choice].name}`;
        document.getElementById('boba-ice').innerHTML = ` Ice: ${ice[iceChoice]}`;
        document.getElementById('boba-toppings').innerHTML = ` Topping: ${toppings[toppingsChoice]}`;
        document.getElementById('boba-sweetener').innerHTML = ` Sweetness: ${sweetener[sweetenerChoice]}`;
        document.getElementById('boba-description').innerHTML = `${bobaMenu[choice].description}`;
        // document.getElementsByClassName('img').src = `${bobaMenu[choice].image}`;
        document.getElementById('boba-image').src = `${bobaMenu[choice].image}`;

     
    }
    return (

      <div >
        {/* html boilerplate */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boba Hackathon</title>

        <div className="container">
          <header className="boba-header">
            <h1 className="title">Spontaneous B</h1>
          </header>

          <div className="boba-card">
            <p className="card-paragraph">
              Click below to choose a random boba for the day
            </p>
            <button class="btn" onClick={handleClick}>Click me!</button>
          </div>

          <div className="randomizer">
            <h2 id = "boba-name">
              { bobaMenu[choice].name }
            </h2>

            <h3 id="boba-ice"></h3>
            <h3 id="boba-toppings"></h3>
            <h3 id="boba-sweetener"></h3>
            <p id="boba-description">
              { bobaMenu[choice].description }
            </p>
            <img className="img" id = "boba-image" src= {bobaMenu[choice].image } alt="placeholder" width="400px" height="400px"/> 
          </div>
        </div>
      </div>
      
    );
  }  
}



export default App;