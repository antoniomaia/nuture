import React, { useState } from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { ExpandTag, SaveButton, useStyles } from '../primitives';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Accordion from '@material-ui/core/Accordion';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { saveNeutralForm } from 'slices/neutral-form';
import FormControl from '../form-control';

const AccordionItem = ({ item: { name, description, fields } }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState({});
  const dispatch = useAppDispatch();
  const formData = useSelector(state => state.neutralForm);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: formData,
  });

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(prevState => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  const onSubmit = values => {
    setTimeout(() => {
      handleChange(name)();
    }, 100);

    dispatch(saveNeutralForm(values));
  };

  return (
    <Accordion
      key={name}
      expanded={!!(expanded && expanded[name])}
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
            {expanded && expanded[name] ? 'close' : 'expand'}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <FormControl
              key={`field_${index}`}
              field={field}
              register={register}
              dispatch={dispatch}
            />
          ))}
          <SaveButton type="submit">Save</SaveButton>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

AccordionItem.propTypes = {};

export default AccordionItem;
