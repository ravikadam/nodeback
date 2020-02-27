import uidv4 from 'uuid/v4'

module.exports = sessionMasterData => {
  return sessionMasterData.flatMap(sessionMaster => {
    return activityData
      .filter(activity => {
        return sessionMaster.session_number === activity.session_number
      })
      .map(activity => {
        const { session_number, ...rest } = activity
        return {
          id: uidv4(),
          ...rest,
          session_master_id: sessionMaster.id,
          created_by: sessionMaster.created_by,
          updated_by: sessionMaster.created_by,
          created_at: new Date(),
          updated_at: new Date()
        }
      })
  })
}

const activityData = [
  {
    name: 'Tutor Activity 1 - Angry Bird Starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Student Activity 1 - Angry Bird Starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Student Activity 2 - Angry Bird Medium',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/5',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Tutor Activity 2 - Artist',
    link: 'https://studio.code.org/s/coursec-2019/stage/7/puzzle/2',
    type: 2,
    sort: 4,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Student Activity 3 - Artist',
    link: 'https://studio.code.org/s/coursec-2019/stage/7/puzzle/2',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Tutor Activity 3 - Dance Party',
    link: 'https://studio.code.org/projects/dance',
    type: 2,
    sort: 6,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Student Activity 4 - Dance Party',
    link: 'https://studio.code.org/projects/dance',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-T'
  },
  {
    name: 'Tutor Activity 1: Zombie Starter',
    link: ' https://studio.code.org/s/course3/stage/2/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Student Activity 1: Zombie Starter',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Student Activity 2: Zombie Medium',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Student Activity 3: Zombie Advanced',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/3',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Tutor Activity 2: Laurel Starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/6/puzzle/2',
    type: 2,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Student Activity 1 - Artist Picture Frame',
    link: 'https://studio.code.org/s/coursec-2019/stage/7/puzzle/2',
    type: 1,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C2'
  },
  {
    name: 'Tutor Activity 1 - Angry bird starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Student Activity 1 - Angry bird starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Student Activity 2 - Angry bird medium',
    link: 'https://studio.code.org/s/coursec-2019/stage/4/puzzle/5',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Tutor Activity 2 - App Inventor',
    link: 'https://appinventor.mit.edu',
    type: 2,
    sort: 4,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Student Activity 3 - App Inventor',
    link: 'https://appinventor.mit.edu',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Tutor Activity 1 -  ANGRY BIRD PUZZLE',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/5',
    type: 2,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C1'
  },
  {
    name: 'Student Activity 2 - ANGRY BIRD PUZZLE (Do 2-7)',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/2',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Student Activity 4 - QUIZ',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/10',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Student Activity 3 - ZOMBIE PUZZLE (1-3)',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/1',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Tutor Activity 1 - SEQUENCE WITH BEE',
    link: 'https://studio.code.org/s/course1/stage/7/puzzle/4',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C2'
  },
  {
    name: 'Tutor Activity 2 - SCRAT PUZZLE',
    link: 'https://studio.code.org/s/pre-express-2018/stage/7/puzzle/9',
    type: 2,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C2'
  },
  {
    name: 'Student Activity 1 - SEQUENCE WITH BEE (2-8)',
    link: 'https://studio.code.org/s/course1/stage/7/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C2'
  },
  {
    name: 'Student Activity 2 - SCRAT PUZZLE (2,3)',
    link: 'https://studio.code.org/s/courseb-2018/stage/5/puzzle/2',
    type: 1,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C2'
  },
  {
    name: 'Additional Activity - SEQUENCE WITH BEE (10, 11)',
    link: 'https://studio.code.org/s/course1/stage/7/puzzle/10',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C2'
  },
  {
    name: 'Tutor Activity 1 - App Inventor',
    link: 'https://appinventor.mit.edu',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-T'
  },
  {
    name: 'Student Activity 1 - App Inventor',
    link: 'https://appinventor.mit.edu',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-T'
  },
  {
    name: 'Tutor Activity 1-ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Tutor Activity 2-ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/4',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Tutor Activity 3-ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/6',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 1-COLLECTING TREASURE',
    link: 'https://studio.code.org/s/coursec-2018/stage/5/puzzle/4',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 2-COLLECTING TREASURE',
    link: 'https://studio.code.org/s/coursec-2018/stage/5/puzzle/5',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 3-COLLECTING TREASURE',
    link: 'https://studio.code.org/s/coursec-2018/stage/5/puzzle/8',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 4-ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/9',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Additional Activity 1-ANGRY BIRDS',
    link: 'https://studio.code.org/s/express-2018/stage/2/puzzle/8',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Additional Activity 2-ANGRY BIRDS',
    link: 'https://studio.code.org/s/express-2018/stage/2/puzzle/11',
    type: 1,
    sort: 12,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Tutor Activity 1-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/3',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Tutor Activity 2-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/5',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Tutor Activity 3-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/2',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 1-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/9',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 2-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/7',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 3-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/2',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Additional Activity 1-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/2',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Additional Activity 2-CREATING ART',
    link: 'https://studio.code.org/s/coursef-2018/stage/5/puzzle/2',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Tutor Activity 1-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Tutor Activity 2-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Tutor Activity 3-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/7',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Tutor Activity 4-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/3',
    type: 2,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 1-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/4',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 2-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/5',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 3-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/6',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 4-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/8',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 5-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/9',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Additional Activity 1-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/11',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Additional Activity A2-BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/11',
    type: 1,
    sort: 12,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 1 (Do 6 to 12) - Harvest the Corn',
    link: 'https://studio.code.org/s/coursea-2018/stage/7/puzzle/6',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C3'
  },
  {
    name: 'Additional Activity 2 (Do 13-14) - Harvest the corn',
    link: 'https://studio.code.org/s/coursea-2018/stage/7/puzzle/13',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C3'
  },
  {
    name: 'Tutor Activity 1 - ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/puzzle/4',
    type: 2,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C3'
  },
  {
    name: 'Student Activity 1-SCRAT GETS ACORN (Do 2 - 7)',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C3'
  },
  {
    name: 'Student Activity 2 - QUIZ',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/puzzle/9',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C3'
  },
  {
    name: 'Additional Activity - SCRAT PUZZLE',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/puzzle/8',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C3'
  },
  {
    name: 'Tutor Activity 1 - Ice Age Starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 1 - Ice Age Starter',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 2 - Ice Age Starter 2',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/4',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 3 - Ice Age Medium',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/5',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 4 - Ice Age Medium 2',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/6',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 5 - Ice Age Medium 3',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/7',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 6 - Ice Age Advanced',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/8',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 7 - Ice Age Advanced 2',
    link: 'https://studio.code.org/s/coursec-2019/stage/5/puzzle/9',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Tutor Activity 2 - Bee Starter',
    link: 'https://studio.code.org/s/course2/stage/10/puzzle/2',
    type: 2,
    sort: 9,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 8 - Bee Starter',
    link: 'https://studio.code.org/s/course2/stage/10/puzzle/3',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 9 - Bee Medium',
    link: 'https://studio.code.org/s/course2/stage/10/puzzle/4',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Student Activity 10 - Bee Advanced',
    link: 'https://studio.code.org/s/course2/stage/10/puzzle/5',
    type: 1,
    sort: 12,
    is_active: 1,
    session_number: 'LC-C4'
  },
  {
    name: 'Tutor Activity 1-SCRAT PUZZLE',
    link: 'https://studio.code.org/s/coursed-2018/stage/6/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C4'
  },
  {
    name: 'Student Activity 1 (Do 4 to 8) - SCRAT PUZZLE',
    link: 'https://studio.code.org/s/coursed-2018/stage/6/puzzle/4',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C4'
  },
  {
    name: 'Additional Activity 1 (Do 9 and 10) - SCRAT PUZZLE',
    link: 'https://studio.code.org/s/coursed-2018/stage/6/puzzle/9',
    type: 1,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C4'
  },
  {
    name: 'Tutor Activity 1-APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C4'
  },
  {
    name: 'Student Activity 1 -APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C4'
  },
  {
    name: 'Tutor Activity 1 - SCRAT DEBUG',
    link: 'https://studio.code.org/s/courseb-2018/stage/5/puzzle/7',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Tutor Activity 2 - SCRAT DEBUG',
    link: 'https://studio.code.org/s/courseb-2018/stage/5/puzzle/10',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Student Activity 1 - HARVESTER',
    link: 'https://studio.code.org/s/coursea-2018/stage/7/puzzle/7',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Student Activity 2 - HARVEST CORN',
    link: 'https://studio.code.org/s/coursea-2018/stage/7/puzzle/9',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Student Activity 3 - ANGRY BIRD(Do 2 to 8)',
    link: 'https://studio.code.org/s/course1/stage/5/puzzle/2',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Additional Activity - Angry Bird (Do 9 to 12)',
    link: 'https://studio.code.org/s/course1/stage/5/puzzle/9',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C5'
  },
  {
    name: 'Tutor Activity 1 -PLAYLAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 1-PLAY LAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 2-PLAY LAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/4',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 3-PLAY LAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/5',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 4-PLAY LAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/6',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 5-PLAY LAB',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/7',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Additional Activity 1-SUPER CHALLENGE',
    link: 'https://studio.code.org/s/course4/stage/7/puzzle/8',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Tutor Activity 1-BB8 ROBOT',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Tutor Activity 2- BB8 ROBOT',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/8',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Student Activity 1-BB8 ROBOT (5, 6)',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/5',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Student Activity 2- BB8 ROBOT (9 - 11)',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/9',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Additional Activity 1-BB8 THE ROBOT',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/12',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Additional Activity 2-BB8 THE ROBOT',
    link: 'https://studio.code.org/s/coursec-2018/stage/8/puzzle/14',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C5'
  },
  {
    name: 'Tutor Activity 1 - ARTIST LAB',
    link: 'https://studio.code.org/projects/artist_k1/',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C6'
  },
  {
    name: 'Student Activity 1 - ARTIST PUZZLE(Do 2-7)',
    link: 'https://studio.code.org/s/course1/stage/8/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C6'
  },
  {
    name: 'Student Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/projects/artist_k1/',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C6'
  },
  {
    name: 'Additional Activity ',
    link: 'https://studio.code.org/projects/artist_k1/',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C6'
  },
  {
    name: 'Tutor Activity 1-ARTIST',
    link: 'https://studio.code.org/s/coursec-2018/stage/6/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C6'
  },
  {
    name: 'Student Activity 1-ARTIST (3 - 5)',
    link: 'https://studio.code.org/s/coursec-2018/stage/6/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C6'
  },
  {
    name: 'Student Activity 2-QUIZ',
    link: 'https://studio.code.org/s/coursec-2018/stage/6/puzzle/10',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C6'
  },
  {
    name: 'Additional Activity 1-DRAW A HEXAGON',
    link: 'https://studio.code.org/s/coursec-2018/stage/6/puzzle/2',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C6'
  },
  {
    name: 'Tutor Activity 1-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Tutor Activity 2-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/5',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Student Activity 1-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Student Activity 2-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/6',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Student Activity 3-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/7',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Student Activity 4 (Do 8 to 10) - PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/8',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Additional Activity 1-PLAY LAB',
    link: 'https://studio.code.org/s/course2/stage/17/puzzle/11',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C6'
  },
  {
    name: 'Tutor Activity 1-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Tutor Activity 2-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/2',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 1-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/4',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 2-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/6',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 3-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/5',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 4-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/7',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 5-ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/8',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Tutor Activity 1-PLAYLAB',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C7'
  },
  {
    name: 'Student Activity 1-PLAYLAB',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C7'
  },
  {
    name: 'Additional Activity 1-PLAYLAB',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C7'
  },
  {
    name: 'Tutor Activity 1-HARVESTER',
    link: 'https://studio.code.org/s/coursea-2018/stage/10/puzzle/4',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C7'
  },
  {
    name: 'Tutor Activity 2- LAUREL ADVENTURER (Do 2 and 3)',
    link: 'https://studio.code.org/s/coursea-2018/stage/11/puzzle/2',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C7'
  },
  {
    name: 'Student Activity -ANGRY BIRD (Do 1 to 11)',
    link: 'https://studio.code.org/s/course1/stage/13/puzzle/1',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C7'
  },
  {
    name: 'Additional Activity 1 - HARVEST THE CORN (Do 6-9)',
    link: 'https://studio.code.org/s/coursea-2018/stage/10/puzzle/6',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C7'
  },
  {
    name: 'Tutor Activity - PLAYLAB',
    link: 'https://studio.code.org/projects/playlab_k1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C8'
  },
  {
    name: 'Student Activity - PLAYLAB',
    link: 'https://studio.code.org/projects/playlab_k1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C8'
  },
  {
    name: 'Additional Activity - PLAYLAB',
    link: 'https://studio.code.org/projects/playlab_k1',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C8'
  },
  {
    name: 'Tutor View Only Activity',
    link:
      'https://studio.code.org/projects/artist_k1/SsCnTCjgGdhkDzg6bfzcu3DCjBMe5U7HcmUAiDJbmTY/view',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C8'
  },
  {
    name: 'Student Activity - JUNIOR ARTIST LAB',
    link: 'https://studio.code.org/projects/artist_k1/',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C8'
  },
  {
    name: 'Tutor Reference for SPACESHIP Program Solution (View Only)',
    link:
      'https://studio.code.org/projects/artist_k1/D6lsAhKe8RKuoNLgXN0_nsoWvHz_Fcj1tJYH4YXr3WU/view',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C8'
  },
  {
    name: 'Tutor Activity 1-APP LAB',
    link: 'https://studio.code.org/projects/bounce/new ',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C8'
  },
  {
    name: 'Student  Activity 1-APP LAB',
    link: 'https://studio.code.org/projects/bounce/new ',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C8'
  },
  {
    name: 'Tutor Activity 1-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/5',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Tutor Activity 2-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/8',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 1-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/6',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 2-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/7',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 3-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/9',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 4-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/10',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 5-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/11',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Student Activity 6 - LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/extras?id=95940',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Additional Activity 1-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/12',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Additional Activity 2-LOOP FARM',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/13',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C9'
  },
  {
    name: 'Tutor Activity 1 - HARVESTING CROPS',
    link: 'https://studio.code.org/s/coursec-2018/stage/10/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C9'
  },
  {
    name: 'Tutor Activity 2 - HARVESTING CROPS',
    link: 'https://studio.code.org/s/coursec-2018/stage/10/puzzle/5',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C9'
  },
  {
    name: 'Student Activity 1  (3 -9) - HARVESTER',
    link: 'https://studio.code.org/s/coursec-2018/stage/10/puzzle/3',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C9'
  },
  {
    name: 'Additional Activity (DO 10 to 12) - Harvester',
    link: 'https://studio.code.org/s/coursec-2018/stage/10/puzzle/10',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C9'
  },
  {
    name: 'Tutor Activity 1- Angry Bird Lifecycle',
    link: 'https://studio.code.org/s/coursea-2018/stage/6/puzzle/10',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C9'
  },
  {
    name: 'Student Activity 1-STAR WARS (Do 2 to -7)',
    link: 'https://studio.code.org/s/courseb-2018/stage/7/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C9'
  },
  {
    name: 'Student Activity 2 - LAUREL TREASURE (Do 5 to 9)',
    link: 'https://studio.code.org/s/coursea-2018/stage/11/puzzle/5',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C9'
  },
  {
    name: 'Additional Activity Rey and BB (Do 8 to 10)',
    link: 'https://studio.code.org/s/courseb-2018/stage/7/puzzle/8',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C9'
  },
  {
    name: 'Student Activity 2 - Artist Staircase',
    link: 'https://studio.code.org/s/coursec-2019/stage/7/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C2'
  },
  {
    name: 'Tutor Activity 1 - Build-A-House-Algo',
    link:
      'https://studio.code.org/projects/artist/L7ZoapKDxdbZxJUJXjl2-Cduaa5lVb-cKBJ5lhwNBP0/edit',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C3'
  },
  {
    name: 'Additional Activity 1-Build-A-House-Student',
    link:
      'https://studio.code.org/projects/artist/L7ZoapKDxdbZxJUJXjl2-Cduaa5lVb-cKBJ5lhwNBP0/edit',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C3'
  },
  {
    name: 'Student Activity 5- COLLECTING TREASURE',
    link: 'https://studio.code.org/s/coursec-2018/stage/5/extras?id=91007 ',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 6 - ANGRY BIRDS',
    link: 'https://studio.code.org/s/coursec-2018/stage/2/extras?id=90978',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 7 - COLLECTING TREASURE',
    link: 'https://studio.code.org/s/coursec-2018/stage/5/extras?id=91006',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C1'
  },
  {
    name: 'Student Activity 4 - CREATING ART',
    link: 'https://studio.code.org/s/course2/stage/4/puzzle/7?id=73933',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 5 - CREATING ART',
    link: 'https://studio.code.org/s/course2/stage/4/puzzle/4',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 6 - CREATING ART',
    link: 'https://studio.code.org/s/course2/stage/4/extras?id=73933',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C2'
  },
  {
    name: 'Student Activity 6 - BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/extras?id=93014',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C3'
  },
  {
    name: 'Student Activity 6 - PLAYLAB',
    link: 'https://studio.code.org/s/course4/stage/19/puzzle/1',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Additional Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/6/puzzle/2',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C5'
  },
  {
    name: 'Student Activity 6 - ALIEN PARTY',
    link: 'https://studio.code.org/s/coursef-2018/stage/22/puzzle/9',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Additional Activity 1 - FISH TANK',
    link: 'https://studio.code.org/s/coursef-2018/stage/21/puzzle/3',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Additional Activity 2- FISH TANK',
    link: 'https://studio.code.org/s/coursef-2018/stage/21/puzzle/8',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C7'
  },
  {
    name: 'Student Activity 4 - CROSS THE POND',
    link: 'https://studio.code.org/s/pre-express-2018/stage/13/puzzle/11',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Additional Activity - DRAWING GARDEN',
    link: 'https://studio.code.org/s/pre-express-2018/stage/13/puzzle/8',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'YL-T'
  },
  {
    name: 'Tutor Activity 1 - ANGRY BIRD PUZZLE',
    link: 'https://studio.code.org/s/course1/stage/4/puzzle/8',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Tutor Activity 2 - ANGRY BIRD PUZZLE',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/4',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Student Activity 1 (Do 10 - 13) - ANGRY BIRD',
    link: 'https://studio.code.org/s/course1/stage/4/puzzle/10',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Additional Activity (Do 4, 5) - ANGRY BIRD PUZZLE',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/4',
    type: 1,
    sort: 7,
    is_active: 0,
    session_number: 'YL-C1'
  },
  {
    name: 'Tutor Activity 2 - SEQUENCE WITH BEE',
    link: 'https://studio.code.org/s/course1/stage/7/puzzle/11',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C2'
  },
  {
    name: 'Student Activity 2 - PROJECT FARM HOUSE',
    link:
      'https://studio.code.org/projects/artist/0_6dcox9tsVL5-JOwTb7dlXtqDb5r2G9Vdx_nDj3BvQ/',
    type: 1,
    sort: 0,
    is_active: 0,
    session_number: 'YL-C2'
  },
  {
    name: 'Tutor Activity 1 - SCRAT PUZZLE',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/puzzle/10',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C3'
  },
  {
    name: 'Student Activity 2 Project - ARTIST LAB',
    link: 'https://studio.code.org/projects/artist_k1/',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C4'
  },
  {
    name: 'Additional Activity (Do 5-8) - ZOMBIE GETS SUNFLOWER  PUZZLE',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/5',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C4'
  },
  {
    name: 'Tutor Activity 1 - DEBUGGING WITH LAUREL',
    link: 'https://studio.code.org/s/coursed-2018/stage/4/puzzle/5',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Tutor Activity 2 - ANIMAL PYRAMID',
    link:
      'https://studio.code.org/projects/artist/4DStsZWkvgkqTIV_np_PsvA8MJQZ3GYWIfBEcV531LQ',
    type: 2,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Student Activity 1 - DEBUGGING WITH LAUREL\n(Do 3 - 9)',
    link: 'https://studio.code.org/s/coursed-2018/stage/4/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Student Activity 2 - QUIZ',
    link: 'https://studio.code.org/s/coursee-2018/stage/4/puzzle/10',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Student Activity 3 - ANIMAL PYRAMID',
    link:
      'https://studio.code.org/projects/artist/PVbi8LAR39A8R4CCNd4ZKhoU0HBbCu5fl-l2KwH5-eE',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Additional Activity - DEBUGGING WITH LAUREL',
    link: 'https://studio.code.org/s/express-2018/stage/5/puzzle/10',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C10'
  },
  {
    name: 'Student Activity 1 - PIC SEQUENCE ALGO (Do 1 and 2)',
    link: 'https://studio.code.org/s/course1/stage/6/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 2 - PIC FLURB ALGO',
    link: 'https://studio.code.org/s/course1/stage/2/puzzle/2',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Tutor Activity 1 - SHAPE ALGO (Do 1 and 2)',
    link: 'https://studio.code.org/s/course2/stage/2/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Tutor Activity 2 - ALGO QUIZ (Puzzle 2)',
    link: 'https://studio.code.org/s/course3/stage/10/puzzle/3',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 3 - SPELL BEE (Do 11 and 12)',
    link: 'https://studio.code.org/s/course1/stage/11/puzzle/11',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 4 - Command Loop - (Do 13 and 14)',
    link: 'https://studio.code.org/s/course1/stage/13/puzzle/13',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 5 - BEE HONEY PUZZLE',
    link: 'https://studio.code.org/s/course1/stage/12/puzzle/2',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 6 - MATCH THE COLUMNS Puzzle 13',
    link: 'https://studio.code.org/s/course1/stage/14/puzzle/13',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 7 - COMMAND LOOP',
    link: 'https://studio.code.org/s/course2/stage/5/puzzle/2',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 8 - DRAW A HOUSE',
    link: 'https://studio.code.org/s/course1/stage/14/extras?id=73835',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 9 - ARTIST DEBUG (Do 4)',
    link: 'https://studio.code.org/s/courseb-2018/stage/11/puzzle/4',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 10 - ARTIST DEBUG (Do 6)',
    link: 'https://studio.code.org/s/courseb-2018/stage/11/puzzle/6',
    type: 1,
    sort: 12,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Student Activity 11 - ARTIST DEBUG (Do 10)',
    link: 'https://studio.code.org/s/courseb-2018/stage/11/puzzle/10',
    type: 1,
    sort: 13,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Additional Activity - ARTIST-GARDEN',
    link: 'https://studio.code.org/s/courseb-2018/stage/11/puzzle/9',
    type: 1,
    sort: 14,
    is_active: 1,
    session_number: 'LC-C10'
  },
  {
    name: 'Tutor Activity 1 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/NA0KQYZ3z4KQ31ibY4j9KnDSdQmSr_Hm4jcDbYPPLxo/edit',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C10'
  },
  {
    name: 'Student Activity 1 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/NA0KQYZ3z4KQ31ibY4j9KnDSdQmSr_Hm4jcDbYPPLxo/edit',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C10'
  },
  {
    name: 'Tutor Led Activity - CONDITIONAL BEE',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/3',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C11'
  },
  {
    name: 'Student Activity - CONDITIONAL BEE (Do 4 - 15)',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/4',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C11'
  },
  {
    name: 'Additional Activity - CONDITIONAL BEE',
    link: 'https://studio.code.org/s/coursed-2018/stage/14/puzzle/9',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C11'
  },
  {
    name: 'Tutor Activity 1 - PLAYLAB_BLOCKS',
    link: 'https://studio.code.org/s/coursea-2018/stage/14/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C11'
  },
  {
    name: 'Student Activity (Do 3 to 8) - PLAYLAB_BLOCKS',
    link: 'https://studio.code.org/s/coursea-2018/stage/14/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C11'
  },
  {
    name: 'Additional Activity - ACTIONONCLICK',
    link: 'https://studio.code.org/s/coursea-2018/stage/14/extras?id=96980',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C11'
  },
  {
    name: 'Tutor Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/3',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Tutor Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/4',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Tutor Activity 3 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/5',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/6',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/7',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 3 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/8',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 4 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/11',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 5 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/10',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Student Activity 6 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/extras?id=74218',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Additional Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/extras?id=74219',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Additional Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/course3/stage/11/puzzle/9',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'EA-C11'
  },
  {
    name: 'Tutor Activity 1 - ZOMBIE UNTIL LOOPS',
    link: 'https://studio.code.org/s/course3/stage/8/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Tutor Activity 2 - ZOMBIE CONDITIONALS',
    link: 'https://studio.code.org/s/course3/stage/8/puzzle/8',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Student Activity 1 (Do 9-13) - ZOMBIE UNTIL LOOPS ',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/9',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Student Activity 2 (Do 9-11) - ZOMBIE CONDITIONALS',
    link: 'https://studio.code.org/s/course3/stage/8/puzzle/9',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Student Activity 3 - QUIZ A',
    link: 'https://studio.code.org/s/course3/stage/2/puzzle/14',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Student Activity 3 - QUIZ B',
    link: 'https://studio.code.org/s/course3/stage/8/puzzle/12',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Additional Activity - ANGRY BIRD UNTIL LOOP',
    link: 'https://studio.code.org/s/coursed-2018/stage/12/puzzle/4',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'YL-C12'
  },
  {
    name: 'Tutor Activity 1 - APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C12'
  },
  {
    name: 'Tutor View Only Activity - FULL CODE',
    link:
      'https://studio.code.org/projects/applab/AmnumRKuzMHb5vUdzH-u5ZVC4lO04XDzIZQrkp9PLh8',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C12'
  },
  {
    name: 'Student Activity 1 - APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C12'
  },
  {
    name: 'Tutor Activity - HowToTrainYourDragon',
    link:
      'https://studio.code.org/projects/playlab_k1/POHwuA8MSvK1jeb7hTmNbdQI7dKzQqje0TbVHuwK5j4/edit',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C12'
  },
  {
    name: 'Student Activity - HowToTrainYourDragon',
    link:
      'https://studio.code.org/projects/playlab_k1/POHwuA8MSvK1jeb7hTmNbdQI7dKzQqje0TbVHuwK5j4/edit',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C12'
  },
  {
    name: 'Tutor Activity 1 - LOOP STICKER ART',
    link: 'https://studio.code.org/s/coursec-2018/stage/9/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C13'
  },
  {
    name: 'Tutor Activity 2 - LOOP STICKER ART',
    link: 'https://studio.code.org/s/coursec-2018/stage/9/puzzle/3',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C13'
  },
  {
    name: 'Student Activity (Do 2-9) - LOOP STICKER ART',
    link: 'https://studio.code.org/s/coursec-2018/stage/9/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C13'
  },
  {
    name: 'Additional Activity - LOOP STICKER ART',
    link: 'https://studio.code.org/s/coursec-2018/stage/9/puzzle/12',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C13'
  },
  {
    name: 'Tutor Activity 1 - APP LAB',
    link:
      'https://studio.code.org/projects/applab/AmnumRKuzMHb5vUdzH-u5ZVC4lO04XDzIZQrkp9PLh8',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C13'
  },
  {
    name: 'Tutor View Only - COMPLETE CODE',
    link:
      'https://studio.code.org/projects/applab/bL4CyOUPDYHknoxTuda2PhQlLK9TlzF-htzu4ydsXkc',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C13'
  },
  {
    name: 'Student Activity 1 - APP LAB',
    link:
      'https://studio.code.org/projects/applab/AmnumRKuzMHb5vUdzH-u5ZVC4lO04XDzIZQrkp9PLh8',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C13'
  },
  {
    name: 'Tutor Activity 1 - ANIMAL RACE',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/extras?id=97339',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C13'
  },
  {
    name: 'Student Activity 1 - ANIMAL RACE',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/extras?id=97339',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C13'
  },
  {
    name: 'Additional Activity - Practice Level (Do 3-8)',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/puzzle/3',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C13'
  },
  {
    name: 'Student Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/projects/artist_k1',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C2'
  },
  {
    name: 'Tutor Activity 1 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/nr8mVWQkTdo_9ZHmzKke8TbRg3oHlTlvXm4HOrcR7QU',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C14'
  },
  {
    name: 'Tutor Activity 2 - COMPLETE CODE',
    link:
      'https://studio.code.org/projects/spritelab/kNAjgk8Gqcgi4r_SsnnM2QLG4pZ4i2TqBz6pP5JBPRs',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C14'
  },
  {
    name: 'Tutor Activity 3 - COMPLETE CODE',
    link:
      'https://studio.code.org/projects/spritelab/KyTqquY1gnXuynrJfax20ub0FRpKz9Rddbb4AReOZEk',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C14'
  },
  {
    name: 'Student Activity 1 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/ZBkMXpI4SaP9fSQ6KR-X3erkC_VnFsxTExdqxzFQvrg/edit',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C14'
  },
  {
    name: 'Tutor Activity 1 - STAR WARS',
    link: 'https://studio.code.org/s/courseb-2018/stage/7/puzzle/7',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C14'
  },
  {
    name: 'Tutor Activity 2 - HERRINGBONE',
    link:
      'https://studio.code.org/projects/artist_k1/D7ux6VIkqC1SjXn26CvAtqzHjLPGA31HcDwFJB8aG5o/edit',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C14'
  },
  {
    name: 'Student Activity 1 - (Do 8 and 9) STAR WARS',
    link: 'https://studio.code.org/s/courseb-2018/stage/7/puzzle/8',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C14'
  },
  {
    name: 'Student Activity 2 - MOUNTAINS',
    link:
      'https://studio.code.org/projects/artist_k1/ukLFlFa7siePe3YvThXzeLfVjD9-MOtRx7Iqn7fNDPY/edit',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C14'
  },
  {
    name: 'Additional Activity - BUILDING SQUARES',
    link:
      'https://studio.code.org/projects/artist_k1/z8Dm_wow4v_wESljTCuLpy63Pfs6g5tIOAaK9brKYK0/edit',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C14'
  },
  {
    name: 'Student Activity 1 - MINECRAFT (Do 12 and 13)',
    link: 'https://studio.code.org/s/coursec-2018/stage/15/puzzle/12',
    type: 1,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C14'
  },
  {
    name: 'Tutor Activity 1 - FLAPPY GAME WITH EVENTS',
    link: 'https://studio.code.org/s/course2/stage/16/puzzle/10',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C14'
  },
  {
    name: 'Student Activity 2 - FLAPPY GAME (Do 2 to 11)',
    link: 'https://studio.code.org/s/coursec-2018/stage/12/puzzle/2',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C14'
  },
  {
    name: 'Additional Activity - FLAPPY GAME (Puzzle 11)',
    link: 'https://studio.code.org/s/coursec-2018/stage/12/puzzle/11',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C14'
  },
  {
    name: 'Tutor Activity 1 - ANGRY BIRD',
    link: 'https://studio.code.org/s/course1/stage/4/puzzle/8',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C15'
  },
  {
    name: 'Tutor Activity 2 - ANGRYBIRD TEXT',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/4',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C15'
  },
  {
    name: 'Student Activity 1 - ANGRYBIRD TEXT(Do 1-5)',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/1',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C15'
  },
  {
    name: 'Student Activity 2 - ANGRYBIRD TEXT(Do 6-9)',
    link: 'https://studio.code.org/hoc/6',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C15'
  },
  {
    name: 'Additional Activity - VICTORYSONGDANCE',
    link: 'https://studio.code.org/s/dance/stage/1/puzzle/2',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C15'
  },
  {
    name: 'Tutor Activity 1 - EVENTS IN BOUNCE',
    link: 'https://studio.code.org/s/coursed-2018/stage/5/puzzle/8',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C15'
  },
  {
    name: 'Student Activity 1 - BOUNCE (Do 1-8)',
    link: 'https://studio.code.org/s/coursed-2018/stage/5/puzzle/1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C15'
  },
  {
    name: 'Tutor Activity 1 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/1',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Tutor Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/2',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Tutor Activity 3 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/3',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 1 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/4',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/5',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 3 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/6',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 4 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/7',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 5 - STORY LAB',
    link: 'https://studio.code.org/s/course4/stage/11/puzzle/1',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 6 - STORY LAB',
    link: 'https://studio.code.org/s/course4/stage/11/puzzle/2',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Student Activity 7 - STORY LAB',
    link: 'https://studio.code.org/s/course4/stage/11/puzzle/4',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Additional Activity 1 - STORY LAB',
    link: 'https://studio.code.org/s/course4/stage/11/puzzle/5',
    type: 1,
    sort: 11,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Additional Activity 2 - STORY LAB',
    link: 'https://studio.code.org/s/course4/stage/11/puzzle/6',
    type: 1,
    sort: 12,
    is_active: 1,
    session_number: 'EA-C15'
  },
  {
    name: 'Additional Activity (Do 8, 9) - ANGRY BIRD PUZZLE',
    link: 'https://studio.code.org/s/course2/stage/3/puzzle/8',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'YL-C1'
  },
  {
    name: 'Student Activity 1 - BOUNCE (Do 1 to 9)',
    link: 'https://studio.code.org/s/events/stage/1/puzzle/1',
    type: 1,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C16'
  },
  {
    name: 'Additional Activity 1 - ABCHALLENGE',
    link: 'https://studio.code.org/s/pre-express-2018/stage/7/extras?id=97272',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C16'
  },
  {
    name: 'Additional Activity 2 - ABDEBUG',
    link: 'https://studio.code.org/s/pre-express-2018/stage/7/extras?id=97273',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C16'
  },
  {
    name: 'Additional Activity 3 - TREASURECHALLENGE1',
    link: 'https://studio.code.org/s/pre-express-2018/stage/12/extras?id=97313',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C16'
  },
  {
    name: 'Additional Activity 4 - TREASURECHALLENGE2',
    link: 'https://studio.code.org/s/pre-express-2018/stage/12/extras?id=97314',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C16'
  },
  {
    name: 'Tutor Activity 1 - APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C16'
  },
  {
    name: 'Tutor Activity 2 - COMPLETE CODE (VIEW ONLY)',
    link:
      'https://studio.code.org/projects/applab/1_Gzm5x-leUe_9Fl-sdLC_bT0KaL7QN9WG1TQyr1GMM/view',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C16'
  },
  {
    name: 'Student Activity 1 - APP LAB',
    link: 'https://studio.code.org/projects/applab/new',
    type: 1,
    sort: 3,
    is_active: 0,
    session_number: 'EA-C16'
  },
  {
    name: 'Tutor Activity 1 - CHASE GAME',
    link: 'https://studio.code.org/c/798605593',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C16'
  },
  {
    name: 'Student Activity 1 - CHASE GAME',
    link: 'https://studio.code.org/s/coursec-2018/stage/14/puzzle/6',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C16'
  },
  {
    name: 'Student Activity 2 - CHASE GAME',
    link: 'https://studio.code.org/s/coursec-2018/stage/14/puzzle/11',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C16'
  },
  {
    name: 'Student Activity 4 - Laurel Medium',
    link: 'https://studio.code.org/s/coursec-2019/stage/6/puzzle/3',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Student Activity 5 - Laurel Advanced',
    link: 'https://studio.code.org/s/coursec-2019/stage/6/puzzle/4',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-C1'
  },
  {
    name: 'Tutor Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/5',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Tutor Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/6',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/7',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/8',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 3 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/9',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 4 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/15/puzzle/10',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 5 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/17/puzzle/2',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Student Activity 6 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/17/puzzle/3',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Additional Activity 1 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/17/puzzle/4',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Additional Activity 2 - ARTIST',
    link: 'https://studio.code.org/s/coursef-2018/stage/17/extras?id=94512',
    type: 1,
    sort: 10,
    is_active: 1,
    session_number: 'EA-C17'
  },
  {
    name: 'Tutor Activity 1 - DANCE PARTY EVENTS',
    link:
      'https://studio.code.org/projects/dance/OYYbl9IMQiJBGOANcbuGWg6OmR1oBo5jvGSK4tatl0s',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C17'
  },
  {
    name: 'Student Activity 1 - DANCE PARTY EVENT (1-7)',
    link: 'https://studio.code.org/s/dance/stage/1/puzzle/1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C17'
  },
  {
    name: 'Student Activity 2 - DANCE PARTY EVENT(11-13)',
    link: 'https://studio.code.org/s/dance/stage/1/puzzle/11',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C17'
  },
  {
    name: 'Student Activity - SCRAT DEBUG MAZE(2-10)',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/puzzle/2',
    type: 1,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Student Activity - BEE DEBUG(1-7)',
    link: 'https://studio.code.org/s/course2/stage/10/puzzle/1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Student Activity 1 - DEBUG 1',
    link:
      'https://studio.code.org/projects/playlab_k1/yNPxy4hcV9GcC7rDm8LNYN3Jp6peGrSnERkxD3alN1s/edit',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Student Activity 2 - DEBUG 2',
    link:
      'https://studio.code.org/projects/playlab_k1/hRiWnQumX7_OvGq9qhFZxcx9DNWL5jVoFHJ1Da9sES8/edit',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Student Activity 3 - DEBUG 3',
    link:
      'https://studio.code.org/projects/playlab_k1/7C5tUx7bhEoIhQAnswHop57YfsYFLBP6Y3k9hs5QntQ/edit',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Student Activity 4 - DEBUG 4',
    link:
      'https://studio.code.org/projects/playlab_k1/SD9n1IGlc7b2xa7pbqcFc5Z5z_50XQu93tEBAt4oO-0/edit',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Additional Activity 1 - SUPERDEBUG CHALLENGE 1    ',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/extras?id=90990',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Additional Activity 2 - SUPERDEBUG CHALLENGE 2',
    link: 'https://studio.code.org/s/coursec-2018/stage/3/extras?id=90991',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'LC-C17'
  },
  {
    name: 'Tutor Activity 1 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Tutor Activity 2 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/3',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 1 - ARTIST LAB',
    link: 'https://studio.code.org/s/course4/stage/10/puzzle/4',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 2 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/SrPXUwjcOOSd2BS0aoOorKNxoQqbgOn7Ay_vV6rUspU/view',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 3 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/WLZRE4efMVYkhBtGoapJs8CByur-XPTU-KblVvbZ60g/view',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 4 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/Of7nhg7A2pC3d1jEPBL_6YTzA1YhYczONaQN6IMBTJk/view',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 5 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/XUGT-4Put_gCh67ln3VNZUlabLTLWmKaldK6V7kzNkg/view',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Student Activity 6 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/Wb14FJRBDspCLzNeAyHpVkoGZDD4_R01IdSQp8wEo9g/view',
    type: 1,
    sort: 8,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Additional Activity 1 - ARTIST LAB',
    link:
      'https://studio.code.org/projects/artist/on3VB8aLLCkpX1QSdyYbuP9rpKepFCPiI-J8Pza6DHI/view',
    type: 1,
    sort: 9,
    is_active: 1,
    session_number: 'EA-C18'
  },
  {
    name: 'Tutor Activity - LOOP WITH FARMER',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/6',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Student Activity 1 - FARMER LOOP(6-12)',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/6',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Student Activity 2 - QUIZ WHILE LOOP',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/puzzle/13',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Student Activity 3 - QUIZ REPEAT LOOP',
    link: 'https://studio.code.org/s/coursec-2018/stage/10/puzzle/13',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Student Activity 4 - QUIZ UNTIL LOOP',
    link: 'https://studio.code.org/s/coursed-2018/stage/12/puzzle/11',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Student Activity 5 - QUIZ NESTED LOOP',
    link: 'https://studio.code.org/s/coursed-2018/stage/8/puzzle/13',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Additional Activity - LOOP WITH FARMER',
    link: 'https://studio.code.org/s/coursed-2018/stage/11/extras',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'YL-C18'
  },
  {
    name: 'Tutor Activity1 - EVENTSIF',
    link: 'https://studio.code.org/s/events/stage/1/puzzle/8',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Tutor Activity2 - VANISHIF',
    link: 'https://studio.code.org/s/pre-express-2018/stage/15/puzzle/9',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Tutor Activity3 - IFBEE',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/3',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Tutor Activity4 - IFBEEBIG',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/11',
    type: 2,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Student Activity1 - IFBEE (Do 3-10)',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/3',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Student Activity2 - EXTRAIFBEE (Do 12-13)',
    link: 'https://studio.code.org/s/course2/stage/13/puzzle/12',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-C18'
  },
  {
    name: 'Tutor Activity1 - FLAPPY',
    link: 'https://studio.code.org/flappy/10',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-C19'
  },
  {
    name: 'Student Activity 1 - FLAPPY (Do 1-9)',
    link: 'https://studio.code.org/flappy/1',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'LC-C19'
  },
  {
    name: 'Student Activity 2 - FLAPPY SHARE',
    link:
      'https://studio.code.org/projects/flappy/uDU_DjjyXurWyCLxVlJSuJUg7Qi6w6roFlI4WzgDsDc/edit',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'LC-C19'
  },
  {
    name: 'Additional Activity - SANTA',
    link:
      'https://studio.code.org/projects/flappy/hl4giFkUzWA9WZDm2fIKWGEW3hcPmHc6Y7icmcZwCSw/edit',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C19'
  },
  {
    name: 'Tutor Activity 1 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/pXzDzD_w9Tpli6u24hRiAfAgxYxhJTpocYlwOYyTEF8/view',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C19'
  },
  {
    name: 'Tutor Activity 2 - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/a6XO-r9Pkbl-fKe3bwbavCNJ3n1x6AUnDxhwj4KaNW8/view',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C19'
  },
  {
    name: 'Student Activity - SPRITE LAB',
    link:
      'https://studio.code.org/projects/spritelab/sm5O1Z4dNq3MNg5NPvbLJoPQvEOBOVb8_of9lX_Mhlw/view',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C19'
  },
  {
    name: 'Tutor Activity 1 - DRAGON ATTACK',
    link:
      'https://studio.code.org/projects/playlab/KWm9uNrPQaU6vM4am5o8BGms1Mhnwqo1Uer5yDPohzQ',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C20'
  },
  {
    name: 'Tutor Activity 2 - DRAGON ATTACK',
    link:
      'https://studio.code.org/projects/playlab/d1ML4L2--Riqtvq7Q83achDa8_rpzxHDj58GA249r0A/edit',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C20'
  },
  {
    name: 'Student Activity 1 - DRAGON ATTACK',
    link:
      'https://studio.code.org/projects/playlab/l_w_lQ7KJLQwHtQZYl9sSbDyA0Y6MRpUvqP4W9kjQEI/view',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C20'
  },
  {
    name: 'Student Activity 2 - DRAGON ATTACK',
    link:
      'https://studio.code.org/projects/playlab/GUUxisclKXoyv3ajyjOnGi8srttCT3izVkxvJB9V8Ac',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C20'
  },
  {
    name: 'Tutor Activity - FUNCTIONS WITH ARTIST',
    link: 'https://studio.code.org/s/coursee-2018/stage/18/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Student Activity 1 - FUNCTION FOR STAR',
    link: 'https://studio.code.org/s/coursee-2018/stage/18/puzzle/3',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Student Activity 2 - FUNCTION FOR SQUARE',
    link: 'https://studio.code.org/s/coursee-2018/stage/18/puzzle/6',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Student Activity 3 - DRAW WINDOWS',
    link: 'https://studio.code.org/s/coursee-2018/stage/18/puzzle/5',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Student Activity 4 - DRAW A HOUSE',
    link: 'https://studio.code.org/projects/artist/',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Additional Activity - STICKERS IN HOUSE',
    link: 'https://studio.code.org/projects/artist/',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C19'
  },
  {
    name: 'Tutor Activity - FUNCTIONS WITH FARMER',
    link: 'https://studio.code.org/s/coursee-2018/stage/16/puzzle/9',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Student Activity (Do 10-12) - FUNCTION WITH FARMER',
    link: 'https://studio.code.org/s/coursee-2018/stage/16/puzzle/10',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Student Activity - PINWHEEL HEXAGONS',
    link: 'https://studio.code.org/s/express-2018/stage/22/puzzle/13',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Tutor Activity - OLYMPIC RINGS',
    link:
      'https://studio.code.org/projects/artist/xmIQqabGsdlVn_iPHHrKFVTP7Kxg8AH0eWL5v_7e-bA',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Student Activity - OLYMPIC RINGS',
    link: 'https://studio.code.org/projects/artist/',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Additional Activity - MINECRAFT',
    link: 'https://studio.code.org/s/coursee-2018/stage/15/puzzle/11',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C20'
  },
  {
    name: 'Tutor Activity - HEALTH APP',
    link: 'https://x.thunkable.com/login',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C21'
  },
  {
    name: 'Student Activity - HEALTH APP',
    link: 'https://x.thunkable.com/login',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C21'
  },
  {
    name: 'Additional Activity - TIC TAC CHALLENGE',
    link: 'https://studio.code.org/s/pre-express-2017/stage/14/extras?id=73530',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-C8'
  },
  {
    name: 'Student Activity 1 - APP LAB',
    link:
      'https://studio.code.org/projects/applab/BDQs20mHc7ToYobbr4JiA-2IeLQ-p6d3x-Ccaez4Wx4',
    type: 1,
    sort: 3,
    is_active: 0,
    session_number: 'EA-C16'
  },
  {
    name: 'Tutor Activity 1 - BMI',
    link: 'https://x.thunkable.com/copy/5016757c4a8e4ae5fc4\nbddcd8a6d2469',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'EA-C22'
  },
  {
    name: 'Tutor Activity 2 - COMPLETE APP',
    link: 'https://x.thunkable.com/copy/20f1855ac4124de6557\nb34ca7a45c894',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'EA-C22'
  },
  {
    name: 'Tutor Activity 3 - BMI CHART',
    link:
      'https://cdn5.vectorstock.com/i/1000x1000/58/44/bod\ny-mass-index-infographic-icons-vector-2345844.jpg',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'EA-C22'
  },
  {
    name: 'Student Activity 1 - BMI',
    link: 'https://x.thunkable.com/copy/5016757c4a8e4ae5fc4bddcd8a6d2469',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'EA-C22'
  },
  {
    name: 'Student Activity 2 - BMI CHART',
    link:
      'https://cdn5.vectorstock.com/i/1000x1000/58/44/body-mass-index-infographic-icons-vector-2345844.jpg',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'EA-C22'
  },
  {
    name: 'Tutor Activity 1 - FLAPPY BIRD',
    link: 'https://studio.code.org/flappy/10',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Tutor Activity 2 - STAR WARS',
    link: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Tutor Activity 3 - STAR WARS',
    link: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/9',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Student Activity - STAR WARS',
    link: 'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Additional Activity 2 - TCIRCLE',
    link:
      'https://studio.code.org/projects/applab/mPHRsh-wD5TYbsIS3_cKdpZUC_i5ttxCj7Q5qdVkqIU/edit',
    type: 2,
    sort: 5,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Additional Activity 2 - SCIRCLE',
    link:
      'https://studio.code.org/projects/applab/mPHRsh-wD5TYbsIS3_cKdpZUC_i5ttxCj7Q5qdVkqIU/edit',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-21'
  },
  {
    name: 'Tutor Activity - MOBILE APP DEV',
    link:
      'https://studio.code.org/projects/applab/5VBdwUevY3_CnDPt-Og-dzUzian4mYkLwvNuzghSGGs',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Student Activity 1 (Do 2-4) - MOBILE APP',
    link: 'https://studio.code.org/s/applab-intro/stage/1/puzzle/2',
    type: 1,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Student Activity 2 (Do 6-7) - MOBILE APP',
    link: 'https://studio.code.org/s/applab-intro/stage/1/puzzle/6',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Student Actvity 3 - MOBILE APP',
    link: 'https://studio.code.org/s/applab-intro/stage/1/puzzle/9',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Additional Activity - MOBILE APP',
    link: 'https://studio.code.org/s/applab-intro/stage/1/puzzle/7',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Tutor Ref (Student Activity 3 Solution)',
    link:
      'https://studio.code.org/projects/applab/e6LAI-5JmLEh5AY66gxYp692qmUm-4Wsjx9yRVUn11c',
    type: 2,
    sort: 6,
    is_active: 1,
    session_number: 'YL-C21'
  },
  {
    name: 'Tutor Activity 1 - MOBILE APP DEV',
    link:
      'https://studio.code.org/projects/applab/VmQJ8DB0HSPG6y0IFk8rRsUb8sPAJjhj_9dT-aeazBQ',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'YL-C22'
  },
  {
    name: 'Tutor Activity 2 - MOBILE APP DEV',
    link: 'https://studio.code.org/projects/applab/',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'YL-C22'
  },
  {
    name: 'Student Activity - MOBILE APP DEV',
    link: 'https://studio.code.org/projects/applab/',
    type: 1,
    sort: 3,
    is_active: 1,
    session_number: 'YL-C22'
  },
  {
    name: 'Additional Activity - MOBILE APP DEV',
    link: 'https://studio.code.org/projects/applab/',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'YL-C22'
  },
  {
    name: 'Tutor Activity 1 - BINARY',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 2,
    sort: 1,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Tutor Activity 2 - BINARY FLOWER',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 2,
    sort: 2,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Tutor Activity 3 - BINARY HEART',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 2,
    sort: 3,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Student Activity (Do 2-6) - BINARY ARTIST',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 1,
    sort: 4,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Student Activity 2 (D0 9-10) - BINARY ART',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/9',
    type: 1,
    sort: 5,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Student Activity 3 (Do 2,3) - BINARY ART',
    link: 'https://studio.code.org/s/course4/stage/18/puzzle/2',
    type: 1,
    sort: 6,
    is_active: 1,
    session_number: 'LC-20'
  },
  {
    name: 'Additional Activity - DRAW BINARY',
    link: 'https://studio.code.org/s/coursed-2018/stage/19/puzzle/2',
    type: 1,
    sort: 7,
    is_active: 1,
    session_number: 'LC-20'
  }
]
