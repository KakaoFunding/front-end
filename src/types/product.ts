export type OptionDetail = {
  id: number;
  name: string;
  photo: string | null;
  additionalPrice: number;
};

export type DescriptionPhotosType = string[];

type Option = {
  optionsId: number;
  name: string;
  optionDetails: OptionDetail[];
};

type Product = {
  productId: number;
  name: string;
  price: number;
  type: string;
  options: Option[];
  productName: string;
  productThumbnails: string[];
  brandName: string;
  brandId: number;
  brandThumbnail: string;
};

export type ProductDescriptionResponse = Product & {
  description: string;
  descriptionPhotos: DescriptionPhotosType;
};

export type ProductDetailResponse = Product & {
  origin: string;
  manufacturer: string;
  tel: string;
  deliverDescription: string;
  billingNotice: string;
  caution: string;
};
