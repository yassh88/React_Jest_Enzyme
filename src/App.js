import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hideBtn: false
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch = () => {
    this.props.fetchPosts();
    this.updatesState();
  }

  updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  returnsTestValue(number) {
    return number + 1;
  }

  render() {
    let listItem = '';
    let sharedButton = ''

    if(this.props.posts.length > 0 ){
    const items=  this.props.posts.map((post, index) => {
        const { title, body } = post;
        const configListItem = {
          title,
          desc: body
        };
        return (
          <ListItem key={index} {...configListItem} />
        )
      });
      listItem =  <div>{items} </div>
    }

    if(!this.state.hideBtn){
      sharedButton =<SharedButton 
      buttonText= 'Get posts'
      emitEvent={this.fetch}
    />
    }
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Test React App with Jest & Enzyem" desc="Click the button to render data!" tempArr={tempArr} />
          {sharedButton}          
          {listItem}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);