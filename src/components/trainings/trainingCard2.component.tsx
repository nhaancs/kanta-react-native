import React from 'react';
import {
  ImageProps,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  Chips,
  textStyle,
} from '@src/components/common';
import {
  ArrowForwardIconOutline,
} from '@src/assets/icons';
import { CateLv1Model } from '../../core/model/category.model';
import { ImageSource } from '../../assets/images/type';

const cat_lv1_ids = [
  8, // "Thời trang nữ"
  94, // "Thời trang nam"
  138, // "Mẹ và bé"
  220, // "Sức khỏe & Làm đẹp"
  528, // "Phụ kiện công nghệ"
  604, // "Không gian sống"
  736, // "Thể thao & giải trí"
  1019, // "Đồ dùng trong nhà"
  1108, // "Đồ điện gia dụng"
  1171, // "Thực phẩm"
  1366, // "Đồng hồ"
  1458, // "Đồ chơi"
  1629, // "Phụ kiện thời trang"
  1663, // "Công nghệ"
  1686, // "Giày dép"
  1722, // "Túi xách"
]

const cat_imgs = {
  8: {imageSource: require('../../assets/images/8.jpg')} as ImageSource,
  94: {imageSource: require('../../assets/images/94.jpg')} as ImageSource,
  138: {imageSource: require('../../assets/images/138.jpg')} as ImageSource,
  220: {imageSource: require('../../assets/images/220.jpg')} as ImageSource,
  528: {imageSource: require('../../assets/images/528.jpg')} as ImageSource,
  604: {imageSource: require('../../assets/images/604.jpg')} as ImageSource,
  736: {imageSource: require('../../assets/images/736.jpg')} as ImageSource,
  1019: {imageSource: require('../../assets/images/1019.jpg')} as ImageSource,
  1108: {imageSource: require('../../assets/images/1108.jpg')} as ImageSource,
  1171: {imageSource: require('../../assets/images/1171.jpg')} as ImageSource,
  1366: {imageSource: require('../../assets/images/1366.jpg')} as ImageSource,
  1458: {imageSource: require('../../assets/images/1458.jpg')} as ImageSource,
  1629: {imageSource: require('../../assets/images/1629.jpg')} as ImageSource,
  1663: {imageSource: require('../../assets/images/1663.jpg')} as ImageSource,
  1686: {imageSource: require('../../assets/images/1686.jpg')} as ImageSource,
  1722: {imageSource: require('../../assets/images/1722.jpg')} as ImageSource,
}

interface ComponentProps {
  training: CateLv1Model;
  index?: number;
  onDetails: (index: number) => void;
}

export type TrainingCardProps = ThemedComponentProps & ComponentProps & TouchableOpacityProps;

class TrainingCardComponent extends React.Component<TrainingCardProps> {

  private onDetails = (): void => {
    this.props.onDetails(this.props.index);
  };

  private renderDetailsIcon = (): React.ReactElement<ImageProps> => {
    return ArrowForwardIconOutline(this.props.themedStyle.detailsIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}>
        <View style={[themedStyle.container, style]}>
          <ImageBackground
            style={[themedStyle.subContainer, themedStyle.leftSection]}
            source={cat_imgs[training.id_lv1].imageSource}
          />
          <View style={[themedStyle.subContainer, themedStyle.rightSection]}>
            <Text
              style={themedStyle.titleLabel}
              category='h5'>
              {training.name}
            </Text>
            <View style={themedStyle.controlsContainer}>
              <Chips
                style={themedStyle.chips}
                >
                <Text
                  style={themedStyle.chipsText}
                  category='c1'>
                  {'Xem'}
                </Text>
              </Chips>
              {this.renderDetailsIcon()}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard2 = withStyles(TrainingCardComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    minHeight: 144,
    overflow: 'hidden',
  },
  subContainer: {
    flex: 1,
  },
  rightSection: {
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: theme['background-basic-color-1'],
  },
  leftSection: {
    padding: 16,
  },
  titleLabel: textStyle.headline,
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chips: {
    width: 80,
  },
  chipsText: {
    color: 'white',
    ...textStyle.paragraph,
    textAlign: 'center',
  },
  detailsIcon: {
    width: 22,
    height: 22,
    tintColor: theme['text-hint-color'],
  },
}));
