import { OptionDetail, ProductDescriptionResponse } from './product';

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
