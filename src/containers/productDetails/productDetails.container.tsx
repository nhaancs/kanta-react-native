import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  Product,
} from '@src/core/model';
import { ProductDetails } from './productDetails.component';
import { StorageHelper } from '../../core/utils/storage.helper';
import Constants from 'expo-constants';

export interface BuyActionModel {
  title: string;
  action: () => void;
}

interface State {
  product: Product;
  relatedProducts: Product[]
}

export class ProductDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    product: new Product(),
    relatedProducts: [],
  };

  componentDidMount() {
    StorageHelper.get("VIEWING_PRODUCT").then(res => {
      const data = JSON.parse(res)
      this.setState({
        product: data as Product
      })

      data.user_id = Constants.deviceId
      fetch('http://35.221.157.44:9000/user/product/log/insert', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      fetch('http://35.221.157.44:9000/product/get?page=1&number=10&categories_lv3='+ this.state.product.belong_cate_level3_id)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({
          relatedProducts: res.data || []
        })
      })
    })
  }

  private onProductPress = (product: Product) => {
    StorageHelper.set("VIEWING_PRODUCT", JSON.stringify(product))
    this.props.navigation.navigate({
      key: "ProductDetail",
      routeName: "ProductDetail",
    });
  };

  public render(): React.ReactNode {
    return (
      <ProductDetails
        product={this.state.product}
        onProductPress={this.onProductPress}
        relatedProducts={this.state.relatedProducts}
      />
    );
  }
}
