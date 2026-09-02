// Shared utilities and metadata for all categories
// This file contains helper functions and basic metadata used across categories

export const evergreenPost = ({
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
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
];

export const recruitments = [
    { slug: 'ssc-current', exam: 'SSC examinations', authority: 'SSC', status: 'Check live notices and calendar' },
    { slug: 'upsc-current', exam: 'UPSC examinations', authority: 'UPSC', status: 'Check live notices and calendar' },
    { slug: 'ibps-current', exam: 'IBPS Common Recruitment Process', authority: 'IBPS', status: 'Check current CRP notices' },
];

export const makeCategory = (slug, name, tagline, groupName, posts) => ({ slug, name, tagline, groups: [{ name: groupName, posts }] });
