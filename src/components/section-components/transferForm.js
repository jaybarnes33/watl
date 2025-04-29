
import React, { useRef } from 'react'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
// import TransferPricemodal from './modal'
import TransferPricemodal from './transferpricemodal'
// import background from '../../images/background-7.jpeg'

const TransferForm = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  const [show, setShow]=useState(false)
  const [data, setData]=useState({})
  const roundTripRef = useRef(null)
console.log(show);


function makeBlur1 ()  {
  document.body.style.opacity = 0.5;
}
const handleModal=()=>{

    // makeBlur1()
  
    setShow(!show)

}
const handleOnchange=(evnt)=>{
  
console.log(evnt) ;
// setData((prev)=>[...prev,])
}
console.log(data);
const roundTrip=[
  {name:"Select", value: 0},
  {name:"Yes", value: 1},
  {name: "No" , value: 2}
]
const handleRef=(ref)=>{
  console.log(ref);
}
const handleSearch=()=>{
  if(!data?.pickup || data?.pickup === ""){
toast.error("Enter Pickup Address")
return
  }
  if(!data?.dropoff || data?.dropoff === ""){
    toast.error("Enter Dropoff Address")
    return
  } 
 if(!data?.pickupDate || data?.pickupDate === ""){
   toast.error("Enter Pickup Date")
  return
 } 
 if(!data?.time || data?.time === ""){
  toast.error("Enter Time")
 return
} 

 if(!data?.pickupDate || data?.pickupDate === ""){
  toast.error("Enter Number of people")
  return
} 
 
setShow(!show)
}

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
       <h6 style={{textAlign:'center', marginTop:50}}>Let us save you some time. Book your ride instantly</h6>
       <div className='container' style={styles.container}>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Pickup</h6>
          <div className="tp-search-single-wrap">
            <input className="w-100"
              type="text"
              name="pickup"
              placeholder='Airport, Address, Hotel or Location name'
              onChange={(e)=>setData({
                ...data,pickup: e?.target?.value
              })}
            />
            <i className="ti-location-pin" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Drop Off</h6>
          <div className="tp-search-single-wrap">
            <input className="w-100"
            name="dropoff"
             
              type="text"
              placeholder='Airport, Address, Hotel or Location name'
              onChange={(e)=>setData({
                ...data,dropoff: e?.target?.value
              })}
            />
            <i className="ti-location-pin" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Pickup Date</h6>
          <div className="tp-search-single-wrap">
            <input className="w-100"
              type="date"
              placeholder='Pickup date'
              name="pickupDate"
              onChange={(e)=>setData({
                ...data,pickupDate: e?.target?.value
              })}
            />
            <i className="ti-calendar" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Pickup Time</h6>
          <div className="tp-search-single-wrap">
            <input className="w-100"
              type="time"
              placeholder='Pickup Time'
              name="pickupTime"
              onChange={(e)=>setData({
                ...data,time: e?.target?.value
              })}

            />
            <i className="ti-time" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Number of Travellers</h6>
          <div className="tp-search-single-wrap">
            <input className="w-100"
              type="number"
              placeholder='Number of Travellers'
             
              name="noOfPeople"
              onChange={(e)=>setData({
                ...data,noOfPeople: e?.target?.value
              })}
            />
            <i className="ti-user" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6' style={styles.box}>
          <h6 style={styles.title}>Round Trip?</h6>
          <div className="tp-search-single-wrap float-left w-100">
            <select className="select w-100" 
            name="roundtrip"
            onChange={(e)=> {handleOnchange(e); handleRef(roundTripRef)}} 
              value={data?.roundtrip}
              ref={roundTripRef}
            >
              {

              roundTrip.map((x,i)=> <option value={x.value} key={i}>{x.name}</option>)
            }
              
            </select>
            <i className="fa fa-plus-circle" />
          </div>

        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 ">
		          <button  className="btn btn-yellow w-100"  onClick={() =>handleSearch()  }><i className="ti-search" /> Search </button>
		    </div>

      </div>
      {show && (<TransferPricemodal setShow={setShow} />)}

    </div>
<div>
{show && (<TransferPricemodal setShow={setShow} show={show} />)}

</div>

    </>
  )

}
export default TransferForm

const styles = {
  container: {
    // backgroundColor: '#f1f1f1',
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginTop: 20,
    marginBottom: 100,

  },

  title: {
    backgroundColor: '#F3941E',
    textAlign: 'center',
    height: 40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  box: {
    height: 100,
    marginBottom: 10,
    // border: '1px solid #cecece',
    // padding:0
  }


}
