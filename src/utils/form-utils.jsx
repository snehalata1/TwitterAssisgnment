export const handleFormValueChange = (props, key, dontTouch = false, callback, callbackParams) => value => {
  const touched = { ...props.touched };
  touched[key] = dontTouch;
  props.setTouched(touched);
  props.handleChange(key)(value);
  callback && callback(key, value, callbackParams);
};