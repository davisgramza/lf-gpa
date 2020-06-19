import React from "react"
import {Grade} from "./grade"
import config from "../config.json"

export class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.RULES = config

    this.state = {
      totalWeight: 0,
      numberOfGrades: 0
    }
    this.updateContribution = this.updateContribution.bind(this)
  }

  updateContribution(weight, change) {
    this.setState({totalWeight: this.state.totalWeight - weight * change, numberOfGrades: this.state.numberOfGrades - change});
  }

  getGrades() {
    let grades = []
    let counter = 0
    for (let grade in this.RULES) {
      for (let level in this.RULES[grade]) {
        let weight = this.RULES[grade][level]
        grades.push(
          <Grade grade={grade} level={level} weight={weight} notifyChange={this.updateContribution} key={counter}/>
        )
        counter++;
      }
    }
    return grades
  }

  render() {
    let gpa = (this.state.totalWeight / (this.state.numberOfGrades !== 0 ? this.state.numberOfGrades : 1)).toFixed(5)
    let grades = this.getGrades()
    return (
    <div className="calculator">
      <p>GPA: { gpa }</p>
      <div className="grades">
        { grades }
      </div>
    </div>
    )
  }
}