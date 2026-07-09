import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const HCDCareerLattice = () => {
  const [view, setView] = useState('landing');
  const [selectedBU, setSelectedBU] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [startingRole, setStartingRole] = useState(null);
  const [pathType, setPathType] = useState(null);
  const [customPath, setCustomPath] = useState([]);
  const [selectedPathIndex, setSelectedPathIndex] = useState(null);

  const colors = {
    navy: '#0D1B3D',
    orange: '#E65100',
    cream: '#FEF9F3',
    light: '#F5EFE7',
    border: '#E5D5C8'
  };

  // Training Portfolio
  const trainingPortfolio = {
    'SPECIALIST (Entry-Level)': {
      program: 'Program On-the-GO',
      cost: '₱800.00',
      audience: 'SPECIALISTS',
      modules: ['Work Attitude & Values Enhancement', '360° Feedback on Communication', 'Telephone Courtesy & Netiquette', 'Microsoft Excel (Basic & Advance)', 'Time Management', 'Basic Grammar & Report Writing', 'Business Correspondence', '8H Mandatory Employee Orientation (MEOSH)']
    },
    'GENERALIST (Intermediate)': {
      program: 'Functional Training Programs',
      cost: '₱1,500.00',
      audience: 'GENERALISTS',
      modules: ['HR Management 101', 'Site Management & Administration 101', 'Labor Relations 101', 'Accounting for Non-Accountants', 'Corporate Finance & Budgeting', 'Engineering 101', 'Procurement 101', 'Hazard Identification, Risk Assessment & Controls (HIRAC)']
    },
    'LEAD (Officer Level)': {
      program: 'Leadership Foundations: Transitioning to Leader',
      cost: '₱1,800.00',
      audience: 'LEADS',
      modules: ['Basic Supervision', 'Developing Extraordinary Leaders', 'Interaction Management (IM) Essentials', 'Communicating for Leadership Success', 'Performance Management 101', 'Delivering Value to the Business', '12-Step Problem Solving', 'Decision Analysis Framework', 'Presentation Skills', 'Loss Control Management (LCM)', 'EHSS Management']
    },
    'BUSINESS PARTNER (Supervisory)': {
      program: 'PGB Leadership Imperatives',
      cost: '₱2,500.00',
      audience: 'BUSINESS PARTNERS',
      modules: ['IMPERATIVE 1: Coach & Develop for Results', 'IMPERATIVE 2: Manage Work & Drive Performance', 'IMPERATIVE 3: Inspire Loyalty & Trust', 'IMPERATIVE 4: Partner Within & Across Teams', 'IMPERATIVE 5: Influence Through Personal Power', 'IMPERATIVE 6: Selecting Talent in Promoting & Hiring', 'IMPERATIVE 7: Business Impact of EHSS Among Leaders']
    },
    'STRATEGIC PARTNER (Managerial)': {
      program: 'PGB Executive Leadership: Defying Convention',
      cost: '₱3,500.00',
      audience: 'STRATEGIC PARTNERS',
      modules: ['Executive Presence', 'Building a Strong Personal Brand Through People', 'Strategic Leadership', 'Using Critical & Strategic Thinking Skills', 'Fostering Innovation', 'Turning Weakness & Threats to Greater Opportunities', 'Making High Quality Decisions', 'Delegating with Purpose', 'Intrapreneurship', 'Purposeful Curiosity: The Power of Asking Right Questions', 'EHSS as a Strategic Business Partner']
    }
  };

  // Competency Map
  const competencyMap = {
    'SPECIALIST (Entry-Level)': {
      core: { 'Planning and Organizing': 'Basic', 'Decision Making & Problem Solving': 'Basic', 'Leadership': 'Not required', 'Innovation': 'Basic', 'Communication': 'Basic', 'Customer Focus': 'Basic', 'Business Acumen': 'Basic' },
      technical: { 'Strategic Management': 'Not required', 'Consensus Building': 'Not required', 'Governance Support': 'Not required', 'Project/Program Management': 'Not required', 'Administrative Management': 'Moderately required' }
    },
    'GENERALIST (Intermediate)': {
      core: { 'Planning and Organizing': 'Intermediate', 'Decision Making & Problem Solving': 'Intermediate', 'Leadership': 'Basic', 'Innovation': 'Intermediate', 'Communication': 'Intermediate', 'Customer Focus': 'Intermediate', 'Business Acumen': 'Intermediate' },
      technical: { 'Strategic Management': 'Not required', 'Consensus Building': 'Moderately required', 'Governance Support': 'Moderately required', 'Project/Program Management': 'Moderately required', 'Administrative Management': 'Highly required' }
    },
    'LEAD (Officer Level)': {
      core: { 'Planning and Organizing': 'Advanced', 'Decision Making & Problem Solving': 'Advanced', 'Leadership': 'Advanced', 'Innovation': 'Advanced', 'Communication': 'Advanced', 'Customer Focus': 'Advanced', 'Business Acumen': 'Advanced' },
      technical: { 'Strategic Management': 'Moderately required', 'Consensus Building': 'Highly required', 'Governance Support': 'Highly required', 'Project/Program Management': 'Highly required', 'Administrative Management': 'Highly required' }
    },
    'BUSINESS PARTNER (Supervisory)': {
      core: { 'Planning and Organizing': 'Advanced', 'Decision Making & Problem Solving': 'Advanced', 'Leadership': 'Advanced', 'Innovation': 'Advanced', 'Communication': 'Advanced', 'Customer Focus': 'Advanced', 'Business Acumen': 'Advanced' },
      technical: { 'Strategic Management': 'Highly required', 'Consensus Building': 'Highly required', 'Governance Support': 'Highly required', 'Project/Program Management': 'Highly required', 'Administrative Management': 'Highly required' }
    },
    'STRATEGIC PARTNER (Managerial)': {
      core: { 'Planning and Organizing': 'Advanced', 'Decision Making & Problem Solving': 'Advanced', 'Leadership': 'Advanced', 'Innovation': 'Advanced', 'Communication': 'Advanced', 'Customer Focus': 'Advanced', 'Business Acumen': 'Advanced' },
      technical: { 'Strategic Management': 'Highly required', 'Consensus Building': 'Highly required', 'Governance Support': 'Highly required', 'Project/Program Management': 'Highly required', 'Administrative Management': 'Highly required' }
    }
  };

  // Complete Role Directory from Excel
  const roleDirectory = {
    'Technical-Vocational Education Training (TVET)': {
      icon: '🔧',
      sections: {
        'Training & Assessment': [
          { title: 'Training & Assessment Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Training & Assessment Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Training & Assessment Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Trainer I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Trainer II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Trainer III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Training & Assessment', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Training & Assessment', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Training & Assessment', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst, TVET Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'TVET Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, TVET', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, TVET', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, TVET', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, TVET', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Certification & Documentation': [
          { title: 'Certification & Documentation Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Certification & Documentation Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Certification & Documentation Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Registrar I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Registrar II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Registrar III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead Certification & Document Controller I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead Certification & Document Controller II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead Certification & Document Controller III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. TVET Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'TVET Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, TVET', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, TVET', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, TVET', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, TVET', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ]
      }
    },
    'Academe - Senior High (SHS)': {
      icon: '📚',
      sections: {
        'Academic Instruction': [
          { title: 'Academic Instruction Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Academic Instruction Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Academic Instruction Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Teacher I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Teacher II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Teacher III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead Teacher I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead Teacher II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead Teacher III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SHS Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, SHS', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, SHS', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, SHS', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, SHS', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Student Affairs': [
          { title: 'Student Affair Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Student Affair Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Student Affair Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Generalist I, Student Affairs Office', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist II, Student Affairs Office', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist III, Student Affairs Office', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Student Affairs Office', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Student Affairs Office', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Student Affairs Office', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SHS Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, SHS', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, SHS', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, SHS', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, SHS', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Guidance & Counseling': [
          { title: 'Guidance & Counseling Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Guidance & Counseling Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Guidance & Counseling Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Guidance & Counseling Generalist I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Guidance & Counseling Generalist II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Guidance & Counseling Generalist III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Guidance & Counseling Officer I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Guidance & Counseling Officer II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Guidance & Counseling Officer III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SHS Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, SHS', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, SHS', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, SHS', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, SHS', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Resource Center': [
          { title: 'Resource Center Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Resource Center Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Resource Center Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Librarian I, Resource Center', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Librarian II, Resource Center', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Librarian III, Resource Center', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Resource Center', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Resource Center', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Resource Center', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SHS Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, SHS', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, SHS', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, SHS', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, SHS', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Registrar': [
          { title: 'Associate I, Office of the Registrar', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Associate II, Office of the Registrar', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Associate III, Office of the Registrar', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Registrar I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Registrar II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Registrar III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Office of the Registrar', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Office of the Registrar', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Office of the Registrar', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SHS Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, SHS', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, SHS', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, SHS', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, SHS', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ]
      }
    },
    'Shared Services': {
      icon: '⚙️',
      sections: {
        'Marketing & Communications': [
          { title: 'Marketing & Communications Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Marketing & Communications Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Marketing & Communications Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Marketing & Communications Officer I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Marketing & Communications Officer II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Marketing & Communications Officer III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Marketing & Communications', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Marketing & Communications', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Marketing & Communications', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. MAC Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'MAC Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, MAC', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, MAC', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, MAC', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, MAC', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Supply Chain Management': [
          { title: 'SCM Specialist I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'SCM Specialist II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'SCM Specialist III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'SCM Generalist I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'SCM Generalist II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'SCM Generalist III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Supply Chain Mgt', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Supply Chain Mgt', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Supply Chain Mgt', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'BP I, Supply Chain Mgt', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP II, Supply Chain Mgt', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP III, Supply Chain Mgt', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SP I, Supply Chain Mgt', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP II, Supply Chain Mgt', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP III, Supply Chain Mgt', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Finance & Accounting': [
          { title: 'FAD Specialist I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'FAD Specialist II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'FAD Specialist III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'FAD Generalist I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'FAD Generalist II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'FAD Generalist III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Finance & Accounting', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Finance & Accounting', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Finance & Accounting', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'BP I, Finance & Accounting', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP II, Finance & Accounting', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP III, Finance & Accounting', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SP I, Finance & Accounting', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP II, Finance & Accounting', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP III, Finance & Accounting', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Human Resources': [
          { title: 'HR Specialist I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'HR Specialist II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'HR Specialist III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'HR Generalist I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'HR Generalist II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'HR Generalist III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Human Resources', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Human Resources', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Human Resources', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'BP I, Human Resources', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP II, Human Resources', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP III, Human Resources', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SP I, Human Resources', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP II, Human Resources', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP III, Human Resources', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Information & Technology': [
          { title: 'IT Specialist I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'IT Specialist II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'IT Specialist III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'IT Generalist I', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'IT Generalist II', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'IT Generalist III', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Lead I, Information & Technology', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Lead II, Information & Technology', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Lead III, Information & Technology', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'BP I, Information & Technology', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP II, Information & Technology', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'BP III, Information & Technology', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'SP I, Information & Technology', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP II, Information & Technology', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'SP III, Information & Technology', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ]
      }
    },
    'Corporate Foundation': {
      icon: '🏢',
      sections: {
        'Projects & Grants': [
          { title: 'Projects & Grants Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Projects & Grants Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Projects & Grants Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Generalist I, Projects & Grants', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist II, Projects & Grants', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist III, Projects & Grants', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Projects & Grants Officer I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Projects & Grants Officer II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Projects & Grants Officer III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. PG Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Projects & Grants Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, CorF', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, CorF', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, CorF', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, CorF', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Enterprise & Business Development': [
          { title: 'Enterprise & Bus. Dev Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Enterprise & Bus. Dev Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Enterprise & Bus. Dev Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Generalist I, EBD', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist II, EBD', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist III, EBD', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Project Management Officer I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Project Management Officer II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Project Management Officer III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. EBD Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Enterprise & Bus Dev Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, CorF', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, CorF', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, CorF', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, CorF', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ],
        'Linkage & Engagement': [
          { title: 'Linkage & Engagement Associate I', grade: 'JG1', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Linkage & Engagement Associate II', grade: 'JG2', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Linkage & Engagement Associate III', grade: 'JG3', level: 'SPECIALIST (Entry-Level)' },
          { title: 'Generalist I, Linkage & Engagement', grade: 'JG4', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist II, Linkage & Engagement', grade: 'JG5', level: 'GENERALIST (Intermediate)' },
          { title: 'Generalist III, Linkage & Engagement', grade: 'JG6', level: 'GENERALIST (Intermediate)' },
          { title: 'Community Mobilization Officer I', grade: 'JG7', level: 'LEAD (Officer Level)' },
          { title: 'Community Mobilization Officer II', grade: 'JG8', level: 'LEAD (Officer Level)' },
          { title: 'Community Mobilization Officer III', grade: 'JG9', level: 'LEAD (Officer Level)' },
          { title: 'Asst. Linkage & Engagement Supervisor', grade: 'JG10', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Linkage & Engagement Supervisor', grade: 'JG11', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Section Head, CorF', grade: 'JG12', level: 'BUSINESS PARTNER (Supervisory)' },
          { title: 'Department Head, CorF', grade: 'JG13', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Manager, CorF', grade: 'JG14', level: 'STRATEGIC PARTNER (Managerial)' },
          { title: 'Director, CorF', grade: 'JG15', level: 'STRATEGIC PARTNER (Managerial)' }
        ]
      }
    }
  };

  const getAvailableRoles = (currentGrade, pathType) => {
    const gradeOrder = ['JG1', 'JG2', 'JG3', 'JG4', 'JG5', 'JG6', 'JG7', 'JG8', 'JG9', 'JG10', 'JG11', 'JG12', 'JG13', 'JG14', 'JG15'];
    const currentIndex = gradeOrder.indexOf(currentGrade);

    if (pathType === 'vertical') {
      const allRolesInSection = roleDirectory[selectedBU].sections[selectedSection] || [];
      return allRolesInSection.filter(r => gradeOrder.indexOf(r.grade) > currentIndex);
    } else if (pathType === 'lateral') {
      const otherRoles = [];
      Object.entries(roleDirectory[selectedBU].sections).forEach(([section, roles]) => {
        if (section !== selectedSection) {
          roles.forEach(role => {
            const roleIndex = gradeOrder.indexOf(role.grade);
            if (Math.abs(roleIndex - currentIndex) <= 2) {
              otherRoles.push({ ...role, section });
            }
          });
        }
      });
      return otherRoles;
    }
    return [];
  };

  // Landing
  const renderLanding = () => (
    <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: colors.navy, textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
          HCD Career Lattice 🎯
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {Object.entries(roleDirectory).map(([buKey, bu]) => (
            <div
              key={buKey}
              onClick={() => { setSelectedBU(buKey); setView('sections'); }}
              style={{
                backgroundColor: 'white',
                border: '3px solid ' + colors.orange,
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{bu.icon}</div>
              <h2 style={{ fontSize: '1.3rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>{buKey}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors.orange, fontWeight: 'bold' }}>
                Explore <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Sections
  const renderSections = () => {
    const bu = roleDirectory[selectedBU];
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('landing')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>
          <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>{selectedBU}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {Object.keys(bu.sections).map(section => (
              <div key={section} onClick={() => { setSelectedSection(section); setView('roles'); }} style={{ backgroundColor: 'white', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '20px', cursor: 'pointer' }}>
                <h3 style={{ margin: 0, color: colors.navy, fontWeight: 'bold' }}>📂 {section}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px', marginBottom: 0 }}>15 roles</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Roles
  const renderRoles = () => {
    const roles = roleDirectory[selectedBU].sections[selectedSection];
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('sections')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>
          <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>{selectedSection}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {roles.map((role, idx) => (
              <div key={`role-${idx}`} onClick={() => { setSelectedRole(role); setView('roleDetail'); }} style={{ backgroundColor: 'white', border: '2px solid ' + colors.border, borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
                <h3 style={{ margin: '0 0 8px 0', color: colors.navy, fontWeight: 'bold', fontSize: '0.95rem' }}>{role.title}</h3>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <div>{role.grade}</div>
                  <div style={{ marginTop: '4px', fontSize: '0.75rem' }}>{role.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Role Detail
  const renderRoleDetail = () => {
    if (!selectedRole) return null;
    const training = trainingPortfolio[selectedRole.level];
    const competencies = competencyMap[selectedRole.level];

    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('roles')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid ' + colors.orange, borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '1.8rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>{selectedRole.title}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              <div><p style={{ fontSize: '0.75rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>GRADE</p><p style={{ fontSize: '1.1rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.grade}</p></div>
              <div><p style={{ fontSize: '0.75rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>LEVEL</p><p style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.level}</p></div>
            </div>

            {competencies && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>7 Core Competencies</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {Object.entries(competencies.core).map(([comp, level], idx) => (
                      <div key={`roledetail-core-${idx}`} style={{ padding: '8px 10px', backgroundColor: '#F0F8FF', borderRadius: '6px', fontSize: '0.8rem', color: colors.navy, borderLeft: '3px solid ' + colors.orange }}>
                        <div style={{ fontWeight: 'bold' }}>{comp}</div>
                        <div style={{ fontSize: '0.7rem', color: '#666' }}>{level}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>5 Technical Competencies</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {Object.entries(competencies.technical).map(([comp, level], idx) => (
                      <div key={`roledetail-tech-${idx}`} style={{ padding: '8px 10px', backgroundColor: '#FFF0E6', borderRadius: '6px', fontSize: '0.8rem', color: colors.navy, borderLeft: '3px solid #FF9500' }}>
                        <div style={{ fontWeight: 'bold' }}>{comp}</div>
                        <div style={{ fontSize: '0.7rem', color: '#666' }}>{level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {training && (
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>PGB L&D Training Program</h2>
                <div style={{ backgroundColor: '#FFF9E6', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
                  <h3 style={{ margin: '0 0 6px 0', color: colors.navy, fontWeight: 'bold', fontSize: '0.95rem' }}>{training.program}</h3>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    <div>Audience: {training.audience}</div>
                    <div>Modules: {training.modules.length}</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
                  {training.modules.map((module, idx) => (
                    <div key={`role-module-${idx}`} style={{ padding: '6px 10px', backgroundColor: colors.light, borderRadius: '4px', fontSize: '0.75rem', color: colors.navy, border: '1px solid ' + colors.border }}>
                      ✓ {module}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ backgroundColor: colors.light, borderRadius: '8px', padding: '16px', border: '2px solid ' + colors.orange }}>
              <p style={{ fontSize: '0.95rem', color: colors.navy, fontWeight: 'bold', marginBottom: '12px', margin: 0, marginBottom: '12px' }}>
                📍 Is this your starting point?
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  onClick={() => { setStartingRole(selectedRole); setView('pathSelection'); }}
                  style={{ padding: '10px', backgroundColor: colors.orange, color: colors.cream, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Yes, This is Me
                </button>
                <button
                  onClick={() => setView('roles')}
                  style={{ padding: '10px', backgroundColor: colors.light, color: colors.navy, border: '1px solid ' + colors.border, borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  No, Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Path Selection
  const renderPathSelection = () => {
    if (!startingRole) return null;
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('roleDetail')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>
          <h1 style={{ fontSize: '1.8rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>Starting from: {startingRole.title}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div onClick={() => { setPathType('vertical'); setCustomPath([startingRole.title]); setView('buildPath'); }} style={{ backgroundColor: 'white', border: '3px solid #FF6B6B', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📈</div>
              <h2 style={{ fontSize: '1.2rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Vertical Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Advance in same section</p>
            </div>
            <div onClick={() => { setPathType('lateral'); setCustomPath([startingRole.title]); setView('buildPath'); }} style={{ backgroundColor: 'white', border: '3px solid #4ECDC4', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>↔️</div>
              <h2 style={{ fontSize: '1.2rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Lateral Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Move across sections</p>
            </div>
            <div onClick={() => { setPathType('diagonal'); setStartingRole(null); setSelectedRole(null); setSelectedSection(null); setSelectedBU(null); setView('landing'); }} style={{ backgroundColor: 'white', border: '3px solid #96CEB4', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔄</div>
              <h2 style={{ fontSize: '1.2rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Diagonal Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Different Business Unit</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Build Path
  const renderBuildPath = () => {
    if (!startingRole) return null;
    const availableRoles = getAvailableRoles(startingRole.grade, pathType);
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('pathSelection')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>
          <h1 style={{ fontSize: '1.8rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>
            {pathType === 'vertical' && '📈 Vertical'} {pathType === 'lateral' && '↔️ Lateral'} {pathType === 'diagonal' && '🔄 Diagonal'}
          </h1>

          <div style={{ backgroundColor: 'white', border: '2px solid ' + colors.orange, borderRadius: '12px', padding: '20px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>Your Path:</h2>
            {customPath.map((roleTitle, idx) => (
              <div key={`path-item-${idx}`} style={{ backgroundColor: colors.light, padding: '10px 12px', borderRadius: '6px', marginBottom: '8px', borderLeft: '4px solid ' + colors.orange }}>
                <div style={{ fontWeight: 'bold', color: colors.navy, fontSize: '0.9rem' }}>{roleTitle}</div>
              </div>
            ))}
          </div>

          {availableRoles.length > 0 && (
            <div style={{ backgroundColor: 'white', border: '2px solid ' + colors.border, borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>Next Steps:</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
                {availableRoles.slice(0, 12).map((role, idx) => (
                  <button key={`next-role-${idx}`} onClick={() => setCustomPath([...customPath, role.title])} style={{ padding: '10px 12px', backgroundColor: colors.light, border: '1px solid ' + colors.border, borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold', color: colors.navy }}>
                    {role.title}
                    <div style={{ fontSize: '0.7rem', marginTop: '4px' }}>{role.grade}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {customPath.length > 1 && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button
                onClick={() => setView('trainingPlan')}
                style={{
                  padding: '14px 28px',
                  backgroundColor: colors.orange,
                  color: colors.cream,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
              >
                🎯 Show your path forward
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Training Plan
  const renderTrainingPlan = () => {
    if (customPath.length < 2) return null;

    const findRoleByTitle = (title) => {
      for (const bu of Object.values(roleDirectory)) {
        for (const section of Object.values(bu.sections)) {
          const found = section.find(r => r.title === title);
          if (found) return found;
        }
      }
      return null;
    };

    const currentRoleTitle = customPath[customPath.length - 2];
    const nextRoleTitle = customPath[customPath.length - 1];
    const currentRole = findRoleByTitle(currentRoleTitle);
    const nextRole = findRoleByTitle(nextRoleTitle);

    if (!currentRole || !nextRole) return null;

    const currentTraining = trainingPortfolio[currentRole.level];
    const nextTraining = trainingPortfolio[nextRole.level];
    const currentComps = competencyMap[currentRole.level];
    const nextComps = competencyMap[nextRole.level];

    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('buildPath')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back to Path
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid ' + colors.orange, borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '1.8rem', color: colors.navy, marginBottom: '24px', fontWeight: 'bold', textAlign: 'center' }}>
              📈 Your Training & Development Plan
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#F0F8FF', border: '2px solid ' + colors.navy, borderRadius: '8px', padding: '16px' }}>
                <h2 style={{ fontSize: '0.9rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Current Role</h2>
                <h3 style={{ fontSize: '1.1rem', color: colors.navy, fontWeight: 'bold', marginBottom: '8px', margin: 0 }}>{currentRole.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: 0 }}>
                  <span style={{ fontWeight: 'bold' }}>{currentRole.grade}</span> • {currentRole.level}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: colors.orange }}>→</div>
              </div>

              <div style={{ backgroundColor: '#FFF9E6', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '16px' }}>
                <h2 style={{ fontSize: '0.9rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Target Role</h2>
                <h3 style={{ fontSize: '1.1rem', color: colors.navy, fontWeight: 'bold', marginBottom: '8px', margin: 0 }}>{nextRole.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: 0 }}>
                  <span style={{ fontWeight: 'bold' }}>{nextRole.grade}</span> • {nextRole.level}
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: colors.light, padding: '16px', borderRadius: '8px', marginBottom: '30px', border: '1px solid ' + colors.border }}>
              <h3 style={{ fontSize: '0.95rem', color: colors.navy, fontWeight: 'bold', margin: '0 0 12px 0' }}>✅ Level Progression</h3>
              <p style={{ fontSize: '0.85rem', color: colors.navy, margin: 0 }}>
                {currentRole.level} → {nextRole.level}
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>📚 Recommended Training Program</h2>
              {nextTraining && (
                <div style={{ backgroundColor: '#FFF9E6', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '16px' }}>
                  <h3 style={{ margin: '0 0 12px 0', color: colors.navy, fontWeight: 'bold', fontSize: '1rem' }}>{nextTraining.program}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '12px' }}>
                    <div>Target Audience: <span style={{ fontWeight: 'bold' }}>{nextTraining.audience}</span></div>
                    <div>Total Modules: <span style={{ fontWeight: 'bold' }}>{nextTraining.modules.length}</span></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                    {nextTraining.modules.map((module, idx) => (
                      <div key={`plan-module-${idx}`} style={{ padding: '8px 12px', backgroundColor: colors.cream, borderRadius: '4px', fontSize: '0.8rem', color: colors.navy, border: '1px solid ' + colors.border }}>
                        ✓ {module}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>🎯 Competency Development Path</h2>
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '0.95rem', color: colors.navy, fontWeight: 'bold', marginBottom: '12px' }}>Core Competencies</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                  {currentComps && nextComps && Object.entries(currentComps.core).map(([comp, currentLevel], idx) => {
                    const nextLevel = nextComps.core[comp];
                    const isDeveloping = currentLevel !== nextLevel && nextLevel !== 'Not required';
                    return (
                      <div key={`core-comp-${idx}`} style={{
                        padding: '10px 12px',
                        backgroundColor: isDeveloping ? '#FFF9E6' : '#F5F5F5',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: colors.navy,
                        borderLeft: `3px solid ${isDeveloping ? colors.orange : '#CCC'}`
                      }}>
                        <div style={{ fontWeight: 'bold' }}>{comp}</div>
                        <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>
                          {currentLevel} → {nextLevel} {isDeveloping && '(develop)'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '0.95rem', color: colors.navy, fontWeight: 'bold', marginBottom: '12px' }}>Technical Competencies</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                  {currentComps && nextComps && Object.entries(currentComps.technical).map(([comp, currentLevel], idx) => {
                    const nextLevel = nextComps.technical[comp];
                    const isDeveloping = currentLevel !== nextLevel && nextLevel !== 'Not required';
                    return (
                      <div key={`tech-comp-${idx}`} style={{
                        padding: '10px 12px',
                        backgroundColor: isDeveloping ? '#FFF0E6' : '#F5F5F5',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: colors.navy,
                        borderLeft: `3px solid ${isDeveloping ? '#FF9500' : '#CCC'}`
                      }}>
                        <div style={{ fontWeight: 'bold' }}>{comp}</div>
                        <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>
                          {currentLevel} → {nextLevel} {isDeveloping && '(develop)'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: colors.light, border: '1px solid ' + colors.border, borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', margin: '0 0 8px 0' }}>💡 Action Items</p>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
                Enroll in the {nextTraining.program} program and focus on developing highlighted competencies for your next role.
              </p>
            </div>

            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <button
                onClick={() => window.print()}
                style={{
                  padding: '12px 16px',
                  backgroundColor: colors.navy,
                  color: colors.cream,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                🖨️ Print Plan
              </button>
              <button
                onClick={() => setView('sendSupervisor')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: colors.orange,
                  color: colors.cream,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                📧 Send to Supervisor
              </button>
              <button
                onClick={() => setView('scheduleDiscussion')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#4ECDC4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                📅 Schedule Discussion
              </button>
              <button
                onClick={() => setView('competencyAssessment')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#96CEB4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                📊 Competency Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Send to Supervisor
  const renderSendSupervisor = () => {
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button onClick={() => setView('trainingPlan')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back to Plan
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid ' + colors.orange, borderRadius: '12px', padding: '24px' }}>
            <h1 style={{ fontSize: '1.6rem', color: colors.navy, marginBottom: '20px', fontWeight: 'bold' }}>📧 Send to Supervisor</h1>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Supervisor Email</label>
              <input type="email" placeholder="supervisor@pgb.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + colors.border, fontSize: '0.9rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Message (Optional)</label>
              <textarea placeholder="Add any message for your supervisor..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + colors.border, fontSize: '0.9rem', minHeight: '100px', boxSizing: 'border-box', fontFamily: 'sans-serif' }} />
            </div>

            <div style={{ backgroundColor: colors.light, padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.8rem', color: '#666' }}>
              Your Training & Development Plan will be shared with your supervisor for discussion and approval.
            </div>

            <button onClick={() => { alert('Training Plan sent to supervisor!'); setView('trainingPlan'); }} style={{ width: '100%', padding: '12px', backgroundColor: colors.orange, color: colors.cream, border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
              Send to Supervisor
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Schedule Career Discussion
  const renderScheduleDiscussion = () => {
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button onClick={() => setView('trainingPlan')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back to Plan
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid #4ECDC4', borderRadius: '12px', padding: '24px' }}>
            <h1 style={{ fontSize: '1.6rem', color: colors.navy, marginBottom: '20px', fontWeight: 'bold' }}>📅 Schedule Career Discussion</h1>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Preferred Date</label>
              <input type="date" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + colors.border, fontSize: '0.9rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Preferred Time</label>
              <input type="time" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + colors.border, fontSize: '0.9rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ backgroundColor: colors.light, padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.8rem', color: '#666' }}>
              A career discussion will be scheduled with your supervisor to review your development plan.
            </div>

            <button onClick={() => { alert('Career discussion scheduled! A meeting invite will be sent.'); setView('trainingPlan'); }} style={{ width: '100%', padding: '12px', backgroundColor: '#4ECDC4', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
              Schedule Discussion
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Competency Assessment & Profiling
  const renderCompetencyAssessment = () => {
    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button onClick={() => setView('trainingPlan')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back to Plan
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid #96CEB4', borderRadius: '12px', padding: '24px' }}>
            <h1 style={{ fontSize: '1.6rem', color: colors.navy, marginBottom: '20px', fontWeight: 'bold' }}>📊 Competency Assessment & Profiling</h1>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>HR Contact Email</label>
              <input type="email" placeholder="hr@pgb.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + colors.border, fontSize: '0.9rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Assessment Focus (Select)</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Current Role Gap Analysis', 'Target Role Readiness', 'Strengths & Development Areas', 'Leadership Potential'].map((reason, idx) => (
                  <button key={`assess-${idx}`} style={{ padding: '10px', backgroundColor: colors.light, color: colors.navy, border: '1px solid ' + colors.border, borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' }}>
                    {reason}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: colors.light, padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.8rem', color: '#666' }}>
              HR will conduct a competency assessment to identify your current proficiency levels and development opportunities based on your career goals.
            </div>

            <button onClick={() => { alert('Assessment request submitted to HR!'); setView('trainingPlan'); }} style={{ width: '100%', padding: '12px', backgroundColor: '#96CEB4', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
              Request Assessment
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {view === 'landing' && renderLanding()}
      {view === 'sections' && renderSections()}
      {view === 'roles' && renderRoles()}
      {view === 'roleDetail' && renderRoleDetail()}
      {view === 'pathSelection' && renderPathSelection()}
      {view === 'buildPath' && renderBuildPath()}
      {view === 'trainingPlan' && renderTrainingPlan()}
      {view === 'sendSupervisor' && renderSendSupervisor()}
      {view === 'scheduleDiscussion' && renderScheduleDiscussion()}
      {view === 'competencyAssessment' && renderCompetencyAssessment()}
    </>
  );
};

export default HCDCareerLattice;
