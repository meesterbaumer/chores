export const FamilyMember = (person, chores) => {
  return `
    <div class="familyMember">
      <div>
        <h2>${person.name}</h2>
      </div>
      <div>
        <ol>
          ${
              chores.map(chore => `<li>${chore.chore}</li>`).join("")
          }
        </ol>
      </div>
    </div>
  `
}