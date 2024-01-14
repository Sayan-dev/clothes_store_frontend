import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import {
  BUSINESS_TYPES,
  GENDER_TYPE,
  AUTH_TYPE,
  MERCHANT_STAFF_ROLES,
  MERCHANT_STAFF_ROLES_STORE,
  PLANS,
  DISCOUNT_TIER,
  TRANSACTION_STATUS,
  TRANSACTION_MODE,
  TRANSACTION_USER,
} from './enums';

export interface IItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export interface IDetailText {
  p1: String; // Main descriptive details about item
  p2: String[]; // List of key features of the Item
  color: String;
  feel: String;
}

export interface IItemDetails {
  name: String;
  text: IDetailText;
  price: number;
  size: string[];
  like: boolean;
  discount: boolean;
  selected_size?: string;
  discount_percent: number;
  free: boolean;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type IPaginator = {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export interface IName {
  firstName?: string;
  lastName?: string;
  middleName?: string;
}

export interface IUpload {
  _id: string;
  path: string;
  key: string;
  mimeType: string;
  uploadedBy?: string;
  size: string;
}

export interface IAddress {
  formattedAddress: string;
  city: string;
  state: string;
  country: string;
  locality?: string;
  zipCode?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface RequestCoordinates {
  lat: number;
  lng: number;
}

export interface RequestAddress extends Omit<IAddress, 'coordinates'> {
  coordinates: RequestCoordinates;
}

export interface ITransactionHistory {
  _id: string;
  amount: number;
  mode: TRANSACTION_MODE;
  description: string;
  status: TRANSACTION_STATUS;
  discount: number;
  discountTier: DISCOUNT_TIER;
  receiverMode: TRANSACTION_USER;
  receiverId?: string;
  scoinTransactionId?: string;
  receiverModelType: 'merchants' | 'students' | null;
  receiverDetails?: IMerchant;
  senderMode: TRANSACTION_USER;
  senderId?: string;
  senderModelType: 'merchants' | 'students' | null;
  senderDetails?: IStudent | null;
  scoins?: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface IContactNumber {
  countryCode: string;
  number: string;
}

export interface IMerchantCategory {
  _id: string;
  name: string;
  image: string;
}

export interface IMerchantBasicDetails {
  name: string;
  email: string;
  publicContactNumber: {
    countryCode: string;
    number: string;
  };
}

export interface IMerchant {
  _id: string;
  uniqueId?: string;
  name: string;
  email: string;
  websiteLink?: string;
  redirectionLink?: string;
  address: IAddress;
  logo?: IUpload;
  owner?: IName;
  description?: string;
  gstNumber?: string;
  foodLicense?: string;
  tradeLicense?: string;
  businessType?: BUSINESS_TYPES;
  plans?: PLANS;
  scoins?: number;
  publicContactNumber: IContactNumber;
  privateContactNumber?: IContactNumber;
  isVerified?: boolean;
  isOnline?: boolean;
  isActive?: boolean;
  category?: Array<string>;
  storeLocations?: Array<string>;
  discount?: number;
}

export interface IGeneralOwnerInfo {
  owner: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  publicContactNumber: {
    countryCode: string;
    number: string;
  };
  privateContactNumber: {
    countryCode: string;
    number: string;
  };
  email: string;
}

export interface IBusinessInfo {
  name: string;
  address: {
    formattedAddress: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
  };
  businessType?: string;
  isOnline?: string;
  gstNumber: string;
  tradeLicense: string;
  foodLicense: string;
  websiteLink: string;
  redirectionLink: string;
  category?: string[];
  discount: number;
  locationCount?: number;
  description: string;
}

export interface IStore {
  _id: string;
  merchantId: string;
  name: string;
  email: string;
  address: IAddress;
  owner: IName;
  publicContactNumber: IContactNumber;
  privateContactNumber: IContactNumber;
  description: string;
  scoins: number;
  plans?: PLANS;
  costForOne: number;
  listings: string[];
  isVerified: boolean;
  isActive: boolean;
  category: string[];
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: MERCHANT_STAFF_ROLES;
  merchant?: IMerchant;
  merchantStore?: IStore;
}

export interface IAdmin {
  name: string;
  email: string;
  isSuperAdmin: boolean;
  isStudentAdmin: boolean;
  isMerchantAdmin: boolean;
  isMarketingAdmin: boolean;
}

export interface IMerchantStaff {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  emailVerificationHash?: string;
  otpToken?: string;
  role?: MERCHANT_STAFF_ROLES | MERCHANT_STAFF_ROLES_STORE;
  merchant?: string;
  merchantStore?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  order?: number;
  rating?: number;
  itemDiscount: number;
  isActive: boolean;
  image?: IUpload;
  createdAt?: string;
}

export interface IStudent {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: GENDER_TYPE;
  dob: string;
  profile: string;
  address: IAddress;
  scontoId: string;
  initialVerificationWith: AUTH_TYPE;
  email: string;
  contactNumber: {
    countryCode: '+91';
    number: string;
  };
  isRegistered: boolean;
  isVerified: boolean;
  isTribePartner: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IReview {
  _id: string;
  merchantId: string;
  student: IStudent;
  rating: number;
  review: string;
  isReviewVerified: boolean;
  __v: number;
}

export interface ITotalFootfall {
  totalFootfall: number;
  storeWiseFootFall: {
    count: number;
    merchantStoreLocationId: string;
  }[];
  startDate: string;
  endDate: string;
}

export interface IFootfall {
  count: number;
  startDate: string;
  endDate: string;
}

export interface IHomeStats {
  id: string;
  title: string;
  value: string | undefined;
  loading: boolean;
  symbol: string;
  updatedAt: string;
}

export interface IProductsTableData {
  serialNumber: string;
  name: string;
  price: string;
  itemDiscount: string;
  isActive: boolean;
  id: string;
}

export interface IStoreListingTableData {
  serialNumber: string;
  name: string;
  address: string;
  costForOne: string;
  isActive: boolean;
  id: string;
}

export interface GraphDataDetails {
  data: number[];
  timeStamp: number[];
  noOfDocs: number[];
  currency: string;
}
