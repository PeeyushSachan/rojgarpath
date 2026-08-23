const evergreenPost = ({
    title,
    exam,
    organization,
    overview,
    qualifications,
    selection,
    subjects,
    profile,
    pay,
    source,
}) => ({
    title,
    overview,
    eligibility: qualifications,
    pattern: [['Selection', selection, 'See the current official notification']],
    syllabus: subjects,
    process: [
        'Read the current notification on the recruiting authority website before applying.',
        'Complete the authority\'s registration and application form using certificates that match the required details.',
        'Attend only the stages listed in the current notification and retain the application and admit-card records.',
        'Complete document verification and any applicable medical or skill assessment after shortlisting.',
    ],
    dates: [['Recruitment cycle', 'Varies; check the official authority calendar and notification']],
    salary: [pay],
    resources: [
        `Exam: ${exam}`,
        `Organization: ${organization}`,
        `Job profile: ${profile}`,
        `Official source: ${source}`,
    ],
    metadata: {
        exam,
        organization,
        recruitmentAuthority: organization,
        jobType: 'Varies by notification',
        location: 'India or the notified cadre/region',
        jobProfile: profile,
        careerGrowth: 'Promotion, transfer and service conditions follow the applicable service rules and recruitment notification.',
        documents: 'Identity proof, photographs, educational certificates, category certificates where applicable, and any documents listed in the notification.',
        currentRecruitment: 'No cycle-specific vacancy, date or fee is stated here. Check the official source for current recruitment information.',
        source,
    },
});

export const organizations = [
    { slug: 'ssc', name: 'Staff Selection Commission', website: 'https://ssc.gov.in/' },
    { slug: 'upsc', name: 'Union Public Service Commission', website: 'https://upsc.gov.in/' },
    { slug: 'rrb', name: 'Railway Recruitment Boards', website: 'https://indianrailways.gov.in/' },
    { slug: 'ibps', name: 'Institute of Banking Personnel Selection', website: 'https://www.ibps.in/' },
    { slug: 'rbi', name: 'Reserve Bank of India', website: 'https://www.rbi.org.in/' },
    { slug: 'india-post', name: 'India Post', website: 'https://www.indiapost.gov.in/' },
    { slug: 'drdo', name: 'Defence Research and Development Organisation', website: 'https://www.drdo.gov.in/' },
    { slug: 'isro', name: 'Indian Space Research Organisation', website: 'https://www.isro.gov.in/' },
    { slug: 'kvs', name: 'Kendriya Vidyalaya Sangathan', website: 'https://kvsangathan.nic.in/' },
];

export const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
];

export const recruitments = [
    { slug: 'ssc-current', exam: 'SSC examinations', authority: 'SSC', status: 'Check live notices and calendar' },
    { slug: 'upsc-current', exam: 'UPSC examinations', authority: 'UPSC', status: 'Check live notices and calendar' },
    { slug: 'ibps-current', exam: 'IBPS Common Recruitment Process', authority: 'IBPS', status: 'Check current CRP notices' },
];

const banking = [
    evergreenPost({
        title: 'IBPS PO / Management Trainee', exam: 'IBPS CRP PO/MT', organization: 'IBPS and participating public-sector banks',
        overview: 'IBPS conducts a common recruitment process for Probationary Officers and Management Trainees in participating banks. The participating-bank list, eligibility, pattern and calendar belong to the applicable CRP notification.',
        qualifications: ['Typical route: a graduation degree from a recognised university. Exact age, nationality, reservation and computer or language conditions must be checked in the current CRP notification.', 'This is public-sector bank recruitment through participating institutions, not a single central-government cadre.'],
        selection: 'Preliminary examination, main examination and interview or other stages specified in the CRP notification.',
        subjects: ['Reasoning and computer aptitude', 'English language', 'Quantitative aptitude or data analysis', 'General, banking and economic awareness', 'Descriptive English where prescribed'],
        profile: 'Branch operations, customer service, credit and account administration, with responsibilities expanding after training and posting.',
        pay: 'Pay and allowances are governed by the participating bank and the applicable bipartite settlement or service rules; do not treat a generic in-hand figure as universal.', source: 'https://www.ibps.in/index.php/management-trainees/'
    }),
    evergreenPost({
        title: 'IBPS Customer Service Associate (Clerk)', exam: 'IBPS CRP Customer Service Associates', organization: 'IBPS and participating public-sector banks',
        overview: 'The IBPS clerical recruitment process is used by participating banks for customer-facing and clerical operations. The current official notification determines the participating banks, language requirements and selection stages.',
        qualifications: ['Typical route: graduation degree and computer literacy requirements stated in the CRP notification.', 'State or Union Territory language requirements can apply according to the notified vacancies.'],
        selection: 'Usually a preliminary and main online examination; the current CRP notification controls the final process.',
        subjects: ['English language', 'Numerical ability', 'Reasoning ability', 'General and financial awareness', 'Computer aptitude where prescribed'],
        profile: 'Customer accounts, deposits, payments, records and routine branch operations under bank procedures.',
        pay: 'Salary, allowances and progression follow the participating bank service rules and the current settlement; verify before publishing a cycle-specific figure.', source: 'https://www.ibps.in/index.php/clerical-cadre/'
    }),
    evergreenPost({
        title: 'RBI Grade B Officer', exam: 'RBI Grade B recruitment', organization: 'Reserve Bank of India',
        overview: 'RBI Grade B officers work in the central bank across general, economic and related specialist streams. Stream-specific education and examination rules are published by RBI for each recruitment cycle.',
        qualifications: ['Eligibility differs by stream, including General, DEPR and DSIM. The relevant RBI notification is the controlling source for degree, marks and age requirements.', 'Do not apply General-stream conditions to specialist streams.'],
        selection: 'Phase I, Phase II and interview for the stream and cycle where prescribed by RBI.',
        subjects: ['Economic and social issues', 'Finance and management', 'Reasoning, English and quantitative aptitude', 'Stream-specific economics or statistics for specialist posts'],
        profile: 'Financial regulation, economic analysis, supervision, currency and banking-system operations according to the allotted department.',
        pay: 'RBI publishes the pay scale and allowances in each Grade B advertisement; use that notification rather than an unofficial in-hand estimate.', source: 'https://www.rbi.org.in/'
    }),
];

const defence = [
    evergreenPost({
        title: 'NDA and Naval Academy Officer Entry', exam: 'UPSC NDA and NA Examination', organization: 'UPSC and the Armed Forces',
        overview: 'The NDA and NA examination is an officer-entry route for eligible candidates seeking training with the Army, Navy or Air Force wings. Service, age, education and physical standards are notification-specific.',
        qualifications: ['The current UPSC notice controls age, marital status and educational requirements.', 'Physics and Mathematics requirements apply to the Naval and Air Force wings as specified in the notice; Army-wing conditions differ.', 'Candidates must satisfy the armed-forces medical and physical standards.'],
        selection: 'Written examination followed by Services Selection Board assessment and medical examination.',
        subjects: ['Mathematics', 'General Ability Test: English, physics, chemistry, general science, history, geography and current events', 'SSB assessment: intelligence, personality, group and interview tasks'],
        profile: 'Officer training followed by commissioned service in the allotted defence wing, subject to merit, medical fitness and service requirements.',
            pay: 'Training stipend and commissioned-officer pay are governed by the current UPSC notice and defence pay rules; verify the applicable entry and allowances.', source: 'https://upsc.gov.in/'
    }),
    evergreenPost({
        title: 'AFCAT Flying and Ground Duty Officer', exam: 'Air Force Common Admission Test', organization: 'Indian Air Force',
        overview: 'AFCAT is an Indian Air Force officer-entry examination with flying and ground-duty branches. Branch, age, degree, subject and medical requirements vary by entry.',
        qualifications: ['Branch-specific graduation or engineering requirements apply.', 'The current AFCAT advertisement controls age, academic marks, gender, medical and other conditions.', 'Flying branch candidates face additional aviation medical standards.'],
        selection: 'AFCAT written examination, Air Force Selection Board assessment and medical examination for shortlisted candidates.',
        subjects: ['General awareness', 'Verbal ability in English', 'Numerical ability', 'Reasoning and military aptitude', 'Branch-specific requirements where prescribed'],
        profile: 'Leadership and operational, engineering, administrative, logistics, accounts or education responsibilities according to branch.',
        pay: 'Rank-based defence pay, Military Service Pay and allowances are governed by current Air Force and government rules.', source: 'https://careerindianairforce.cdac.in/'
    }),
    evergreenPost({
        title: 'CAPF Assistant Commandant', exam: 'UPSC Central Armed Police Forces (ACs) Examination', organization: 'UPSC and CAPF organisations',
        overview: 'The CAPF AC examination recruits Group A officers for BSF, CRPF, CISF, ITBP and SSB. Force allocation and standards are determined through the annual notification.',
        qualifications: ['The current UPSC notice controls degree, age, nationality and relaxation conditions.', 'Physical standards, physical efficiency tests and medical requirements must be read from the same notice; they are not interchangeable with military standards.'],
        selection: 'Written papers, physical standards and efficiency tests, medical examination and interview or personality test as notified.',
        subjects: ['General ability and intelligence', 'General studies, essay and comprehension', 'Current affairs, polity, history, geography, economy and science'],
        profile: 'Command, administration, training and operational leadership in the allotted CAPF.',
            pay: 'Assistant Commandant entry pay and allowances follow the central pay rules and current UPSC notification.', source: 'https://upsc.gov.in/'
    }),
];

const teaching = [
    evergreenPost({
        title: 'CTET Paper I and Paper II', exam: 'Central Teacher Eligibility Test', organization: 'Central Board of Secondary Education',
        overview: 'CTET is a teacher-eligibility test for the classes and schools covered by its rules. Passing CTET is an eligibility condition and does not itself guarantee appointment.',
        qualifications: ['Paper I and Paper II have different teacher-education and subject requirements.', 'The current CTET bulletin controls recognised qualifications, reservation and validity rules.', 'Recruiting schools may impose additional conditions.'],
        selection: 'Eligibility test conducted through the examination pattern in the current CTET information bulletin.',
        subjects: ['Child development and pedagogy', 'Language I and Language II', 'Mathematics and environmental studies for Paper I', 'Mathematics and science or social studies for Paper II'],
        profile: 'CTET-qualified candidates may apply to recruiting schools when the relevant vacancy accepts CTET and the candidate meets all other conditions.',
        pay: 'CTET does not prescribe a salary; pay belongs to the appointing school or government recruitment rules.', source: 'https://ctet.nic.in/'
    }),
    evergreenPost({
        title: 'KVS Teacher Recruitment', exam: 'Kendriya Vidyalaya recruitment', organization: 'Kendriya Vidyalaya Sangathan',
        overview: 'KVS recruits teaching and non-teaching staff through post-specific advertisements. PRT, TGT and PGT qualifications, subjects, age and selection stages must be read separately.',
        qualifications: ['Post, subject, teacher-education qualification and eligibility-test requirements vary by advertised role.', 'A CTET requirement may apply to some teaching posts; verify the advertisement.', 'Do not treat one KVS recruitment cycle as a permanent rule.'],
        selection: 'Recruitment examination and any interview, skill test or document verification prescribed for the post.',
        subjects: ['Child development and pedagogy where applicable', 'Language proficiency', 'Subject knowledge', 'General awareness, reasoning and computer literacy where prescribed'],
        profile: 'Classroom teaching, assessment, lesson planning and school duties in the KVS system.',
        pay: 'Pay level is post-specific and must be taken from the current KVS advertisement.', source: 'https://kvsangathan.nic.in/recruitment/'
    }),
];

const postal = [
    evergreenPost({
        title: 'India Post Gramin Dak Sevak', exam: 'India Post GDS recruitment', organization: 'India Post',
        overview: 'Gramin Dak Sevak recruitment is a rural postal engagement with duties that can include branch-post-office operations, mail delivery and customer services. The current cycle determines selection, local language and other conditions.',
        qualifications: ['The official GDS notification controls secondary education, local-language, age, computer and other requirements.', 'Selection method and engagement conditions are distinct from regular departmental posts.'],
        selection: 'The current India Post GDS notification specifies the merit or other selection method and verification process.',
        subjects: ['No general competitive syllabus is stated here; follow the current GDS notification and portal instructions.'],
        profile: 'Mail delivery, postal transactions and branch-office support within the notified rural area.',
        pay: 'GDS TRCA and allowances are governed by India Post engagement rules and the current notification, not the regular central pay matrix.', source: 'https://indiapostgdsonline.gov.in/'
    }),
    evergreenPost({
        title: 'Postal Assistant / Sorting Assistant', exam: 'India Post Postal Assistant and Sorting Assistant recruitment', organization: 'India Post',
        overview: 'Postal Assistants and Sorting Assistants perform counter, records, mail-processing and delivery-network support in postal divisions and sorting offices. Recruitment route and qualification depend on the advertisement.',
        qualifications: ['Read the current India Post or SSC notice for educational, computer, language and age requirements.', 'Departmental and open-market recruitment can have different conditions.'],
        selection: 'The recruiting notification specifies the written, skill, document-verification and appointment stages.',
        subjects: ['General awareness', 'Reasoning and numerical ability', 'English and language skills', 'Computer knowledge where prescribed'],
        profile: 'Customer-facing postal work, mail sorting, data entry, records and office administration.',
        pay: 'Pay level and allowances must be taken from the current recruitment authority notification.', source: 'https://www.indiapost.gov.in/'
    }),
];

const science = [
    evergreenPost({
        title: 'DRDO Scientist B', exam: 'DRDO Scientist recruitment', organization: 'Recruitment and Assessment Centre, DRDO',
        overview: 'DRDO Scientist B roles support research, design, testing and technology development in notified disciplines. RAC publishes discipline-specific advertisements and qualification requirements.',
        qualifications: ['Engineering, science or other qualifications are discipline-specific.', 'The current RAC advertisement controls marks, qualifying examination, age, GATE or written-test conditions and experience requirements.'],
        selection: 'Shortlisting and interview or written examination plus interview as specified by the RAC advertisement.',
        subjects: ['Discipline-specific engineering or science knowledge', 'Research methods and technical fundamentals where tested'],
        profile: 'Research, development, laboratory, testing and technical programme work in a DRDO laboratory or establishment.',
        pay: 'Pay level, allowances and probation follow the current RAC advertisement and central government service rules.', source: 'https://rac.gov.in/'
    }),
    evergreenPost({
        title: 'ISRO Scientist / Engineer SC', exam: 'ISRO Scientist / Engineer recruitment', organization: 'Indian Space Research Organisation',
        overview: 'ISRO Scientist / Engineer SC recruitment is discipline-specific and supports spacecraft, launch vehicle, applications and centre operations. Each advertisement identifies branches, qualifications and selection method.',
        qualifications: ['Relevant engineering degree and academic conditions are stated by discipline in the current ISRO advertisement.', 'Age, reservation and selection rules are recruitment-specific.'],
        selection: 'Written test and interview or the process specified in the applicable ISRO advertisement.',
        subjects: ['Core engineering subjects for the notified discipline', 'Technical aptitude and fundamentals where prescribed'],
        profile: 'Engineering analysis, design, integration, testing and mission-support work in the allotted ISRO centre.',
        pay: 'Pay and allowances are published in the applicable ISRO career advertisement.', source: 'https://www.isro.gov.in/Careers.html'
    }),
];

const office = [
    evergreenPost({
        title: 'Junior Assistant / Clerk', exam: 'Post-specific government clerical recruitment', organization: 'The recruiting department or commission named in the notification',
        overview: 'Junior Assistant and clerk roles support file work, records, correspondence, data entry, public dealing and routine office administration. The same title can have different rules across departments and states.',
        qualifications: ['Education, age, typing or computer skill requirements vary by recruiting authority.', 'The notification determines whether domicile, language, experience or a skill test applies.'],
        selection: 'Written examination and, where notified, typing or computer test, document verification and medical fitness.',
        subjects: ['Language and comprehension', 'Reasoning', 'Numerical ability', 'General awareness', 'Computer or typing skill where prescribed'],
        profile: 'Maintain records, process correspondence, enter data and support public-facing or departmental office work.',
        pay: 'Pay level and allowances are post- and department-specific; use the official advertisement.', source: 'https://ssc.gov.in/'
    }),
    evergreenPost({
        title: 'Government Junior Engineer', exam: 'SSC JE and other engineering recruitment', organization: 'SSC or the department named in the notification',
        overview: 'Junior Engineers supervise works, measurements, maintenance, estimates and technical execution in departments such as CPWD, CWC, MES or other notified organisations.',
        qualifications: ['A diploma or degree in the relevant engineering discipline is commonly required, but the accepted qualification and experience are notification-specific.', 'Civil, electrical and mechanical posts can have separate eligibility and syllabus.'],
        selection: 'Computer-based examination, technical paper and document verification as specified by the recruiting authority.',
        subjects: ['General intelligence and reasoning', 'General awareness', 'General engineering: civil, electrical or mechanical according to the post'],
        profile: 'Site supervision, quality checks, measurements, maintenance, estimates and contractor coordination.',
        pay: 'Pay level and department allowances follow the current SSC or department notification.', source: 'https://ssc.gov.in/'
    }),
];

const makeCategory = (slug, name, tagline, groupName, posts) => ({ slug, name, tagline, groups: [{ name: groupName, posts }] });

export const expandedCategories = [
    makeCategory('banking', 'Banking', 'Public-sector bank and government financial institution recruitment, kept separate by authority.', 'Banking and Finance', banking),
    makeCategory('defence', 'Defence', 'Armed-forces and central security entry routes with service-specific standards.', 'Officer and Security Entry', defence),
    makeCategory('teaching', 'Teaching', 'Teacher eligibility tests and school recruitment from the relevant education authorities.', 'Teacher Eligibility and Recruitment', teaching),
    makeCategory('postal', 'Postal', 'India Post recruitment and rural postal engagement information.', 'India Post', postal),
    makeCategory('drdo', 'DRDO', 'Research and technical recruitment published by DRDO and RAC.', 'Research and Technology', [science[0]]),
    makeCategory('isro', 'ISRO', 'Space research and engineering recruitment from official ISRO careers notices.', 'Space Research', [science[1]]),
    makeCategory('psu', 'PSU', 'Public-sector enterprise recruitment varies by organisation and is not assumed to be annual.', 'Public Sector Enterprises', [
        evergreenPost({ title: 'PSU Engineer through GATE', exam: 'Organisation-specific PSU recruitment', organization: 'The individual PSU named in the advertisement', overview: 'Many PSUs publish their own recruitment notices and some use GATE scores for engineering roles. Recruitment frequency, disciplines, score year and selection method vary by organisation.', qualifications: ['Relevant engineering degree and any GATE, age, marks or experience conditions in the PSU advertisement.', 'There is no universal PSU eligibility rule.'], selection: 'GATE shortlisting, interview or another process stated by the individual PSU.', subjects: ['Relevant engineering discipline', 'GATE syllabus only when the PSU explicitly uses that score'], profile: 'Engineering, operations, maintenance, projects or technical services in the recruiting enterprise.', pay: 'Pay and benefits are organisation-specific and must be verified from the PSU advertisement.', source: 'https://www.dpe.gov.in/' }),
    ]),
    makeCategory('judiciary', 'Judiciary', 'Court and judicial-service recruitment where state and court rules remain distinct.', 'Court and Judicial Services', [
        evergreenPost({ title: 'Civil Judge / Judicial Service', exam: 'State Judicial Service Examination', organization: 'The relevant State Public Service Commission or High Court', overview: 'Civil Judge recruitment is conducted under state judicial-service rules. Eligibility, local-language papers, experience, age and selection stages differ between states.', qualifications: ['A law degree and other conditions are commonly required, but the state notification controls every eligibility detail.', 'State domicile, language or bar-enrolment conditions may apply.'], selection: 'Preliminary examination, mains examination, interview and verification or medical stages as stated by the state authority.', subjects: ['Constitutional and civil law', 'Criminal law and procedure', 'Evidence, local laws and language papers', 'General knowledge and current affairs'], profile: 'Adjudication, case management, legal orders and court administration in the state judicial service.', pay: 'Pay and service conditions follow the state judicial-service rules and notification.', source: 'https://doj.gov.in/' }),
    ]),
    makeCategory('technical-jobs', 'Technical Jobs', 'Technical government opportunities across ITI, diploma, degree and science qualifications.', 'Engineering and Technical Posts', [office[1]]),
    makeCategory('medical-jobs', 'Medical Jobs', 'Healthcare recruitment must be read against the professional registration and department notification.', 'Healthcare Posts', [
        evergreenPost({ title: 'Nursing Officer', exam: 'AIIMS, ESIC and government hospital recruitment', organization: 'The hospital or health authority named in the notification', overview: 'Nursing Officer recruitment supports patient care in government hospitals and health institutions. Qualification, registration, experience and shift conditions vary by authority.', qualifications: ['Recognised nursing qualification and valid registration conditions are notification-specific.', 'Do not assume one AIIMS or ESIC advertisement applies to every hospital.'], selection: 'Computer-based examination, document verification and medical or fitness requirements as notified.', subjects: ['Nursing foundations', 'Medical-surgical nursing', 'Community health', 'Pharmacology and fundamentals of nursing', 'General awareness and aptitude where prescribed'], profile: 'Patient assessment, nursing care, medication support, records, infection control and team coordination.', pay: 'Pay level and allowances follow the recruiting hospital or authority advertisement.', source: 'https://www.aiimsexams.ac.in/' }),
    ]),
    makeCategory('clerk-jobs', 'Clerk Jobs', 'Reusable office-post guidance with authority-specific qualification and skill conditions.', 'Clerical and Office Posts', office),
    makeCategory('state-government', 'State Government', 'State recruitment is organised around each state commission, board, department and notification.', 'State-wise Authorities', [
        evergreenPost({ title: 'State Government Assistant / Clerk', exam: 'State commission or department recruitment', organization: 'The relevant State PSC, staff selection board or department', overview: 'State assistant and clerk recruitment covers office, revenue, education, police and departmental work. Rules differ by state and post, so this page is a guide to the structure rather than a universal eligibility claim.', qualifications: ['Education, age, language, domicile, typing and computer requirements are determined by the state notification.', 'Use the state authority source for the exact post and cycle.'], selection: 'Preliminary or single written examination, skill test, document verification and other stages where notified.', subjects: ['State general knowledge and current affairs', 'Language', 'Reasoning and numerical ability', 'Computer or typing skill where prescribed'], profile: 'Office administration and public-service support in the allotted state department.', pay: 'Pay and allowances are state-service specific and must be taken from the official notification.', source: 'https://upsc.gov.in/external-links/state-public-service-commissions' }),
    ]),
    makeCategory('other-government-jobs', 'Other Government Jobs', 'A source-led directory for government roles not yet grouped into a specialist handbook.', 'General Recruitment', [
        evergreenPost({ title: 'Government Jobs after 10th, 12th, ITI or Graduation', exam: 'Qualification-based government recruitment guide', organization: 'The authority named in each recruitment notice', overview: 'Qualification alone does not create eligibility. Candidates should match their education, age, domicile, language, physical and professional conditions to the individual notification.', qualifications: ['10th, 12th, ITI, diploma, graduation and postgraduate routes exist across different authorities.', 'Accepted subjects, marks, equivalence and age are always notification-specific.'], selection: 'May include a written examination, skill or trade test, physical test, interview, document verification or medical examination depending on the post.', subjects: ['Read the syllabus published by the recruiting authority; there is no single syllabus for all government jobs.'], profile: 'Work profile, location, pay, probation and progression belong to the specific post and department.', pay: 'There is no universal government-job salary; use the relevant pay matrix or advertisement.', source: 'https://www.india.gov.in/' }),
    ]),
];

export const categoryAdditions = {
    railway: [
        evergreenPost({ title: 'RRB Junior Engineer', exam: 'RRB JE recruitment', organization: 'Railway Recruitment Boards', overview: 'RRB Junior Engineers work in civil, electrical, mechanical, electronics and related railway technical departments. The board and discipline notification controls accepted qualifications and medical standards.', qualifications: ['A diploma or degree in the notified engineering discipline is normally required; the current RRB notice controls equivalence, age and other conditions.', 'Medical category and suitability depend on the post and railway service.'], selection: 'Computer-based examinations, document verification and railway medical examination as notified.', subjects: ['Mathematics and general intelligence', 'General awareness and science', 'Technical abilities for the notified engineering discipline'], profile: 'Technical inspection, maintenance, estimation, safety and supervision of railway assets.', pay: 'Pay level and allowances must be read from the current RRB JE notification.', source: 'https://indianrailways.gov.in/' }),
        evergreenPost({ title: 'RRB Technician', exam: 'RRB Technician recruitment', organization: 'Railway Recruitment Boards', overview: 'Railway Technicians maintain and inspect electrical, mechanical, signal, telecommunications or other notified railway systems. Trade and grade requirements vary by notification.', qualifications: ['Class 10 with an accepted ITI trade, or another qualification specifically listed for the notified technician grade.', 'Trade, age, medical category and certificate requirements are notification-specific.'], selection: 'Computer-based examination, document verification and medical examination as notified.', subjects: ['Mathematics', 'General intelligence and reasoning', 'General science', 'Trade or technical knowledge'], profile: 'Preventive maintenance, fault detection, repair support and safe operation of railway equipment.', pay: 'Pay level and allowances are specified by the current RRB technician notification.', source: 'https://indianrailways.gov.in/' }),
        evergreenPost({ title: 'RPF Constable', exam: 'RPF Constable recruitment', organization: 'Railway Protection Force', overview: 'RPF Constables protect railway passengers, property and premises under the Railway Protection Force framework. Recruitment rules include physical and medical stages that must be read from the current notice.', qualifications: ['Education, age, nationality, physical standards and relaxation conditions are controlled by the current RPF notification.', 'Physical standards differ from ordinary railway non-uniformed posts.'], selection: 'Computer-based examination, physical measurement and efficiency tests, document verification and medical examination as notified.', subjects: ['General awareness', 'Arithmetic', 'General intelligence and reasoning'], profile: 'Passenger security, railway property protection, access control, patrolling and assistance during incidents.', pay: 'Pay level and allowances follow the current RPF recruitment notification and service rules.', source: 'https://rpf.indianrailways.gov.in/' }),
    ],
    police: [
        evergreenPost({ title: 'UP Police Constable', exam: 'Uttar Pradesh Police Constable recruitment', organization: 'Uttar Pradesh Police Recruitment and Promotion Board', overview: 'UP Police Constable recruitment is a state-specific route for civil and armed police roles. Education, age, Hindi knowledge, physical standards and selection stages must be taken from the applicable UPPRPB notice.', qualifications: ['The current UPPRPB notification controls education, age, domicile or reservation documents, physical standards and other conditions.', 'Do not apply another state police board\'s standards to this post.'], selection: 'Written examination, document scrutiny, physical standard and efficiency stages, and medical or verification stages as notified.', subjects: ['General knowledge and current affairs', 'General Hindi', 'Numerical and mental ability', 'Mental aptitude, reasoning and intelligence'], profile: 'Patrolling, prevention and detection support, public assistance, law-and-order duties and station work.', pay: 'Pay and allowances are governed by Uttar Pradesh state service rules and the current recruitment notice.', source: 'https://uppbpb.gov.in/' }),
        evergreenPost({ title: 'Bihar Police Constable', exam: 'Bihar Police Constable recruitment', organization: 'Central Selection Board of Constable, Bihar', overview: 'Bihar Police Constable recruitment is governed by the Central Selection Board of Constable and Bihar-specific rules. The board notice controls education, physical standards, reservation and stages.', qualifications: ['Check the current CSBC advertisement for the required school qualification, age, domicile, language and category conditions.', 'Physical standards and efficiency tests are Bihar-specific.'], selection: 'Written examination, physical evaluation, document verification and medical or other stages specified by CSBC.', subjects: ['General knowledge and current affairs', 'General Hindi', 'Numerical ability', 'Reasoning and basic social studies'], profile: 'Police station, patrol, public-safety and law-and-order duties within Bihar Police.', pay: 'Pay and allowances follow Bihar state service rules and the current CSBC notice.', source: 'https://csbc.bihar.gov.in/' }),
    ],
    ssc: [
        evergreenPost({ title: 'SSC GD Constable', exam: 'SSC Constable (GD) examination', organization: 'Staff Selection Commission and CAPFs', overview: 'SSC GD recruits Constable (General Duty) in CAPFs, Rifleman (GD) in Assam Rifles and other posts listed in the notice. Force, gender, area and physical standards are notification-specific.', qualifications: ['The current SSC notice controls Class 10 qualification, age, nationality, reservation and physical standards.', 'PET/PST and medical requirements must be read for the force and category concerned.'], selection: 'Computer-based examination, physical efficiency and standard tests, medical examination and document verification as notified.', subjects: ['General intelligence and reasoning', 'General knowledge and awareness', 'Elementary mathematics', 'English or Hindi'], profile: 'Frontline security, border, internal-security, protection and operational support duties in the allotted force.', pay: 'Pay level and allowances follow the applicable CAPF or Assam Rifles service rules and SSC notice.', source: 'https://ssc.gov.in/' }),
        evergreenPost({ title: 'SSC Junior Engineer', exam: 'SSC Junior Engineer examination', organization: 'Staff Selection Commission', overview: 'SSC JE recruits civil, electrical and mechanical Junior Engineers for departments named in the annual notice. Department, discipline and qualification requirements are separate.', qualifications: ['Diploma or degree and any required experience depend on the department and discipline listed in the current notice.', 'Age limits and pay levels can differ between participating departments.'], selection: 'Paper I, Paper II and document verification as prescribed by SSC.', subjects: ['General intelligence and reasoning', 'General awareness', 'Civil, electrical or mechanical engineering'], profile: 'Government works supervision, technical estimation, maintenance, quality control and site administration.', pay: 'Pay level and allowances are department-specific and should be taken from the current SSC JE notice.', source: 'https://ssc.gov.in/' }),
        evergreenPost({ title: 'SSC Stenographer Grade C and D', exam: 'SSC Stenographer Grade C and D examination', organization: 'Staff Selection Commission', overview: 'The SSC Stenographer examination recruits stenographers for central government offices. Grade, language, skill standards, departments and vacancies are set by each notice.', qualifications: ['Class 12 qualification and the required shorthand skill conditions are controlled by the current SSC notice.', 'Skill-test speed and language requirements must not be inferred from another post.'], selection: 'Computer-based examination, stenography skill test and document verification.', subjects: ['General intelligence and reasoning', 'General awareness', 'English language and comprehension', 'Stenography skill test'], profile: 'Taking dictation, transcription, correspondence, diary management and confidential office support.', pay: 'Pay level and allowances depend on Grade C or Grade D and the allotted department.', source: 'https://ssc.gov.in/' }),
    ],
    upsc: [
        evergreenPost({ title: 'UPSC Combined Medical Services', exam: 'UPSC Combined Medical Services Examination', organization: 'Union Public Service Commission', overview: 'The CMS examination recruits medical officers for central government organisations listed in the annual notification. Medical qualification, internship and service conditions are notification-specific.', qualifications: ['A recognised medical qualification and internship conditions apply as set out by the current UPSC notice.', 'Medical fitness and registration requirements must be verified for the advertised services.'], selection: 'Computer-based written examination and personality test or interview as prescribed by UPSC.', subjects: ['General medicine', 'Paediatrics', 'Surgery', 'Gynaecology and obstetrics', 'Preventive and social medicine'], profile: 'Clinical care, public-health service, medical administration and field or institutional duties in the allotted organisation.', pay: 'Pay and allowances are service-specific and published in the current UPSC CMS notification.', source: 'https://upsc.gov.in/' }),
        evergreenPost({ title: 'UPSC Combined Defence Services', exam: 'UPSC Combined Defence Services Examination', organization: 'UPSC and the Armed Forces', overview: 'CDS is a graduate officer-entry examination for the Indian Military Academy, Indian Naval Academy, Air Force Academy and Officers Training Academy. Academy-wise degree, age, gender and marital conditions differ.', qualifications: ['The current UPSC notice controls academy-specific education, age, marital status and physical or medical requirements.', 'Engineering qualification is required for the Naval Academy route as specified in the notice.'], selection: 'Written examination, Services Selection Board assessment and medical examination.', subjects: ['English', 'General knowledge', 'Elementary mathematics for specified academies', 'SSB intelligence, personality and group assessment'], profile: 'Officer training followed by commissioned service in the allotted defence academy and branch.', pay: 'Training and commissioned-officer pay follow current defence pay rules and the UPSC CDS notification.', source: 'https://upsc.gov.in/' }),
    ],
};
