import React from 'react';

const ConfirmationModal2 = (title,action,closeModal,isModalOpen, setIsModalOpen) => {
    return (
        <div>
            <input type="checkbox"  id="confirm-modal2" className="modal-toggle" checked={isModalOpen}
            onChange={() => setIsModalOpen(!isModalOpen)}/>
            <div className="modal w-auto max-w-none">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>

                    <div className="modal-action">

                        {/* if there is a button in form, it will close the modal */}
                        <label onClick={action}   htmlFor="confirm-modal2" className="btn">Yes</label>
                        <button onClick={closeModal} className="btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal2;