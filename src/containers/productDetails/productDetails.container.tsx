import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  Product,
} from '@src/core/model';
import { ProductDetails } from './productDetails.component';
import { StorageHelper } from '../../core/utils/storage.helper';

export interface BuyActionModel {
  title: string;
  action: () => void;
}

interface State {
  product: Product;
}

export class ProductDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    product: new Product(),
  };

  componentDidMount() {
    StorageHelper.get("VIEWING_PRODUCT").then(res => {
      const data = JSON.parse(res)
      this.setState({
        product: data as Product
      })

      fetch('http://35.221.157.44:9000/user/product/log/insert', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    })
  }

  public render(): React.ReactNode {
    return (
      <ProductDetails
        product={this.state.product}
      />
    );
  }
}
