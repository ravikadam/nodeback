import uidv4 from 'uuid/v4'

const courseData = {
  name: 'Programming',
  description: 'Will be covering datatypes, functions etc..'
}

module.exports = (courseLevels) => {
  return courseLevels.map(courselevel => {
    const { dataValues } = courselevel
    return {
      ...courseData,
      course_level_id: dataValues.id,
      id: uidv4(),
      created_by: dataValues.created_by,
      updated_by: dataValues.created_by,
      'created_at': new Date(),
      'updated_at': new Date()
    }
  })
}
