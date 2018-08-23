import React from 'react'

class Homepage extends React.Component {

  state = {
    total: 0,
    moneyAdded: '',
    newBalance: '',
  }

handleInput = (e) => {
  console.log(e.target.value);
  
}

  render(){
    return(
      <div>
      Add money to your Bank
      <form onSubmit={this.updateInputValue}>
        <input type='number' onChange={this.handleInput}></input>
      </form>
      {this.state.total}
      </div>

    )
  }
}

export default Homepage
