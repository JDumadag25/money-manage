import React from 'react'

class Bills extends React.Component{



  render(){
    const bills = this.props.bills.map(bill => {
      return <ul>{bill.name} - ${bill.amount}</ul>
    })

    const billTotal = this.props.bills.map(bill => {
      let total = 0
      let amount = parseInt(bill.amount)
      return total += amount
    })

    return(
    <div>
      {bills}
      {billTotal}
    </div>
    )
  }
}

export default Bills
