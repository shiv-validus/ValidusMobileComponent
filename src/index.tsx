// @ts-ignore

import { NativeModules, Platform } from 'react-native';

import TextInputWithPlaceholder from './components/text-input';
import AccountSummaryCard from './components/AccountSummaryCard';
const LINKING_ERROR =
  `The package 'react-native-validus-component-mobile' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ValidusComponentMobile = NativeModules.ValidusComponentMobile
  ? NativeModules.ValidusComponentMobile
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ValidusComponentMobile.multiply(a, b);
}

export { TextInputWithPlaceholder, AccountSummaryCard };
