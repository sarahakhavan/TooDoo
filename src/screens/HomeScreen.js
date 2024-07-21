import React from 'react';
import { View } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  return (
    <View>
      <TaskForm />
      <TaskList />
    </View>
  );
};

export default HomeScreen;
