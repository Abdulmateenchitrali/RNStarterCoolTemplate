import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer
import { DrawerActions } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  // Custom tree view items with expanded state
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemKey) => {
    const index = expandedItems.indexOf(itemKey);
    if (index !== -1) {
      setExpandedItems(expandedItems.filter((key) => key !== itemKey));
    } else {
      setExpandedItems([...expandedItems, itemKey]);
    }
  };

  // Custom tree view items
  const customDrawerItems = [
    {
      key: '1',
      label: 'Parent Item 1',
      icon: 'folder',
      children: [
        {
          key: '1_1',
          label: 'Child Item 1.1',
          icon: 'file',
          children: [
            { key: '1_1_1', label: 'Sub Child Item 1.1.1', icon: 'file' },
            { key: '1_1_2', label: 'Sub Child Item 1.1.2', icon: 'file' },
          ],
        },
        {
          key: '1_2',
          label: 'Child Item 1.2',
          icon: 'file',
          children: [
            { key: '1_2_1', label: 'Sub Child Item 1.2.1', icon: 'file' },
            { key: '1_2_2', label: 'Sub Child Item 1.2.2', icon: 'file' },
          ],
        },
        {
          key: '1_3',
          label: 'Child Item 1.3',
          icon: 'file',
          children: [
            { key: '1_3_1', label: 'Sub Child Item 1.3.1', icon: 'file' },
            { key: '1_3_2', label: 'Sub Child Item 1.3.2', icon: 'file' },
          ],
        },
      ],
    },
    {
      key: '2',
      label: 'Parent Item 2',
      icon: 'folder',
      children: [
        {
          key: '2_1',
          label: 'Child Item 2.1',
          icon: 'file',
          children: [
            { key: '2_1_1', label: 'Sub Child Item 2.1.1', icon: 'file' },
            { key: '2_1_2', label: 'Sub Child Item 2.1.2', icon: 'file' },
          ],
        },
        {
          key: '2_2',
          label: 'Child Item 2.2',
          icon: 'file',
          children: [
            { key: '2_2_1', label: 'Sub Child Item 2.2.1', icon: 'file' },
            { key: '2_2_2', label: 'Sub Child Item 2.2.2', icon: 'file' },
          ],
        },
        {
          key: '2_3',
          label: 'Child Item 2.3',
          icon: 'file',
          children: [
            { key: '2_3_1', label: 'Sub Child Item 2.3.1', icon: 'file' },
            { key: '2_3_2', label: 'Sub Child Item 2.3.2', icon: 'file' },
          ],
        },
      ],
    },
  ];

  // Recursive rendering of tree view items
  const renderTreeView = (items, level = 0) => {
    return items.map((item) => {
      const { key, label, icon, children } = item;
      const isExpanded = expandedItems.includes(key);

      return (
        <View key={key}>
          {/* Parent item */}
          <TouchableOpacity onPress={() => toggleItem(key)} style={styles.itemContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 16 * level }}>
              <Icon name={icon} size={24} style={styles.itemIcon} />
              <Text style={styles.itemLabel}>{label}</Text>
            </View>
          </TouchableOpacity>

          {/* Recursive rendering of child items */}
          {isExpanded && children && children.length > 0 && renderTreeView(children, level + 1)}
        </View>
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Custom header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Custom Header</Text>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="bars" size={24} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Drawer content */}
      <DrawerContentScrollView {...props}>
        {/* Tree view with icon and label */}
        {renderTreeView(customDrawerItems)}

        {/* Custom drawer items */}
        <DrawerItem
          label="Custom Drawer Item"
          icon={({ color, size }) => <Icon name="star" color={color} size={size} style={styles.itemIcon} />}
          onPress={() => { /* Handle custom drawer item press */ }}
          style={styles.customItemContainer}
          labelStyle={styles.customItemLabel}
        />
      </DrawerContentScrollView>

      {/* Custom footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Custom Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    color: '#333',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  itemIcon: {
    marginRight: 16,
    color: '#666',
  },
  itemLabel: {
    fontSize: 16,
    color: '#333',
  },
  customItemContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  customItemLabel: {
    marginLeft: 16,
    color: '#666',
  },
  footerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
});

export default CustomDrawerContent;