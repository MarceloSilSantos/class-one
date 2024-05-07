import { StyleSheet,Platform } from "react-native";

const styles = StyleSheet.create((
  container: (
    flex: 1,
    padding: Platform.OS === 'ios'? 10:20,
    backgroundColor: 'red',
  ),


));


const PageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  flex:1;
 
`;


export default function App() {
  return (
    <PageContainer> </PageContainer>
  );

}
