var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name : 'React',
      message :'This is default message'
    };
  },
  getInitialState:function(){
    return {
      name: this.props.name
    }
  },
  handleNewName:function(name){
    this.setState({
      name: name
      });
  },
  render: function(){
    //access props
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <br></br>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

module.exports = Greeter;
