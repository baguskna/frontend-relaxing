import React from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  goToCart: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, goToCart }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-grey-200 opacity-50 z-20"
        onClick={onClose}
      ></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Item berhasil ditambahkan ke keranjang
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Tutup
              </button>
              <button
                className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={goToCart}
              >
                Ke keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
