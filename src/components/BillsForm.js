import React from 'react'
import Bills from './Bills'

class BillsForm extends React.Component{

  state = {
    bills:[],
    name:'',
    amount:'',
    newTotal: 0,
    totalAmount:0
  }

  enterBills = () => {
    console.log("click");
  }

  handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
   })
  }

  handleSubmit =  async (e) => {
    e.preventDefault()
    let newBill = {}
    newBill.name = this.state.name
    newBill.amount = this.state.amount
    await this.setState({
      bills: [...this.state.bills, newBill],
      totalAmount: this.state.totalAmount + this.state.amount
    })

  }

  render(){

    return(
    <div>
      <div>
        <h5>Enter your bills for this month here:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
          <input type='text' name='name' onChange={this.handleChange}></input>
          </label>
          <label>Amount:
          <input type='number' name='amount' onChange={this.handleChange}></input>
          </label>
          <button onClick={this.enterBills}>ENTER</button>
        </form>
      </div>
      <div>
        <Bills bills={this.state.bills} totalAmount={this.state.totalAmount}/>
      </div>
    </div>

    )
  }
}

export default BillsForm
