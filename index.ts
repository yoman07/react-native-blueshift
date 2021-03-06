import { NativeModules } from 'react-native';
import { UserInfo } from './src/UserInfo';
import { ProductViewParams } from './src/ProductView';
import { AddToCartParams } from './src/AddToCart';
import { CheckoutCartParams } from './src/CheckoutCart';

const { Blueshift } = NativeModules;

export const setUserInfo = (userInfo: UserInfo) => {
  Blueshift.setUserInfo(userInfo)
};

export const trackEvent = (eventName: string, params: Object, canBatchThisEvent = true) => {
  Blueshift.trackEvent(eventName, params, canBatchThisEvent)
};

export const identify = (details: Object, canBatchThisEvent = true) => {
  Blueshift.identify(details, canBatchThisEvent)
};

export const trackScreenView = (screenName: string, canBatchThisEvent = true) => {
  Blueshift.trackScreenView(screenName, canBatchThisEvent)
};

export const trackProductView = (productViewParams: ProductViewParams, canBatchThisEvent = true) => {
  Blueshift.trackProductView(productViewParams, canBatchThisEvent)
};

export const trackAddToCart = (addToCartParams: AddToCartParams, canBatchThisEvent = true) => {
  Blueshift.trackAddToCart(addToCartParams, canBatchThisEvent)
};

export const trackCheckoutCart = (checkoutCart: CheckoutCartParams, canBatchThisEvent = true) => {
  Blueshift.trackCheckoutCart(checkoutCart, canBatchThisEvent)
};
export default Blueshift;
