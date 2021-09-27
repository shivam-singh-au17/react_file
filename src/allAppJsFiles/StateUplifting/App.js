import './App.css';
import ParentChild from './components/StateUplifting/ParentChild';
import ChildParent from './components/StateUplifting/ChildParent';
import SiblingsSiblings from './components/StateUplifting/SiblingsSiblings';
import MyTodo from './components/StateUplifting/MyTodo';


function App() {
  return (
    <>
      <MyTodo/>
      <ParentChild/>
      <ChildParent />
      <SiblingsSiblings />
    </>
  );
}

export default App;
