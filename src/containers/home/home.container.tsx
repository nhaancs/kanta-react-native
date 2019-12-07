import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Product } from '@src/core/model';
import { Home } from './home.component';
import { StorageHelper } from '../../core/utils/storage.helper';

interface State {
  recommendProducts: Product[];
  monthlyProducts: Product[];
  saleProducts: Product[];
}

export class HomeContainer extends React.Component<NavigationStackScreenProps, State> {
  public state: State = {
    recommendProducts: [],
    monthlyProducts: [],
    saleProducts: [],
  };

  public componentWillMount() {
    let isLoading = true;

    const recommendAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');
    const monthlyAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');
    const saleAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');

    Promise.all([recommendAPICall, monthlyAPICall, saleAPICall])
      .then(values => {
        return Promise.all(values.map(value => value.json()))
      })
      .then(finalVals => {
        this.setState({
          recommendProducts: finalVals[0].data || [],
          monthlyProducts: finalVals[1].data || [],
          saleProducts: finalVals[2].data || [],
        })

        isLoading = false;
      });
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
      <Home
        recommendProducts={this.state.recommendProducts}
        monthlyProducts={this.state.monthlyProducts}
        saleProducts={this.state.saleProducts}
        onProductPress={this.onProductPress}
      />
    );
  }
}
