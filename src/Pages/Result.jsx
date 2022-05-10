import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Panel/Panel'
import Footer from '../Components/Footer/Footer'
import SpaceHero from '../Components/SpacerHero/SpaceHero'
import Cars from '../Components/Card/Cars'
import {connect} from 'react-redux';


class Home extends Component {

    state = {
        data: []
    }

    async getData() {
        let data = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
        let datas = await data.json();
        this.setState({data: datas})
    }


    componentDidMount() {
        //this.getData();
        this.props.getData();
    }

    getDevi

  render() {
    //console.log(this.state.data)
    return (
      <div>
          <Navbar></Navbar>
          <SpaceHero></SpaceHero>
          <Panel show="true" edit="true"></Panel>

          <div className="row">
            <div className="container d-flex flex-wrap justify-content-between w-80">
            {/* { this.state.data.map((e,key)=>{ 
                return <Cars key={key} {...e}/>
            }) } */}

            { this.props.data.map((e,key)=>{ 
                return <Cars key={key} {...e}/>
            }) }

            
            {/* {
            this.props.data != null ? 
                this.props.data.map((e,key)=>{ 
                  return <Cars key={key} {...e}/>
              }) : []
            } */}
            
            
            

            </div>

          </div>
          <Footer></Footer>
      </div>
    )
  }
}

const getData = () => async(dispatch) => {
  let data = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
  let datas = await data.json();
  return dispatch({type:'FETCH_DATA', payload: datas})
}


const mapDispatchToProps = (dispatch) => {
  return {
      getData : () => dispatch(getData())
  }
}

const mapStateToProps = (state) => {
  console.log('dari global : ');
  console.log(state.data);
  return {
      data : state.data,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
