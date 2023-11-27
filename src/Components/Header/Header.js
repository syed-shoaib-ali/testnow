import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import Theme from '../../utils/Theme';
class Header extends Component {
  render() {
    return (
      <View>
        {this.props.isFourComponent == true ? (
          <View style={styles.viewWrapAll}>
            <View style={styles.viewflexRow}>
              <AntDesign
                name="close"
                size={Theme.iconSize}
                style={styles.iconClose}
              />
              <TouchableOpacity onPress={this.props.onPressLeft}>
                <Text style={styles.txtGreen}>{this.props.register}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txtTitle}>{this.props.title}</Text>
            <TouchableOpacity onPress={this.props.onPressRight}>
              <Text style={styles.txtGreen}>{this.props.login}</Text>
            </TouchableOpacity>
          </View>
        ) : this.props.isThreeComponent == true ? (
          <View style={styles.paddingWrap}>
            <View style={styles.flexAlign}>
              <Ionicons
                name="arrow-back"
                size={Theme.iconSize}
                style={{color: Theme.black}}
                onPress={this.props.onPressLeft}
              />
              <Text style={styles.txtRegister}>
                Register -{' '}
                <Text style={styles.titleGreen}>{this.props.title}</Text>
              </Text>
            </View>
          </View>
        ) : this.props.isTwoBtn == true ? (
          <View style={styles.paddingWrap}>
            <View style={styles.flexAlign}>
              <Ionicons
                name="arrow-back"
                size={Theme.iconSize}
                style={{color: Theme.black}}
                onPress={this.props.onPressLeft}
              />
              <TouchableOpacity onPress={this.props.onPressRight}>
                <Text style={styles.txtRegister}>{this.props.title}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.props.isTwoRightBtn == true ? (
          <View style={styles.TopTwoWrap}>
            <View style={styles.subtwoWrap}>
              <Text
                style={{color: Theme.txtBlack, fontSize: Theme.txtHeighest}}>
                {this.props.title}
              </Text>
              <TouchableOpacity
                onPress={this.props.onPressRight}
                disabled={this.props.disable}>
                <Text
                  style={{
                    color: this.props.btnColor,
                    // color: Theme.lightGreen,
                    fontSize: Theme.mainBtnSize,
                  }}>
                  {this.props.rightTitle}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.props.isIconTitle == true ? (
          <View style={styles.paddingWrap}>
            <View style={styles.flexAlign}>
              <AntDesign
                name={this.props.backIcon}
                size={Theme.iconSize}
                color={Theme.black}
                style={{left: 10}}
                onPress={this.props.onPress}
              />
              <Text style={styles.txtRegister}>{this.props.title}</Text>
            </View>
          </View>
        ) : this.props.isInSequence == true ? (
          <View style={styles.wrapisInSequence}>
            <AntDesign
              name={this.props.iconLeft}
              color={Theme.white}
              size={Theme.iconSize}
            />
            <Text style={{fontSize: Theme.mainBtnSize, color: Theme.white}}>
              {this.props.title}
            </Text>
            <AntDesign
              name={this.props.iconRight}
              color={Theme.white}
              size={Theme.iconSize}
            />
          </View>
        ) : (
          <View style={{paddingVertical: 20}}>
            <View
              style={{...styles.flexAlign, justifyContent: 'space-between'}}>
              <Text style={styles.txtTitle}>{this.props.title}</Text>
              <TouchableOpacity onPress={this.props.onPressRight}>
                <Text style={styles.txtGreen}>{this.props.login}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Header;
