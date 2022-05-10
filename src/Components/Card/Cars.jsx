import React from 'react'
import { Link } from "react-router-dom";
import { BsPeople } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegCalendar } from 'react-icons/fa';
import {connect} from 'react-redux';

const Cars = (props) => {

  
  return (
    <div>
        <div key="{e.no}" className="card my-3" style={{width: `20rem`}}>
              <span className="p-4">
                  <img src={props.image} className="card-img-top" alt="..."/>
              </span>
              <div className="card-body">
                  <p className="card-text">{props.name}/{props.category}</p>
                  <h5 className="card-title fw-bold mb-3">Rp. {props.price.toLocaleString('en-US')} / hari</h5>
                  <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis deleniti molestiae beatae neque ea atque, qui expedita molestias quasi?</p>
                  
                  <p className="card-text text-muted mb-1 fw-light">
                      <BsPeople/> {props.people}
                  </p>
                  <p className="card-text text-muted my-2 fw-light">
                      <FiSettings/> Manual
                  </p>
                  <p className="card-text text-muted fw-light">
                      <FaRegCalendar/> Tahun 2020
                  </p>

                  <div className="row mt-4 px-3">
                        <Link to={`detail/${props.id}`} onClick={props.changeStatus} className="btn btn-success w-100">
                            <i className="fa-solid fa-square-pen"></i>
                            {props.status}
                        </Link>
                  </div>

              </div>
          </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        people : state.people,
        tipe : state.tipe,
        year : state.year,
        status : state.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: () => dispatch({type:'CHANGE_STATUS',status:1})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cars)