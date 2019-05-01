import React from 'react'

class Bills extends React.Component{
  render(){
    console.log(this.props.bills);
    const bills = this.props.bills.map(bill => {
      return <ul>{bill.name} - ${bill.amount}</ul>
    })
    return(
    <div>
      {bills}
    </div>
    )
  }
}

export default Bills
