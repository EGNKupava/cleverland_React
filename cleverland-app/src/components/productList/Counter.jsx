import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';


class Counter extends React.Component {

  render() {
    return (
      <div className="Counter">
        <Fab onClick={this.props.onMinusClick} color="secondary">
          <RemoveIcon />
        </Fab>
        <TextField
          className="num-input"
          id="outlined-helperText"
          value={this.props.productValue}
          variant="outlined"
        />
        <Fab onClick={this.props.onPlusClick} color="secondary">
          <AddIcon />
        </Fab>
      </div>
    )
  };
}

export default Counter;