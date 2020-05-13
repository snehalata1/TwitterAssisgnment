/* eslint-disable */
import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Text } from './index';
import theme from '../theme';

const useStyles = makeStyles(() => ({
  container: {
    // paddingLeft: 8,
    display: 'flex',
    alignItems: 'center',
    minWidth: 180,
  },
  errorIcon: {
    color: theme.colorError,
    marginRight: 4,
    fontSize: 14,
  }
}))

const ErrorBox = (props) => {
  const classes = useStyles();
  if (!props.message) {
    return null;
  }
  return (
    <div className={classes.container}>
      <Icon className={classes.errorIcon}>error_outline</Icon>
      <Text variant="size12" style={{ color: theme.colorError }}>
        {props.message}
      </Text>
      {
        props.subMessage &&
        <Text variant="size12" style={{ color: theme.colorPrimary1, cursor: 'pointer' }}>
          {props.subMessage}
        </Text>
      }
    </div>
  )
}

export default ErrorBox;
