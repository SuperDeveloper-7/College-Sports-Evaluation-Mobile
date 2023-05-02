import {
  Box,
  Text,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
  Pressable,
  Stack,
} from 'native-base';
import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import {
  JackpotIcon,
  RouletteIcon,
  LeaderboardIcon,
  DuelsIcon,
  ProductionIcon,
  InventoryIcon,
  HomeIcon,
  FindEvaluationIcon,
  UserAvatar,
  UserIcon,
} from 'assets';
import { HomeStackParamList } from 'types';
import { BottomTabButton } from 'components';

export const BottomTab = () => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();
  const route = useRoute();
  const { name, params } = route;
  const currentRoute = name;
  const [products, setProducts] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);
  const { isOpen, onToggle } = useDisclose();
  //
  const selectProductsHandler = () => {
    setProducts(true);
    setContact(false);
    onToggle();
  };
  const SelectContactHandler = () => {
    setProducts(false);
    setContact(true);
    onToggle();
  };

  const MoveHomeHandler = () => {
    navigate('Main');
    setProducts(false);
    setContact(false);
  };
  const MoveLeaderboardHandler = () => {
    navigate('Leaderboard');
    setProducts(false);
    setContact(false);
  };
  const MoveFindEvaluationHandler = () => {
    navigate('FindEvaluation');
    setProducts(false);
    setContact(false);
  };

  //
  const moveAboutUsHandler = () => {
    navigate('HomeNavigation', { screen: 'AboutUs' });
  };
  return (
    <HStack
      px={2}
      py={1}
      bg="white"
      marginLeft={products === true || contact === true ? -6 : 0}
      justifyContent="space-between"
      alignItems="center">
      {/* Left */}
      {products === true && (
        <Box bottom={12} position="absolute" left={9} zIndex={99}>
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 12,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <Pressable
              _pressed={{ bg: '#0a3254', opacity: 90, color: 'white' }}
              bg="white"
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Youth Evaluations{' '}
              </Text>
            </Pressable>
            <Pressable
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              bg="white"
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Club Evaluations{' '}
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                College Evaluations{' '}
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Transfer Portal Combines{' '}
              </Text>
            </Pressable>
          </Stagger>
        </Box>
      )}

      {/* Right */}
      {contact === true && (
        <Box bottom={12} position="absolute" right={4} zIndex={99}>
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 12,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <Pressable
              _pressed={{ bg: '#0a3254', opacity: 90, color: 'white' }}
              bg="white"
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              borderWidth={1}
              onPress={moveAboutUsHandler}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                About Us{' '}
              </Text>
            </Pressable>
            <Pressable
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              bg="white"
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              onPress={moveAboutUsHandler}
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Meet The Team{' '}
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              onPress={moveAboutUsHandler}
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Blog
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              onPress={moveAboutUsHandler}
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Careers
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              onPress={moveAboutUsHandler}
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                Join Our Newsletter
              </Text>
            </Pressable>
            <Pressable
              bg="white"
              _pressed={{ bg: '#0a3254', opacity: 90 }}
              px={3}
              py={1}
              marginBottom={1}
              borderRadius={3}
              borderColor="#0a3254"
              onPress={moveAboutUsHandler}
              borderWidth={1}>
              <Text fontWeight="bold" textAlign="center" fontSize={11}>
                FAQ
              </Text>
            </Pressable>
          </Stagger>
        </Box>
      )}
      <BottomTabButton
        icon={
          <JackpotIcon
            color={currentRoute === 'Products' ? '#00305C' : '#555A64'}
          />
        }
        onPress={selectProductsHandler}
      />
      <BottomTabButton
        icon={
          <FindEvaluationIcon
            color={currentRoute === 'Leaderboard' ? '#00305C' : '#555A64'}
          />
        }
        onPress={MoveLeaderboardHandler}
      />
      <BottomTabButton
        icon={
          <HomeIcon color={currentRoute === 'Main' ? '#00305C' : '#555A64'} />
        }
        onPress={MoveHomeHandler}
      />
      <BottomTabButton
        icon={
          <ProductionIcon
            color={currentRoute === 'FindEvaluation' ? '#00305C' : '#555A64'}
          />
        }
        onPress={MoveFindEvaluationHandler}
      />
      <BottomTabButton
        icon={
          <UserIcon
            color={currentRoute === 'Contact' ? '#00305C' : '#555A64'}
          />
        }
        onPress={SelectContactHandler}
      />
    </HStack>
  );
};
