import React, { Component } from 'react';
import Dialog from './components/Dialog.js';


class App extends Component {
  state = {
    isOpen: false
  }
  render(){
    return (
    <div className="App">
      <button onClick={(e) => { this.setState({ isOpen:true })}}>Abrir Modal</button>
      <Dialog>
        <div>teste</div>
      </Dialog>
    </div>
    );
  }
}


export default App;
