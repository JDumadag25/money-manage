import React from 'react'

class Bills extends React.Component{



  render(){
    const bills = this.props.bills.map(bill => {
      return <ul>{bill.name} - ${bill.amount}</ul>
    })

    return(
    <div>
      {this.props.total}
      {bills}
    </div>
    )
  }
}

export default Bills
