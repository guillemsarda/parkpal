import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { WelcomeProps } from '../../../types/rootStack';
import { CustomButton } from '../../components/Forms/button';
import { StartScreen } from '../../components/StartScreen/startScreen';
import { useGetTodosQuery } from '../../graphql/__generated__';

export const WelcomeScreen = ({ navigation }: WelcomeProps) => {
  const { colors } = useTheme();
  const { data, loading, error } = useGetTodosQuery();
  const signInPage = () => {
    navigation.navigate('Sign In Page');
  };
  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <StartScreen>
      <View>
        <View>
          <CustomButton press={signInPage} bg="#fff" color={colors.primary}>
            Sign In
          </CustomButton>

          <CustomButton press={register} bg="#fff" color={colors.primary}>
            Sign Up
          </CustomButton>
        </View>
      </View>
    </StartScreen>
  );
};

// export default Welcome;
