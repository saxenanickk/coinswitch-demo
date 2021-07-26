import {TextStyle, ViewStyle} from 'react-native';

const styles = {
  container: (type: 'Primary' | 'Secondary') =>
    type === 'Primary'
      ? ({
          backgroundColor: '#ffffff',
          borderRadius: 20,
          elevation: 5,
        } as ViewStyle)
      : ({
          backgroundColor: '#736df8',
          borderRadius: 20,
          borderWidth: 0.5,
          borderColor: '#ffffff',
        } as ViewStyle),
  title: (type: 'Primary' | 'Secondary') =>
    ({
      color: type === 'Primary' ? '#736df8' : '#ffffff',
    } as TextStyle),
};

export {styles};
