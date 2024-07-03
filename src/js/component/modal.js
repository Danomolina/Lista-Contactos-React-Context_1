import React from 'react';

const Modal = ({ show, setShow, contacto, setContacto, deleteContact }) => {
    return (
        <div className={"modal fade " + (show ? "show" : "hide")} style={{ display: (show ? "block" : "none") }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                        <button onClick={() => setShow(!show)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        If you delete this thing the entire universe will go down!
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setShow(!show)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                        <button type="button" className="btn btn-secondary" onClick={() => {
                            deleteContact(contacto.id);
                            setContacto(null);
                            setShow(false);
                        }}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

