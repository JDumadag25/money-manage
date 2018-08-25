import React from 'react'
import Bills from './Bills'

class Homepage extends React.Component {

  state = {
    total: 0,
    moneyAdded: '',
    newBalance: '',
  }

handleInput = (e) => {
  console.log(e.target.value);
  this.setState({moneyAdded: e.target.value})
}

updateInputValue = (e) => {
  e.preventDefault()
  let currentBalance = this.state.total
  let inputAmount = this.state.moneyAdded
  let newTotal = parseInt(currentBalance) + parseInt(inputAmount)
  this.setState({total: newTotal})
}

  render(){
    return(
      <div>
        <div>
        Add money to your Bank
        <form onSubmit={this.updateInputValue}>
          <input type='number' onChange={this.handleInput}></input>
        </form>
        {this.state.total}
        </div>
        <Bills/>
      </div>


    )
  }
}

export default Homepage
