import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ListProps, Text } from '@kitten/ui';
import { Product } from '@src/core/model';
import { textStyle } from '../../common/style';
import { View } from 'react-native';
import { ProfileActivityList2, ProfileActivityList2Props } from './profile/profileActivityList2.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  onItemPress: (product: Product) => void;
  title: string;
  data: Product[]
}

export type ProductListProps = ThemedComponentProps & ComponentProps;

type ProfileActivityElement = React.ReactElement<ProfileActivityList2Props>;

class ProductList2Component extends React.Component<ProductListProps> {
  private onItemPress = (selectedProduct: Product) => {
    this.props.onItemPress(selectedProduct);
  };

  renderActivityElement = (title: string, products: Product[]): ProfileActivityElement => {
    return (
      <View key={title} style={{backgroundColor: "#F7F8FA"}}>
        <Text
          style={this.props.themedStyle.categoryLabel}
          appearance='hint'
          category='s1'>
          {title}
        </Text>
        <ProfileActivityList2
          contentContainerStyle={this.props.themedStyle.activityList}
          data={products}
          onItemPress={this.onItemPress}
        />
      </View>
    );
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, title, ...restProps } = this.props;

    return (
      this.renderActivityElement(title, data)
    );
  }
}

export const ProductList2 = withStyles(ProductList2Component, (theme: ThemeType) => ({
  activityList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryLabel: {
    marginHorizontal: 8,
    marginTop: 8,
    backgroundColor: theme['background-basic-color-2'],
    fontSize: 12,
    ...textStyle.subtitle,
  },
}));
