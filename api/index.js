const processContact = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})

export const loadContact = async () => {
  const response = await fetch('https://randomuser.me/api/?results=5&nat=ca')
  const {results} = await response.json()
  return results.map(processContact)
}

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8000', {
                          method: 'POST',
                          headers: { 'content-type': 'application/json'},
                          body: JSON.stringify({username, password} ) } );
  if ( response.ok) {
    console.log( await response.text() )
    return true;
  }

  const errMsg = await response.text();
  throw new Error( errMsg);
}