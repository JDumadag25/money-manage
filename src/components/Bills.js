import React from 'react'

class Bills extends React.Component{

  state = {
    bills:{}
  }

  enterBills = () => {
    console.log("click");
  }

  handleName = (e) => {
    console.log(e.target.value);
    this.setState({name:e.target.value})
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({amount:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render(){
    return(
      <div>
        <h5>Enter your bills for this month here:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Name
          <input type='text' onChange={this.handleName}></input>
          </label>
          <label>Amount
          <input type='number' onChange={this.handleAmount}></input>
          </label>
          <button onClick={this.enterBills}>ENTER</button>
        </form>
      </div>

    )
  }
}

export default Bills
