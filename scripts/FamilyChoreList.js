import { getChores, useChores } from "./ChoreProvider.js";
import { getFamily, useFamily } from "./FamilyProvider.js";
import { getFamilyChores, useFamilyChores, } from "./FamilyChoreProvider.js";
import { FamilyMember } from "./FamilyMember.js";

const contentTarget = document.querySelector(".family")

let chores = []
let people = []
let peopleChores = []

export const FamilyList = () => {
  getChores()
  .then(getFamilyChores)
  .then(getFamily)
  .then(() => {
    chores = useChores()
    people = useFamily()
    peopleChores = useFamilyChores()
    render()
  })

}

const render = () => {
  contentTarget.innerHTML = people.map(person => {
    const relationshipObjects = getChoreRelationships(person)
    const choreObjects = convertChoreIdsToChores(relationshipObjects)
    const html = FamilyMember(person, choreObjects)
    return html
  }).join("")
}

const getChoreRelationships = (person) => {
  const relatedChores = peopleChores.filter(pc => pc.familyMemberId === person.id)
  return relatedChores
}

const convertChoreIdsToChores = (relationships) => {
  const choreObjects = relationships.map(rc => {
    return chores.find(chore => chore.id === rc.choreId)
  })
  return choreObjects
}