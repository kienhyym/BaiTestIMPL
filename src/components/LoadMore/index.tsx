import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
interface Iprops {
  title?: string;
  onLoadMore: () => void;
  loading: boolean;
}
const LoadMore = ({title, onLoadMore, loading}: Iprops) => {
  return (
    <TouchableOpacity
      disabled={loading ? true : false}
      style={{
        ...styles.buttonLoadMore,
      }}
      onPress={() => onLoadMore()}>
      {loading ? (
        <ActivityIndicator size="small" color="gray" />
      ) : (
        <Text>{title ? title : 'Load more'}</Text>
      )}
    </TouchableOpacity>
  );
};

export default LoadMore;
