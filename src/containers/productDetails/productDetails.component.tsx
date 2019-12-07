import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
} from '@kitten/ui';
import { ProductInfo } from '@src/components/ecommerce';
import { Product } from '../../core/model/product.model';
import { StorageHelper } from '../../core/utils/storage.helper';
import { ProductList2 } from '../../components/ecommerce/product-list-2/product-list-2.component';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';


interface State {
  product: Product;
}

class ProductDetailsComponent extends React.Component<any, State> {

  public render(): React.ReactNode {
    const { themedStyle, product, relatedProducts, onProductPress } = this.props;
  
    return (
      <ContainerView style={themedStyle.container}>
        <ProductInfo
          product={product}
        />

        <ProductList2 
          title={'SẢN PHẨM LIÊN QUAN'}
          data={relatedProducts}
          onItemPress={onProductPress}
          renderItem={null}
          />
      </ContainerView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  commentsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  inputLabel: {
    marginBottom: 8,
    marginHorizontal: 16,
    ...textStyle.subtitle,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
}));
