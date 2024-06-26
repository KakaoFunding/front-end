import { OptionDetail, ProductDescriptionResponse } from './product';
import { ResponseWishAddOrDelete } from './wish';

type ModalProps = {
  close: () => void;
  isOpen: boolean;
  scrollPos: number;
};

export type FriendsSelectorModalProps = ModalProps;

export type FundingModalProps = ModalProps &
  Pick<ProductDescriptionResponse, 'name' | 'price' | 'productId'> & {
    selectedOption: OptionDetail | false;
    productThumbnail: string;
  };

export type WishModalProps = ModalProps & {
  productId: number;
  onWishAdded?: (addWishData: ResponseWishAddOrDelete) => void;
};
