import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { inventory } from '../../../constants/inventory';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {
  useStyles,
  ExpandTag,
  SaveButton,
  InputContainer,
  Unit,
  UnitContainer,
} from './primitives';

const FormInput = ({ field: { type, label, unit } }) => {
  switch (type) {
    case 'number': {
      return (
        <InputContainer>
          {label && <label htmlFor="name">{label}</label>}
          <UnitContainer>
            <input
              type="number"
              id="name"
              name="name"
              min="0"
              max={unit === '%' ? '100' : ''}
              onKeyDown={evt => evt.key === 'e' && evt.preventDefault()}
            />
            {unit && <Unit>{unit}</Unit>}
          </UnitContainer>
        </InputContainer>
      );
    }
    default: {
      return '';
    }
  }
};

const Measure = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState({});

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(prevState => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };
  return (
    <>
      {inventory.map(({ name, description, fields }, index) => (
        <Accordion
          key={name}
          expanded={expanded && expanded[name]}
          onChange={handleChange(name)}
          className={classes.paper}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandTag>
                {expanded && expanded[name] ? 'expand' : 'close'}
              </ExpandTag>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{
              expandIcon: classes.MuiExpansionPanelSummary,
              expanded: classes.expanded,
            }}
          >
            <Typography className={classes.heading}>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography component="p" color="textPrimary">
              {description}
            </Typography>
            {fields.map((field, index) => (
              <FormInput key={`field_${index}`} field={field} />
            ))}
            <SaveButton>Save</SaveButton>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

Measure.propTypes = {};

export default Measure;
