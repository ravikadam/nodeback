import uuidv4 from 'uuid/v4'

module.exports = (courseId, createdBy) => {
  return sessionDataIntermediate.map(function(cls) {
    cls.id = uuidv4()
    cls.course_id = courseId
    cls.created_by = createdBy
    cls.updated_by = createdBy
    cls.created_at = new Date()
    cls.updated_at = new Date()
    return cls
  })
}

const sessionDataIntermediate = [
  {
    sort: 10,
    name: 'LOGIC COMMANDS',
    session_number: 'INT-T',
    is_trial: 1,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-T.pdf',
    description:
      'Introduction to Block Based Command Code with complex puzzles. \nKids create abstract animations by giving computer logic-based commands'
  },
  {
    sort: 11,
    name: 'COMMAND SEQUENCE',
    session_number: 'INT-C1',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C1.pdf',
    description:
      'Introduction to commands, sequence & code structure. Kids apply spatial reasoning to write block code for non-linear outcomes'
  },
  {
    sort: 12,
    name: 'STEP ALGORITHM',
    session_number: 'INT-C2',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C2.pdf',
    description:
      'Applying algorithmic thinking to create sequential steps for completing compound activities. Kids develop decisive logic by selecting optimized sequences'
  },
  {
    sort: 22,
    name: 'CODE DEBUGGING ',
    session_number: 'INT-C3',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C3.pdf',
    description:
      'Identifying and fixing logic flaws in code to create program outcomes. Activities strengthen kids’ resilience by interpreting failure as a as a necessary process step of deep learning'
  },
  {
    sort: 23,
    name: 'INTRODUCTORY LOOPS',
    session_number: 'INT-C4',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C4.pdf',
    description:
      'Introducing loops to replace long programs having several lines of code with short program having fewer lines of code. Kids develop tremendous creator confidence as they learn how complex creative projects are built on foundations of repeating simple steps'
  },
  {
    sort: 24,
    name: 'LOOP SEQUENCES',
    session_number: 'INT-C5',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C5.pdf',
    description:
      'Applying loop sequences to program computer to solve complex puzzles. Kids deepen link of efficient logic with breakthrough creative output'
  },
  {
    sort: 25,
    name: 'INTEGRATED CHARACTERS',
    session_number: 'INT-C6',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C6.pdf',
    description:
      'Create 2-dimensional characters integrating all core code logic concepts. Kids begin a lifelong process of integrating Left & Right, Logic & Abstract Thinking to become creators In the new world'
  },
  {
    sort: 26,
    name: 'STORY WITH CODE',
    session_number: 'INT-C7',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C7.pdf',
    description:
      'Kids advance on unique left-right convergence of coding, using variables and events to create complex 3D story narratives. \nCombining advanced logic and divergent thinking leads to significant creative endeavours eg major entrepreneurship, novel-writing, and filmmaking'
  },
  {
    sort: 27,
    name: 'PROFESSIONAL ANIMATIONS',
    session_number: 'INT-C8',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C8.pdf',
    description:
      'Kids reach peak creative expression by weaving variable and control command blocks to create animations as sound as professional animators. \nModule 1 of Coding is now complete, methodically teaching students to use fundamentals of logic to transform their worlds into a giant playground of creative endeavor.'
  },
  {
    sort: 29,
    name: 'SPATIAL REASONING',
    session_number: 'INT-C9',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C9.pdf',
    description:
      'Revision of command, variable, event and loop blocks through card based game.  Apply spatial reasoning and use loop commands to write smart programs. '
  },
  {
    sort: 38,
    name: 'DEBUGGING COGNITION',
    session_number: 'INT-C10',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C10.pdf',
    description:
      'Metacognition is an important life skill. In these exercises, kids learn to troubleshoot and debug a program to fix glitchy code.'
  },
  {
    sort: 39,
    name: 'BASIC CONDITIONALS',
    session_number: 'INT-C11',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C11.pdf',
    description:
      'Alternative thinking skills are reinforced through activities wherein students evaluate multiple solutions to a problem and select the smartest option. This is further applied to online safety to ensure responsible Internet use.'
  },
  {
    sort: 40,
    name: 'UNTIL LOOP AND IF-ELSE CONDITIONALS',
    session_number: 'INT-C12',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C12.pdf',
    description:
      'Decision making skills are reinforced with programming that involves Until loops and if-else conditionals. Students write complex code, wherein they decide future course of action based on given condition'
  },
  {
    sort: 41,
    name: 'CODE ART',
    session_number: 'INT-C13',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C13.pdf',
    description:
      'A new kind of loop, Repeat - until, is introduced in this session. It allows actions to be repeated, until a particular condition is met.'
  },
  {
    sort: 42,
    name: 'GAME DESIGN WITH EVENTS',
    session_number: 'INT-C14',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C14.pdf',
    description:
      'Kids follow a step by step approach to design a single player game. '
  },
  {
    sort: 43,
    name: 'ART SYMMETRY',
    session_number: 'INT-C15',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C15.pdf',
    description:
      'Kids march ahead in their journey in game design with code. They\ndefine rules of a game, wherein the user plays against the computer.\nScores are recorded to decide winner/loser of the game'
  },
  {
    sort: 44,
    name: 'CODE GEOMETRY',
    session_number: 'INT-C16',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C16.pdf',
    description:
      'Students apply the knowledge of geometry and coding to create complex art. Writing a 3-dimensional program with variable and loop commands to create outcomes transforms their creator confidence.'
  },
  {
    sort: 53,
    name: 'DANCE PARTY WITH EVENTS',
    session_number: 'INT-C17',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C17.pdf',
    description:
      'Apply a mix of creative and computational thinking to create an animation of dance party.'
  },
  {
    sort: 55,
    name: 'WHILE LOOP',
    session_number: 'INT-C18',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C18.pdf',
    description:
      'Students apply decision making skills to write programs with while loop. They have to judge how long a particular action is to be done based on particular conditions'
  },
  {
    sort: 56,
    name: 'BASIC FUNCTIONS',
    session_number: 'INT-C19',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C19.pdf',
    description:
      'Use Functions to call the same set of instructions and write efficient programs. A mix of left brain/right brain activity where functions are applied to creative task of drawing shapes and pictures.'
  },
  {
    sort: 57,
    name: 'EXTENDED FUNCTIONS',
    session_number: 'INT-C20',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C20.pdf',
    description:
      'Practise use Functions to call the same set of instructions and write efficient programs'
  },
  {
    sort: 58,
    name: 'MOBILE APP',
    session_number: 'INT-C21',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C21.pdf',
    description:
      'Apply creativity to add text, image and sound and create an interactive  mobile app.'
  },
  {
    sort: 59,
    name: 'MOBILE APP DEVELOPMENT',
    session_number: 'INT-C22',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C22.pdf',
    description:
      'Students use elements such as button and label and code using blocks to design simple mobile apps.'
  },
  {
    sort: 60,
    name: 'MOBILE APPLICATION DESIGN',
    session_number: 'INT-C23',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C23.pdf',
    description: 'Use Event blocks to create simple mobile apps'
  },
  {
    sort: 61,
    name: 'MOBILE APP DESIGN',
    session_number: 'INT-C24',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/INT-C24.pdf',
    description: 'Create Interactive mobile apps '
  }
]
