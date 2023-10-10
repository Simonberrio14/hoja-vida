import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import FotoMasSobreMi from "@/media/foto-mas-sobre-mi.jpg";
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
      <button className="w-32 h-8 bg-green-300 text-black rounded-sm" onClick={handleClickOpen}>
        Más sobre mí
      </button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className="text-green-300" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Más Sobre Mí
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
          <div className="flex flex-col gap-3">
            <span>
              Desde pequeño fuí una persona muy entusiasta y animado a la hora de hacer deporte. Entrené fútbol desde los 14 años pasando por varios equipos por Medellín hasta los 18 años. Algunos de estos equipos son Sellos Colombianos, Atletico Nacional, Los Paisitas.
            </span>
            <img src={FotoMasSobreMi.src} alt="Foto Más Sobre Mí" />
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
}

export { DialogPerfil };