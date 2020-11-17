import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const ExpandTag = styled.span`
  border: 1px solid ${p => p.theme.palette.text.secondary};
  color: ${p => p.theme.palette.text.secondary};
  padding: 0.1rem 0.5rem;
`;

export const SaveButton = styled.button`
  border: 1px solid ${p => p.theme.palette.text.secondary};
  color: ${p => p.theme.palette.text.secondary};
  padding: 0.2rem 1rem;
  width: fit-content;
  margin-top: 1.5em;
  &:hover {
    cursor: pointer;
    background: ${p => p.theme.palette.primary.main};
    color: white;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  color: ${p => p.theme.palette.text.primary};
  label {
    color: ${p => p.theme.palette.text.primary};
  }
  input {
    max-width: 250px;
    width: 100%;
    height: 40px;
    border: 1px solid grey;
    text-align: right;
    padding: 0 0.75rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
    &:focus {
      outline: none;
    }
    &:hover,
    &:active {
      border: 1px solid ${p => p.theme.palette.text.primary};
    }
  }
`;

export const UnitContainer = styled.div`
  display: flex;
`;

export const Unit = styled.span`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
`;

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  root: {
    width: '100%',
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: 'white',
    },
    '&.Mui-expanded': {
      minHeight: 0,
    },
  },
  MuiExpansionPanelSummary: {
    '&.MuiAccordionSummary-expandIcon': {
      transform: 'none',
      fontSize: theme.typography.pxToRem(15),
    },
  },
  expanded: {
    '&.MuiAccordionSummary-root.Mui-expanded': {
      /*minHeight: 48,
      height: 48,
      margin: 'auto',*/
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
