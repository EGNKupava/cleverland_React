import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import CheckboxList from './CheckboxList';

class ProductList extends React.Component {

  state = {
    items: [],
    productName: '',
    productValue: 1,
    key: '',
  };

  onMinusClick = () => {
    if (this.state.productValue > 1) {
      this.setState((prevState) => ({
        productValue: prevState.productValue - 1,
      }))
    }
  };

  onPlusClick = () => {
    this.setState((prevState) => ({
      productValue: prevState.productValue + 1,
    }))
  };
  
  onChangeInput = (event) => {
    let text = event.target.value;
    this.setState({
        productName: text,
    });
  };
  
  onAddClick = () => {
    if (this.state.productName) {
      let item = {
        productName: this.state.productName,
        productValue: this.state.productValue,
        key: Date.now(),
      };
      this.setState({
        items: [...this.state.items, item],
        productName: '',
        productValue: 1,
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState((prevState) => ({
      ...prevState,
      items: filteredItems
    }));
  }

  render() {
    return (
      <div className="ProductList">
        <div className="input-wrap">
          <TextField
            onChange={this.onChangeInput}
            placeholder="Наименование"
            id="outlined-helperText"
            value={this.state.productName}
            helperText="Введите наименование продукта и количество"
            variant="outlined"
          />
          <Fab onClick={this.onMinusClick} color="secondary" aria-label="add">
            <RemoveIcon />
          </Fab>
          <TextField
            className="num-input"
            id="outlined-helperText"
            value={this.state.productValue}
            variant="outlined"
          />
          <Fab onClick={this.onPlusClick} color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <div className="addButtonContainer">
          <Button onClick={this.onAddClick} variant="contained" color="primary">
            Добавить
          </Button>
        </div>
        <CheckboxList
          items={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  };
}

export default ProductList;

