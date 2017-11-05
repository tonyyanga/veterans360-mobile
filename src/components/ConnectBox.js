/**
 * Connect Box component that renders an information box of
 * a user (either veteran or parter org) when their corresponding
 * pin is pressed.
 *
 * @prop connection       - either veteran or parter org object
 *                          (cannot think of a better name?!)
 *                          requires these properties:
 *                            - name
 *                            - roles
 *                            - image
 *                            - bio
 */

import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import { colors } from '../styles/colors';
import Animations from '../styles/animations';
import Button from '../components/Button';

export default class ConnectBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getConnectionTitle() {
    return this.props.connection.roles ?
      this.props.connection.roles.join(', ') :
      'Partering Organization';
  }

  renderProfileImage() {
    if (this.props.connection.image) {
      return (
        <Image
          source={require(this.props.connection.image)}
          style={styles.profileImage}
        />
      );
    } else {
      return (
        <Image
          source={require('../../assets/images/photogenic.jpg')}
          style={styles.profileImage}
        />
      );
    }
  }

  render() {
    return (
      <View style={[styles.baseContainer, this.props.style]}>
        <View style={styles.leftContainer}>
          {this.renderProfileImage()}
          <View style={styles.buttonContainer}>
            <Button
              style={styles.profileButton}
              text="VIEW"
            />
            <Button
              style={styles.profileButton}
              text="CONNECT"
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{this.props.connection.name}</Text>
            <Text style={styles.title}>{this.getConnectionTitle()}</Text>
          </View>
          <View style={styles.bioContainer}>
            <Text>{this.props.connection.bio}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  /* Container of the entire box */
  baseContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: colors.light_snow,
    shadowColor: colors.charcoal,
    shadowOpacity: 0.15,
    shadowOffset: { width: 5, height: -5 },
    shadowRadius: 15,
    zIndex: 100,
  },

  /* Container of left hand side column with picture and buttons */
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  /* Container of right hand side with name and description */
  rightContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Container of two buttons below profile picture */
  buttonContainer: {
    marginTop: 30,
  },

  /* Container of name and title of veteran/org */
  nameContainer: {

  },

  /* Container of veteran/org bio */
  bioContainer: {
    marginTop: 30,
    fontSize: 13,
    color: colors.charcoal,
  },

  /* Individual components */
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileButton: {
    height: 30,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: colors.charcoal,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
