const processContact = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})

export const loadContact = async () => {
  const response = await fetch('https://randomuser.me/api/?results=5&nat=ca')
  const {results} = await response.json()
  return results.map(processContact)
}