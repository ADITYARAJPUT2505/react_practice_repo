function Hello(){
  let myName = ' prashant'
  let fullName = () =>{
    return 'prashant jain'
  }
  return <h3>hello this is {myName} speaking.my full name is {fullName()}</h3>
}

export default Hello;