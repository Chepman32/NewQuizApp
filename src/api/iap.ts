// IAP temporarily disabled for iOS build bring-up on RN 0.80.
// import * as RNIap from 'react-native-iap';
import { AppDispatch } from '../state/store';
import { setPremium } from '../state/slices/appSlice';

const productIds = ['unlock_all_premium_content'];

export async function initIAP() {}

export async function getProducts() { return []; }

export async function buyPremium(dispatch: AppDispatch) { dispatch(setPremium(true)); }

export async function restorePurchases(dispatch: AppDispatch) {}

