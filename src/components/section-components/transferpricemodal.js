
import React, { useState } from 'react'

import Modal from 'react-bootstrap4-modal';
//import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, } from 'react-bootstrap'
import { Button } from 'reactstrap'

 const TransferPricemodal = ({setShow, show}) => {



  return (
 
<Modal  visible={true}  >
        <div className="modal-header modal-lg">
          <h5 className="modal-title">Transportation charges</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{border:"none"}} onClick={()=>setShow(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
          <p>Invoice :</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>
           Close
          </button>
          <button type="button" className="btn btn-primary" >
            Continue
          </button>
        </div>
      </Modal>
  )
}
export default TransferPricemodal
