import uidv4 from 'uuid/v4'

const courseLevels = [
  { id: 'l1', name: 'Lil Champs' },
  { id: 'l2', name: 'Young Learners' },
  { id: 'l3', name: 'Early Achievers' }
]

module.exports = createdBy => {
  return courseLevels.map(courselevel => {
    return {
      id: courselevel.id,
      name: courselevel.name,
      created_by: createdBy,
      updated_by: createdBy,
      created_at: new Date(),
      updated_at: new Date()
    }
  })
}
