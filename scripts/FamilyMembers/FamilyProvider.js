let familyMembers = []

export const useFamily = () => familyMembers.slice()

export const getFamily - () => fetch("http://localhost:8088/familyMembers")
  .then(res => res.json())
  .then(data => familyMembers = data)