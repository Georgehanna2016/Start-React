import React from 'react'
import { Link, useLocation } from 'react-router-dom';


export default function Modal() {
  const location =  useLocation()
  const {src} = location.state
  return<><div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
 <div className='modal  d-flex justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 bg-dark bg-opacity-10'>
    <div className="modalItem  position-relative">
            <div className='text-center '>
            <h2 className='display-4 fw-bolder'>LOG CABIN</h2>
            <h2 className='starAfter2 position-relative '> <i className='fa-solid fa-star'></i> </h2> 
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={src} alt="Item" className='modalImg rounded-5' />
                
            </div>
            <div className='text-center  '>
            <p className='w-75 mx-auto text-center py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <Link to={"/portfolio"} className='btn btn-success  ' >Close Window</Link>
            <Link to={"/portfolio"} className="fa-solid fa-xmark position-absolute top-0 end-0 p-3 fa-3x text-decoration-none"></Link>
            </div>
           
            </div>
    </div>
  
  
  
  
  </>
}
