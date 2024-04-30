import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import CadDiario from './CadastrarDiario';
import AlterarDiario from './AlterarDiario';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTintColor: '#9ac234' }}
        />
        <Stack.Screen
          name="CadDiario"
          component={CadDiario}
          options={{ headerTintColor: '#9ac234', title: 'Cadastro do Diário' }}
        />
        <Stack.Screen
          name="AlterarDiario"
          component={AlterarDiario}
          options={{ headerTintColor: '#9ac234', title: 'Alterar o Diário' }}
        />
      </Stack.Navigator>
  );
}