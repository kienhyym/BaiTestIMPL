import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LoadMore from '../../components/LoadMore';
import {useDispatch, useSelector} from 'react-redux';
import {IStateRecordInfoUser} from '../../redux/reducers/ReducerInfoUser';
import {
  IStateResultArrayIRecordRepos,
  IRecordRepos,
} from '../../redux/reducers/ReducerListRepoRecord';
import styles from './styles';
import {searchRepo, loadMoreListRepoRecord} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';

interface IStateRedux {
  ReducerInfoUser: IStateRecordInfoUser;
  ReducerListRepoRecord: IStateResultArrayIRecordRepos;
  ReducerLoading: boolean;
}
const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const infoUser = useSelector((state: IStateRedux) => state.ReducerInfoUser);
  const loading = useSelector((state: IStateRedux) => state.ReducerLoading);
  const listRepoRecord = useSelector(
    (state: IStateRedux) => state.ReducerListRepoRecord,
  );
  console.log(infoUser, loading, listRepoRecord);
  let name: string = 'snitin315';
  const onSearch = async (name: string) => {
    dispatch(searchRepo(name));
  };
  const onLoadMore = () => {
    dispatch(loadMoreListRepoRecord());
  };

  const renderItem = ({item, index}: {item: IRecordRepos; index: number}) => {
    return (
      <View style={styles.item}>
        <Text>
          {String(index + 1) +
            ' - ' +
            item.name +
            ' - stargazers: ' +
            item.stargazers_count}
        </Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('Stargazers')}>
          {' '}
          Load stargazers
        </Text>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View>
        {listRepoRecord.data.length == 0 ||
        listRepoRecord.data.length === infoUser.data.public_repos ? null : (
          <LoadMore onLoadMore={onLoadMore} loading={listRepoRecord.loading} />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxSearch}>
        <View style={styles.viewSearchEnter}>
          <TextInput
            style={styles.textSearchEnter}
            placeholder="Nhập tên người dùng github"
            onChangeText={e => (name = e)}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonSearch}
          onPress={() => onSearch(name)}>
          <Text style={styles.textSearchButton}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberRecords}>
        <Text>Tổng sô:{listRepoRecord.total}/</Text>
        <Text>{infoUser.data.public_repos}</Text>
      </View>

      <FlatList
        data={listRepoRecord.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<Footer />}
        refreshControl={<RefreshControl refreshing={loading} />}
      />
    </View>
  );
};
export default Home;
