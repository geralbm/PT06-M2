import React from 'react';

export default function  Form() {


 const[data,setData]= React.useState({
  username:"",
  password:"",
 });

const [errors,SetErrors] = React.useState({}); 

function handleOnChange(e){
  const {name, value} = e.target;
  const newData = {...data, [name]:value};
  setData(newData);
  SetErrors(validate(newData));
}

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" 
        name="username" 
        value={data.username} 
        onChange={handleOnChange}
        className={errors.username ? "danger":""}
        />
        <errors className="username"></errors> && <span className="denger">{errors.password}</span>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" 
        name="password" 
        value={data.password} 
        onChange={handleOnChange}
        className={errors.password ? "danger":""}
        />
        errors.password && <span className="denger">{errors.password}</span>
      </div>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
 
  if(!input.password){
    errors.password ='Password is required';
  }else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password="Password is invalid";
  }
  return errors;
};