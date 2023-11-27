import React, {Component, useState} from 'react';
import {View, Text, TextInput, FlatList, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {accessToken} from '../../../apis/secure';
import ActivityIndicator from '../../../Components/ActivityIndicator/ActivityIndicator';
import RenderTest from './RenderTest';
import {baseURL} from '../../../apis/Apis';
import Theme from '../../../utils/Theme';
class TestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'Search test',
      Tests: [],
      FilteredTests: [],
      email: '',
      isloading: false,
    };
  }
  async componentDidMount() {
    this.INIT();
    this.props.navigation.addListener('focus', () => {
      this.INIT();
    });
  }

  INIT = async () => {
    const email = await AsyncStorage.getItem('encEmail');
    let compCode = await AsyncStorage.getItem('comapnyCode');
    this.setState({isloading: true});
    axios({
      method: 'POST',
      url: baseURL + 'testAssignedDetails/' + compCode + '/' + email,
      headers: {
        accessToken: accessToken,
      },
      data: {
        CompanyCode: compCode,
        EncryptedLoginId: email,
      },
    })
      .then(({data}) => {
        this.setState({
          Tests: data.assignedTests,
          FilteredTests: data.assignedTests,
        });
      })
      .catch((e) => {
        alert(e);
      })
      .finally(() => this.setState({isloading: false}));
  };

  filterFunction = (e) => {
    let title = e.toLowerCase();
    const Tests = this.state.Tests;
    const FilteredTests = [];
    Tests.map((t) => {
      if (t.test_name.toLowerCase().includes(title)) FilteredTests.push(t);
    });
    this.setState({FilteredTests});
    if (title == '') {
      this.setState({FilteredTests: Tests});
    }
  };

  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.topWrap}>
          <View style={styles.searchBox}>
            <AntDesign
              name="search1"
              size={Theme.iconSize}
              color={Theme.placeHolCol}
            />
            <TextInput
              placeholder="Search test"
              placeholderTextColor={Theme.placeHolCol}
              autoCapitalize="none"
              style={{width: '100%'}}
              onChangeText={(text) => this.filterFunction(text)}
            />
          </View>
        </View>
        <FlatList
          data={this.state.FilteredTests}
          keyExtractor={({item, index}) => index}
          renderItem={({item, index}) => {
            return (
              <RenderTest
                key={item.test_name}
                item={item}
                navigation={this.props.navigation}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        {this.state.isloading === true ? (
          <Modal animationType="fade" transparent={true}>
            <View style={styles.wrapIndi}>
              <ActivityIndicator />
              <Text style={styles.txtLoading}>Loading..</Text>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}

export default TestList;
