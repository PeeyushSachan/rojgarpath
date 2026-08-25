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

const railwaySources = {
    rrb: 'https://rrbsecunderabad.gov.in/employment-notice',
    rpf: 'https://rpf.indianrailways.gov.in/',
    rrc: 'https://www.rrc-wr.com/Home/Notifications',
};

const railwayDefaults = {
    ntpc: {
        exam: 'RRB NTPC recruitment', organization: 'Railway Recruitment Boards', department: 'Traffic, commercial and accounts departments',
        qualification: 'Qualification, age, nationality, reservation and medical standard are controlled by the applicable NTPC CEN; undergraduate posts generally require 12th, while graduate posts require a recognised degree.',
        selection: 'CBT 1, CBT 2 and post-specific typing or aptitude test where prescribed, followed by document verification and railway medical examination.',
        subjects: ['Mathematics', 'General intelligence and reasoning', 'General awareness, including railway and current affairs'],
        profile: 'Station, train operations, commercial, clerical or accounts work according to the allotted post and railway unit.', pay: 'Pay level and allowances are post-specific and must be taken from the applicable NTPC CEN.', source: railwaySources.rrb,
    },
    technical: {
        exam: 'RRB technical recruitment', organization: 'Railway Recruitment Boards', department: 'Mechanical, electrical, signal, telecom and engineering departments',
        qualification: 'Accepted ITI trades, diplomas, degrees, subjects, age and medical standards vary by the CEN and the notified discipline. Match the certificate to the exact post.',
        selection: 'Computer-based examination or examinations, trade or aptitude assessment where prescribed, document verification and railway medical examination.',
        subjects: ['Mathematics and general intelligence', 'General science and current affairs', 'Trade or discipline-specific technical knowledge'],
        profile: 'Inspection, maintenance, fault diagnosis, technical records and safe operation of railway assets.', pay: 'Pay level, running or technical allowances and conditions vary by the post and current CEN.', source: railwaySources.rrb,
    },
    level1: {
        exam: 'RRB Level-1 recruitment', organization: 'Railway Recruitment Boards', department: 'Engineering, electrical, mechanical and operating departments',
        qualification: 'The current Level-1 CEN controls school, ITI or apprenticeship qualifications, age, reservation and medical category. Do not treat an earlier CEN as a current rule.',
        selection: 'Computer-based examination, physical efficiency test, document verification and railway medical examination as notified.',
        subjects: ['Mathematics', 'General intelligence and reasoning', 'General science', 'General awareness and current affairs'],
        profile: 'Field, workshop, track, station and maintenance support duties under railway departmental supervision.', pay: 'Level-1 pay and allowances follow the current RRB CEN and railway service rules.', source: railwaySources.rrb,
    },
    safety: {
        exam: 'Railway safety and operations recruitment', organization: 'Railway Recruitment Boards', department: 'Operating and traffic department',
        qualification: 'Education, age, medical category and experience are notification-specific. Safety posts may require stricter vision, hearing, colour-perception or aptitude standards.',
        selection: 'Stages vary by CEN and can include CBT, aptitude or skill assessment, document verification and a prescribed medical examination.',
        subjects: ['General awareness and railway working knowledge', 'Mathematics and reasoning', 'Safety rules and post-specific aptitude where notified'],
        profile: 'Safe train movement, control-room coordination, station working and operational records.', pay: 'Pay and allowances are determined by the notified post and railway service rules.', source: railwaySources.rrb,
    },
    rpf: {
        exam: 'RPF recruitment', organization: 'Railway Protection Force', department: 'Railway Protection Force',
        qualification: 'The current RPF notice controls education, age, nationality, reservation, physical standards and medical requirements; these must not be borrowed from RRB posts.',
        selection: 'Computer-based examination, physical measurement and efficiency tests, document verification and medical examination as notified.',
        subjects: ['General awareness', 'Arithmetic', 'General intelligence and reasoning'],
        profile: 'Passenger security, railway property protection, access control, patrolling and incident assistance.', pay: 'Pay level and allowances follow the current RPF recruitment notice and service rules.', source: railwaySources.rpf,
    },
    medical: {
        exam: 'Railway paramedical recruitment', organization: 'Railway Recruitment Boards and railway hospitals', department: 'Medical and health services',
        qualification: 'Recognised professional qualification, registration, age, experience and speciality requirements vary by the post and current Paramedical CEN.',
        selection: 'Computer-based examination, document verification and medical or fitness assessment as prescribed for the professional post.',
        subjects: ['Professional subject knowledge for the notified discipline', 'General awareness and railway knowledge', 'General science and aptitude where prescribed'],
        profile: 'Clinical, diagnostic, preventive-health and patient-support services in railway hospitals and health units.', pay: 'Pay level, professional allowances and conditions are specified in the applicable Paramedical CEN.', source: railwaySources.rrb,
    },
    isolated: {
        exam: 'RRB Isolated Categories recruitment', organization: 'Railway Recruitment Boards', department: 'Education, legal, publicity, welfare, translation and ministerial services',
        qualification: 'The post-specific CEN controls degree, subject, teacher training, language, shorthand, experience, age and other conditions.',
        selection: 'Computer-based examination followed by a skill, teaching, translation or performance test where prescribed, then verification and medical assessment.',
        subjects: ['General awareness and railway knowledge', 'Professional or subject knowledge', 'Language, teaching, translation or skill content as notified'],
        profile: 'Specialist educational, legal, welfare, language, publicity and office support for railway units.', pay: 'Pay level and allowances are post-specific under the current Isolated Categories CEN.', source: railwaySources.rrb,
    },
    apprentice: {
        exam: 'RRC Act Apprentice engagement', organization: 'Railway Recruitment Cells and zonal railways', department: 'Workshops, production units and divisional trades',
        qualification: 'The relevant RRC notice controls Class 10 marks, ITI trade, age, medical fitness, domicile or zone conditions and document requirements.',
        selection: 'Shortlisting or merit and document verification under the applicable RRC notification; apprenticeship engagement is not the same as appointment to a regular railway post.',
        subjects: ['The trade syllabus is delivered under the apprenticeship curriculum', 'Read the relevant RRC notice for trade, unit and certificate conditions'],
        profile: 'Structured trade training and practical work in the notified railway workshop, production unit or division.', pay: 'Apprentices receive stipend and conditions under the current Apprentices Act and RRC notice, not a regular railway pay level.', source: railwaySources.rrc,
    },
    quota: {
        exam: 'RRC special quota recruitment', organization: 'Railway Recruitment Cells and zonal railways', department: 'The department and zone named in the quota notice',
        qualification: 'Education, age, sports, scouting, cultural or other evidence, zone and category conditions are controlled by each current quota notification.',
        selection: 'Application screening, trial or practical assessment and document verification, with written examination or other stages only where the notice prescribes them.',
        subjects: ['General awareness and railway knowledge where tested', 'Quota-specific practical, trial or performance assessment', 'Post-specific skill content where notified'],
        profile: 'Railway service through a special recruitment channel, with duties determined by the post and department named in the notice.', pay: 'Pay and allowances are those of the notified post; the quota itself does not create a universal pay scale.', source: railwaySources.rrc,
    },
};

const railwayPost = (title, family, details = {}) => {
    const base = railwayDefaults[family];
    const post = evergreenPost({
        title,
        exam: details.exam || base.exam,
        organization: details.organization || base.organization,
        overview: details.overview || `${title} is a Railway post in the ${base.department.toLowerCase()}. The exact duties, qualification, medical category and recruitment stages depend on the applicable official notification.`,
        qualifications: [details.qualification || base.qualification, ...(details.extraQualifications || [])],
        selection: details.selection || base.selection,
        subjects: details.subjects || base.subjects,
        profile: details.profile || `${title} work follows the operational, technical or public-service responsibilities of the ${base.department.toLowerCase()}.`,
        pay: details.pay || base.pay,
        source: details.source || base.source,
    });
    return {
        ...post,
        searchText: details.searchText || `${title} ${base.exam} ${family}`,
        pattern: details.pattern || [['Recruitment stages', details.selection || base.selection, 'Read the current official notification']],
        process: details.process || post.process,
        guide: details.guide || null,
        metadata: {
            ...post.metadata,
            department: details.department || base.department,
            experience: details.experience || 'Experience is required only when the applicable notification says so; it is not assumed here.',
            physicalRequirements: details.physicalRequirements || 'Physical and medical requirements vary by post and the applicable railway medical standard; verify the current notice.',
            allowances: details.allowances || 'Allowances and service benefits follow the applicable railway rules and notification.',
            currentRecruitment: 'This is evergreen post information. No current vacancy, date, fee or active application is claimed here; check the official source for live recruitment.',
        },
    };
};

const commercialTicketClerkGuide = {
    lastVerifiedAt: '2026-08-25',
    defaultSource: 'Official RRB notices and CEN 07/2025 (NTPC Undergraduate) documents.',
    intro: 'Commercial Cum Ticket Clerk is an RRB NTPC undergraduate post involving passenger-facing commercial and ticketing-related work at railway stations. The exact duties, posting and service conditions are governed by the applicable railway rules and recruitment notification.',
    quickFacts: {
        title: 'Quick Facts: Commercial Cum Ticket Clerk',
        rows: [
            ['Post', 'Commercial Cum Ticket Clerk'],
            ['Recruitment', 'RRB NTPC - Undergraduate'],
            ['Recruitment Authority', 'Railway Recruitment Boards (RRBs)'],
            ['Ministry', 'Ministry of Railways, Government of India'],
            ['Pay Level', { text: 'Level 3', tone: 'accent' }],
            ['Initial Basic Pay', { text: 'Rs 21,700', tone: 'accent' }],
            ['Medical Standard', { text: 'B-2', tone: 'accent' }],
            ['Minimum Qualification', { text: '12th (+2) or equivalent', tone: 'accent' }],
            ['Typing Test', { text: 'Not applicable to Commercial Cum Ticket Clerk', tone: 'accent' }],
            ['Selection', { text: 'CBT 1 -> CBT 2 -> Document Verification -> Medical Examination', tone: 'accent' }],
        ],
    },
    importantNotice: {
        tone: 'warning',
        title: 'Recruitment-specific details can change',
        text: 'This page contains evergreen information about the Commercial Cum Ticket Clerk post. Vacancy, application dates, age limits applicable to a particular cycle, fees, exam schedules and other recruitment-specific details must always be verified against the latest RRB notification.',
    },
    sections: [
        {
            id: 'what-is-cctc',
            title: 'What Is Commercial Cum Ticket Clerk?',
            paragraphs: [
                'Commercial Cum Ticket Clerk is a passenger-facing commercial post in the NTPC undergraduate stream when notified under RRB CEN. The role supports ticketing counters and related commercial processes in railway working environments such as station booking offices and connected commercial units.',
                'The post exists to support passenger ticketing flow, basic commercial transaction handling, records required under railway commercial rules, and on-ground passenger guidance connected with ticketing and station travel processes.',
                'Employees may handle ticketing-related public dealing, cash or transaction records as assigned, and procedural compliance work. Scope and workload vary by posting location, station category, and applicable rules.',
                'The role also involves coordination with station/commercial staff where required for day-to-day operations and record correctness.',
            ],
            subsections: [
                {
                    title: 'In Simple Words',
                    bullets: [
                        'It is a railway ticketing and commercial support role for 12th-level NTPC recruitment.',
                        'You work with passengers, ticketing processes, and commercial records under railway procedure.',
                        'It is a public-facing role, not only back-office file work.',
                    ],
                },
            ],
        },
        {
            id: 'job-profile',
            title: 'Job Profile and Day-to-Day Work',
            table: {
                columns: ['Responsibility', 'What it generally involves'],
                rows: [
                    ['Passenger ticketing support', 'Supporting ticket issue and passenger ticketing workflows at assigned counters or stations.'],
                    ['Ticket/account-related work', 'Ticketing transactions and related account entries as assigned under established procedures.'],
                    ['Commercial records', 'Maintaining required registers, reports or commercial records relevant to assigned duties.'],
                    ['Passenger assistance', 'Providing travel-related guidance on ticketing processes and basic passenger support.'],
                    ['Ticketing-process handling', 'Handling ticketing-related processes where applicable under local station workflow.'],
                    ['Record maintenance', 'Maintaining required records and ensuring data correctness under reporting requirements.'],
                    ['Cash/commercial transactions', 'Handling cash and commercial transactions as assigned, with accountability.'],
                    ['Rule compliance', 'Following railway commercial rules, departmental instructions and station procedures.'],
                    ['Coordination', 'Working with other railway staff where coordination is required for smooth operations.'],
                ],
            },
            note: 'Exact duties can vary by posting, station and applicable railway rules.',
        },
        {
            id: 'eligibility',
            title: 'Eligibility Criteria',
            table: {
                columns: ['Field', 'Requirement'],
                rows: [
                    ['Educational Qualification', { text: '12th (+2) or equivalent', tone: 'accent' }],
                    ['Minimum Marks', '50% aggregate, subject to exceptions specified in the applicable CEN.'],
                    ['Category/Exception', '50% marks is not insisted upon for SC/ST, Persons with Benchmark Disability, Ex-servicemen and candidates with qualification higher than 12th, as stated in the CEN.'],
                    ['Qualification Recognition', 'Qualification should be from a recognized board/equivalent as prescribed in the notification.'],
                ],
            },
        },
        {
            id: 'age-limit',
            title: 'Age Limit Framework',
            paragraphs: [
                'Do not treat any single age band as a permanent universal rule for this post. Use the current CEN for the active recruitment cycle and cut-off date.',
            ],
            subsections: [
                {
                    title: 'Normal Age Requirement',
                    table: {
                        columns: ['Item', 'Value', 'Note'],
                        rows: [
                            ['Normal age framework', 'Use latest applicable CEN', 'This page is evergreen; age conditions are cycle-specific.'],
                            ['Current recruitment applicable age', 'As notified in CEN 07/2025', 'Check current detailed CEN and corrigendum for final applicability.'],
                            ['Age cut-off date', 'As notified in CEN 07/2025', 'Cut-off date is notification-specific and must be checked carefully.'],
                            ['Upper-age relaxation', 'Category/notification specific', 'Apply only the currently notified relaxation rules.'],
                        ],
                    },
                    note: 'Always check the age cut-off date in the current notification.',
                },
            ],
        },
        {
            id: 'age-relaxation',
            title: 'Age Relaxation',
            table: {
                columns: ['Category', 'Typical statutory relaxation', 'Verification'],
                rows: [
                    ['SC/ST', 'As per Government/RRB rules', 'Verify in current CEN'],
                    ['OBC-NCL', 'As per Government/RRB rules', 'Verify in current CEN'],
                    ['PwBD', 'As per applicable rules', 'Verify in current CEN'],
                    ['Ex-Servicemen', 'As per applicable rules', 'Verify in current CEN'],
                    ['Other categories', 'As notified', 'Verify in current CEN'],
                ],
            },
            note: 'Do not hardcode one recruitment cycle\'s age-relaxation table as a permanent universal rule.',
        },
        {
            id: 'medical-standard',
            title: 'Railway Medical Standard: B-2',
            emphasis: 'high',
            paragraphs: [
                'Commercial Cum Ticket Clerk is listed under medical standard B-2 in the NTPC Undergraduate CEN stream for the current cycle.',
                'Medical fitness is determined only through Railway medical examination as per applicable standards. B-2 does not mean automatic fitness in all cases.',
            ],
            table: {
                columns: ['Parameter', 'B-2 requirement'],
                rows: [
                    ['Distant Vision', { text: '6/9, 6/12 with or without glasses', tone: 'accent' }],
                    ['Near Vision', { text: 'Sn 0.6, 0.6 with or without glasses where applicable', tone: 'accent' }],
                    ['Other', 'Binocular vision and other prescribed medical tests as per applicable Railway standards.'],
                    ['Lens power', 'Applicable current Railway medical standard applies.'],
                ],
            },
            note: 'Medical requirements are not the same for every Railway post. Commercial Cum Ticket Clerk is B-2; other posts may have A-3, C-2, or other categories as per notification.',
        },
        {
            id: 'physical-vs-medical',
            title: 'Physical Requirement vs Medical Fitness',
            warning: 'Commercial Cum Ticket Clerk does not have the type of physical efficiency test specified for posts such as police/defence recruitment. However, the candidate must satisfy the prescribed Railway medical standard for the post.',
            table: {
                columns: ['Item', 'Meaning for this post'],
                rows: [
                    ['Physical Test', 'No separate police/defence-style physical efficiency test is prescribed for this post in NTPC UG flow.'],
                    ['Medical Fitness', 'Mandatory Railway medical examination under prescribed B-2 standards.'],
                ],
            },
        },
        {
            id: 'selection-process',
            title: 'Selection Process',
            table: {
                columns: ['Stage', 'Description', 'Important'],
                rows: [
                    ['1', { text: 'CBT-1', tone: 'accent' }, 'Screening stage in recruitment process.'],
                    ['2', { text: 'CBT-2', tone: 'accent' }, 'Further shortlisting stage for next process.'],
                    ['3', 'Document Verification', 'Original documents are checked as per notification.'],
                    ['4', 'Railway Medical Examination', 'Medical fitness is assessed for notified standard.'],
                ],
            },
            note: 'Typing Skill Test is not applicable to Commercial Cum Ticket Clerk. In NTPC UG, typing test applies to Accounts Clerk cum Typist and Junior Clerk cum Typist.',
        },
        {
            id: 'cbt1-pattern',
            title: 'CBT-1 Exam Pattern',
            table: {
                columns: ['Subject', 'Questions', 'Marks'],
                rows: [
                    ['General Awareness', '40', '40'],
                    ['Mathematics', '30', '30'],
                    ['General Intelligence and Reasoning', '30', '30'],
                    ['Total', { text: '100 Questions', tone: 'accent' }, { text: '100 Marks', tone: 'accent' }],
                    ['Duration', { text: '90 Minutes', tone: 'accent' }, '-'],
                    ['PwBD with eligible scribe', '120 Minutes', '-'],
                    ['Negative marking', { text: '1/3 mark for each wrong answer', tone: 'accent' }, '-'],
                    ['Question type', 'Objective / Multiple Choice', '-'],
                ],
            },
        },
        {
            id: 'cbt2-pattern',
            title: 'CBT-2 Exam Pattern',
            table: {
                columns: ['Subject', 'Questions', 'Marks'],
                rows: [
                    ['General Awareness', '50', '50'],
                    ['Mathematics', '35', '35'],
                    ['General Intelligence and Reasoning', '35', '35'],
                    ['Total', { text: '120 Questions', tone: 'accent' }, { text: '120 Marks', tone: 'accent' }],
                    ['Duration', '90 Minutes', '-'],
                    ['PwBD with eligible scribe', '120 Minutes', '-'],
                    ['Negative marking', { text: '1/3 per wrong answer', tone: 'accent' }, '-'],
                ],
            },
            paragraphs: [
                'CBT-1 is screening in nature.',
                'CBT-2 is used for further shortlisting.',
                'The CEN indicates shortlisting for CBT-2 based on normalized CBT-1 marks, with target shortlisting up to 15 times community-wise vacancies, subject to RRB discretion as stated in notification.',
            ],
        },
        {
            id: 'syllabus',
            title: 'Syllabus (CBT-1 and CBT-2)',
            subsections: [
                {
                    title: 'Mathematics',
                    bullets: [
                        'Number System', 'Decimals', 'Fractions', 'LCM', 'HCF', 'Ratio and Proportion', 'Percentage', 'Mensuration',
                        'Time and Work', 'Time and Distance', 'Simple Interest', 'Compound Interest', 'Profit and Loss', 'Elementary Algebra',
                        'Geometry', 'Trigonometry', 'Elementary Statistics', 'Other topics explicitly listed in the current notification.',
                    ],
                },
                {
                    title: 'General Intelligence and Reasoning',
                    bullets: [
                        'Analogies', 'Number Series', 'Alphabetical Series', 'Coding-Decoding', 'Mathematical Operations', 'Similarities and Differences',
                        'Relationships', 'Analytical Reasoning', 'Syllogism', 'Jumbling', 'Venn Diagrams', 'Puzzles', 'Data Sufficiency',
                        'Statement-Conclusion', 'Courses of Action', 'Decision Making', 'Maps', 'Graph Interpretation',
                    ],
                },
                {
                    title: 'General Awareness',
                    bullets: [
                        'Current Affairs', 'National and International Events', 'Games and Sports', 'Indian Art and Culture', 'Indian Literature',
                        'Monuments and Places', 'General Science', 'Life Science up to 10th CBSE', 'Indian History', 'Freedom Struggle',
                        'Geography of India and World', 'Indian Polity and Constitution', 'Indian Economy', 'Environment', 'Space',
                        'Nuclear Programme', 'UN and other important organizations', 'Computer basics', 'Computer applications',
                        'Common abbreviations', 'Transport Systems in India', 'Government schemes/programmes',
                        'Important Indian Government/Public Sector organizations', 'Flora and Fauna', 'Famous personalities',
                        'Scientific and technological developments',
                    ],
                },
            ],
        },
        {
            id: 'strategy',
            title: 'Preparation Strategy',
            note: 'This is exam preparation guidance, not an official Railway rule.',
            subsections: [
                {
                    title: 'Beginner Priority',
                    ordered: [
                        'Basic Maths',
                        'Basic Reasoning',
                        'Static GK',
                        'General Science',
                        'Current Affairs',
                        'Previous Year Questions',
                        'Mock Tests',
                    ],
                },
            ],
            paragraphs: [
                'Start with concept clarity in arithmetic and reasoning, then move to mixed practice. Build a static-GK and science base before high-frequency current affairs revision.',
                'After fundamentals, use timed sectional tests and then full-length mocks to improve speed, selection accuracy and negative-mark control.',
            ],
        },
        {
            id: 'books',
            title: 'Recommended Books and Resources',
            note: 'These are preparation recommendations, not official RRB-endorsed books.',
            table: {
                columns: ['Subject', 'Suggested Resource Type', 'What to Study', 'How to Use'],
                rows: [
                    ['Mathematics', 'A standard SSC/Railway quantitative aptitude book', 'Arithmetic + practice', 'Learn each chapter and solve mixed timed sets.'],
                    ['Reasoning', 'A standard verbal/non-verbal reasoning book', 'Topic-wise questions', 'Build topic accuracy before attempting mixed mocks.'],
                    ['General Awareness', 'A standard one-volume general knowledge reference', 'Static GK', 'Create short revision notes and weekly revision cycles.'],
                    ['General Science', 'NCERT or school-level science reference', 'Physics, Chemistry, Biology basics', 'Focus on conceptual clarity and factual revision lists.'],
                    ['Current Affairs', 'Reliable monthly current affairs source', 'Recent national/international events', 'Revise monthly compendiums with weekly MCQ practice.'],
                    ['Previous Year Papers', 'RRB NTPC previous-year paper compilation', 'Exam familiarity + question patterns', 'Use as timed practice and post-test error analysis.'],
                ],
            },
        },
        {
            id: 'previous-papers',
            title: 'Previous Year Papers and Practice',
            bullets: [
                'CBT-1 previous year papers',
                'CBT-2 previous year papers',
                'Shift-wise practice',
                'Topic-wise practice',
                'Mock tests',
            ],
            paragraphs: [
                'Use previous papers to identify repeated concepts, difficulty level and time-management requirements.',
            ],
        },
        {
            id: 'qualifying-marks',
            title: 'Minimum Qualifying Percentage',
            table: {
                columns: ['Category', 'Minimum qualifying percentage (CEN 07/2025)'],
                rows: [
                    ['UR', '40%'],
                    ['EWS', '40%'],
                    ['OBC-NCL', '30%'],
                    ['SC', '30%'],
                    ['ST', '25%'],
                ],
            },
            paragraphs: [
                'PwBD relaxation: 2 marks where applicable under the notification\'s stated shortage condition.',
                'These are minimum qualifying percentages, not final selection cut-offs.',
                'Actual competitive cut-off varies by recruitment cycle, RRB, category, vacancies and candidate performance.',
            ],
        },
        {
            id: 'latest-recruitment',
            title: 'Latest Recruitment (Current Cycle Information)',
            warning: 'This section is recruitment-specific and can change. Always verify on the latest official RRB notice page.',
            table: {
                columns: ['Field', 'Current information'],
                rows: [
                    ['Recruitment', 'CEN 07/2025 NTPC Undergraduate'],
                    ['Status', { text: 'Check official RRB page for latest status', tone: 'warning' }],
                    ['Post', 'Commercial Cum Ticket Clerk'],
                    ['Vacancy', { text: 'Use the post-wise vacancy table published in the current CEN/zone notice', tone: 'warning' }],
                    ['Application period', { text: 'Opened: 28-10-2025; initial close: 27-11-2025 (check corrigendum for modifications)', tone: 'warning' }],
                    ['Exam status', { text: 'CBT-1 schedule/revised schedule and call-letter notices released in 2026 on official RRB pages', tone: 'warning' }],
                    ['Notification', 'CEN 07/2025 official PDF (English/Hindi)'],
                    ['Apply', { text: 'Only through official RRB/rrbapply links when window is active', tone: 'warning' }],
                ],
            },
            note: 'Do not treat old-cycle vacancy numbers as permanent post attributes. Vacancy is recruitment-specific.',
            source: 'RRB Mumbai and RRB Bhubaneswar official CEN 07/2025 notice pages and linked documents.',
        },
        {
            id: 'salary',
            title: 'Salary Structure',
            table: {
                columns: ['Field', 'Information'],
                rows: [
                    ['Pay Level', { text: 'Level 3', tone: 'accent' }],
                    ['Initial Basic Pay', { text: 'Rs 21,700', tone: 'accent' }],
                    ['Allowances', 'As admissible under applicable Railway/Government rules.'],
                    ['In-hand salary', { text: 'No fixed universal figure should be assumed', tone: 'warning' }],
                    ['Potential earnings', 'Depend on allowances, deductions, posting and applicable rules.'],
                ],
            },
            paragraphs: [
                'Basic pay is not the same as in-hand salary.',
            ],
        },
        {
            id: 'career',
            title: 'Promotion and Career Growth',
            paragraphs: [
                'Promotion opportunities are governed by applicable Railway service rules and departmental procedures.',
                'Career progression depends on factors such as seniority, departmental opportunities, selection procedures, zone/railway needs and service conditions.',
                'Do not assume a guaranteed promotion timeline on a fixed-year basis.',
            ],
        },
        {
            id: 'posting',
            title: 'Job Location and Posting',
            table: {
                columns: ['Factor', 'What it means'],
                rows: [
                    ['RRB', 'Recruitment board/railway chosen in the application.'],
                    ['Zone/Railway', 'Depends on recruitment notification and allocation process.'],
                    ['Posting', 'Based on allocation and administrative requirements.'],
                    ['Transfer', 'Subject to applicable Railway rules and service conditions.'],
                ],
            },
            paragraphs: [
                'Railway recruitment is board/zone linked. Candidates should not assume free station choice after selection.',
            ],
        },
        {
            id: 'skills',
            title: 'Useful Skills for the Role',
            note: 'These are useful working skills, not mandatory eligibility unless officially notified.',
            bullets: [
                'Basic computer usage',
                'Customer handling',
                'Communication',
                'Numerical accuracy',
                'Cash/accounting discipline',
                'Record keeping',
                'Attention to detail',
                'Ability to work under pressure',
                'Public dealing',
            ],
        },
        {
            id: 'pros-challenges',
            title: 'Advantages and Challenges',
            subsections: [
                {
                    title: 'Advantages',
                    table: {
                        columns: ['Point', 'Details'],
                        rows: [
                            ['Government employment framework', 'Service framework under Railway/Government rules.'],
                            ['Railway service benefits', 'Benefits as applicable under current rules.'],
                            ['Structured pay level', 'Level-based pay system with notified rules.'],
                            ['Passenger-facing role', 'Regular public interaction and station support responsibilities.'],
                            ['Career progression opportunities', 'Progression available through service pathways and rules.'],
                        ],
                    },
                },
                {
                    title: 'Challenges',
                    table: {
                        columns: ['Point', 'Details'],
                        rows: [
                            ['Public dealing', 'Continuous interaction with passengers in varied situations.'],
                            ['Shift/roster', 'May apply depending on posting and operational requirement.'],
                            ['Busy station environment', 'Workload may be higher in large/high-traffic stations.'],
                            ['Cash/records responsibility', 'Accuracy and accountability are important.'],
                            ['Transfer/posting factors', 'Administrative requirements can influence location.'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'who-should-apply',
            title: 'Who Should Consider This Post? (General Guidance)',
            subsections: [
                {
                    title: 'Good fit for candidates who',
                    bullets: [
                        'Have 12th qualification.',
                        'Prefer a government job framework.',
                        'Are comfortable with public interaction.',
                        'Want railway employment.',
                        'Are comfortable with commercial/ticketing work.',
                        'Can prepare for General Awareness, Maths and Reasoning.',
                    ],
                },
                {
                    title: 'May not be ideal for candidates who',
                    bullets: [
                        'Dislike public-facing work.',
                        'Do not want station/commercial responsibilities.',
                        'Prefer a purely desk-based technical role.',
                    ],
                },
            ],
        },
        {
            id: 'documents',
            title: 'Documents Usually Required',
            table: {
                columns: ['Document', 'Why it may be required'],
                rows: [
                    ['10th Certificate', 'Date of birth proof.'],
                    ['12th Certificate / Marksheet', 'Educational qualification proof.'],
                    ['Category Certificate', 'If applicable.'],
                    ['PwBD Certificate', 'If applicable.'],
                    ['Ex-Servicemen documents', 'If applicable.'],
                    ['Photo', 'Application requirements.'],
                    ['Signature', 'Application requirements.'],
                    ['Identity document', 'As required by current notification.'],
                ],
            },
            note: 'Actual document requirements are always governed by the current recruitment notification.',
        },
        {
            id: 'application-process',
            title: 'Application Process',
            table: {
                columns: ['Step', 'Action'],
                rows: [
                    ['1', 'Read current CEN.'],
                    ['2', 'Check eligibility against notified criteria.'],
                    ['3', 'Select appropriate RRB/options according to notification.'],
                    ['4', 'Register.'],
                    ['5', 'Enter personal and educational details.'],
                    ['6', 'Upload documents/photo/signature as required.'],
                    ['7', 'Pay applicable fee.'],
                    ['8', 'Submit application.'],
                    ['9', 'Save application/registration record.'],
                    ['10', 'Track RRB notices regularly.'],
                ],
            },
        },
        {
            id: 'official-links',
            title: 'Official Links',
            table: {
                columns: ['Link', 'Purpose', 'URL'],
                rows: [
                    ['RRB Official Recruitment Notices', 'Latest recruitment notifications', { text: 'https://www.rrbbbs.gov.in/notifications.php', href: 'https://www.rrbbbs.gov.in/notifications.php' }],
                    ['CEN 07/2025 NTPC UG (notice page)', 'Current undergraduate recruitment notice page', { text: 'https://rrbmumbai.gov.in/CEN07_2025.php', href: 'https://rrbmumbai.gov.in/CEN07_2025.php' }],
                    ['CEN 07/2025 Detailed Notification (English PDF)', 'Official notification PDF', { text: 'https://rrbmumbai.gov.in/newpdf/CEN%2007-2025-NTPC%20(Under%20Graduate)%20English.pdf', href: 'https://rrbmumbai.gov.in/newpdf/CEN%2007-2025-NTPC%20(Under%20Graduate)%20English.pdf' }],
                    ['Application', 'Use only when active', { text: 'https://www.rrbapply.gov.in/', href: 'https://www.rrbapply.gov.in/' }],
                    ['Admit Card / City Intimation', 'When available for active cycle', { text: 'https://rrb.digialm.com/EForms/configuredHtml/33128/100181/login.html', href: 'https://rrb.digialm.com/EForms/configuredHtml/33128/100181/login.html' }],
                    ['Result / updates', 'Cycle-specific updates', { text: 'https://www.rrbbbs.gov.in/cen.php?prmt=TkRFPQ==', href: 'https://www.rrbbbs.gov.in/cen.php?prmt=TkRFPQ==' }],
                ],
            },
            note: 'Do not rely on unofficial portals. If an application window is closed, wait for the next official notice.',
            source: 'Official RRB websites listed above.',
        },
    ],
    faqs: [
        ['What is Commercial Cum Ticket Clerk?', 'It is an RRB NTPC undergraduate passenger-facing commercial and ticketing-related post in Indian Railways when notified in the applicable CEN.'],
        ['What qualification is required?', '12th (+2) or equivalent from a recognized board, with the marks condition and exceptions as specified in the current CEN.'],
        ['Is graduation required?', 'No, this is an undergraduate NTPC post category route for 12th-level eligibility.'],
        ['Is 12th enough for eligibility?', '12th is the base qualification, but the CEN marks condition and exemption categories must also be checked.'],
        ['Is 50% mandatory in 12th?', 'The CEN states a 50% aggregate condition with specified exceptions such as SC/ST, PwBD, Ex-servicemen, and candidates with qualification above 12th.'],
        ['Is there a typing test for Commercial Cum Ticket Clerk?', 'No. Typing test is not applicable to this post in NTPC UG flow.'],
        ['Which posts have typing test in NTPC UG?', 'Typing test applies to Accounts Clerk cum Typist and Junior Clerk cum Typist as per the notification.'],
        ['What is the medical standard for this post?', 'B-2 as specified for the post in the current NTPC UG recruitment context.'],
        ['What does B-2 medical standard mean?', 'It refers to prescribed Railway medical fitness criteria including vision standards; final fitness is determined by Railway medical examination.'],
        ['Is there a physical test like police exams?', 'No separate police/defence-style physical efficiency test is prescribed for this post in NTPC UG process.'],
        ['How many CBT stages are there?', 'Two CBT stages: CBT-1 and CBT-2, followed by Document Verification and Railway Medical Examination for this post.'],
        ['How many questions are in CBT-1?', { text: '100 questions for 100 marks in 90 minutes.', tone: 'accent' }],
        ['How many questions are in CBT-2?', { text: '120 questions for 120 marks in 90 minutes.', tone: 'accent' }],
        ['Is there negative marking?', { text: 'Yes. 1/3 mark is deducted for each wrong answer in CBT.', tone: 'accent' }],
        ['What is the starting basic pay?', { text: 'Rs 21,700 (Pay Level 3).', tone: 'accent' }],
        ['What is the syllabus?', 'Maths, General Intelligence and Reasoning, and General Awareness as detailed in the current CEN for CBT-1 and CBT-2.'],
        ['Which books should I use?', 'Use standard quantitative aptitude, reasoning, static GK, NCERT-level science, current affairs resources, and previous year NTPC papers. These are preparation suggestions, not official endorsements.'],
        ['Is there an interview stage?', 'No interview stage is specified in this NTPC UG process for this post.'],
        ['Can posting be anywhere in India?', 'Posting depends on recruitment board/zone allocation and administrative requirements under applicable rules.'],
        ['Is the post permanent?', 'Service conditions follow the applicable Railway appointment/service rules for the notified recruitment.'],
        ['Where should I check latest updates?', 'Always check official RRB notice pages and CEN documents for current-cycle updates.'],
    ],
};

const accountsClerkCumTypistGuide = {
    lastVerifiedAt: '2026-08-25',
    defaultSource: 'Official RRB notices and CEN 07/2025 (NTPC Undergraduate) documents.',
    intro: 'Accounts Clerk Cum Typist is an RRB NTPC undergraduate post focused on railway clerical and accounts-support work. Exact duties, office posting, service conditions and recruitment-stage rules are governed by the applicable railway rules and current recruitment notification.',
    heroImage: {
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
        alt: 'Railway accounts office workspace',
        caption: 'Representative office workspace image used for educational context only. It does not imply endorsement by Indian Railways or RRB.',
    },
    quickFacts: {
        title: 'Quick Facts: Accounts Clerk Cum Typist',
        rows: [
            ['Post', 'Accounts Clerk Cum Typist'],
            ['Recruitment', 'RRB NTPC - Undergraduate'],
            ['Recruiting Authority', 'Railway Recruitment Boards (RRBs)'],
            ['Ministry', 'Ministry of Railways, Government of India'],
            ['Pay Level', { text: 'Level 2', tone: 'accent' }],
            ['Initial Basic Pay', { text: '₹19,900', tone: 'accent' }],
            ['Medical Standard', { text: 'C-2', tone: 'accent' }],
            ['Minimum Qualification', { text: '12th (+2) or equivalent with applicable 50% condition/exceptions', tone: 'accent' }],
            ['Typing Test', { text: 'Computer Based Typing Skill Test (CBTST)', tone: 'accent' }],
            ['Typing Speed', { text: '30 WPM English OR 25 WPM Hindi', tone: 'accent' }],
            ['Typing Test Nature', { text: 'Qualifying', tone: 'accent' }],
            ['Selection', { text: 'CBT 1 -> CBT 2 -> CBTST -> Document Verification -> Medical Examination', tone: 'accent' }],
        ],
    },
    importantNotice: {
        tone: 'warning',
        title: 'Recruitment-specific details may change',
        text: 'Vacancy, application dates, age cut-off, fee, exam schedule, recruitment status and notification-specific rules must always be verified from the latest official RRB notification.',
    },
    sections: [
        {
            id: 'what-is-accounts-clerk',
            title: 'What Is Accounts Clerk Cum Typist?',
            paragraphs: [
                'Accounts Clerk Cum Typist is a clerical/accounts-support railway post under NTPC Undergraduate when notified. The role generally fits in office-based administrative and records workflows rather than passenger counter operations.',
                'Railway administration requires continuous accounting support, voucher/ledger handling, records maintenance and office correspondence. This post supports those functions using computer-based work and organized documentation.',
                'Typing proficiency is part of the selection process because day-to-day clerical and records-related work relies on accurate and timely computer input. This is why a separate qualifying Computer Based Typing Skill Test is prescribed for this post.',
                'Compared with passenger-facing ticketing roles, this post is usually more office/records oriented, though exact assignment depends on posting and unit-level work distribution.',
            ],
            subsections: [
                {
                    title: 'In Simple Words',
                    bullets: [
                        'This is a railway office job for clerical and basic accounts-related support.',
                        'You work mostly on computer records, files, vouchers and typed documents.',
                        'You must clear a typing test, but typing marks are qualifying and not counted in merit marks.',
                    ],
                },
            ],
        },
        {
            id: 'job-profile',
            title: 'Job Profile',
            table: {
                columns: ['Responsibility', 'What it generally involves'],
                rows: [
                    ['Maintaining accounting records', 'Maintaining office/account entries and related records as assigned.'],
                    ['Preparing/handling vouchers', 'Processing vouchers and related accounting paperwork under office procedures.'],
                    ['Ledger-related work', 'Supporting ledger entry, update and verification tasks where assigned.'],
                    ['Data entry', 'Entering records and transaction details on computer systems.'],
                    ['Office correspondence', 'Typing and maintaining letters, notes and internal communication records.'],
                    ['Record maintenance', 'Organizing registers/files and maintaining document traceability.'],
                    ['Clerical/accounts support', 'Supporting routine procedural office and accounts-related tasks.'],
                    ['Computer-based office work', 'Using computer tools for entries, documentation and records handling.'],
                    ['Document organization', 'Checking and arranging documents for internal use and verification workflows.'],
                    ['Procedure compliance', 'Following applicable departmental accounting and clerical procedures.'],
                    ['Other assigned duties', 'Additional duties based on office/unit requirement and service rules.'],
                ],
            },
            note: 'Exact duties may vary according to the Railway unit, office, posting and applicable service rules.',
        },
        {
            id: 'work-environment',
            title: 'Work Environment',
            image: {
                src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
                alt: 'Railway clerical office work setup',
                caption: 'Representative office image for clerical workflow context only.',
            },
            table: {
                columns: ['Factor', 'Explanation'],
                rows: [
                    ['Work type', 'Primarily clerical/computer/account-related office work.'],
                    ['Public interaction', 'Generally lower than passenger-facing commercial posts, but depends on posting.'],
                    ['Computer usage', 'Important for routine work.'],
                    ['Typing', 'Important for qualifying CBTST and office documentation.'],
                    ['Records', 'Important part of clerical/account work.'],
                    ['Workplace', 'Railway offices/units as assigned.'],
                    ['Shift requirement', 'May vary according to posting/office requirements; no universal schedule should be assumed.'],
                ],
            },
        },
        {
            id: 'eligibility',
            title: 'Eligibility',
            table: {
                columns: ['Criteria', 'Requirement'],
                rows: [
                    ['Educational Qualification', { text: '12th (+2) or equivalent', tone: 'accent' }],
                    ['Minimum Marks', '50% aggregate, subject to exceptions specified in the applicable CEN.'],
                    ['SC/ST', '50% marks condition is not insisted upon as stated in CEN provisions.'],
                    ['PwBD', 'As per applicable CEN provisions.'],
                    ['Ex-Servicemen', 'As per applicable CEN provisions.'],
                    ['Higher qualification', 'Candidates with qualifications above 12th are covered by stated exception to the 50% condition.'],
                    ['Typing proficiency', { text: 'English or Hindi typing on computer is essential', tone: 'accent' }],
                ],
            },
        },
        {
            id: 'age-limit',
            title: 'Age Limit Framework',
            table: {
                columns: ['Age requirement', 'Details'],
                rows: [
                    ['Current CEN age framework', 'Use the latest applicable notification.'],
                    ['Age cut-off date', 'Use the current CEN and any corrigendum.'],
                    ['Upper-age relaxation', 'As per Government/RRB rules and current notification.'],
                    ['SC/ST', 'As applicable in current CEN.'],
                    ['OBC-NCL', 'As applicable in current CEN.'],
                    ['PwBD', 'As applicable in current CEN.'],
                    ['Ex-Servicemen', 'As applicable in current CEN.'],
                ],
            },
            note: 'Age eligibility must always be checked against the date and rules specified in the current CEN.',
        },
        {
            id: 'cbtst',
            title: 'Computer Based Typing Skill Test (CBTST)',
            emphasis: 'high',
            paragraphs: [
                'Accounts Clerk Cum Typist requires a Computer Based Typing Skill Test (CBTST).',
                'CBTST is qualifying in nature. Typing test marks are not added to merit score.',
                'Candidates are shortlisted for CBTST from 2nd Stage CBT performance as per notification provisions.',
            ],
            table: {
                columns: ['Test', 'Requirement'],
                rows: [
                    ['English', { text: '30 WPM', tone: 'accent' }],
                    ['Hindi', { text: '25 WPM', tone: 'accent' }],
                    ['Nature', { text: 'Qualifying', tone: 'accent' }],
                    ['Device', 'Personal Computer'],
                    ['Editing tools', 'Not allowed'],
                    ['Spell check', 'Not allowed'],
                    ['Hindi typing fonts', 'Kruti Dev and Mangal are made available as per notification.'],
                ],
            },
            note: 'Use the current CEN/related notices for any update to qualifying criteria or conduct instructions.',
        },
        {
            id: 'who-is-called-for-cbtst',
            title: 'Who Is Called for CBTST?',
            image: {
                src: '/images/rrb-ntpc-accounts-clerk-flow.svg',
                alt: 'RRB NTPC Accounts Clerk Cum Typist selection process',
                caption: 'Original infographic: CBT-1 -> CBT-2 -> CBTST -> DV -> Medical.',
            },
            paragraphs: [
                'As per current CEN provision, candidates up to eight times the community-wise vacancies are called/shortlisted for CBTST, subject to conditions in the notification.',
                'Not every applicant reaches CBTST. Shortlisting depends on CBT performance and post/category-wise criteria.',
            ],
            ordered: [
                'CBT-1',
                'CBT-2',
                'CBT-2 normalized performance',
                'Shortlisting for CBTST (as per notification conditions)',
                'Qualify CBTST',
                'Document Verification and Medical Examination',
            ],
        },
        {
            id: 'typing-preparation',
            title: 'Typing Test Preparation',
            subsections: [
                {
                    title: 'How to prepare for CBTST',
                    ordered: [
                        'Start daily typing practice.',
                        'Practice English and/or Hindi according to your intended test language.',
                        'Practice without autocorrect.',
                        'Practice without spell-check.',
                        'Use a normal physical keyboard.',
                        'Practice accuracy before speed.',
                        'Practice timed tests.',
                        'Practice under exam-like restrictions.',
                        'Track WPM and accuracy over time.',
                        'Practice long passages continuously.',
                    ],
                },
            ],
            table: {
                columns: ['Practice Area', 'Target'],
                rows: [
                    ['English typing', '30+ WPM'],
                    ['Hindi typing', '25+ WPM'],
                    ['Accuracy', 'Aim comfortably above minimum speed with controlled errors.'],
                    ['Timed practice', 'Regular'],
                    ['Keyboard familiarity', 'Daily'],
                ],
            },
            note: 'No fixed official accuracy percentage threshold is stated here unless explicitly specified by current notification.',
        },
        {
            id: 'typing-plan',
            title: '30-Day Typing Preparation Plan',
            note: 'Suggested preparation plan - not an official RRB schedule.',
            table: {
                columns: ['Days', 'Focus'],
                rows: [
                    ['Days 1-7', 'Keyboard familiarity and accuracy foundation.'],
                    ['Days 8-15', 'Timed typing and consistency development.'],
                    ['Days 16-23', 'Long passages and speed improvement.'],
                    ['Days 24-30', 'Full mock typing tests under restrictions.'],
                ],
            },
        },
        {
            id: 'medical-c2',
            title: 'Railway Medical Standard: C-2',
            emphasis: 'high',
            paragraphs: [
                'Accounts Clerk Cum Typist is assigned C-2 medical standard in the current NTPC-UG post-wise parameters.',
            ],
            table: {
                columns: ['Parameter', 'Details'],
                rows: [
                    ['Medical Standard', { text: 'C-2', tone: 'accent' }],
                    ['Applicable Medical Examination', 'Railway medical examination'],
                    ['Vision/medical requirements', 'As per applicable Railway medical standards'],
                    ['Final fitness decision', 'Railway medical authority'],
                ],
            },
            note: 'Medical standards can differ between Railway posts. Do not assume that medical requirements of Commercial Cum Ticket Clerk, Trains Clerk, ALP or Group D are the same as Accounts Clerk Cum Typist.',
        },
        {
            id: 'physical-test',
            title: 'Is There a Physical Efficiency Test?',
            warning: 'CBTST ≠ Physical Test',
            paragraphs: [
                'Do not confuse medical examination with a police/defence-style physical efficiency test.',
                'For Accounts Clerk Cum Typist in NTPC process, stages are CBTs, CBTST (for this post), DV and medical. No separate running/height/chest PET is listed for this post in this process flow.',
            ],
        },
        {
            id: 'selection-process',
            title: 'Selection Process',
            table: {
                columns: ['Stage', 'What happens'],
                rows: [
                    ['1', 'CBT-1'],
                    ['2', 'CBT-2'],
                    ['3', { text: 'Computer Based Typing Skill Test (CBTST)', tone: 'accent' }],
                    ['4', 'Document Verification'],
                    ['5', 'Railway Medical Examination'],
                    ['6', 'Final empanelment/appointment as applicable'],
                ],
            },
            note: 'CBTST is qualifying. Merit is based on applicable CBT performance after satisfying qualifying skill-test requirement as per current CEN methodology.',
        },
        {
            id: 'cbt1-pattern',
            title: 'CBT-1 Exam Pattern',
            table: {
                columns: ['Subject', 'Questions', 'Marks'],
                rows: [
                    ['General Awareness', '40', '40'],
                    ['Mathematics', '30', '30'],
                    ['General Intelligence and Reasoning', '30', '30'],
                    ['Total', { text: '100 Questions', tone: 'accent' }, { text: '100 Marks', tone: 'accent' }],
                    ['Duration', { text: '90 Minutes', tone: 'accent' }, '-'],
                    ['PwBD with eligible scribe', '120 Minutes', '-'],
                    ['Negative marking', { text: '1/3 mark per wrong answer', tone: 'accent' }, '-'],
                    ['Question type', 'Objective / MCQ', '-'],
                ],
            },
        },
        {
            id: 'cbt2-pattern',
            title: 'CBT-2 Exam Pattern',
            table: {
                columns: ['Subject', 'Questions', 'Marks'],
                rows: [
                    ['General Awareness', '50', '50'],
                    ['Mathematics', '35', '35'],
                    ['General Intelligence and Reasoning', '35', '35'],
                    ['Total', { text: '120 Questions', tone: 'accent' }, { text: '120 Marks', tone: 'accent' }],
                    ['Duration', { text: '90 Minutes', tone: 'accent' }, '-'],
                    ['PwBD with eligible scribe', '120 Minutes', '-'],
                    ['Negative marking', { text: '1/3 mark per wrong answer', tone: 'accent' }, '-'],
                ],
            },
        },
        {
            id: 'detailed-syllabus',
            title: 'Detailed Syllabus',
            subsections: [
                {
                    title: 'Mathematics',
                    bullets: [
                        'Number System', 'Decimals', 'Fractions', 'LCM', 'HCF', 'Ratio and Proportion', 'Percentage', 'Mensuration',
                        'Time and Work', 'Time and Distance', 'Simple Interest', 'Compound Interest', 'Profit and Loss', 'Elementary Algebra',
                        'Geometry', 'Trigonometry', 'Elementary Statistics', 'Other topics specifically listed in current CEN.',
                    ],
                },
                {
                    title: 'General Intelligence and Reasoning',
                    bullets: [
                        'Analogies', 'Number Series', 'Alphabetical Series', 'Coding-Decoding', 'Mathematical Operations', 'Similarities and Differences',
                        'Relationships', 'Analytical Reasoning', 'Syllogism', 'Jumbling', 'Venn Diagrams', 'Puzzles', 'Data Sufficiency',
                        'Statement-Conclusion', 'Courses of Action', 'Decision Making', 'Maps', 'Graph Interpretation',
                    ],
                },
                {
                    title: 'General Awareness',
                    bullets: [
                        'Current Affairs', 'National and International Events', 'Games and Sports', 'Indian Art and Culture', 'Indian Literature',
                        'Monuments and Places', 'General Science', 'Life Science up to 10th CBSE level', 'Indian History', 'Freedom Struggle',
                        'Geography', 'Indian Polity and Constitution', 'Indian Economy', 'Environment', 'Space', 'Nuclear Programme',
                        'United Nations', 'Important International Organizations', 'Computer basics', 'Computer applications',
                        'Common abbreviations', 'Transport Systems in India', 'Government schemes/programmes', 'Public Sector organizations',
                        'Flora and Fauna', 'Famous personalities', 'Scientific and technological developments',
                    ],
                },
            ],
        },
        {
            id: 'subject-preparation',
            title: 'What Should I Study First?',
            paragraphs: [
                'Mathematics: start with arithmetic fundamentals, then move to advanced topics and timed practice.',
                'Reasoning: build topic familiarity first, then shift to mixed question practice.',
                'General Awareness: combine static GK, science, polity, history, geography and current affairs.',
                'Typing: practice every day because CBTST is a separate qualifying requirement.',
            ],
            table: {
                columns: ['Subject', 'Priority', 'Suggested Approach'],
                rows: [
                    ['Maths', 'High', 'Concept -> practice -> timed sets'],
                    ['Reasoning', 'High', 'Topic-wise -> mixed practice'],
                    ['General Awareness', 'Very High', 'Static + current affairs'],
                    ['Typing', 'Very High', 'Daily timed practice'],
                ],
            },
        },
        {
            id: 'books-resources',
            title: 'Recommended Books and Resources',
            note: 'These are independent preparation recommendations, not officially recommended by RRB.',
            table: {
                columns: ['Subject', 'Recommended Resource Type', 'Purpose'],
                rows: [
                    ['Mathematics', 'A standard competitive-exam quantitative aptitude book', 'Concepts + practice'],
                    ['Reasoning', 'A standard verbal/non-verbal reasoning book', 'Topic-wise practice'],
                    ['General Knowledge', 'A standard one-volume GK reference', 'Static GK'],
                    ['General Science', 'NCERT/school-level science resources', 'Physics/Chemistry/Biology foundation'],
                    ['Current Affairs', 'Reliable monthly current-affairs resource', 'Recent events'],
                    ['Typing', 'Computer typing practice software/site', 'WPM + accuracy'],
                    ['Previous Year Papers', 'RRB NTPC previous-year paper compilation', 'Pattern + time management'],
                ],
            },
        },
        {
            id: 'previous-papers',
            title: 'Previous Year Papers and Mock Tests',
            bullets: [
                'CBT-1 papers',
                'CBT-2 papers',
                'Topic-wise practice',
                'Shift-wise papers',
                'Full-length mocks',
                'Typing mock tests',
            ],
            paragraphs: [
                'Recommended strategy: first solve topic-wise sets, then previous-year full papers, then timed mocks.',
            ],
        },
        {
            id: 'qualifying-marks',
            title: 'Minimum Qualifying Marks',
            table: {
                columns: ['Category', 'Minimum qualifying percentage'],
                rows: [
                    ['UR', '40%'],
                    ['EWS', '40%'],
                    ['OBC-NCL', '30%'],
                    ['SC', '30%'],
                    ['ST', '25%'],
                ],
            },
            paragraphs: [
                'These are minimum qualifying percentages, not final cut-off marks.',
                'Actual cut-off varies by RRB, category, vacancy, candidate performance, normalization and recruitment cycle.',
            ],
        },
        {
            id: 'salary',
            title: 'Salary',
            table: {
                columns: ['Salary Component', 'Details'],
                rows: [
                    ['Pay Level', { text: 'Level 2', tone: 'accent' }],
                    ['Initial Basic Pay', { text: '₹19,900', tone: 'accent' }],
                    ['Allowances', 'As admissible under applicable rules'],
                    ['Deductions', 'Applicable statutory/service deductions'],
                    ['In-hand salary', { text: 'No fixed universal figure should be assumed', tone: 'warning' }],
                ],
            },
            paragraphs: [
                'Basic pay is not the same as gross salary, and gross salary is not the same as in-hand salary.',
                'Exact salary depends on posting, admissible allowances and deductions.',
            ],
        },
        {
            id: 'career-promotion',
            title: 'Career and Promotion',
            paragraphs: [
                'Promotion and career progression are governed by applicable Railway service rules and departmental procedures.',
                'Departmental structure, seniority position, cadre controls and selection procedures influence progression.',
                'No guaranteed promotion timeline should be assumed.',
            ],
        },
        {
            id: 'skills',
            title: 'Useful Skills for Accounts Clerk Cum Typist',
            note: 'Useful skills, not mandatory eligibility unless official rules specify them.',
            table: {
                columns: ['Skill', 'Why it matters'],
                rows: [
                    ['Typing', 'CBTST requirement'],
                    ['Computer basics', 'Daily office work'],
                    ['Numerical accuracy', 'Accounts-related records'],
                    ['Attention to detail', 'Avoiding errors'],
                    ['Record keeping', 'Office documentation'],
                    ['Communication', 'Correspondence'],
                    ['Time management', 'Meeting office deadlines'],
                    ['Basic spreadsheet skills', 'Useful for data/record work'],
                ],
            },
        },
        {
            id: 'pros-challenges',
            title: 'Advantages and Challenges',
            subsections: [
                {
                    title: 'Advantages',
                    table: {
                        columns: ['Point', 'Explanation'],
                        rows: [
                            ['Railway employment structure', 'Structured service framework.'],
                            ['Level 2 government pay', 'Defined pay structure under notified rules.'],
                            ['Clerical/accounts-oriented work', 'Suitable for office-document workflow preference.'],
                            ['Computer-based work', 'Relevant for digital-office skill growth.'],
                            ['Career progression opportunities', 'Progression possible under service procedures.'],
                            ['Service benefits', 'As applicable under current rules.'],
                        ],
                    },
                },
                {
                    title: 'Challenges',
                    table: {
                        columns: ['Point', 'Explanation'],
                        rows: [
                            ['Typing test', 'Separate qualifying stage must be cleared.'],
                            ['Accuracy requirements', 'Documentation errors can affect office work quality.'],
                            ['Repetitive clerical work', 'Routine tasks may be repetitive.'],
                            ['Record/document responsibility', 'Consistency and correctness are important.'],
                            ['Computer-based workload', 'Sustained screen/document processing work.'],
                            ['Posting/transfer considerations', 'Depends on administrative requirements and service rules.'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'comparison',
            title: 'Accounts Clerk Cum Typist vs Other NTPC UG Posts',
            note: 'Comparison based on applicable CEN post-wise parameters for the recruitment cycle.',
            table: {
                columns: ['Post', 'Pay Level', 'Medical', 'Typing Test'],
                rows: [
                    ['Accounts Clerk cum Typist', { text: 'Level 2', tone: 'accent' }, { text: 'C-2', tone: 'accent' }, { text: 'Yes', tone: 'accent' }],
                    ['Junior Clerk cum Typist', 'Level 2', 'C-2', 'Yes'],
                    ['Commercial Cum Ticket Clerk', 'Level 3', 'B-2', 'No'],
                    ['Trains Clerk', 'Level 2', 'A-3', 'No'],
                ],
            },
        },
        {
            id: 'documents',
            title: 'Documents Required (Indicative)',
            table: {
                columns: ['Document', 'Purpose'],
                rows: [
                    ['Educational Certificate', 'Qualification proof'],
                    ['10th Certificate', 'DOB/education proof as applicable'],
                    ['12th Marksheet/Certificate', 'Eligibility proof'],
                    ['Category Certificate', 'If applicable'],
                    ['PwBD Certificate', 'If applicable'],
                    ['Ex-servicemen documents', 'If applicable'],
                    ['Photo', 'Application'],
                    ['Signature', 'Application'],
                    ['Identity document', 'As required'],
                ],
            },
            note: 'Exact document requirements must be checked in the current notification.',
        },
        {
            id: 'application-process',
            title: 'Application Process',
            table: {
                columns: ['Step', 'Action'],
                rows: [
                    ['1', 'Read the current NTPC CEN.'],
                    ['2', 'Confirm eligibility.'],
                    ['3', 'Select the appropriate RRB/options according to notification.'],
                    ['4', 'Register.'],
                    ['5', 'Enter personal and educational information.'],
                    ['6', 'Upload documents/photo/signature.'],
                    ['7', 'Pay applicable fee.'],
                    ['8', 'Submit application.'],
                    ['9', 'Save registration/application details.'],
                    ['10', 'Monitor official RRB notices.'],
                ],
            },
        },
        {
            id: 'latest-recruitment',
            title: 'Latest Recruitment',
            warning: 'Recruitment-specific information - verify the latest official notice.',
            table: {
                columns: ['Field', 'Current cycle (CEN 07/2025 NTPC UG)'],
                rows: [
                    ['Recruitment', 'CEN 07/2025 NTPC Undergraduate'],
                    ['Post', 'Accounts Clerk Cum Typist'],
                    ['Pay', { text: 'Level 2 | ₹19,900', tone: 'accent' }],
                    ['Medical', { text: 'C-2', tone: 'accent' }],
                    ['Vacancy', { text: '394 (recruitment-specific)', tone: 'warning' }],
                    ['Application window', { text: 'Opened 28-10-2025; initial close 27-11-2025; check corrigendum for revised timelines', tone: 'warning' }],
                    ['Exam updates', { text: 'Application status, city intimation, call letter and revised CBT-I schedule notices published on official RRB pages', tone: 'warning' }],
                    ['Typing test update', { text: 'CBTST requirements are post-specific and should be checked in current CEN notices', tone: 'warning' }],
                    ['Admit card', 'Official RRB/Digialm link when active'],
                    ['Result', 'Official RRB notice/result page when published'],
                ],
            },
            note: 'Do not treat vacancy or timeline values as evergreen post attributes.',
            source: 'RRB Mumbai/Bhubaneswar official CEN 07/2025 notices and linked documents.',
        },
        {
            id: 'important-links',
            title: 'Important Links',
            table: {
                columns: ['Link', 'Purpose', 'URL'],
                rows: [
                    ['Official RRB Recruitment Notices', 'Latest notifications', { text: 'https://www.rrbbbs.gov.in/notifications.php', href: 'https://www.rrbbbs.gov.in/notifications.php' }],
                    ['Current NTPC UG Notification', 'CEN 07/2025', { text: 'https://rrbmumbai.gov.in/newpdf/CEN%2007-2025-NTPC%20(Under%20Graduate)%20English.pdf', href: 'https://rrbmumbai.gov.in/newpdf/CEN%2007-2025-NTPC%20(Under%20Graduate)%20English.pdf' }],
                    ['Application Portal', 'Only when currently active', { text: 'https://www.rrbapply.gov.in/', href: 'https://www.rrbapply.gov.in/' }],
                    ['Admit Card', 'When released', { text: 'https://rrb.digialm.com/EForms/configuredHtml/33128/100181/login.html', href: 'https://rrb.digialm.com/EForms/configuredHtml/33128/100181/login.html' }],
                    ['Result', 'When released', { text: 'https://www.rrbbbs.gov.in/cen.php?prmt=TkRFPQ==', href: 'https://www.rrbbbs.gov.in/cen.php?prmt=TkRFPQ==' }],
                ],
            },
            note: 'Do not treat closed or inactive links as currently active application windows.',
        },
        {
            id: 'image-licensing',
            title: 'Image Sources and Licensing',
            table: {
                columns: ['Image', 'Source', 'Source URL', 'Author', 'License', 'Attribution requirement', 'Attribution text', 'Download date'],
                rows: [
                    ['Hero office image', 'Unsplash', { text: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', href: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' }, 'Unsplash contributor', 'Unsplash License', 'Attribution not mandatory, but source retained', 'Photo from Unsplash for illustrative use', '2026-08-25'],
                    ['Office/clerical image', 'Unsplash', { text: 'https://images.unsplash.com/photo-1521791136064-7986c2920216', href: 'https://images.unsplash.com/photo-1521791136064-7986c2920216' }, 'Unsplash contributor', 'Unsplash License', 'Attribution not mandatory, but source retained', 'Photo from Unsplash for illustrative use', '2026-08-25'],
                    ['Selection-flow infographic', 'Original (this project)', '/images/rrb-ntpc-accounts-clerk-flow.svg', 'RojgarPath content team', 'Original artwork', 'No external attribution required', 'Generated for educational explanation', '2026-08-25'],
                ],
            },
            note: 'Images are illustrative and do not imply endorsement by Indian Railways or RRB.',
        },
    ],
    faqs: [
        ['What is Accounts Clerk Cum Typist?', 'It is an RRB NTPC undergraduate clerical/accounts-support post with a qualifying typing skill test.'],
        ['Is 12th qualification enough?', '12th (+2) is the base qualification, subject to marks condition and exemptions specified in current CEN.'],
        ['Is 50% required?', 'Current CEN states 50% aggregate with specified exemption categories.'],
        ['Who gets exemption from the 50% requirement?', 'As stated in CEN, including SC/ST, PwBD, Ex-servicemen and candidates with qualification higher than 12th (as applicable).'],
        ['Is graduation required?', 'No, this is an undergraduate stream post.'],
        ['Is typing test mandatory?', 'Yes, CBTST is applicable to this post.'],
        ['What is the typing speed?', { text: '30 WPM in English or 25 WPM in Hindi.', tone: 'accent' }],
        ['Is Hindi typing allowed?', 'Yes, as per notification provisions.'],
        ['Is English typing allowed?', 'Yes, as per notification provisions.'],
        ['Is the typing test qualifying?', { text: 'Yes, CBTST is qualifying in nature.', tone: 'accent' }],
        ['Are typing marks added to merit?', 'No, typing test marks are qualifying and not added to merit marks.'],
        ['What happens if I fail CBTST?', 'You do not qualify for further consideration for this post in that cycle.'],
        ['What is the medical standard?', { text: 'C-2 for Accounts Clerk Cum Typist in current CEN cycle.', tone: 'accent' }],
        ['Is there a physical efficiency test?', 'No separate police/defence-style PET is listed for this post in this NTPC process flow.'],
        ['How many CBT stages are there?', 'Two CBT stages: CBT-1 and CBT-2 before CBTST.'],
        ['How many questions are in CBT-1?', { text: '100 questions (100 marks).', tone: 'accent' }],
        ['How many questions are in CBT-2?', { text: '120 questions (120 marks).', tone: 'accent' }],
        ['Is negative marking applicable?', { text: 'Yes, 1/3 mark per wrong answer in CBTs.', tone: 'accent' }],
        ['What is the salary?', { text: 'Pay Level 2 with initial basic pay ₹19,900.', tone: 'accent' }],
        ['What is the job profile?', 'Primarily office-based clerical and accounts support, including records, documents and computer data entry tasks.'],
        ['What books should I study?', 'Use standard quantitative aptitude, reasoning, GK, school-level science, current affairs and typing practice resources.'],
        ['Where can I find previous-year papers?', 'Use authentic NTPC previous-year compilations and mock-test platforms for practice.'],
        ['Where can I check latest notification?', 'Official RRB notice pages and current CEN links only.'],
    ],
};

const railwayGroups = [
    { name: 'NTPC - UNDER GRADUATE', posts: [
        railwayPost('Commercial Cum Ticket Clerk', 'ntpc', {
            overview: 'Commercial Cum Ticket Clerks support passenger ticketing and commercial work at railway stations. The post is part of the NTPC undergraduate stream when included in the applicable CEN.',
            qualification: 'A recognised 12th-standard qualification is typical for the undergraduate NTPC stream; the current CEN controls marks, age, medical standard and post availability.',
            profile: 'Ticket issue and checking support, passenger guidance, cash and commercial records under station procedures.',
            pay: 'The applicable NTPC CEN states the pay level and allowances for Commercial Cum Ticket Clerk.',
            guide: commercialTicketClerkGuide,
            source: 'https://rrbmumbai.gov.in/CEN07_2025.php',
        }),
        railwayPost('Accounts Clerk Cum Typist', 'ntpc', {
            overview: 'Accounts Clerk Cum Typists maintain railway accounting records and routine office entries. The post combines clerical work with a qualifying computer typing test where prescribed.',
            extraQualifications: ['A typing skill test in English or Hindi may be prescribed; speed and exemption rules come from the current CEN.'],
            profile: 'Vouchers, ledgers, data entry, correspondence and account records in railway offices.',
            pay: 'The applicable NTPC CEN states the pay level and allowances for Accounts Clerk Cum Typist.',
            guide: accountsClerkCumTypistGuide,
            source: 'https://rrbmumbai.gov.in/CEN07_2025.php',
        }),
        railwayPost('Junior Clerk Cum Typist', 'ntpc', { overview: 'Junior Clerk Cum Typists provide clerical and data-entry support in railway offices and units. The post is recruited through the NTPC undergraduate stream when notified.', extraQualifications: ['A qualifying typing test may apply, with language and speed rules set by the current CEN.'], profile: 'Correspondence, registers, computer entries, filing and routine office support.', pay: 'The applicable NTPC CEN states the pay level and allowances for Junior Clerk Cum Typist.' }),
        railwayPost('Trains Clerk', 'ntpc', { overview: 'Trains Clerks maintain train and vehicle records and support operating staff with documentation at stations or yards. The exact medical category and duties are notification-specific.', profile: 'Train consist records, arrival and departure documentation, vehicle registers and coordination with operating staff.', pay: 'The applicable NTPC CEN states the pay level and allowances for Trains Clerk.' }),
    ] },
    { name: 'NTPC - GRADUATE', posts: [
        railwayPost('Chief Commercial Cum Ticket Supervisor', 'ntpc', { overview: 'Chief Commercial Cum Ticket Supervisors oversee passenger-facing commercial work, ticketing and station commercial operations. The post belongs to the NTPC graduate stream when included in the CEN.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; the current CEN controls age, medical category and other conditions.', profile: 'Supervision of ticketing, passenger services, revenue records and commercial staff at stations or units.', pay: 'The applicable NTPC CEN states the pay level and allowances for Chief Commercial Cum Ticket Supervisor.' }),
        railwayPost('Station Master', 'ntpc', { overview: 'Station Masters coordinate safe station working and train movement in accordance with operating rules. This is a safety-sensitive operating post, so the applicable medical and aptitude requirements are important.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; the current CEN controls age, medical category, colour vision and other conditions.', selection: 'CBT 1, CBT 2, Computer Based Aptitude Test where prescribed, document verification and the notified railway medical examination.', extraQualifications: ['Aptitude testing and stricter vision, hearing and colour-perception standards may apply to this safety post.'], physicalRequirements: 'The notified railway medical standard may include strict vision and colour-perception requirements; verify the current CEN.', profile: 'Station control, train movement coordination, signalling and safety-rule compliance.', pay: 'The applicable NTPC CEN states the pay level, running or night-duty allowances and other benefits.' }),
        railwayPost('Goods Train Manager', 'ntpc', { overview: 'Goods Train Managers supervise the safe working and documentation of freight trains. The role involves coordination with the loco crew, control office, stations and yard staff.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; the current CEN controls age, medical category and other conditions.', profile: 'Freight train documentation, brake and load checks, operational communication and safe train handover.', pay: 'The applicable NTPC CEN states the pay level and operational allowances for Goods Train Manager.' }),
        railwayPost('Junior Account Assistant Cum Typist', 'ntpc', { overview: 'Junior Account Assistants Cum Typists handle accounting entries, reconciliations and office records in railway accounts units.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; a qualifying typing test may apply under the current CEN.', profile: 'Accounting records, bills, vouchers, data entry and correspondence in railway accounts offices.', pay: 'The applicable NTPC CEN states the pay level and allowances for Junior Account Assistant Cum Typist.' }),
        railwayPost('Senior Clerk Cum Typist', 'ntpc', { overview: 'Senior Clerks Cum Typists perform experienced clerical, records and correspondence work in railway offices and units.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; typing rules come from the current CEN.', profile: 'Supervisory clerical records, correspondence, registers and computer-based office administration.', pay: 'The applicable NTPC CEN states the pay level and allowances for Senior Clerk Cum Typist.' }),
        railwayPost('Senior Commercial Cum Ticket Clerk', 'ntpc', { overview: 'Senior Commercial Cum Ticket Clerks support and supervise passenger ticketing and commercial records at railway stations and offices.', qualification: 'A recognised university degree is typical for the graduate NTPC stream; the current CEN controls the exact eligibility.', profile: 'Passenger ticketing supervision, revenue records, customer service and commercial reporting.', pay: 'The applicable NTPC CEN states the pay level and allowances for Senior Commercial Cum Ticket Clerk.' }),
    ] },
    { name: 'TECHNICAL & ENGINEERING', posts: [
        railwayPost('Assistant Loco Pilot (ALP)', 'technical', { overview: 'Assistant Loco Pilots assist with locomotive operation, train preparation, equipment observation and safe running under the Loco Pilot. The post has a safety-sensitive medical standard.', qualification: 'Class 10 with an accepted ITI trade, or an accepted diploma or degree in engineering, is required as specified by the current ALP CEN.', selection: 'CBT 1, CBT 2, Computer Based Aptitude Test, document verification and the prescribed railway medical examination.', extraQualifications: ['The current CEN controls accepted trades, engineering disciplines, age and A1 medical requirements.'], physicalRequirements: 'A1 medical requirements can include strict distant and near vision, colour perception and other standards; verify the current ALP CEN.', subjects: ['Mathematics', 'Mental ability', 'General science and engineering', 'Basic technical knowledge for the notified trade', 'Computer Based Aptitude Test components'], profile: 'Locomotive cab assistance, equipment checks, signals and communication, troubleshooting support and safe train operation.', pay: 'The ALP CEN states the pay level, running allowance and other railway benefits.' }),
        railwayPost('Technician', 'technical', { overview: 'Railway Technicians inspect, maintain and repair notified electrical, mechanical, signal, telecom or other railway equipment. Grade and trade requirements differ between Technician categories.', qualification: 'Class 10 plus an accepted ITI trade or another qualification listed for the notified Technician grade and trade.', extraQualifications: ['The current Technician CEN controls trade equivalence, age, medical category and certificate requirements.'], profile: 'Preventive maintenance, testing, fault finding, repair support and technical safety records.', pay: 'The current Technician CEN states the grade-specific pay level and allowances.' }),
        railwayPost('Junior Engineer (JE)', 'technical', { overview: 'Railway Junior Engineers supervise technical maintenance, works, inspections and records in their notified engineering discipline.', qualification: 'A diploma or degree in the notified engineering discipline is required as specified by the current JE and DMS CEN.', selection: 'CBT 1, CBT 2 with technical abilities, document verification and the notified railway medical examination.', subjects: ['Mathematics and general intelligence', 'General awareness and science', 'Civil, electrical, mechanical, electronics or other notified technical discipline'], profile: 'Technical inspection, estimation, maintenance planning, quality control and supervision of railway assets.', pay: 'The current JE and DMS CEN states the pay level and allowances.' }),
        railwayPost('Depot Material Superintendent (DMS)', 'technical', { overview: 'Depot Material Superintendents manage stores, materials and inventory processes that support railway maintenance and operations.', qualification: 'A degree or diploma and any other conditions must match the current JE and DMS CEN; there is no universal qualification outside that notice.', profile: 'Material receipt, stock records, issue control, procurement support and depot inventory administration.', pay: 'The current JE and DMS CEN states the pay level and allowances for DMS.' }),
        railwayPost('Chemical & Metallurgical Assistant (CMA)', 'technical', { overview: 'Chemical and Metallurgical Assistants support testing and quality control of materials, fuels, water and components used by railway workshops and engineering units.', qualification: 'The relevant science or engineering qualification, subjects, age and medical standards must be taken from the current RRB technical CEN.', profile: 'Laboratory testing, material analysis, quality records and technical support for railway production and maintenance.', pay: 'Pay and allowances are specified in the current recruitment notice for the post.' }),
        railwayPost('Chemical Supervisor', 'technical', { overview: 'Chemical Supervisors oversee notified laboratory and material-quality work in railway production or maintenance organisations.', qualification: 'The current railway notice controls the required chemistry or related qualification, experience, age and other conditions.', profile: 'Supervision of chemical testing, reports, laboratory safety and material quality processes.', pay: 'Pay and allowances are specified in the current recruitment notice.' }),
        railwayPost('Metallurgical Supervisor', 'technical', { overview: 'Metallurgical Supervisors support testing and quality assurance of metals, alloys, components and production processes in railway units.', qualification: 'The current railway notice controls the required metallurgical or related qualification, experience, age and other conditions.', profile: 'Metallurgical testing, inspection, quality reports and workshop or production-unit support.', pay: 'Pay and allowances are specified in the current recruitment notice.' }),
    ] },
    { name: 'JUNIOR ENGINEER - SPECIALIZATIONS', posts: ['JE Civil', 'JE P-Way', 'JE Works', 'JE Electrical', 'JE Mechanical', 'JE Signal', 'JE Telecommunication', 'JE S&T', 'JE Track Machine', 'JE Carriage & Wagon', 'JE Diesel', 'JE Workshop', 'Other JE Disciplines'].map((title) => railwayPost(title, 'technical', { overview: `${title} is a discipline-specific Junior Engineer route supporting railway assets and systems. The exact qualification, syllabus, department and medical standard depend on the discipline listed in the applicable JE CEN.` })) },
    { name: 'LEVEL-1 / GROUP-D', posts: ['Track Maintainer Grade IV', 'Pointsman', 'Assistant P-Way', 'Assistant Bridge', 'Assistant Track Machine', 'Assistant C&W', 'Assistant Loco Shed', 'Assistant Operations', 'Assistant TL & AC', 'Assistant Signal & Telecom', 'Other Assistant Posts'].map((title) => railwayPost(title, 'level1', { overview: `${title} is a Level-1 railway support role. Duties are field, workshop, station or equipment-specific and are assigned according to the department and post named in the current Level-1 CEN.`, searchText: `${title} RRB Level 1 Group D` })) },
    { name: 'SECTION CONTROLLER', posts: [railwayPost('Section Controller', 'safety', { overview: 'Section Controllers coordinate train operations over an assigned territory from a control office. The role requires concentration, communication and detailed knowledge of operating rules.', qualification: 'The current Section Controller CEN controls the required degree, age, medical category, aptitude and other conditions.', selection: 'Computer-based examination, aptitude or other assessment where prescribed, document verification and the notified railway medical examination.', physicalRequirements: 'Safety-category medical and aptitude requirements can apply; read the current Section Controller CEN rather than assuming a general standard.', profile: 'Train regulation, control-room communication, disruption management, punctuality monitoring and coordination with stations and field staff.' })] },
    { name: 'RPF', posts: [railwayPost('RPF Constable', 'rpf'), railwayPost('RPF Sub Inspector (SI)', 'rpf', { overview: 'RPF Sub Inspectors perform supervisory security, investigation and enforcement duties under the Railway Protection Force. Physical and medical stages are distinct from RRB civilian recruitment.', qualification: 'The current RPF SI notice controls the degree requirement, age, nationality, physical standards, reservation and medical conditions.', subjects: ['General awareness', 'Arithmetic', 'General intelligence and reasoning', 'Current affairs and railway security awareness'], profile: 'Supervision of RPF personnel, passenger and railway-property security, incident response, investigation support and station-area enforcement.', searchText: 'RPF Sub Inspector SI RPF SI' })] },
    { name: 'PARAMEDICAL', posts: ['Nursing Superintendent', 'Pharmacist', 'Health & Malaria Inspector', 'Laboratory Assistant', 'Radiographer / X-Ray Technician', 'ECG Technician', 'Dialysis Technician', 'Dietician', 'Physiotherapist', 'Dental Hygienist', 'Occupational Therapist', 'Audiologist & Speech Therapist', 'Other Paramedical Posts'].map((title) => railwayPost(title, 'medical', { overview: `${title} is a professional healthcare role in railway hospitals or health units. Qualification, registration, experience, age and the exact syllabus must be matched to the current Paramedical CEN.` })) },
    { name: 'MINISTERIAL & ISOLATED CATEGORIES', posts: ['Junior Translator / Hindi Translator', 'Senior Publicity Inspector', 'Staff & Welfare Inspector', 'Chief Law Assistant', 'Librarian', 'Primary Teacher', 'Trained Graduate Teacher (TGT)', 'Post Graduate Teacher (PGT)', 'Physical Training Instructor', 'Music Teacher', 'Junior Stenographer', 'Senior Stenographer', 'Laboratory Assistant', 'Other Isolated Posts'].map((title) => railwayPost(title, 'isolated', { overview: `${title} is a specialist Railway isolated-category post. The current CEN sets the subject, professional qualification, language, skill, teaching or experience requirements for the particular post.` })) },
    { name: 'APPRENTICE / RRC', posts: [railwayPost('RRC Apprentice', 'apprentice'), railwayPost('Act Apprentice', 'apprentice', { overview: 'Act Apprentices receive trade training in a railway establishment under the Apprentices Act and the applicable RRC notification. Engagement does not itself guarantee regular railway employment.' }), railwayPost('Trade Apprentice', 'apprentice', { overview: 'Trade Apprentices undertake practical and related instruction in a notified railway trade. The RRC notice determines the establishment, trade, merit method and certificate requirements.' })] },
    { name: 'SPECIAL RECRUITMENT', posts: ['Sports Quota', 'Scouts & Guides Quota', 'Cultural Quota', 'Other Special Recruitment'].map((title) => railwayPost(title, 'quota', { overview: `${title} is a special Railway recruitment channel published by a zonal Railway Recruitment Cell or railway unit. It is not an annual universal vacancy; the current quota notice controls eligibility and assessment.` })) },
];

export const categoryAdditions = {
    railway: railwayGroups,
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
