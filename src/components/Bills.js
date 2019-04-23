import React from 'react'

class Bills extends React.Component{

  state = {
    bills:[]
  }

  enterBills = () => {
    console.log("click");
  }

  render(){
    return(
      <div>
        <h5>Enter your bills for this month here:</h5>
        <label>Name</label>
        <input type='text'></input>
        <label>Amount</label>
        <input type='number'></input>
        <button onClick={this.enterBills}>ENTER</button>
      </div>

    )
  }
}

export default Bills
