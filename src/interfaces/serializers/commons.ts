export interface PaginationParams {
  size?: number;
  page?: number;
  searchkey?: string;
  searchword?: string;
  sortby?: string;
  descending?: boolean;
}

interface AddressName {
  long_name: string;
  short_name?: string;
}

export interface Address {
  addressname?: string
  latitude?: string
  longitude?: string
  address: string
  address2?: string
  city: string
  state: AddressName
  country: AddressName
  short_state?: string
  short_country?: string
  zipcode: string
}

export interface Collection {
  id: string;
  collection: string;
}

export interface BasicTranslate {
  lang: string;
  name: string;
}

export interface Content {
  lang: string;
  name: string;
  description: string;
}

export interface OrderGateway {
  name: string;
  reference: string;
  invoice_id: string;
  discount_code: string;
  date: Date;
}

export interface Phone {
  phone?: string | null;
  type?: string | null;
}

export interface RegionCost {
  region: string;
  amount: number;
  cost: number;
}

export interface SocialMedia {
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
}

export interface Tax {
  business_name: string;
  rfc: string;
  zipcode: string;
  cfdi: string;
}

export interface WithDocs<T> {
  items: T[];
  first: any;
  last: any;
  next: any;
  page: number;
  total: number;
  previous: any;
  size: number;
}
