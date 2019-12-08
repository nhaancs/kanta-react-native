import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Product } from '@src/core/model';
import { Home } from './home.component';
import { StorageHelper } from '../../core/utils/storage.helper';
import Constants from 'expo-constants';
import { Spinner } from 'react-native-ui-kitten';
import { View, RefreshControl, ScrollView } from 'react-native';

interface State {
  trendingProducts: Product[];
  seenProducts: Product[];
  recommendProducts: Product[];
  monthlyProducts: Product[];
  saleProducts: Product[];
  isLoading: boolean;
}

export class HomeContainer extends React.Component<NavigationStackScreenProps, State> {
  public state: State = {
    trendingProducts: [],
    seenProducts: [],
    recommendProducts: [],
    monthlyProducts: [],
    saleProducts: [],
    isLoading: false,
  };

  public componentWillMount() {
    this.loadData()
  }

  loadData = () => {
    this.setState({isLoading: true})
    let deviceId = Constants.deviceId

    const trendingAPICall = fetch('http://35.221.157.44:9000/product/trending/get?page=1&number=10');
    const seenAPICall = fetch('http://35.221.157.44:9000/user/product/log/get?user_id=' + deviceId + '&page=1&number=10');
    // TODO: need api
    const recommendAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');
    // TODO: need api
    const monthlyAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');
    const saleAPICall = fetch('http://35.221.157.44:9000/product/sale/get?page=1&number=20');

    Promise.all([trendingAPICall, seenAPICall, recommendAPICall, monthlyAPICall, saleAPICall])
      .then(values => {
        return Promise.all(values.map(value => value.json()))
      })
      .then(finalVals => {
        this.setState({
          trendingProducts: finalVals[0].data || [],
          seenProducts: finalVals[1].data || [],
          recommendProducts: finalVals[2].data || [],
          monthlyProducts: finalVals[3].data || [],
          saleProducts: finalVals[4].data || [],
          isLoading: false,
        })
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
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent : 'center', alignItems: 'center'}}>
          <Spinner
            status='danger' 
            size='giant'
            />
        </View>
      )
    }

    return (
      <ScrollView refreshControl={ <RefreshControl refreshing={this.state.isLoading} onRefresh={this.loadData} /> }>
        <Home
          trendingProducts={this.state.trendingProducts}
          seenProducts={this.state.seenProducts}
          recommendProducts={this.state.recommendProducts}
          monthlyProducts={this.state.monthlyProducts}
          saleProducts={this.state.saleProducts}
          onProductPress={this.onProductPress}
        />
      </ScrollView>
    );
  }
}
