import React from 'react'

class Homepage extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello");
  }

  render(){
    return(
      <div>
      Add money to your Bank
      <form onSubmit={this.handleSubmit}>
        <input type='number'></input>
      </form>
      </div>

    )
  }
}

export default Homepage
