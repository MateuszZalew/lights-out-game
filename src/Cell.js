import React, {Component} from 'react'
import "./Cell.css"

class Cell extends Component {

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes}/>
    )
  }
}


export default Cell;