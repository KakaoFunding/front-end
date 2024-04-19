export type Option = {
  id: number;
  name: string;
};

export type Product = {
  productId: number;
  name: string;
  price: number;
  type: string;
  productName: string;
  options: Option[];
  brandName: string;
  origin: string;
  manufacturer: string;
  tel: string;
  deliverDescription: string;
  billingNotice: string;
  caution: string;
  productThumbnails: string[];
};
