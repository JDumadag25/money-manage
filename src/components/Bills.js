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
        <input type='number'></input>
        <button onClick={this.enterBills}></button>
      </div>
    )
  }
}

export default Bills
