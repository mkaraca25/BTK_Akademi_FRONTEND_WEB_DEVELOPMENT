import React from 'react';

//useState Hooks
/*class ClassComponent extends React.Component {
  state = {
      counter:0
    }
  increase=()=>{
    this.setState({counter:this.state.counter+1});
  }
  render() {
    return (
      <div className="box">
        <h2>ClassComponent</h2>
        <p>Counter :{this.state.counter}</p>
        <button onClick={()=>this.increase()}>Increase</button>
      </div>
    );
  }
}*/

//useEffect
class ClassComponent extends React.Component {
  state = {
    counter: 0,
    counter1:0,
    timer:0
  }
  /*componentDidMount() {
    console.log("componentDidMount worked");
  }*/
  /*componentDidUpdate(prevProps,prevState) {
    if (prevState.counter!==this.state.counter) {
    console.log("componentDidUpdate worked");}
    else if(prevState.counter1!==this.state.counter1){
      console.log("counter1 uptated")
    }
  }*/
  componentDidMount() {
    this.myTimer=setInterval(()=>
    {
      this.setState({timer:this.state.timer+1})
    },1000);
  }
  componentDidUpdate(){
    console.log("Timer :",this.state.timer);
  }
  //clear
  componentWillUnmount(){
    clearInterval(this.myTimer)
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    console.log("ClassComponent :", this.state.counter);
    return (
      <div className="box">
        <h2>ClassComponent</h2>
        <p>Counter :{this.state.counter}</p>
        <p>Counter1 :{this.state.counter1}</p>
        <button onClick={() => this.increase()}>Increase</button>
        <button onClick={() => this.setState({ counter1:this.state.counter1+1})}>Increase Counter 1</button>
      </div>
    );
  }
}








export default ClassComponent;