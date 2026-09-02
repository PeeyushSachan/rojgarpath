// Lazy-loaded category data management
// This enables code-splitting per category for better initial load performance

// Cache for loaded category data to avoid re-fetching
const categoryCache = new Map();

// Track which data has been loaded to prevent duplicate loads
const loadedData = {
    expanded: false,
    additions: false,
};

const mkDetail = ({
    title,
    overview,
    eligibility,
    pattern,
    syllabus,
    process,
    dates,
    salary,
    resources,
}) => ({ title, overview, eligibility, pattern, syllabus, process, dates, salary, resources });

const policePopularPost = (title, track = 'State or central police recruitment track') =>
    mkDetail({
        title,
        overview:
            `${title} is a high-demand police recruitment route in India. Exact eligibility, age, physical standards, medical standards and stage sequence are controlled by the current official notification of the recruiting authority.`,
        eligibility: [
            'Education, age and category relaxations are notification-specific.',
            'Physical/medical criteria, where applicable, must be checked from the current recruitment notice.',
            'Reservation, domicile and language conditions can vary by force/state and cycle.',
        ],
        pattern: [
            ['Recruitment track', track, 'Verify the current official notification'],
            ['Common stages', 'Written exam, physical/skill stages (where applicable), document verification and medical', 'Varies by authority'],
        ],
        syllabus: [
            'General awareness and current affairs',
            'Reasoning and mental ability',
            'Numerical aptitude',
            'Language and post-specific topics where prescribed',
        ],
        process: [
            'Read the current official notification from the relevant authority website.',
            'Check eligibility, standards and stage details for the specific post/cycle.',
            'Apply online, upload documents and keep registration details safe.',
            'Track official updates for exam schedule, admit card and result.',
        ],
        dates: [['Recruitment cycle', 'Varies by state/force and notification']],
        salary: ['Pay level and allowances depend on post, force/state rules and the current official notification.'],
        resources: [
            'Official notification PDF',
            'Previous year papers and mock tests',
            'Physical/skill standards notice where applicable',
        ],
    });

// Build initial categories array with police, railway, ssc, upsc
// Expanded categories will be loaded dynamically when needed
const initialCategories = [
    {
        slug: 'police',
        name: 'Police',
        tagline: 'State & central police recruitment, constable to inspector grade.',
        groups: [
            {
                name: 'CONSTABLE & HEAD CONSTABLE',
                posts: [
                    policePopularPost('Police Constable', 'State police constable recruitment'),
                    policePopularPost('Police Head Constable', 'State/central head constable recruitment'),
                    policePopularPost('Constable (Driver)', 'Driver constable recruitment where notified'),
                    policePopularPost('Head Constable (Ministerial)', 'Ministerial head constable recruitment where notified'),
                ],
            },
            {
                name: 'SUB-INSPECTOR & OFFICER',
                posts: [
                    policePopularPost('Assistant Sub-Inspector (ASI)', 'ASI recruitment in state/central police organizations'),
                    policePopularPost('Police Sub-Inspector (SI)', 'State police SI recruitment and allied routes'),
                    policePopularPost('Police Inspector', 'Inspector-level recruitment/promotion track as notified'),
                    policePopularPost('Deputy Superintendent of Police (DSP)', 'State PSC/combined police service DSP route'),
                    policePopularPost('Assistant Superintendent of Police (ASP)', 'Officer-cadre route through applicable recruitment channels'),
                    policePopularPost('Assistant Commandant', 'Officer entry in CAPF/related channels as notified'),
                ],
            },
            {
                name: 'CENTRAL POLICE / CAPF',
                posts: [
                    policePopularPost('SSC GD Constable', 'SSC GD route for CAPFs and allied forces'),
                    policePopularPost('Delhi Police Constable', 'Delhi Police constable recruitment route'),
                    policePopularPost('Delhi Police Head Constable', 'Delhi Police head constable recruitment route'),
                    policePopularPost('SSC CPO Sub-Inspector', 'SSC CPO SI route for Delhi Police and CAPFs'),
                    policePopularPost('CAPF Assistant Commandant', 'UPSC CAPF Assistant Commandant recruitment route'),
                    policePopularPost('CRPF Constable', 'CRPF constable recruitment route'),
                    policePopularPost('BSF Constable', 'BSF constable recruitment route'),
                    policePopularPost('CISF Constable', 'CISF constable recruitment route'),
                    policePopularPost('ITBP Constable', 'ITBP constable recruitment route'),
                    policePopularPost('SSB Constable', 'SSB constable recruitment route'),
                    policePopularPost('Assam Rifles Rifleman', 'Assam Rifles rifleman recruitment route'),
                ],
            },
            {
                name: 'STATE POLICE - HIGH-DEMAND ROUTES',
                posts: [
                    policePopularPost('UP Police Constable', 'Uttar Pradesh constable recruitment route'),
                    policePopularPost('UP Police Sub-Inspector', 'Uttar Pradesh SI recruitment route'),
                    policePopularPost('Bihar Police Constable', 'Bihar constable recruitment route'),
                    policePopularPost('Bihar Police Sub-Inspector', 'Bihar SI recruitment route'),
                    policePopularPost('Rajasthan Police Constable', 'Rajasthan constable recruitment route'),
                    policePopularPost('Rajasthan Police Sub-Inspector', 'Rajasthan SI recruitment route'),
                    policePopularPost('MP Police Constable', 'Madhya Pradesh constable recruitment route'),
                    policePopularPost('MP Police Sub-Inspector', 'Madhya Pradesh SI recruitment route'),
                    policePopularPost('Haryana Police Constable', 'Haryana constable recruitment route'),
                    policePopularPost('Punjab Police Constable', 'Punjab constable recruitment route'),
                    policePopularPost('Maharashtra Police Constable', 'Maharashtra constable recruitment route'),
                    policePopularPost('West Bengal Police Constable', 'West Bengal constable recruitment route'),
                ],
            },
        ],
    },
    {
        slug: 'railway',
        name: 'Railway',
        tagline: 'RRB and RRC recruitment across technical, non-technical and Level 1 posts.',
        groups: [
            {
                name: 'Non-Technical',
                posts: [
                    mkDetail({
                        title: 'RRB NTPC Junior Clerk',
                        overview:
                            'Junior Clerk cum Typist is a Level 2 non-technical popular category post under the Railway Recruitment Board. Selected candidates handle office correspondence, records and ticketing support in divisional offices.',
                        eligibility: [
                            'Age: 18 to 30 years.',
                            'Education: Class 12 pass in any stream.',
                            'Typing proficiency of 30 wpm in English or 25 wpm in Hindi.',
                        ],
                        pattern: [
                            ['CBT 1', 'Maths, Reasoning, General Awareness', '100 questions / 90 min'],
                            ['CBT 2', 'Higher level objective test', '120 questions / 90 min'],
                            ['Stage 3', 'Typing Skill Test', 'Qualifying'],
                            ['Stage 4', 'Document verification and medical', 'Qualifying'],
                        ],
                        syllabus: [
                            'Mathematics: number system, percentage, time and work, mensuration',
                            'General intelligence and reasoning: analogies, syllogism, statement conclusion',
                            'General awareness: current events, Indian railways, science and technology',
                            'Basic computer knowledge and general science up to Class 10',
                        ],
                        process: [
                            'Apply on the regional RRB website against the centralised notification.',
                            'Select post preference and RRB zone at the time of application.',
                            'Pay INR 500 (general) or INR 250 (reserved), partly refunded after appearing in CBT 1.',
                            'Track application status and download e-call letter.',
                        ],
                        dates: [
                            ['Centralised notification', 'September'],
                            ['Application window', 'September to October'],
                            ['CBT 1', 'February to March'],
                            ['CBT 2', 'June'],
                            ['Final merit list', 'October'],
                        ],
                        salary: [
                            'Pay Level 2, basic pay INR 19,900 per month.',
                            'Gross salary about INR 30,000 to INR 34,000 by city class.',
                            'Free railway passes for family, medical facility in railway hospitals.',
                        ],
                        resources: [
                            'RRB NTPC previous year CBT papers',
                            'Typing test practice software list',
                            'Railway general awareness notes',
                        ],
                    }),
                    mkDetail({
                        title: 'RRB Station Master',
                        overview:
                            'Station Master, officially Assistant Station Master, controls train movement, signalling and safety at a station. It is the most competitive Level 6 post in the NTPC graduate category.',
                        eligibility: [
                            'Age: 18 to 33 years.',
                            'Education: Bachelor degree in any discipline.',
                            'Medical standard A2 with normal colour vision and hearing.',
                        ],
                        pattern: [
                            ['CBT 1', 'Screening test', '100 questions / 90 min'],
                            ['CBT 2', 'Merit deciding objective test', '120 questions / 90 min'],
                            ['Stage 3', 'Computer Based Aptitude Test', '42 marks minimum required'],
                            ['Stage 4', 'Document verification and A2 medical', 'Qualifying'],
                        ],
                        syllabus: [
                            'Mathematics up to Class 12 arithmetic and algebra',
                            'General intelligence, reasoning and decision making',
                            'General awareness with emphasis on railways and current affairs',
                            'Aptitude battery: memory, concentration, perceptual speed, spatial ability',
                        ],
                        process: [
                            'Register once on the RRB portal and apply for the graduate level posts.',
                            'Give correct post preference order because allotment follows merit and preference.',
                            'Appear for CBT 1, CBT 2 and the aptitude test as scheduled.',
                            'Complete document verification with original certificates.',
                        ],
                        dates: [
                            ['Notification released', 'September'],
                            ['CBT 1', 'February'],
                            ['CBT 2', 'June'],
                            ['Aptitude test', 'August'],
                            ['Appointment letters', 'December'],
                        ],
                        salary: [
                            'Pay Level 6, basic pay INR 35,400 per month.',
                            'Gross salary about INR 55,000 including running and night duty allowance.',
                            'Railway quarters at the station, free passes and NPS pension.',
                        ],
                        resources: [
                            'Aptitude test mock batteries',
                            'Station working rules primer',
                            'Ten year CBT 2 solved papers',
                        ],
                    }),
                ],
            },
            {
                name: 'Technical & Level 1',
                posts: [
                    mkDetail({
                        title: 'RRB ALP (Assistant Loco Pilot)',
                        overview:
                            'Assistant Loco Pilots operate locomotives along with the loco pilot and are recruited from ITI and diploma holders in mechanical, electrical and automobile trades.',
                        eligibility: [
                            'Age: 18 to 30 years.',
                            'Education: Class 10 plus ITI in a notified trade, or three year diploma in engineering.',
                            'Medical standard A1: distant vision 6/6 with normal colour perception.',
                        ],
                        pattern: [
                            ['CBT 1', 'Common screening test', '75 questions / 60 min'],
                            ['CBT 2 Part A', 'Maths, Reasoning, General Science', '100 questions / 90 min'],
                            ['CBT 2 Part B', 'Trade specific questions', '75 questions / 60 min, qualifying'],
                            ['CBAT', 'Computer Based Aptitude Test', 'Merit component'],
                        ],
                        syllabus: [
                            'Mathematics, reasoning and general science up to Class 10',
                            'Basic electrical and mechanical engineering fundamentals',
                            'Trade syllabus as per NCVT ITI curriculum',
                            'Aptitude: intelligence, personality, memory, concentration tests',
                        ],
                        process: [
                            'Apply against the centralised ALP and technician notification.',
                            'Choose trade and zone preferences.',
                            'Upload ITI or diploma certificate and appear for all stages.',
                            'Clear A1 medical before appointment.',
                        ],
                        dates: [
                            ['Notification released', 'January'],
                            ['CBT 1', 'May'],
                            ['CBT 2', 'August'],
                            ['CBAT', 'October'],
                            ['Result', 'December'],
                        ],
                        salary: [
                            'Pay Level 2, basic pay INR 19,900 rising quickly with running allowance.',
                            'Gross salary about INR 35,000 to INR 40,000 with kilometre allowance.',
                            'Promotion to Loco Pilot Goods, Passenger, Mail and Express.',
                        ],
                        resources: [
                            'Trade wise ALP question banks',
                            'CBAT practice sets',
                            'A1 medical standards guide',
                        ],
                    }),
                    mkDetail({
                        title: 'RRB Group D (Level 1)',
                        overview:
                            'Group D covers track maintainer, pointsman, assistant in various departments and helper posts. It is the largest railway recruitment drive by vacancy count.',
                        eligibility: [
                            'Age: 18 to 33 years.',
                            'Education: Class 10 pass or ITI or National Apprenticeship Certificate.',
                            'Physical efficiency: lifting and carrying 35 kg for 100 metres in 2 minutes (male).',
                        ],
                        pattern: [
                            ['CBT', 'Single computer based test', '100 questions / 90 min'],
                            ['PET', 'Physical Efficiency Test', 'Qualifying'],
                            ['Stage 3', 'Document verification', 'Qualifying'],
                            ['Stage 4', 'Medical examination', 'Qualifying'],
                        ],
                        syllabus: [
                            'General science: physics, chemistry and life science of Class 10',
                            'Mathematics: arithmetic, algebra, geometry basics',
                            'General intelligence and reasoning',
                            'General awareness and current affairs',
                        ],
                        process: [
                            'Apply online during the notified window on the RRB regional site.',
                            'Fee of INR 500 for general with INR 400 refunded after appearing.',
                            'Download city intimation slip and admit card.',
                            'Appear for CBT, then PET as called.',
                        ],
                        dates: [
                            ['Notification released', 'December'],
                            ['Application closes', 'January'],
                            ['CBT', 'April to June (multi shift)'],
                            ['PET', 'September'],
                        ],
                        salary: [
                            'Pay Level 1, basic pay INR 18,000 per month.',
                            'Gross salary about INR 26,000 to INR 30,000.',
                            'Free passes, medical care, uniform and departmental promotion after three years.',
                        ],
                        resources: [
                            'Group D previous year shift papers',
                            'PET training plan',
                            'Class 10 science revision notes',
                        ],
                    }),
                ],
            },
        ],
    },
    {
        slug: 'ssc',
        name: 'SSC',
        tagline: 'Staff Selection Commission exams for central government group B and C posts.',
        groups: [
            {
                name: 'Graduate Level',
                posts: [
                    mkDetail({
                        title: 'SSC CGL',
                        overview:
                            'The Combined Graduate Level examination fills posts such as Assistant Section Officer, Inspector of Income Tax, Excise Inspector, Auditor and Accountant across central ministries and departments.',
                        eligibility: [
                            'Age: 18 to 32 years depending on the post.',
                            'Education: Bachelor degree; CA, CS or degree with statistics for JSO posts.',
                            'Indian citizenship and specific physical standards for inspector posts.',
                        ],
                        pattern: [
                            ['Tier 1', 'Objective: Reasoning, GK, Maths, English', '200 marks / 60 min'],
                            ['Tier 2 Paper 1', 'Maths, English, Reasoning, GK, Computer, DEST', '450 marks'],
                            ['Tier 2 Paper 2', 'Statistics (JSO only)', '200 marks'],
                            ['Tier 2 Paper 3', 'General Studies Finance and Economics (AAO only)', '200 marks'],
                        ],
                        syllabus: [
                            'Quantitative aptitude: arithmetic, algebra, geometry, trigonometry, data interpretation',
                            'English language: grammar, vocabulary, comprehension, cloze test',
                            'General intelligence and reasoning: verbal and non verbal',
                            'General awareness: history, geography, polity, economics, science, current affairs',
                            'Computer proficiency and data entry speed test',
                        ],
                        process: [
                            'Complete SSC one-time registration and keep the credentials safe.',
                            'Apply for CGL with post preferences and examination centre choices.',
                            'Pay fee of INR 100 (exempt for women, SC, ST and PwBD).',
                            'Use the correction window if any detail was entered wrongly.',
                        ],
                        dates: [
                            ['Notification released', 'April'],
                            ['Last date to apply', 'May'],
                            ['Tier 1 examination', 'July'],
                            ['Tier 2 examination', 'October'],
                            ['Final result', 'February next year'],
                        ],
                        salary: [
                            'Group B posts: Pay Level 7, INR 44,900 to INR 1,42,400 per month.',
                            'Group C posts: Pay Level 4 to 6, INR 25,500 to INR 1,12,400 per month.',
                            'Gross salary INR 45,000 to INR 80,000 depending on post and city.',
                            'Central government health scheme, LTC and NPS benefits.',
                        ],
                        resources: [
                            'CGL Tier 1 and Tier 2 previous papers (2016 onward)',
                            'Post preference and job profile comparison',
                            'Sectional mock test series',
                        ],
                    }),
                    mkDetail({
                        title: 'SSC CPO',
                        overview:
                            'The Central Police Organisation examination recruits Sub-Inspectors in Delhi Police and in the Central Armed Police Forces. It combines a written test with strict physical and medical standards.',
                        eligibility: [
                            'Age: 20 to 25 years.',
                            'Education: Bachelor degree; valid driving licence for Delhi Police male candidates.',
                            'Height: 170 cm male, 157 cm female with category relaxation.',
                        ],
                        pattern: [
                            ['Paper 1', 'Reasoning, GK, Maths, English', '200 marks / 2 hours'],
                            ['PET and PST', 'Race, long jump, high jump, measurement', 'Qualifying'],
                            ['Paper 2', 'English language and comprehension', '200 marks / 2 hours'],
                            ['Medical', 'Detailed medical examination', 'Qualifying'],
                        ],
                        syllabus: [
                            'General intelligence and reasoning with heavy non verbal weight',
                            'General knowledge and current affairs',
                            'Quantitative aptitude of Class 10 level',
                            'Advanced English grammar, comprehension and vocabulary for Paper 2',
                        ],
                        process: [
                            'Apply through the SSC portal using one-time registration.',
                            'Select Delhi Police or CAPF preference and exam city.',
                            'Appear for Paper 1, then PET/PST, then Paper 2.',
                            'Complete medical and document verification.',
                        ],
                        dates: [
                            ['Notification released', 'March'],
                            ['Paper 1', 'June'],
                            ['PET and PST', 'September'],
                            ['Paper 2', 'December'],
                        ],
                        salary: [
                            'Pay Level 6, INR 35,400 to INR 1,12,400 per month.',
                            'Gross salary about INR 65,000 in Delhi with allowances.',
                            'Ration money, risk allowance and free accommodation in CAPF.',
                        ],
                        resources: [
                            'CPO Paper 2 English practice sets',
                            'Physical standards and race timing chart',
                            'Previous year CPO papers',
                        ],
                    }),
                ],
            },
            {
                name: 'Higher Secondary Level',
                posts: [
                    mkDetail({
                        title: 'SSC CHSL',
                        overview:
                            'The Combined Higher Secondary Level examination recruits Lower Division Clerk, Junior Secretariat Assistant, Postal Assistant and Data Entry Operator in central departments.',
                        eligibility: [
                            'Age: 18 to 27 years.',
                            'Education: Class 12 pass; science stream with Mathematics for DEO in some departments.',
                            'Typing speed of 35 wpm English or 30 wpm Hindi.',
                        ],
                        pattern: [
                            ['Tier 1', 'Objective test', '200 marks / 60 min'],
                            ['Tier 2 Section 1', 'Maths and Reasoning', '180 marks'],
                            ['Tier 2 Section 2', 'English and General Awareness', '180 marks'],
                            ['Tier 2 Section 3', 'Skill test or typing test', 'Qualifying'],
                        ],
                        syllabus: [
                            'Quantitative aptitude up to Class 10 standard',
                            'English language grammar and comprehension',
                            'General intelligence and reasoning',
                            'General awareness and computer proficiency module',
                        ],
                        process: [
                            'Apply via SSC one-time registration during the notified window.',
                            'Choose post preference: LDC, JSA, PA/SA or DEO.',
                            'Appear for Tier 1 and shortlisted candidates take Tier 2.',
                            'Complete typing or skill test and document verification.',
                        ],
                        dates: [
                            ['Notification released', 'May'],
                            ['Tier 1 examination', 'July'],
                            ['Tier 2 examination', 'November'],
                            ['Final result', 'March next year'],
                        ],
                        salary: [
                            'LDC and JSA: Pay Level 2, INR 19,900 to INR 63,200 per month.',
                            'Postal Assistant and DEO: Pay Level 4, INR 25,500 to INR 81,100.',
                            'Gross salary INR 30,000 to INR 42,000 by city class.',
                        ],
                        resources: [
                            'CHSL previous year papers',
                            'Typing practice material in Hindi and English',
                            'Post wise job profile notes',
                        ],
                    }),
                    mkDetail({
                        title: 'SSC MTS and Havaldar',
                        overview:
                            'Multi Tasking Staff are general duty non-technical group C employees in central government offices, while Havaldar posts are in CBIC and CBN with additional physical requirements.',
                        eligibility: [
                            'Age: 18 to 25 years for most posts, 18 to 27 for Havaldar.',
                            'Education: Class 10 pass.',
                            'Havaldar: physical efficiency test with walking and cycling standards.',
                        ],
                        pattern: [
                            ['Session 1', 'Maths and Reasoning', '135 marks / 45 min'],
                            ['Session 2', 'General Awareness and English', '150 marks / 45 min'],
                            ['PET and PST', 'Havaldar posts only', 'Qualifying'],
                            ['Stage 4', 'Document verification', 'Qualifying'],
                        ],
                        syllabus: [
                            'Numerical aptitude and problem solving',
                            'Reasoning and problem solving ability',
                            'General awareness of environment and society',
                            'English language basics',
                        ],
                        process: [
                            'Register on SSC portal and apply for MTS or Havaldar.',
                            'Fill preference of department and exam city.',
                            'Appear for both sessions of the computer based test.',
                            'Complete verification and joining formalities.',
                        ],
                        dates: [
                            ['Notification released', 'June'],
                            ['Application closes', 'July'],
                            ['Computer based test', 'September to October'],
                            ['PET for Havaldar', 'January'],
                        ],
                        salary: [
                            'Pay Level 1, INR 18,000 to INR 56,900 per month.',
                            'Gross salary about INR 26,000 to INR 31,000.',
                            'Departmental promotion to LDC after qualifying service.',
                        ],
                        resources: [
                            'MTS previous year papers',
                            'Basic maths shortcut notes',
                            'Havaldar PET standards',
                        ],
                    }),
                ],
            },
        ],
    },
    {
        slug: 'upsc',
        name: 'UPSC',
        tagline: 'Union Public Service Commission examinations for all India services.',
        groups: [
            {
                name: 'Civil Services',
                posts: [
                    mkDetail({
                        title: 'IAS - Civil Services Exam',
                        overview:
                            'The Civil Services Examination selects officers for the IAS, IPS, IFS and around twenty other central services. It runs in three stages across almost a full year and is the most competitive examination in India.',
                        eligibility: [
                            'Age: 21 to 32 years for general category, with relaxation up to 37 for SC/ST.',
                            'Education: Bachelor degree in any discipline; final year students may apply for prelims.',
                            'Attempts: 6 for general, 9 for OBC, unlimited till age limit for SC/ST.',
                        ],
                        pattern: [
                            ['Prelims Paper 1', 'General Studies', '200 marks / 2 hours'],
                            ['Prelims Paper 2', 'CSAT aptitude', '200 marks, 33 percent qualifying'],
                            ['Mains', 'Nine descriptive papers including optional subject', '1750 marks counted'],
                            ['Interview', 'Personality test', '275 marks'],
                        ],
                        syllabus: [
                            'History, geography, polity, economy, environment and science for prelims',
                            'Essay paper on two themes of 125 marks each',
                            'General Studies 1 to 4: heritage, governance, economy, ethics',
                            'One optional subject with two papers of 250 marks each',
                            'Compulsory Indian language and English qualifying papers',
                        ],
                        process: [
                            'Register on the UPSC online platform and complete part 1 and part 2 forms.',
                            'Choose optional subject, language medium and exam centres.',
                            'Pay fee of INR 100 for prelims; women and reserved candidates are exempt.',
                            'Fill the detailed application form after clearing prelims.',
                        ],
                        dates: [
                            ['Notification released', 'February'],
                            ['Prelims', 'Late May or June'],
                            ['Mains', 'September'],
                            ['Interview', 'January to April'],
                            ['Final result', 'April or May'],
                        ],
                        salary: [
                            'Entry pay Level 10, basic pay INR 56,100 per month.',
                            'Gross salary about INR 85,000 to INR 1,00,000 including allowances.',
                            'Government bungalow, official vehicle, staff and study leave options.',
                            'Progression to Level 17 and 18 as Secretary and Cabinet Secretary.',
                        ],
                        resources: [
                            'Prelims and mains previous year papers (last 15 years)',
                            'Optional subject syllabus and booklist',
                            'Topper answer copies and mains answer writing practice',
                        ],
                    }),
                    mkDetail({
                        title: 'IFS - Indian Forest Service',
                        overview:
                            'The Indian Forest Service Examination selects officers responsible for forest, wildlife and environment management. Candidates first clear the Civil Services Prelims and then a separate mains examination.',
                        eligibility: [
                            'Age: 21 to 32 years with standard relaxation.',
                            'Education: Bachelor degree with at least one science subject, engineering, agriculture or forestry.',
                            'Physical standards including walking and vision requirements.',
                        ],
                        pattern: [
                            ['Prelims', 'Civil Services Preliminary Exam', 'Screening'],
                            ['Mains', 'Six papers including two optional subjects', '1400 marks'],
                            ['Interview', 'Personality test', '300 marks'],
                            ['Medical', 'Special physical and medical test', 'Qualifying'],
                        ],
                        syllabus: [
                            'General English and General Knowledge papers of 300 marks each',
                            'Two optional subjects from forestry, botany, zoology, agriculture, engineering and others',
                            'Environment, ecology and biodiversity in depth',
                            'Wildlife management and forest policy',
                        ],
                        process: [
                            'Apply for the Civil Services Preliminary Examination and select IFS option.',
                            'Fill the detailed application form for mains after qualifying.',
                            'Appear for mains and interview at Dholpur House, New Delhi.',
                            'Clear the special medical examination before training at IGNFA.',
                        ],
                        dates: [
                            ['Notification released', 'February'],
                            ['Prelims', 'May or June'],
                            ['Mains', 'November'],
                            ['Interview', 'February to March'],
                        ],
                        salary: [
                            'Pay Level 10, basic pay INR 56,100 per month.',
                            'Gross salary about INR 85,000 with field and hardship allowance.',
                            'Forest rest house accommodation, vehicle and orderly support.',
                        ],
                        resources: [
                            'IFS mains previous papers by optional subject',
                            'Forestry and ecology standard booklist',
                            'Physical and medical standards notification extract',
                        ],
                    }),
                ],
            },
            {
                name: 'Defence & Engineering',
                posts: [
                    mkDetail({
                        title: 'UPSC Engineering Services',
                        overview:
                            'The Engineering Services Examination recruits group A engineers in civil, mechanical, electrical and electronics streams for railways, CPWD, CWC, border roads and other central organisations.',
                        eligibility: [
                            'Age: 21 to 30 years.',
                            'Education: Engineering degree in the relevant branch.',
                            'Medical fitness as per the standards of the allotted service.',
                        ],
                        pattern: [
                            ['Prelims Paper 1', 'General Studies and Engineering Aptitude', '200 marks'],
                            ['Prelims Paper 2', 'Branch specific objective', '300 marks'],
                            ['Mains Paper 1 and 2', 'Descriptive branch papers', '300 marks each'],
                            ['Interview', 'Personality test', '200 marks'],
                        ],
                        syllabus: [
                            'Engineering mathematics and materials science',
                            'Branch core subjects at degree level',
                            'Standards, quality practices, safety and project management',
                            'Ethics, values and current issues in engineering',
                        ],
                        process: [
                            'Apply on the UPSC portal during the notified window.',
                            'Select branch and service preference carefully.',
                            'Appear for prelims, then mains, then interview.',
                            'Complete medical examination before allotment.',
                        ],
                        dates: [
                            ['Notification released', 'September'],
                            ['Prelims', 'February'],
                            ['Mains', 'June'],
                            ['Interview', 'October to November'],
                        ],
                        salary: [
                            'Pay Level 10, basic pay INR 56,100 per month.',
                            'Gross salary about INR 90,000 with technical and site allowances.',
                            'Departmental quarters, deputation and higher study opportunities.',
                        ],
                        resources: [
                            'ESE previous year papers by branch',
                            'Standard textbook list for each stream',
                            'Descriptive answer writing samples',
                        ],
                    }),
                    mkDetail({
                        title: 'UPSC NDA and CDS',
                        overview:
                            'The National Defence Academy examination is for Class 12 candidates seeking officer entry into the Army, Navy and Air Force, while the Combined Defence Services examination is for graduates.',
                        eligibility: [
                            'NDA: unmarried candidates aged 16.5 to 19.5 years, Class 12 with Physics and Maths for Navy and Air Force.',
                            'CDS: graduates aged 20 to 25 years; engineering degree for technical entry.',
                            'Strict SSB medical and physical standards.',
                        ],
                        pattern: [
                            ['NDA Paper 1', 'Mathematics', '300 marks / 2.5 hours'],
                            ['NDA Paper 2', 'General Ability Test', '600 marks / 2.5 hours'],
                            ['CDS', 'English, GK, Elementary Maths', '100 marks each'],
                            ['SSB Interview', 'Five day selection board', '900 marks (NDA)'],
                        ],
                        syllabus: [
                            'Mathematics: algebra, trigonometry, calculus, vectors, statistics',
                            'English grammar, vocabulary and comprehension',
                            'General Knowledge: physics, chemistry, general science, history, geography, current events',
                            'SSB: screening, psychological tests, group tasks, personal interview, conference',
                        ],
                        process: [
                            'Apply on the UPSC website for NDA or CDS as eligible.',
                            'Choose service preference: Army, Navy, Air Force or officer training academy.',
                            'Appear for the written exam and then the SSB at the allotted centre.',
                            'Complete medical board and wait for the merit list and joining letter.',
                        ],
                        dates: [
                            ['NDA 1 notification', 'December'],
                            ['NDA 1 examination', 'April'],
                            ['CDS 1 notification', 'December'],
                            ['CDS 1 examination', 'April'],
                            ['SSB interviews', 'Rolling through the year'],
                        ],
                        salary: [
                            'Stipend of INR 56,100 per month during the final year of training.',
                            'Lieutenant equivalent: Pay Level 10 with Military Service Pay of INR 15,500.',
                            'Free rations, canteen facility, subsidised accommodation and ex-servicemen benefits.',
                        ],
                        resources: [
                            'NDA and CDS previous year papers',
                            'SSB interview preparation guide',
                            'Physical fitness and medical standards checklist',
                        ],
                    }),
                ],
            },
        ],
    },
];

// Reference to the complete categories array (built as data loads)
let categories = [...initialCategories];

/**
 * Lazily load and merge expanded categories and additions
 * This allows code-splitting where governmentData is only loaded when needed
 * @returns {Promise<Array>} - Complete categories array
 */
async function loadAndMergeExpandedData() {
    if (loadedData.expanded && loadedData.additions) {
        return categories;
    }
    
    try {
        const governmentData = await import('./governmentData');
        
        // Load and merge expanded categories (if not already loaded)
        if (!loadedData.expanded && governmentData.expandedCategories) {
            categories.push(...governmentData.expandedCategories);
            loadedData.expanded = true;
        }
        
        // Load and merge category additions (if not already loaded)
        if (!loadedData.additions && governmentData.categoryAdditions) {
            Object.entries(governmentData.categoryAdditions).forEach(([slug, posts]) => {
                const category = categories.find((item) => item.slug === slug);
                if (category) {
                    if (!Array.isArray(posts) || posts.length === 0) return;
                    const existingTitles = new Set(category.groups.flatMap((group) => group.posts.map((post) => post.title)));
                    const uniquePosts = posts.filter((post) => !existingTitles.has(post.title));
                    if (uniquePosts.length === 0) return;
                    category.groups = slug === 'railway'
                        ? posts
                        : [...category.groups, { name: 'Additional official routes', posts: uniquePosts }];
                }
            });
            loadedData.additions = true;
        }
    } catch (error) {
        console.error('Failed to load expanded category data:', error);
    }
    
    return categories;
}

/**
 * Ensures categories are fully loaded including expanded categories
 * Safe to call multiple times - subsequent calls return cached result
 * @returns {Promise<Array>} - Complete categories array
 */
export async function ensureCategoriesLoaded() {
    return loadAndMergeExpandedData();
}

/**
 * Get the current categories array
 * Note: Main categories (police, railway, ssc, upsc) are always available
 * Expanded categories are available after ensureCategoriesLoaded() is called
 * @returns {Array} - Current categories array (may not include all expanded categories)
 */
export function getCategories() {
    return categories;
}

export const navCategories = [
    'Railway',
    'Police',
    'UPSC',
    'SSC',
    'Banking',
    'Defence',
    'Teaching',
    'Postal',
    'PSU',
    'DRDO',
    'ISRO',
    'Judiciary',
    'State Government',
    'Technical Jobs',
    'Medical Jobs',
    'Clerk Jobs',
    'Other Government Jobs',
];

export const slugify = (s) =>
    s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

/**
 * Get a category by slug
 * Main categories return immediately, expanded categories may not be available until loaded
 * @param {string} slug - Category slug
 * @returns {Object|undefined} - Category object or undefined if not found
 */
export const getCategory = (slug) => {
    return categories.find((c) => c.slug === slug);
};

export const getPosts = (cat) => cat ? cat.groups.flatMap((g) => g.posts) : [];

export const findPost = (cat, postSlug) =>
    getPosts(cat).find((p) => slugify(p.title) === postSlug);

// Export the categories reference (will be updated as data loads)
export { categories };
