import React  from "react";

export default class Footer extends React.Component {

  constructor(props) {
    super (props)
  }

  render() {
    return (
    <div>
      <h1>{this.props.footerText()}</h1>
      <h2>{this.props.footerHi()}</h2>
    </div>
    )
  }
}