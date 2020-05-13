/* eslint-disable */
import React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import colors from '../theme';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: colors.colorBrand,
    width: '100%',
    minHeight: '50px',
    cursor: 'pointer',
    fontFamily: 'Muli, Arial, sans-serif',
    fontWeight: 400,
    boxShadow: 'none',
  },
  buttonPrimary: {
    backgroundColor: colors.colorPrimary1,
    borderRadius: 2,
    padding: '12px 32px',
    outline: 'none',
    boxShadow: 'none',
    color: colors.colorWhite,
    fontSize: 12,
    borderWidth: 0,
    fontWeight: 500,
    cursor: 'pointer',
  },
  transparentButton: {
    color: colors.colorPrimary1,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    //boxShadow: 'none',
  },
  defaultButton: {
    borderRadius: 2,
    padding: '11px 32px',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: colors.colorWhite,
    color: colors.colorPrimary1,
    border: `1px solid ${colors.colorPrimary1} !important`,
    fontSize: 12,
    borderWidth: 0,
    fontWeight: 500,
    cursor: 'pointer',
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const renderOptionComponent = (component, variant) =>
  branch((props) => props.variant === variant, renderComponent(component));

const DefaultButton = (props) => {
  const classes = useStyles();
  return (
    <button type="button" className={clsx(classes.defaultButton, props.className)} {...props}>
      {props.children}
    </button>
  );
}

const ButtonSubmit = (props) => {
  const classes = useStyles();
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      type="submit"
      variant="contained"
      color="primary"
      className={`${classes.button} ${props.className}`}
    >
      <div style={{ flex: 1 }}>
        {props.children}
      </div>
      {
        props.isLoading && <CircularProgress size={20} />
      }
    </Button>
  );
}

const ButtonPrimary = (props) => {
  const classes = useStyles();
  return (
    <button type="button" ref={(ref1) => {
      if(props.setRef) {
        props.setRef(ref1);
      } else if(props.ref) {
        props.ref = ref1;
      }
    }} className={clsx(classes.buttonPrimary, props.className)} {...props}>
      {props.children}
    </button>
  );
}

const ButtonTransparent = (props) => {
  const classes = useStyles();
  return (
    <button type="button" className={clsx('button-transparent', classes.transparentButton, props.className)} {...props}>
      {props.children}
    </button>
  )
}


const IconButton = (props) => {
  return (
    <Button type="button" className={props.className} {...props}>
      {props.children}
    </Button>
  )
}

const OutlinedButton = (props) => {
  const classes = useStyles();
  return (
    <Button type="button" variant="outlined" {...props}>
      {props.children}
    </Button>
  );
}
const enhancedButtonComponent = compose(
  renderOptionComponent(ButtonSubmit, 'submit'),
  renderOptionComponent(ButtonPrimary, 'primary'),
  renderOptionComponent(ButtonTransparent, 'transparent'),
  renderOptionComponent(IconButton, 'iconButton'),
  renderOptionComponent(OutlinedButton, 'outlined'),
  renderOptionComponent(DefaultButton, 'default'),
)(ButtonSubmit);

export default enhancedButtonComponent;
