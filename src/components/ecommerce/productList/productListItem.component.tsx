import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { CartIconOutline } from '@src/assets/icons';
import { Product } from '../../../core/model/product.model';
import { RemoteImage } from '../../../assets/images/type';
import { FormatHelper } from '../../../core/utils/format.helper';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, TouchableOpacityProps {
  product: Product
  onAddPress: (product: Product) => void;
  onPress: (product: Product) => void;
}

export type ProductListItemProps = ThemedComponentProps & ComponentProps;

class ProductListItemComponent extends React.Component<ProductListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.product);
  };

  private onAddToBucket = () => {
    this.props.onAddPress(this.props.product);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, product, ...restProps } = this.props;
    const image = new RemoteImage(product.image)
    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          style={themedStyle.image}
          source={image.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <View>
            <Text
              style={themedStyle.nameLabel}
              category='s1'>
              {product.name}
            </Text>
            <Text
              style={themedStyle.typeLabel}
              appearance='hint'
              category='c1'>
              {product.categories_lv1_name}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text
              style={themedStyle.costLabel}
              category='s1'>
              {FormatHelper.formatVNCurrency(product.price)}
            </Text>
            <Button
              style={themedStyle.buyButton}
              textStyle={textStyle.button}
              icon={CartIconOutline}
              onPress={this.onAddToBucket}
              status='danger'
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const ProductListItem = withStyles(ProductListItemComponent, (theme: ThemeType) => ({
  container: {
    minHeight: 272,
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: null,
    height: 140,
  },
  nameLabel: textStyle.subtitle,
  typeLabel: textStyle.caption1,
  costLabel: textStyle.subtitle,
  buyButton: {
    width: 32,
    height: 32,
  },
}));
