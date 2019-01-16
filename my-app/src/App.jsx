import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Nav from './components/Nav';

/* Calculator App
import Calculator from './components/Calculator';
**/

/* Friends App
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import FriendCard from './components/FriendCard';
import friends from './friends.json';
*/

/* List App */
import List from './components/List';
import groceryList from './groceryList.json';

class App extends Component {
  render () {
    return (
      /* Default app including Nav and Calculator
      // <div className="App">
      //   <Nav />
      //   <header className="App-header">
      //     <Calculator />
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      // </div>
      */

      /* Friends App */
      // <Wrapper>
      //   <Title>Friends List</Title>
      //   {/* <SpongeBobCard />
      //   <MrKrabsCard />
      //   <SquidwardCard /> */}
      //   {friends.map(friend => <FriendCard key={friend.id} type={friend} />)}
      // </Wrapper>
      /***/

      /* List App */
      <div className="App">
        <Nav />
        <header className="App-header">
          <List data={groceryList}/>
        </header>
      </div>

    );
  }
}

export default App;
