import uuidv4 from 'uuid/v4'

module.exports = (courseId, createdBy) => {
  return sessionDataAdvanced.map(function(cls) {
    cls.id = uuidv4()
    cls.course_id = courseId
    cls.created_by = createdBy
    cls.updated_by = createdBy
    cls.created_at = new Date()
    cls.updated_at = new Date()
    return cls
  })
}

const sessionDataAdvanced = [
  {
    sort: 13,
    name: 'APPLICATION DESIGN',
    session_number: 'ADV-T',
    is_trial: 1,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-T.pdf',
    description:
      'De-constructing Advanced App Creation into sequential process elements. Kids create first real-world app using code and design to gain creation confidence.'
  },
  {
    sort: 14,
    name: 'SEQUENCES',
    session_number: 'ADV-C1',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C1.pdf',
    description:
      'Build deep coding foundations by learning how to give ordered commands to the computer.  Kids strengthen logic constructs by structuring composite tasks into ordered sequences'
  },
  {
    sort: 15,
    name: 'CREATING ALGORITHMS',
    session_number: 'ADV-C2',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C2.pdf',
    description:
      'Introduction to Algorithmic thinking to solve abstract challenges. Kids balance logic & abstraction to create inventive computer art.'
  },
  {
    sort: 16,
    name: 'BINARY STRINGS',
    session_number: 'ADV-C3',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C3.pdf',
    description:
      'Applying procedural programming paradigm to convert high-level code language into machine-level binary. \nKids relationship with technology undergoes a paradigm shift as they program the machine to achieve their own objectives'
  },
  {
    sort: 17,
    name: 'MOBILE APPLICATION DESIGN',
    session_number: 'ADV-C4',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C4.pdf',
    description:
      'Apply advanced interactivity to App Design, comprehensively integrating core coding concepts of sequences, algorithms and variables. .\nKids learn design thinking by understanding how Front-end  User Interface complements backend Code\n'
  },
  {
    sort: 18,
    name: 'VARIABLES',
    session_number: 'ADV-C5',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C5.pdf',
    description:
      'Applying concept of variables to create first independent computer game. Kids learn controlling game outcomes by varying input/output parameters, thus cementing their growing creator-confidence.'
  },
  {
    sort: 19,
    name: 'EVENTS',
    session_number: 'ADV-C6',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C6.pdf',
    description:
      'Using Events to trigger complex on-screen outcomes. Kids learn Advanced Design Thinking in using code to design interactive outcome-based user experiences.'
  },
  {
    sort: 20,
    name: 'PROFESSIONAL ANIMATION',
    session_number: 'ADV-C7',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C7.pdf',
    description:
      'Applying Events & Behavior to create deep character-driven narratives. Kids develop tremendous creator confidence by applying code to control objects and characters on screen'
  },
  {
    sort: 21,
    name: 'ADVANCED GAME DESIGN',
    session_number: 'ADV-C8',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C8.pdf',
    description:
      'Integrate all coding concepts--Sequence, Variables, Events and Animations-- to create an advanced game with compelling user design and advanced block code. \nModule 1 is now complete with kids experiencing peak creative expression by controlling input logic, setting them on the path of significant creative endeavor in entrepreneurship and arts'
  },
  {
    sort: 30,
    name: 'CONDITIONAL LOOP',
    session_number: 'ADV-C9',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C9.pdf',
    description:
      'Applying loops to write shorter and more efficient code thus enabling kids to identify a repetitive pattern to solve a problem.'
  },
  {
    sort: 45,
    name: 'TRIGGER EVENTS',
    session_number: 'ADV-C10',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C10.pdf',
    description:
      'Kids learn basics of Functional Programming Paradigm and its application to build an interactive but complex game thus enhancing their creativity through application'
  },
  {
    sort: 46,
    name: 'REPEAT LOOPS',
    session_number: 'ADV-C11',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C11.pdf',
    description:
      'From Pattern recognition to automation, kids develop high level recursive code to create complex geometrical arts and shapes'
  },
  {
    sort: 47,
    name: 'GUI APP DESIGN',
    session_number: 'ADV-C12',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C12.pdf',
    description:
      'Apply advanced interactivity to App Design, comprehensively integrating core coding concepts of variables, counters, and advanced loops. Kids learn design thinking by understanding how Front-end User Interface complements backend Code.'
  },
  {
    sort: 48,
    name: 'STOP EVENT',
    session_number: 'ADV-C13',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C13.pdf',
    description:
      'Advancing the Functional Programming Paradigm and its application to build an interactive but complex game thus enhancing their creativity'
  },
  {
    sort: 49,
    name: 'UNTIL LOOP',
    session_number: 'ADV-C14',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C14.pdf',
    description:
      'Automation with conditional loops give student the power to take control of their code and create outcomes based on pre-set objectives.'
  },
  {
    sort: 50,
    name: 'FOR LOOP',
    session_number: 'ADV-C15',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C15.pdf',
    description:
      'Kids learn to apply the most advanced loop to create complex forms while taking control of their code through conditions.'
  },
  {
    sort: 51,
    name: 'GUI GAME DESIGN',
    session_number: 'ADV-C16',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C16.pdf',
    description:
      'Integrate all coding concepts--Sequence, Variables, Events and Animations,Loops, -- to create an advanced game with compelling user design and advanced back-end code.'
  },
  {
    sort: 54,
    name: 'LOOP VARIABLES',
    session_number: 'ADV-C17',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C17.pdf',
    description:
      'Building the concepts of loops further kids learn to use variables into loops to create distinct shapes enabling modular programming practice'
  },
  {
    sort: 62,
    name: 'LOOP INTERVAL',
    session_number: 'ADV-C18',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C18.pdf',
    description:
      'Kids learn to control loop execution and direction while applying algorithmic thinking to create geometric art'
  },
  {
    sort: 65,
    name: 'GAME DESIGN',
    session_number: 'ADV-C19',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C19.pdf',
    description:
      'Build an Intelligent Game based on the concepts of Loops ,Variables, Event and Animation. Kids showcase their logical thinking skill and creativity in action.'
  },
  {
    sort: 66,
    name: 'REPEAT FOREVER LOOP',
    session_number: 'ADV-C20',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C20.pdf',
    description:
      'Building on the previous learnt concepts kids design a multiplayer game using a powerful repeat loop with advanced logical thinking.'
  },
  {
    sort: 67,
    name: 'PUBLISHING APP',
    session_number: 'ADV-C21',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C21.pdf',
    description:
      'Applying all the concepts learnt so far to create a highly professional app and publish it online'
  },
  {
    sort: 68,
    name: 'PUBLISHING APP',
    session_number: 'ADV-C22',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C22.pdf',
    description: 'Trigger Code on mouse over event'
  },
  {
    sort: 69,
    name: 'BUTTON PRESS EVENT',
    session_number: 'ADV-C23',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C23.pdf',
    description: 'Creative thinking skill on mobile App'
  },
  {
    sort: 70,
    name: 'GAME DESIGN',
    session_number: 'ADV-C24',
    is_trial: 0,
    document_url:
      'https://s3.ap-south-1.amazonaws.com/ptcontent/curriculum/ADV-C24.pdf',
    description: 'Creative advanced mobile game with UI design'
  }
]
