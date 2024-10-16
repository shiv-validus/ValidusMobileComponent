// create a custom function instead of using `StyleSheet.flatten` because we
// want to make it backward compatible with react-native<0.52.
export const mergeStyles = (...styles: any) => {
  const flattened = styles.flat();

  return flattened.reduce((merged: any, style: any) => ({
    ...merged,
    ...style,
  }));
};
