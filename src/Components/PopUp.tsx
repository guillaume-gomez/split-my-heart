import React, { useState } from 'react';

interface PopUpProps {
  //onClose: () => void;
}

function PopUp({  } : PopUpProps) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>✕</label>
        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </div>
    </div>
  );
}
export default PopUp;