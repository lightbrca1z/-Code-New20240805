import { Component} from "react"

class SwitchButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      SwitchOn : true,
      label : 'On'
    }
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  changeSwitch(){
    console.log(this)
    console.log('Clicked!');
    this.setState(prevState => {
      return {
      SwitchOn : !prevState.SwitchOn,
      label : !prevState.SwitchOn ? 'On' : 'Off'
      }
    })
  }

  render(){
    const { label } = this.state;
    return(
      <button onClick={this.changeSwitch}>{label}</button>
    )
  }
}

const Example = () => {
  return (
    <>
      <SwitchButton/>
    </>
  );
};

export default Example;
