import React from "react"

import Button from "react-bootstrap/Button"

export class Grade extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amountOfGrade: 0
    }
    this.incrementAmountOfGrade = this.incrementAmountOfGrade.bind(this)
    this.updateAmountOfGrade = this.updateAmountOfGrade.bind(this)
  }

  incrementAmountOfGrade(increment) {
    if (!increment && this.state.amountOfGrade === 0) {
      return;
    }
    let previousAmountOfGrade = this.state.amountOfGrade;
    this.setState({amountOfGrade: this.state.amountOfGrade + (increment ? 1 : -1)}, () => this.sendUpdate(this.state.amountOfGrade - previousAmountOfGrade))
  }

  updateAmountOfGrade(event) {
    let previousAmountOfGrade = this.state.amountOfGrade;
    let updatedAmountOfGrades = parseInt(event.target.value) || 0;
    this.setState({amountOfGrade: (updatedAmountOfGrades > 0) ? updatedAmountOfGrades : 0}, () => this.sendUpdate(this.state.amountOfGrade - previousAmountOfGrade))
  }

  sendUpdate(change) {
    this.props.notifyChange(this.props.weight, change);
  }

  render() {
    return (
      <div className="grade">
        <p>Grade: {this.props.grade}</p>
        <p>Level: {this.props.level}</p>
        <div className="controls">
          <Button variant="primary" onClick={() => this.incrementAmountOfGrade(true)}>+</Button>
          <input type="text" pattern="[0-9]*" value={this.state.amountOfGrade} onChange={(event) => this.updateAmountOfGrade(event)}/>
          <Button variant="danger" onClick={() => this.incrementAmountOfGrade(false)}>-</Button>
        </div>
      </div>
    )
  }
}