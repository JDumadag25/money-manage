import React from 'react'
import BillsForm from './BillsForm'

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
  document.getElementById('money-added').reset();
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
        <form  id='money-added' onSubmit={this.updateInputValue}>
          <input type='number' onChange={this.handleInput}></input>
        </form>
        {this.state.total}
        </div>
        <BillsForm/>
      </div>


    )
  }
}

export default Homepage
