import React from "react";

/// function commponents
const myname = (user) => {
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: 'Thanakorn',
  lastname: 'Kaewpinuek'
}


function App() {
  return (
    <div>
      <h1>Hello world, {myname(user)}</h1>
      <Myclass />
    </div>
  );
}


/// Class components
class Myclass extends React.Component {
  render() {
    const username = 'larm';
    return (
      <div>
        <h1> Hello, world! {username}</h1>
      </div>
    )
  }
}


export default App;
