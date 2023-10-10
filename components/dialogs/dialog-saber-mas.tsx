import {  Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface InputProps {
  titulo: string;
  descripcionLarga: string;
  href: string;
}

function DialogSaberMas({ titulo, descripcionLarga, href }: InputProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pl-5">
      <label className="w-full text-green-300 text-right" onClick={handleClickOpen}>
        Saber Más...
      </label>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className="text-green-300" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {titulo}
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
        <DialogContent className="w-96">
          <div className="flex flex-col gap-4">
            <span>
              {descripcionLarga}
            </span>
            <a href={href} className="text-green-300">
              Enlace
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { DialogSaberMas };