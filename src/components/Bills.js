import React from 'react'

class Bills extends React.Component{

  state = {
    bills:[],
    name:'',
    amount:''
  }

  enterBills = () => {
    console.log("click");
  }

  handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
   })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let newBill = {}
    let newName = this.state.name
    let newAmount = this.state.amount
    newBill[newName] = this.state.amount
    console.log(newBill);
    await this.setState({
      bills: [...this.state.bills, newBill]
    })
    console.log(this.state.bills);
  }

  render(){

    

    return(
    <div>
      <div>
        <h5>Enter your bills for this month here:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Name
          <input type='text' name='name' onChange={this.handleChange}></input>
          </label>
          <label>Amount
          <input type='number' name='amount' onChange={this.handleChange}></input>
          </label>
          <button onClick={this.enterBills}>ENTER</button>
        </form>
      </div>
      <div>
        <h2>Show bills</h2>
      </div>
    </div>

    )
  }
}

export default Bills
