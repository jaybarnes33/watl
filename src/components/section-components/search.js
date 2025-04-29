import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useState } from 'react';
import useSuggest from '../useSuggest';
import { BaseAPIURL } from '../../API/base';
import Loader from '../global-components/loader';
import useLoader from '../useLoader';
import { toast } from 'react-hot-toast';

const Searach=()=>{
	let publicUrl = process.env.PUBLIC_URL+'/'
	let imagealt = 'image'
	
	const {suggest,setSuggest} =useSuggest()
	const {loading,setLoading}= useLoader()
	const [category, setCategory]= useState([])
	const [destination, setDestination]= useState([])


	useEffect(() => {
		setLoading(true)
		const urls = [`${BaseAPIURL}excursionstype`, `${BaseAPIURL}destination`];
		Promise.all(urls.map(url => fetch(url).then(r => r.json())))
			.then(([stats, info]) => {
				console.log(stats, info)
				setCategory(stats);
				setDestination(info);
				setLoading(false)
			})
			.catch(error => console.log(error));
	}, [])



   const handleSearch= async()=>{
	setLoading(true)
		fetch(`${BaseAPIURL}destination/${suggest.destinationId}/type/${suggest.categoryId}`,{
			method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${userDetails.access_token}`,
      },

		})
		  .then((res) => res.json())
		  .then((data) => {
			if (data.success) {
			setLoading(false)

				setSuggest(data.data)
			  } else if (data.length <= 0) {
				console.log(data)
				toast.error("No data to display")
			  }
			setSuggest(data.data)
			
		  }).catch(function (error){
			setLoading(false)
			if(error.response){
				toast.error("Search failed Contact Admin")
			}
		
		})
	  
   }


	


	if (loading) {
		return <Loader />
	  } else {
    return (

		<>
   <div className="search-area tp-main-search-area viaje-go-top">
		  <div className="container">
		    <div className="tp-main-search">
		      <div className="row">
				<div className="col-lg-5 col-md-4 order-lg-9">
		          <div className="tp-search-single-wrap float-left w-100">
		            <select type="select" className="w-100 form-select"  style={styles.select}
					  value={suggest?.destinationId || ""}
					  onChange={(e) =>setSuggest({...suggest, destinationId: e.target.value})}
					>
						 <option value={''} disabled selected style={{color:"#9e9e9e"}}>Destination</option>
						{destination?.data?.map((x,i)=>(<option key={i} value={x.id}>{x.name}</option> ) )}
						
		            </select>
		            <i className="ti-location-pin" />
		          </div>
		        </div>
		     
		        <div className="col-lg-5 col-md-4 order-lg-9">
		          <div className="tp-search-single-wrap float-left w-100">
		            <select  
					 className=" w-100 form-select" 
					 style={styles.select}
					  value={suggest?.categoryId}
					  onChange={(e) =>
						setSuggest({...suggest, categoryId:e.target.value})
					  }
					>
						 <option value={''}  disabled selected style={{color:"#9e9e9e"}}>Excursion Type</option>
						 <option value={"All"} key={"All"}>All</option>
						{category?.data?.map((x,i)=>(<option key={i} value={x.id}>{x.name}</option>))}
		              
						
						
		            </select>
		            <i className="fa fa-plus-circle" />
		          </div>
		        </div>
		        {/* <div className="col-lg-3 col-md-8 order-lg-6">
		          <div className="tp-search-single-wrap float-left">
		            <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
		              <input type="text" className="departing-date" placeholder="Departing" />
		              <i className="fa fa-calendar-minus-o" />
		            </div>
		            <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
		              <input type="text" className="returning-date" placeholder="Returning" />
		              <img src={publicUrl+"assets/img/icons/2.png"} alt="icons" />
		            </div>
		          </div>
		        </div> */}
		        <div className="col-lg-2 col-md-4 order-12">
		          <button className="btn btn-yellow"  onClick={()=>window.location.reload()}>Reset Filter </button>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		</>

	)
			}
}



export default Searach

const styles = { 
	select: {
		outline: "none",
		WebkitBoxShadow: "none",
		boxShadow: "none",
		border: "none",
		lineHeight: 45,
		color: '#9e9e9e',
		height: '45px',
		paddingLeft: 20,
		
	}
}