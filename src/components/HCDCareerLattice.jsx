import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, BookOpen, Award, Zap } from 'lucide-react';

const HCDCareerLattice = () => {
  const [view, setView] = useState('landing');
  const [selectedBU, setSelectedBU] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [startingRole, setStartingRole] = useState(null);
  const [pathType, setPathType] = useState(null);
  const [customPath, setCustomPath] = useState([]);

  const colors = {
    navy: '#0D1B3D',
    orange: '#E65100',
    cream: '#FEF9F3',
    light: '#F5EFE7',
    border: '#E5D5C8'
  };

  // Training Portfolio
  const trainingPortfolio = {
    'Entry-Level': {
      program: 'Program On-the-GO',
      cost: '₱800.00',
      audience: 'SPECIALISTS',
      modules: [
        'Work Attitude & Values Enhancement',
        '360° Feedback on Communication',
        'Telephone Courtesy & Netiquette',
        'Microsoft Excel (Basic & Advance)',
        'Time Management',
        'Basic Grammar & Report Writing',
        'Business Correspondence',
        '8H Mandatory Employee Orientation (MEOSH)'
      ]
    },
    'Intermediate': {
      program: 'Functional Training Programs',
      cost: '₱1,500.00',
      audience: 'GENERALISTS',
      modules: [
        'HR Management 101',
        'Site Management & Administration 101',
        'Labor Relations 101',
        'Accounting for Non-Accountants',
        'Corporate Finance & Budgeting',
        'Engineering 101',
        'Procurement 101',
        'Hazard Identification, Risk Assessment & Controls (HIRAC)'
      ]
    },
    'Officer': {
      program: 'Leadership Foundations: Transitioning to Leader',
      cost: '₱1,800.00',
      audience: 'LEADS',
      modules: [
        'Basic Supervision',
        'Developing Extraordinary Leaders',
        'Interaction Management (IM) Essentials',
        'Communicating for Leadership Success',
        'Performance Management 101',
        'Delivering Value to the Business',
        '12-Step Problem Solving',
        'Decision Analysis Framework',
        'Presentation Skills',
        'Loss Control Management (LCM)',
        'EHSS Management'
      ]
    },
    'Supervisory': {
      program: 'PGB Leadership Imperatives',
      cost: '₱2,500.00',
      audience: 'BUSINESS PARTNERS',
      modules: [
        'IMPERATIVE 1: Coach & Develop for Results',
        'IMPERATIVE 2: Manage Work & Drive Performance',
        'IMPERATIVE 3: Inspire Loyalty & Trust',
        'IMPERATIVE 4: Partner Within & Across Teams',
        'IMPERATIVE 5: Influence Through Personal Power',
        'IMPERATIVE 6: Selecting Talent in Promoting & Hiring',
        'IMPERATIVE 7: Business Impact of EHSS Among Leaders'
      ]
    },
    'Managerial': {
      program: 'PGB Executive Leadership: Defying Convention',
      cost: '₱3,500.00',
      audience: 'STRATEGIC PARTNERS',
      modules: [
        'Executive Presence',
        'Building a Strong Personal Brand Through People',
        'Strategic Leadership',
        'Using Critical & Strategic Thinking Skills',
        'Fostering Innovation',
        'Turning Weakness & Threats to Greater Opportunities',
        'Making High Quality Decisions',
        'Delegating with Purpose',
        'Intrapreneurship',
        'Purposeful Curiosity: The Power of Asking Right Questions',
        'EHSS as a Strategic Business Partner'
      ]
    }
  };

  // Competency Mapping by Grade
  const competencyMap = {
    'JG1': {
      core: {
        'Planning and Organizing': 'Basic',
        'Decision Making & Problem Solving': 'Basic',
        'Leadership': 'Not required',
        'Innovation': 'Basic',
        'Communication': 'Basic',
        'Customer Focus': 'Basic',
        'Business Acumen': 'Basic'
      },
      technical: {
        'Strategic Management': 'Not required',
        'Consensus Building': 'Not required',
        'Governance Support': 'Not required',
        'Project/Program Management': 'Not required',
        'Administrative Management': 'Moderately required'
      }
    },
    'JG2': {
      core: {
        'Planning and Organizing': 'Basic',
        'Decision Making & Problem Solving': 'Basic',
        'Leadership': 'Not required',
        'Innovation': 'Basic',
        'Communication': 'Basic',
        'Customer Focus': 'Basic',
        'Business Acumen': 'Basic'
      },
      technical: {
        'Strategic Management': 'Not required',
        'Consensus Building': 'Not required',
        'Governance Support': 'Not required',
        'Project/Program Management': 'Not required',
        'Administrative Management': 'Moderately required'
      }
    },
    'JG3': {
      core: {
        'Planning and Organizing': 'Intermediate',
        'Decision Making & Problem Solving': 'Basic',
        'Leadership': 'Not required',
        'Innovation': 'Intermediate',
        'Communication': 'Basic',
        'Customer Focus': 'Basic',
        'Business Acumen': 'Basic'
      },
      technical: {
        'Strategic Management': 'Not required',
        'Consensus Building': 'Not required',
        'Governance Support': 'Not required',
        'Project/Program Management': 'Moderately required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG4': {
      core: {
        'Planning and Organizing': 'Intermediate',
        'Decision Making & Problem Solving': 'Intermediate',
        'Leadership': 'Basic',
        'Innovation': 'Intermediate',
        'Communication': 'Intermediate',
        'Customer Focus': 'Intermediate',
        'Business Acumen': 'Intermediate'
      },
      technical: {
        'Strategic Management': 'Not required',
        'Consensus Building': 'Moderately required',
        'Governance Support': 'Moderately required',
        'Project/Program Management': 'Moderately required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG5': {
      core: {
        'Planning and Organizing': 'Intermediate',
        'Decision Making & Problem Solving': 'Intermediate',
        'Leadership': 'Intermediate',
        'Innovation': 'Intermediate',
        'Communication': 'Intermediate',
        'Customer Focus': 'Intermediate',
        'Business Acumen': 'Intermediate'
      },
      technical: {
        'Strategic Management': 'Moderately required',
        'Consensus Building': 'Moderately required',
        'Governance Support': 'Moderately required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG6': {
      core: {
        'Planning and Organizing': 'Intermediate',
        'Decision Making & Problem Solving': 'Intermediate',
        'Leadership': 'Intermediate',
        'Innovation': 'Intermediate',
        'Communication': 'Intermediate',
        'Customer Focus': 'Intermediate',
        'Business Acumen': 'Intermediate'
      },
      technical: {
        'Strategic Management': 'Moderately required',
        'Consensus Building': 'Moderately required',
        'Governance Support': 'Moderately required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG7': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Moderately required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG8': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Highly required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG9': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Highly required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG10': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Highly required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG11': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Highly required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    },
    'JG12': {
      core: {
        'Planning and Organizing': 'Advanced',
        'Decision Making & Problem Solving': 'Advanced',
        'Leadership': 'Advanced',
        'Innovation': 'Advanced',
        'Communication': 'Advanced',
        'Customer Focus': 'Advanced',
        'Business Acumen': 'Advanced'
      },
      technical: {
        'Strategic Management': 'Highly required',
        'Consensus Building': 'Highly required',
        'Governance Support': 'Highly required',
        'Project/Program Management': 'Highly required',
        'Administrative Management': 'Highly required'
      }
    }
  };

  const getTrainingForRole = (grade) => {
    if (['JG1', 'JG2', 'JG3'].includes(grade)) return trainingPortfolio['Entry-Level'];
    if (['JG4', 'JG5', 'JG6'].includes(grade)) return trainingPortfolio['Intermediate'];
    if (['JG7', 'JG8', 'JG9'].includes(grade)) return trainingPortfolio['Officer'];
    if (['JG10', 'JG11', 'JG12'].includes(grade)) return trainingPortfolio['Supervisory'];
    return trainingPortfolio['Managerial'];
  };

  // Role Directory
  const roleDirectory = {
    TVET: {
      name: 'Technical-Vocational Education Training',
      icon: '🔧',
      sections: {
        'Training & Assessment': [
          { title: 'TAss I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'TAss II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'TAss III', grade: 'JG3', level: 'Entry-Level', experience: '2-3 years', education: 'High School' },
          { title: 'Trainer I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Diploma' },
          { title: 'Trainer II', grade: 'JG5', level: 'Intermediate', experience: '4-5 years', education: 'Bachelor' },
          { title: 'Trainer III', grade: 'JG6', level: 'Intermediate', experience: '5-6 years', education: 'Bachelor' },
          { title: 'Lead TA I', grade: 'JG7', level: 'Officer', experience: '6-8 years', education: 'Bachelor' },
          { title: 'Lead TA II', grade: 'JG8', level: 'Officer', experience: '7-9 years', education: 'Bachelor' },
          { title: 'Lead TA III', grade: 'JG9', level: 'Officer', experience: '8-10 years', education: 'Bachelor' },
        ],
        'Certification & Documentation': [
          { title: 'CADA I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'CADA II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'CADA III', grade: 'JG3', level: 'Entry-Level', experience: '2-3 years', education: 'High School' },
          { title: 'Registrar I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Diploma' },
          { title: 'Registrar II', grade: 'JG5', level: 'Intermediate', experience: '4-5 years', education: 'Bachelor' },
          { title: 'Registrar III', grade: 'JG6', level: 'Intermediate', experience: '5-6 years', education: 'Bachelor' },
        ]
      }
    },
    SHS: {
      name: 'Senior High School (Academe)',
      icon: '📚',
      sections: {
        'Academic Instruction': [
          { title: 'AI Associate I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'AI Associate II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'Teacher I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Bachelor' },
          { title: 'Teacher II', grade: 'JG5', level: 'Intermediate', experience: '4-5 years', education: 'Bachelor' },
          { title: 'Lead Teacher I', grade: 'JG7', level: 'Officer', experience: '6-8 years', education: 'Bachelor' },
        ],
        'Student Affairs': [
          { title: 'SAA I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'SAA II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'GENERALIST, SAO I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Bachelor' },
        ]
      }
    },
    'Shared Services': {
      name: 'Shared Services',
      icon: '⚙️',
      sections: {
        'Human Resources': [
          { title: 'HR Specialist I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'HR Specialist II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'HR Generalist I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Bachelor' },
        ],
        'Finance & Accounting': [
          { title: 'FAD Specialist I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'FAD Specialist II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'FAD Generalist I', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Bachelor' },
        ]
      }
    },
    'Corporate Foundation': {
      name: 'Corporate Foundation',
      icon: '🏢',
      sections: {
        'Projects & Grants': [
          { title: 'PAGA I', grade: 'JG1', level: 'Entry-Level', experience: '0-1 years', education: 'High School' },
          { title: 'PAGA II', grade: 'JG2', level: 'Entry-Level', experience: '1-2 years', education: 'High School' },
          { title: 'Generalist I, PAG', grade: 'JG4', level: 'Intermediate', experience: '3-4 years', education: 'Bachelor' },
        ]
      }
    }
  };

  const getAvailableRoles = (currentGrade, pathType) => {
    const gradeOrder = ['JG1', 'JG2', 'JG3', 'JG4', 'JG5', 'JG6', 'JG7', 'JG8', 'JG9', 'JG10', 'JG11', 'JG12'];
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
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '12px' }}>{bu.name}</p>
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
          <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>{bu.name}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {Object.keys(bu.sections).map(section => (
              <div key={section} onClick={() => { setSelectedSection(section); setView('roles'); }} style={{ backgroundColor: 'white', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '20px', cursor: 'pointer' }}>
                <h3 style={{ margin: 0, color: colors.navy, fontWeight: 'bold' }}>📂 {section}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px', marginBottom: 0 }}>{bu.sections[section].length} roles</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {roles.map((role, idx) => (
              <div key={idx} onClick={() => { setSelectedRole(role); setView('roleDetail'); }} style={{ backgroundColor: 'white', border: '2px solid ' + colors.border, borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
                <h3 style={{ margin: '0 0 8px 0', color: colors.navy, fontWeight: 'bold' }}>{role.title}</h3>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <div>{role.grade} • {role.level}</div>
                  <div style={{ marginTop: '4px' }}>{role.experience}</div>
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
    const training = getTrainingForRole(selectedRole.grade);
    const competencies = competencyMap[selectedRole.grade];

    return (
      <div style={{ backgroundColor: colors.cream, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button onClick={() => setView('roles')} style={{ marginBottom: '20px', padding: '10px 16px', backgroundColor: colors.light, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Back
          </button>

          <div style={{ backgroundColor: 'white', border: '3px solid ' + colors.orange, borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>{selectedRole.title}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div><p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>GRADE</p><p style={{ fontSize: '1.2rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.grade}</p></div>
              <div><p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>LEVEL</p><p style={{ fontSize: '1.2rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.level}</p></div>
              <div><p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>EXPERIENCE</p><p style={{ fontSize: '1rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.experience}</p></div>
              <div><p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>EDUCATION</p><p style={{ fontSize: '1rem', color: colors.navy, fontWeight: 'bold', margin: 0 }}>{selectedRole.education}</p></div>
            </div>

            {/* Core Competencies */}
            {competencies && (
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>Award 7 Core Competencies</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                  {Object.entries(competencies.core).map(([comp, level]) => (
                    <div key={comp} style={{ padding: '10px 12px', backgroundColor: '#F0F8FF', borderRadius: '6px', fontSize: '0.85rem', color: colors.navy, borderLeft: '4px solid ' + colors.orange }}>
                      <div style={{ fontWeight: 'bold' }}>{comp}</div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>Level: {level}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Competencies */}
            {competencies && (
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>Zap 5 Technical Competencies</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                  {Object.entries(competencies.technical).map(([comp, level]) => (
                    <div key={comp} style={{ padding: '10px 12px', backgroundColor: '#FFF0E6', borderRadius: '6px', fontSize: '0.85rem', color: colors.navy, borderLeft: '4px solid #FF9500' }}>
                      <div style={{ fontWeight: 'bold' }}>{comp}</div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>Level: {level}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Training */}
            {training && (
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '12px', fontWeight: 'bold' }}>BookOpen PGB L&D Training Program</h2>
                <div style={{ backgroundColor: '#FFF9E6', border: '2px solid ' + colors.orange, borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: colors.navy, fontWeight: 'bold' }}>{training.program}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
                    <div><span style={{ fontWeight: 'bold', color: '#666' }}>COST:</span> {training.cost}</div>
                    <div><span style={{ fontWeight: 'bold', color: '#666' }}>AUDIENCE:</span> {training.audience}</div>
                    <div><span style={{ fontWeight: 'bold', color: '#666' }}>MODULES:</span> {training.modules.length}</div>
                  </div>
                </div>

                <h3 style={{ fontSize: '0.95rem', color: colors.navy, fontWeight: 'bold', marginBottom: '8px' }}>Key Training Modules:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {training.modules.map((module, idx) => (
                    <div key={idx} style={{ padding: '8px 12px', backgroundColor: colors.light, borderRadius: '6px', fontSize: '0.8rem', color: colors.navy, border: '1px solid ' + colors.border }}>
                      ✓ {module}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Confirmation */}
            <div style={{ backgroundColor: colors.light, borderRadius: '8px', padding: '16px', border: '2px solid ' + colors.orange }}>
              <p style={{ fontSize: '1rem', color: colors.navy, fontWeight: 'bold', marginBottom: '16px' }}>📍 Is this your starting point?</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  onClick={() => { setStartingRole(selectedRole); setView('pathSelection'); }}
                  style={{ padding: '12px', backgroundColor: colors.orange, color: colors.cream, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Yes, This is Me
                </button>
                <button
                  onClick={() => setView('roles')}
                  style={{ padding: '12px', backgroundColor: colors.light, color: colors.navy, border: '1px solid ' + colors.border, borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
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
          <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '40px', fontWeight: 'bold' }}>Starting from: {startingRole.title}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div onClick={() => { setPathType('vertical'); setCustomPath([startingRole.title]); setView('buildPath'); }} style={{ backgroundColor: 'white', border: '3px solid #FF6B6B', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📈</div>
              <h2 style={{ fontSize: '1.3rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Vertical Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>Advance in the same section</p>
            </div>
            <div onClick={() => { setPathType('lateral'); setCustomPath([startingRole.title]); setView('buildPath'); }} style={{ backgroundColor: 'white', border: '3px solid #4ECDC4', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>↔️</div>
              <h2 style={{ fontSize: '1.3rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Lateral Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>Move across sections</p>
            </div>
            <div onClick={() => { setPathType('diagonal'); setStartingRole(null); setSelectedRole(null); setSelectedSection(null); setSelectedBU(null); setView('landing'); }} style={{ backgroundColor: 'white', border: '3px solid #96CEB4', borderRadius: '12px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔄</div>
              <h2 style={{ fontSize: '1.3rem', color: colors.navy, marginBottom: '8px', fontWeight: 'bold' }}>Diagonal Path</h2>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>Different Business Unit</p>
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
          <h1 style={{ fontSize: '2rem', color: colors.navy, marginBottom: '30px', fontWeight: 'bold' }}>
            {pathType === 'vertical' && '📈 Vertical'} {pathType === 'lateral' && '↔️ Lateral'} {pathType === 'diagonal' && '🔄 Diagonal'}
          </h1>

          <div style={{ backgroundColor: 'white', border: '2px solid ' + colors.orange, borderRadius: '12px', padding: '20px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>Your Path:</h2>
            {customPath.map((roleTitle, idx) => (
              <div key={idx} style={{ backgroundColor: colors.light, padding: '12px', borderRadius: '6px', marginBottom: '8px', borderLeft: '4px solid ' + colors.orange }}>
                <div style={{ fontWeight: 'bold', color: colors.navy }}>{roleTitle}</div>
              </div>
            ))}
          </div>

          {availableRoles.length > 0 && (
            <div style={{ backgroundColor: 'white', border: '2px solid ' + colors.border, borderRadius: '12px', padding: '20px' }}>
              <h2 style={{ fontSize: '1.1rem', color: colors.navy, marginBottom: '16px', fontWeight: 'bold' }}>Next Steps:</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {availableRoles.map((role, idx) => (
                  <button key={idx} onClick={() => setCustomPath([...customPath, role.title])} style={{ padding: '12px', backgroundColor: colors.light, border: '1px solid ' + colors.border, borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', color: colors.navy }}>
                    {role.title}
                    <div style={{ fontSize: '0.7rem', marginTop: '4px' }}>{role.grade}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
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
    </>
  );
};

export default HCDCareerLattice;
