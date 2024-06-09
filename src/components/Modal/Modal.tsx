import React, { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, toggleModal }) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-opacity-50 bg-[grey] z-[1000]"
                onClick={toggleModal}
            ></div>
            <div className="fixed top-1/2 bg-[white] rounded-[9px] border border-[#c4c4c4] shadow-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg p-6 max-h-[90vh] overflow-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
