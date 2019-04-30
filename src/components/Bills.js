import React from 'react'

class Bills extends React.Component{
  render(){
    console.log(this.props.bills);
    const bills = this.props.bills.map(bill => {
      console.log(bill);
    })
    return(
      <h4>hello</h4>
    )
  }
}

export default Bills
