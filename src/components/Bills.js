import React from 'react'

class Bills extends React.Component{

  state = {
    bills:{},
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

  handleSubmit = (e) => {
    e.preventDefault()
    let newname = this.state.name
    let newamount = this.state.amount
    let newbill = {newname : newamount}
    console.log(newbill);
  }

  render(){
    return(
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

    )
  }
}

export default Bills
