import React from 'react';
//import CreateSecondList from './createSecondList';
import './secondListStyle.css';
import cx from 'classnames';
import multiply from '../../icons/multiply.svg';
import check from '../../icons/check.svg';

class SecondList extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      list: [
        {id: 0, name: 'Wake up', checked: false},
        {id: 1, name: 'Eat breakfast', checked: false},
        {id: 1, name: 'Go to work', checked: false}
      ],
        value: ''
    }

    this.secondValueChange = this.secondValueChange.bind(this);
    this.secondListChange = this.secondListChange.bind(this);
    this.countNumber = this.countNumber.bind(this);
    // this.changeCurentValue = this.changeCurentValue.bind(this);
  }

  secondValueChange(e) {
    this.setState({value: e.target.value})
  }

  secondListChange() {
    if( this.state.value != ''){
      this.setState( state => {
        let newObj = {
          id: state.list.length,
          name: state.value,
          checked: false
        }

        const secondList = [...state.list, newObj];
  
        return{
          list: secondList,
          value: ''
        }
      })
    }
  }

  canselClickEvent = (i) => {
    this.setState(state => {
      const list = state.list.filter((item,j) => i !== j);
      
      return{
        list
      }
    })
  }
  confirmClickEvent = (i) => {
    this.setState(state => {
      const list = state.list.map((item,j) => {
        if ( j===i){
          for(let key in item){
            if(key=='checked'){
              let a = item[key]= true;

              let obj={
                id: item.id,
                name: item.name,
                checked: a
              }
              return obj;
            }
          }
          return item;
        }else{
          return item;
        }
      });
      return{
        list
      }
    })
  }

  countNumber() {
    let num = 0;
    this.state.list.map( item => {
      if(item.checked === false){
        num++;
      }   
    })
    return num;
  }
  
  // changeCurentValue = (i) => {
  //   this.setState(state => {
  //     const list = state.list.map((item,j) => {
  //       if ( j===i){
  //         for(let key in item){
  //           if(key=='name'){
  //             console.log(j);
              
              
  //             let obj={
  //               id: item.id,
  //               name: a,
  //               checked: item.checked
  //             }
  //             return obj;
  //           }
  //         }
  //         return item;
  //       }else{
  //         return item;
  //       }
  //     });
  //     return{
  //       list
  //     }
  //   })
  // }

  render(){
    
    return(
      <div className= 'toDoListSecond'>
        <h1 className='titleSecondToDo'>To do: {this.countNumber()}</h1>
        <ul className = 'secondBlockMain'>

        {this.state.list.map( (item,index) =>{
          return(
          <li key={item.name} className = {cx({
            secondListItems: true,
            doneStyle: item.checked,
            })}>
            {/* <input 
              className='secondListText' 
              onChange={()=> this.changeCurentValue(index)}
              value={item.name}
            /> */}
            <span className='secondListText'>
              {item.name}
            </span>
            <div className="subTools">
              <button className='gbtn' onClick={()=> this.confirmClickEvent(index)}>
                <img src={check} className="App-check" alt="check" />  
              </button>  
              <button className='rbtn' onClick={()=> this.canselClickEvent(index)}>
                <img src={multiply} className="App-multiply" alt="multiply" />
              </button> 
            </div>
          </li>
          )
        })}
        </ul>
        <div className="secondNavTool">
          <h3>Task</h3>
          <input 
            className = 'inputNewTask'
            onChange={this.secondValueChange} 
            value={this.state.value} 
            placeholder='What do you need to do?' 
            type="text"
          />
          <button className='secondNavToolBtn' onClick = {this.secondListChange}>Save item</button>
        </div>
      </div>
    )
  }
};

export default SecondList;
