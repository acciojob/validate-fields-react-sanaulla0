
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [formdata, setFormdata] = useState({
     Email : '',
     Password : '',
  });
  const [error,setError] = useState(false);
  const handleChange =(event)=>{

      const {name,value} = event.target;

       const update = {...formdata};
       update[name]= value;
       setFormdata(update);
         

  }
  const handleSubmit = ()=>{
    if(!formdata.Email || !formdata.Password){
        setError(true);
}
else
{
  setError('');
  }
  }
  return (
    <div>
        {/* Do not remove the main div */}

      <span>UserName</span>  <input type="email"  name="Email" value={formdata.Email} onChange={handleChange}  />  <br/>
      <span>Password</span>  <input type="password" value={formdata.Password} name="Password" onChange={handleChange}  />  <br/>

      {error ? <p id="errorMessage"> Both username and password are required.</p> : <></> }
      <button type="submit" onClick={handleSubmit}
      >Login</button>
     
      <hr/>

    </div>
  )

  
}
export default App;

