import React from "react";


interface Props {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}


const ConfirmationModal: React.FC<Props> = ({ isOpen, title, message, onCancel, onConfirm }) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const handleOpen = () => setIsOpen(true);
    // const handleClose = () => setIsOpen(false);

    return (
        <>
            <div
                className={`modal fade ${isOpen ? "show" : ""}`}
                id="confirmationModal"
                tabIndex={-1}
                aria-labelledby="confirmationModalLabel"
                aria-hidden="true"
                style={{ display: isOpen ? 'block' : 'none', background: "rgba(0,0,0,0.5)" }}

            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">
                                {title}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">{message}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCancel}                            >
                                No
                            </button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={onConfirm}                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ConfirmationModal;