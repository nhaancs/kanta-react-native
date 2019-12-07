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
import { NavigationStackProp } from 'react-navigation-stack';
import { ComponentProps } from '../../core/navigation/components/topNavigationBar.component';
import { StorageHelper } from '../../core/utils/storage.helper';
import { products } from '@src/core/data/product';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';


interface State {
  product: Product;
}

class ProductDetailsComponent extends React.Component<any, State> {

  public render(): React.ReactNode {
    const { themedStyle, product } = this.props;
  
    return (
      <ContainerView style={themedStyle.container}>
        <ProductInfo
          product={this.props.product}
        />
        <Button
          style={themedStyle.buyButton}
          textStyle={textStyle.button}
          size='giant'>
          MUA NGAY
        </Button>
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
