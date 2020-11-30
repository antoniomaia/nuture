import { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { removeAlert } from 'slices/alerts';

const Toast = () => {
  const alerts = useSelector(state => state.alerts);
  const [alert, setAlert] = useState({ type: '', message: '', id: '' });
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (alerts && alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        dispatch(removeAlert({ id: alerts[alerts.length - 1].id }));
      }, 3000);
    }
  }, [alerts]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <div
          style={{
            display: 'flex',
            background: '#f44336',
            color: '#fff',
            padding: '6px 16px',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.43',
            borderRadius: '4px',
            letterSpacing: '0.01071em',
            justifyContent: 'space-between',
            minWidth: 200,
            boxShadow:
              '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
          }}
        >
          <p>{alert.message || ''}</p>
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        </div>
      </Snackbar>
    </div>
  );
};

export default Toast;
