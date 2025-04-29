
import React from 'react'
import { Button } from 'reactstrap'


 const TransferPricemodal = ({setShow}) => {
  return (
    <div className = "mfp-bg" size="lg" >
  <div className = 'modal-dialog modal-dialog-centered' >
    <div className = 'modal-content' style={{background:"white"}}>
      <div className = 'modal-header'>
        <h5 className = 'modal-title' style={{color:"orange"}}>Summary Cost</h5>
        <button type ="button" className ="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className ="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className ="modal-footer">
        <button type="button" className ="btn btn-secondary" data-dismiss="modal" onClick={()=>setShow(false)}>Close</button>
        <button type="button" className ="btn btn-primary">Continue</button>
      </div>
    </div>
  </div>
</div>
  )
}
export default TransferPricemodal
