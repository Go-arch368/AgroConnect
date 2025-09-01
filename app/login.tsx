import { SafeAreaView } from 'react-native';
import Login from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <SafeAreaView className="flex-1 bg-white">
     <Login/>
    </SafeAreaView>
  );
}