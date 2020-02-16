import React from 'react';
import axios from 'axios'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>{ 
      this.setState({data:res.data});
    })
  }
  getHead(){
    if(this.state.data.length){
      return <tr key={0}>
      <th>
        <input type="checkbox" />
        </th>
        <th>
            Sl.No
        </th >
        <th>
           Title
        </th>
        <th>
            URL
        </th>
        </tr>
    }else{
     return <div style={{align:'center'}}>No records.</div>
    }
    
  }
  getBody(){
    let bodyData=this.state.data && this.state.data.map((ele,i)=>{
      return <tr key={i+1} width="20px">
      <td>
      <input type="checkbox" />
      </td>
        <td>
        {ele.id}
        </td>
        <td>
        <img src={ele.thumbnailUrl} style={{width:"20px"}} />
        </td>
        <td>
        {ele.title}
        </td>
      </tr>
    });
    return bodyData;
    
  }
  render(){
    return <div align='center'>
        <table>
          <thead>
            {this.getHead()}
            </thead>
            
            <tbody>
              {this.getBody()}
              </tbody>
          </table>
    </div>
  }
}