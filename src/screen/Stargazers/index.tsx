import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Stargazers = () => {
  // const onLoadMore = () => {};
  const renderItem = ({item, index}: {item: IRecordRepos; index: number}) => {
    return (
      <View style={styles.item}>
        <Text>{String(index + 1) + ' - ' + item.name}</Text>
      </View>
    );
  };
  // const Footer = () => {
  //   return (
  //     <View>
  //       {listRepoRecord.data.length == 0 ||
  //       listRepoRecord.data.length === infoUser.data.public_repos ? null : (
  //         <LoadMore onLoadMore={onLoadMore} loading={listRepoRecord.loading} />
  //       )}
  //     </View>
  //   );
  // };
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Chức năng đang phát triển
          </Text>
        }
      />
    </View>
  );
};
export default Stargazers;
