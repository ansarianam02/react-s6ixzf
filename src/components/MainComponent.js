import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        leaders : LEADERS,
        selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish.id});
  }

  render() {
        const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    console.log(LEADERS)
    return (      
        <div>
        <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>} />
              <Redirect to="/home" />
          </Switch>
           
          <Footer />
        </div>
    );
  }
}
/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/
export default Main;