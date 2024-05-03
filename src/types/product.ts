export type Option = {
  id: number;
  name: string;
};

export type ProductDescriptionResponse = {
  productId: number;
  name: string;
  price: number;
  type: string;
  description: string;
  descriptionPhotos: string[];
  productName: string;
  options: string[];
  productThumbnails: string[];
  brandName: string;
  brandId: number;
  brandThumbnail: string;
};

export type ProductDetailResponse = {
  productId: number;
  name: string;
  price: number;
  type: string;
  productName: string;
  options: string[];
  brandName: string;
  brandId: number;
  brandThumbnail: string;
  origin: string;
  manufacturer: string;
  tel: string;
  deliverDescription: string;
  billingNotice: string;
  caution: string;
  productThumbnails: string[];
};
