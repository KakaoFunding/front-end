import ProductItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductItem> = {
  component: ProductItem,
};

export default meta;
type Story = StoryObj<typeof ProductItem>;

// 임시 상품 아이템 데이터
const productData = {
  imgSrc:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200404101217_091a18bd9a024799ad6d9018f1035614',
  brandName: '설빙',
  name: '오레오초코몬스터설빙',
  price: 12900,
  isWished: true,
  wishCount: 6008,
};

export const ColumnSmall: Story = {
  render: () => (
    <ProductItem direction="column" size="small">
      <ProductItem.Thumbnail
        src={productData.imgSrc}
        alt={productData.name}
        size="small"
      />
      <ProductItem.BrandName>{productData.brandName}</ProductItem.BrandName>
      <ProductItem.Name>{productData.name}</ProductItem.Name>
      <ProductItem.Price>{productData.price}</ProductItem.Price>
    </ProductItem>
  ),
};

export const ColumnMedium: Story = {
  render: () => (
    <ProductItem direction="column" size="medium">
      <ProductItem.Thumbnail
        src={productData.imgSrc}
        alt={productData.name}
        size="medium"
      />
      <ProductItem.BrandName>{productData.brandName}</ProductItem.BrandName>
      <ProductItem.Name>{productData.name}</ProductItem.Name>
      <ProductItem.Price>{productData.price}</ProductItem.Price>
    </ProductItem>
  ),
};

export const RowTiny: Story = {
  render: () => (
    <ProductItem direction="row" size="tiny">
      <ProductItem.Thumbnail
        src={productData.imgSrc}
        alt={productData.name}
        size="tiny"
      />
      <div>
        <ProductItem.Name>{productData.name}</ProductItem.Name>
        <ProductItem.Price size="small">{productData.price}</ProductItem.Price>
      </div>
    </ProductItem>
  ),
};
