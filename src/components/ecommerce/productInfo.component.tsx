import React from 'react';
import {
  Image,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { Product } from '../../core/model/product.model';
import { RemoteImage } from '../../assets/images/type';
import { FormatHelper } from '../../core/utils/format.helper';

interface ComponentProps {
  product: Product
}

export type ProductInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProductInfoComponent extends React.Component<ProductInfoProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, product, ...restProps } = this.props;
    const image = new RemoteImage(product.image)

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Image
          style={[themedStyle.image, themedStyle.bottomSpace]}
          source={image.imageSource}
        />
        <View style={themedStyle.detailsContainer}>
          <Text
            style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}
            category='h6'>
            {product.name}
          </Text>
          <Text
            style={themedStyle.typeLabel}
            appearance='hint'
            category='p2'>
            {product.categories_lv1_name}
          </Text>
          <Text style={themedStyle.costLabel}>{FormatHelper.formatVNCurrency(product.price)}</Text>
        </View>
      </View>
    );
  }
}

export const ProductInfo = withStyles(ProductInfoComponent, (theme: ThemeType) => ({
  container: {},
  image: {
    flex: 1,
    width: null,
    height: 340,
  },
  detailsContainer: {
    marginHorizontal: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameLabel: {
    ...textStyle.headline,
    alignSelf: "stretch"
  },
  typeLabel: textStyle.paragraph,
  costLabel: {
    ...textStyle.headline,
    fontSize: 20,
    lineHeight: 32,
  },
  descriptionText: textStyle.paragraph,
  colorSelector: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  radioItem: {
    marginRight: 16,
  },
  bottomSpace: {
    marginBottom: 24,
  },
  labelBottomSpace: {
    marginBottom: 8,
  },
}));
