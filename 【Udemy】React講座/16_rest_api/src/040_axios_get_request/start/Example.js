import {useEffect} from "react";
import axios from "axios";

const Example = () => {


  useEffect(()=>{
    const getUser = async () => {
    const res = axios.get('http://localhost:3003/user')
      console.log(res.data);
    }
    })
};

export default Example;
