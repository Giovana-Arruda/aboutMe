import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screen/MainScreen/Main';
import { Skills } from '../screen/SkillScreen/Skills';


const {Screen, Navigator} = createStackNavigator();

export function StackRoute() {
  return (
    <Navigator>
      <Screen name="Home" component={Main} />
      <Screen name="My Skills" component={Skills} />
    </Navigator>
  );
}

