import {useNavigation} from '@react-navigation/native';
import {MainMenuProps} from '../types/types';
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {RadioGroup} from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {headerButtons, mainMenuStyles} from '../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faArrowDownAZ,
} from '@fortawesome/free-solid-svg-icons';

type ModalsProps = {
  updateArticles: (
    searchQuery: string,
    sortBy: string,
    from: string,
    to: string,
  ) => void;
  sortOptions: {
    id: string;
    label: string;
    value: string;
  }[];
};
const Modals = (props: ModalsProps) => {
  const navigation = useNavigation<MainMenuProps['navigation']>();
  const [searchVisible, setSearchVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('bitcoin');
  const [sortBy, setSortBy] = useState('1');
  const [from, setFrom] = useState(moment().subtract(1, 'month').toDate());
  const [to, setTo] = useState(new Date());

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={headerButtons.buttonsView}>
          <TouchableOpacity
            style={headerButtons.button}
            onPress={() => setSortVisible(true)}>
            <FontAwesomeIcon icon={faArrowDownAZ} />
          </TouchableOpacity>
          <TouchableOpacity
            style={headerButtons.button}
            onPress={() => setSearchVisible(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={searchVisible}
        onRequestClose={() => setSearchVisible(false)}>
        <KeyboardAvoidingView style={mainMenuStyles.modal}>
          <Text>What articles are you looking for?</Text>
          <TextInput
            style={mainMenuStyles.modalTextInput}
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <Text>Choose date from which you want to see articles</Text>
          <DatePicker
            date={from}
            onDateChange={setFrom}
            minimumDate={from}
            maximumDate={to}
            mode="date"
          />
          <Text>Choose date up to which you want to see articles</Text>
          <DatePicker
            date={to}
            onDateChange={setTo}
            minimumDate={from}
            maximumDate={moment().toDate()}
            mode="date"
          />
          <Button
            onPress={() => {
              props.updateArticles(
                searchQuery,
                sortBy,
                moment(from).toISOString(),
                moment(to).toISOString(),
              );
              setSearchVisible(false);
            }}
            title="Search"
          />
        </KeyboardAvoidingView>
      </Modal>
      <Modal
        animationType="slide"
        visible={sortVisible}
        onRequestClose={() => setSortVisible(false)}>
        <View style={mainMenuStyles.modal}>
          <Text>How to sort articles?</Text>
          <RadioGroup
            containerStyle={mainMenuStyles.modalRadio}
            radioButtons={props.sortOptions}
            onPress={setSortBy}
            selectedId={sortBy}
          />
          <Button
            onPress={() => {
              props.updateArticles(
                searchQuery,
                sortBy,
                moment(from).toISOString(),
                moment(to).toISOString(),
              );
              setSortVisible(false);
            }}
            title="Sort"
          />
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
