import uuidv4 from 'uuid/v4'

module.exports = (courseId, createdBy) => {
  return sessionDataBeginner.map(function(cls) {
    cls.id = uuidv4()
    cls.course_id = courseId
    cls.created_by = createdBy
    cls.updated_by = createdBy
    cls.created_at = new Date()
    cls.updated_at = new Date()
    return cls
  })
}
const sessionDataBeginner = [
  {
    sort: 1,
    name: 'BLOCK COMMANDS',
    session_number: 'BEG-T',
    is_trial: 1,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-T.pdf',
    description:
      'Introduction to Block Based Command Code with custom maze activities. Kids strengthen deep logic by giving computer complex directional commands.'
  },
  {
    sort: 2,
    name: 'SEQUENCES',
    session_number: 'BEG-C1',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C1.pdf',
    description:
      'Introduction to Commands, Sequence and Code structure. Students learn to  organize complex information and ideas efficiently using sequence routines'
  },
  {
    sort: 3,
    name: 'FLEXIBLE SEQUENCING',
    session_number: 'BEG-C2',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C2.pdf',
    description:
      'Applying Flexible Sequencing to select  the most effective solution from available steps and resources. Kids develop decisive logic by selecting Optimized Flows'
  },
  {
    sort: 4,
    name: 'STEP ALGORITHM',
    session_number: 'BEG-C3',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C3.pdf',
    description:
      'Applying Algorithmic thinking to break complex problems into effective solutions of discrete steps. \nKids develop strong decision making skills by learning to tackle problems efficiently\n'
  },
  {
    sort: 5,
    name: 'BLOCK PROGRAMMING',
    session_number: 'BEG-C4',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C4.pdf',
    description:
      'Integrating Algorithms and Block Commands to create code to solve puzzles.Kids develop tremendous creator confidence as they learn how programming allows infinite possibilities to create outcomes with limited resources'
  },
  {
    sort: 6,
    name: 'CODE DEBUGGING',
    session_number: 'BEG-C5',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C5.pdf',
    description:
      'Identifying and Fixing logic flaws in code to create program outcomes. Kids strengthen resilience by interpreting failure as as a necessary process step of deep learning.'
  },
  {
    sort: 7,
    name: 'LOGIC ART',
    session_number: 'BEG-C6',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C6.pdf',
    description:
      'Create 2-dimensional art forms with computer  code using logic and spatial reasoning. Kids begin a lifelong process of integrating Left & Right, Logic & Abstract Thinking to become creators In the new world.'
  },
  {
    sort: 8,
    name: 'INTRODUCTORY LOOPS',
    session_number: 'BEG-C7',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C7.pdf',
    description:
      'Applying loops to computer programs for optimizing process steps.. Kids develop tremendous regard for logic, realizing complex puzzles are created on foundation of efficient reasoning'
  },
  {
    sort: 9,
    name: 'PROFESSIONAL ART',
    session_number: 'BEG-C8',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C8.pdf',
    description:
      'Kids reach peak creative expression by weaving core concepts of Sequence, Algorithms and Loops to create art-forms as sound as professional artists\n\nModule 1 of Coding is now complete, methodically teaching students to use fundamentals of logic for significant creative endeavours eg, major tech entrepreneurship, novel-writing, and art'
  },
  {
    sort: 28,
    name: 'COMPLEX LOOPS',
    session_number: 'BEG-C9',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C9.pdf',
    description:
      'Revision of programming concepts in a Star Wars adventure activity. Kids apply reasoning and use loop commands to write smart and efficient programs.'
  },
  {
    sort: 31,
    name: 'DEEP PROGRAMMING PRACTICE',
    session_number: 'BEG-C10',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C10.pdf',
    description:
      'Deepening programming practice with challenge activities to prepare them for the new concepts that will follow'
  },
  {
    sort: 32,
    name: 'EVENTS PROGRAMMING',
    session_number: 'BEG-C11',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C11.pdf',
    description:
      'In this introductory lesson, kids understand the concept of events and user interaction. Kids take first steps into Interactive Animation'
  },
  {
    sort: 33,
    name: 'Pair Programming',
    session_number: 'BEG-C12',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C12.pdf',
    description:
      'Kids learn concept of pair programming and build their first story together with the tutor '
  },
  {
    sort: 34,
    name: 'ACTION EVENTS',
    session_number: 'BEG-C13',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C13.pdf',
    description:
      'Junior coders create a storyboard project with spontaenous ideas. Kids learn events that correspond to user action and how code can be triggered on occurrence of an event'
  },
  {
    sort: 35,
    name: 'NESTED LOOPS',
    session_number: 'BEG-C14',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C14.pdf',
    description:
      'Create efficient solutions by recognizing repetition. Kids will learn to recognize systems within repeated patterns to deliver smart and efficient programs'
  },
  {
    sort: 36,
    name: 'TEXT COMMAND PROFICIENCY',
    session_number: 'BEG-C15',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C15.pdf',
    description:
      'Introduction to IPO processing cycle of computers.\nKids apply reasoning to translate direction commands to text\ninput and get bearings on turn orientation required for programming'
  },
  {
    sort: 37,
    name: 'ALGORITHM DECOMPOSITION',
    session_number: 'BEG-C16',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C16.pdf',
    description:
      'Decompose a given task into steps for completing compound activities. Kids develop decisive logic by selecting optimized sequences'
  },
  {
    sort: 52,
    name: 'DEBUGGING COGNITION',
    session_number: 'BEG-C17',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C17.pdf',
    description:
      'Program debugging is a critical activity in software development. Debugging encompasses knowledge, comprehension, analysis and evaluation thus strengthening a deeper understanding'
  },
  {
    sort: 63,
    name: 'CONDITIONALS',
    session_number: 'BEG-C18',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C18.pdf',
    description:
      'Decision making skills are reinforced through activities\nwhere students evaluate a condition to generate appropriate\noutcomes'
  },
  {
    sort: 64,
    name: 'MY OWN GAME',
    session_number: 'BEG-C19',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C19.pdf',
    description:
      'Kids follow a step by step approach to design a single player game'
  },
  {
    sort: 71,
    name: 'BINARY STRINGS',
    session_number: 'BEG-20',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C20.pdf',
    description:
      'Understand concept of Binary system and apply that knowledge to convert simple code into machine-level binary images. Understand relationship of bits and how computers store and process data.\n'
  },
  {
    sort: 72,
    name: 'VARIABLES',
    session_number: 'BEG-21',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C21.pdf',
    description:
      'Applying the concept of variables when creating computer games. Kids learn controlling game dynamics by changing variables, thus cementing their growing creator-confidence'
  },
  {
    sort: 73,
    name: 'EXTENDED VARIABLES',
    session_number: 'BEG-22',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C22.pdf',
    description:
      'Apply learnt concept of variables to create an interactive story diorama'
  },
  {
    sort: 74,
    name: 'GAME DESIGN',
    session_number: 'BEG-23',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/BEG-C23.pdf',
    description: 'Creative self designed game'
  }
]
