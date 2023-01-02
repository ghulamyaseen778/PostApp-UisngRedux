import { useDispatch } from 'react-redux';
import './App.css';
import {setPosting} from './Store/Slice/PostSlice.js'
//import Components
import CardCmp from './Components/CardCmp';
import UtilityInput from './UtilityCmp/UtilityInput';
import HeaderCmp from './Components/HeaderCmp';

function App() {
  const dispatch = useDispatch();

  return (
    <>
<div style={{width:"100vw"}}>
<HeaderCmp/>
<CardCmp/>
</div>
    </>
  );
}

export default App;
