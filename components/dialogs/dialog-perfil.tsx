import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function DialogPerfil() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mx-10 pb-10">
      <Button className="border-green-300 bg-green-300 text-black" variant="outlined" onClick={handleClickOpen}>
        Más sobre mí
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className="text-green-300" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose />
        </IconButton>
        <DialogContent>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias corporis quas aut doloremque officia, eos repudiandae reprehenderit amet temporibus consequatur voluptate unde. Quas esse explicabo expedita voluptates optio saepe?
          </span>
        </DialogContent>
        <DialogActions>
          <Button className="border-green-300 bg-green-300 text-black"  autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { DialogPerfil };