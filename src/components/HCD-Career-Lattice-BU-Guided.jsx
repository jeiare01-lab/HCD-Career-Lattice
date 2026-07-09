import React, { useState } from 'react';
import { ChevronRight, Plus, Trash2, Zap, BookOpen, Award, Mail, Download, Printer, ArrowLeft } from 'lucide-react';

const HCDCareerLattice = () => {
  const [currentView, setCurrentView] = useState('landing'); // landing, buSelect, lattice, buildPath
  const [selectedBU, setSelectedBU] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [customPath, setCustomPath] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showSupervisorModal, setShowSupervisorModal] = useState(false);
  const [supervisorInfo, setSupervisorInfo] = useState({
    name: '',
    email: '',
    aspirations: '',
    discussionDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    navy: '#0D1B3D',
    orange: '#E65100',
    cream: '#FEF9F3',
    light: '#F5EFE7',
    border: '#E5D5C8'
  };

  // Business Units with descriptions
  const businessUnits = [
    {
      id: 'TVET',
      name: 'TVET',
      fullName: 'Technical-Vocational Education Training',
      icon: '🔧',
      color: '#FF6B6B',
      description: 'Training & Assessment, Certification & Documentation',
      sections: ['Training & Assessment', 'Certification & Documentation']
    },
    {
      id: 'SHS',
      name: 'SHS',
      fullName: 'Senior High School (Academe)',
      icon: '📚',
      color: '#4ECDC4',
      description: 'Academic Instruction, Student Affairs, Guidance & Counseling, Resource Center, Registrar',
      sections: ['Academic Instruction', 'Student Affairs', 'Guidance & Counseling', 'Resource Center', 'Registrar']
    },
    {
      id: 'SharedServices',
      name: 'Shared Services',
      fullName: 'Shared Services',
      icon: '⚙️',
      color: '#45B7D1',
      description: 'HR, Finance, Supply Chain, IT, Marketing & Communications',
      sections: ['Human Resources', 'Finance & Accounting', 'Supply Chain', 'IT', 'Marketing & Comms']
    },
    {
      id: 'CorF',
      name: 'Corporate Foundation',
      fullName: 'Corporate Foundation (CorF)',
      icon: '🏢',
      color: '#96CEB4',
      description: 'Projects & Grants, Enterprise & Business Development, Linkage & Engagement',
      sections: ['Projects & Grants', 'Enterprise & BD', 'Linkage & Engagement']
    }
  ];

  // Map all roles with their BU
  const allRolesData = {
    TVET: [
      { title: 'TAss I', grade: 'JG1', level: 'Entry-Level', section: 'Training & Assessment', experience: '0-1 years', education: 'High School' },
      { title: 'TAss II', grade: 'JG2', level: 'Entry-Level', section: 'Training & Assessment', experience: '1-2 years', education: 'High School' },
      { title: 'TAss III', grade: 'JG3', level: 'Entry-Level', section: 'Training & Assessment', experience: '2-3 years', education: 'High School' },
      { title: 'Trainer I', grade: 'JG4', level: 'Intermediate', section: 'Training & Assessment', experience: '3-4 years', education: 'Diploma' },
      { title: 'Trainer II', grade: 'JG5', level: 'Intermediate', section: 'Training & Assessment', experience: '4-5 years', education: 'Bachelor' },
      { title: 'Trainer III', grade: 'JG6', level: 'Intermediate', section: 'Training & Assessment', experience: '5-6 years', education: 'Bachelor' },
      { title: 'Lead TA I', grade: 'JG7', level: 'Officer', section: 'Training & Assessment', experience: '6-8 years', education: 'Bachelor' },
      { title: 'Lead TA II', grade: 'JG8', level: 'Officer', section: 'Training & Assessment', experience: '7-9 years', education: 'Bachelor' },
      { title: 'Lead TA III', grade: 'JG9', level: 'Officer', section: 'Training & Assessment', experience: '8-10 years', education: 'Bachelor' },
      { title: 'Asst. TVET Supervisor', grade: 'JG10', level: 'Supervisory', section: 'Training & Assessment', experience: '8-10 years', education: 'Bachelor' },
      { title: 'TVET Supervisor', grade: 'JG11', level: 'Supervisory', section: 'Training & Assessment', experience: '9-11 years', education: 'Bachelor' },
      { title: 'Section Head, TVET', grade: 'JG12', level: 'Supervisory', section: 'Training & Assessment', experience: '10+ years', education: 'Master' },
      { title: 'Department Head, TVET', grade: 'JG13', level: 'Managerial', section: 'Training & Assessment', experience: '12+ years', education: 'Master' },
      { title: 'Manager, TVET', grade: 'JG14', level: 'Managerial', section: 'Training & Assessment', experience: '13+ years', education: 'Master' },
      { title: 'Director, TVET', grade: 'JG15', level: 'Managerial', section: 'Training & Assessment', experience: '15+ years', education: 'Master' },
      { title: 'CADA I', grade: 'JG1', level: 'Entry-Level', section: 'Certification & Documentation', experience: '0-1 years', education: 'High School' },
      { title: 'CADA II', grade: 'JG2', level: 'Entry-Level', section: 'Certification & Documentation', experience: '1-2 years', education: 'High School' },
      { title: 'CADA III', grade: 'JG3', level: 'Entry-Level', section: 'Certification & Documentation', experience: '2-3 years', education: 'High School' },
      { title: 'Registrar I', grade: 'JG4', level: 'Intermediate', section: 'Certification & Documentation', experience: '3-4 years', education: 'Diploma' },
      { title: 'Registrar II', grade: 'JG5', level: 'Intermediate', section: 'Certification & Documentation', experience: '4-5 years', education: 'Bachelor' },
      { title: 'Registrar III', grade: 'JG6', level: 'Intermediate', section: 'Certification & Documentation', experience: '5-6 years', education: 'Bachelor' },
      { title: 'Lead CAD Controller I', grade: 'JG7', level: 'Officer', section: 'Certification & Documentation', experience: '6-8 years', education: 'Bachelor' },
      { title: 'Lead CAD Controller II', grade: 'JG8', level: 'Officer', section: 'Certification & Documentation', experience: '7-9 years', education: 'Bachelor' },
      { title: 'Lead CAD Controller III', grade: 'JG9', level: 'Officer', section: 'Certification & Documentation', experience: '8-10 years', education: 'Bachelor' },
    ],
    SHS: [
      { title: 'AI Associate I', grade: 'JG1', level: 'Entry-Level', section: 'Academic Instruction', experience: '0-1 years', education: 'High School' },
      { title: 'AI Associate II', grade: 'JG2', level: 'Entry-Level', section: 'Academic Instruction', experience: '1-2 years', education: 'High School' },
      { title: 'AI Associate III', grade: 'JG3', level: 'Entry-Level', section: 'Academic Instruction', experience: '2-3 years', education: 'High School' },
      { title: 'Teacher I', grade: 'JG4', level: 'Intermediate', section: 'Academic Instruction', experience: '3-4 years', education: 'Bachelor' },
      { title: 'Teacher II', grade: 'JG5', level: 'Intermediate', section: 'Academic Instruction', experience: '4-5 years', education: 'Bachelor' },
      { title: 'Teacher III', grade: 'JG6', level: 'Intermediate', section: 'Academic Instruction', experience: '5-6 years', education: 'Bachelor' },
      { title: 'Lead Teacher I', grade: 'JG7', level: 'Officer', section: 'Academic Instruction', experience: '6-8 years', education: 'Bachelor' },
      { title: 'Lead Teacher II', grade: 'JG8', level: 'Officer', section: 'Academic Instruction', experience: '7-9 years', education: 'Bachelor' },
      { title: 'Lead Teacher III', grade: 'JG9', level: 'Officer', section: 'Academic Instruction', experience: '8-10 years', education: 'Bachelor' },
      { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'Supervisory', section: 'Academic Instruction', experience: '8-10 years', education: 'Bachelor' },
      { title: 'SHS Supervisor', grade: 'JG11', level: 'Supervisory', section: 'Academic Instruction', experience: '9-11 years', education: 'Bachelor' },
      { title: 'Section Head, SHS', grade: 'JG12', level: 'Supervisory', section: 'Academic Instruction', experience: '10+ years', education: 'Master' },
      { title: 'SAA I', grade: 'JG1', level: 'Entry-Level', section: 'Student Affairs', experience: '0-1 years', education: 'High School' },
      { title: 'SAA II', grade: 'JG2', level: 'Entry-Level', section: 'Student Affairs', experience: '1-2 years', education: 'High School' },
      { title: 'SAA III', grade: 'JG3', level: 'Entry-Level', section: 'Student Affairs', experience: '2-3 years', education: 'High School' },
      { title: 'GENERALIST, SAO I', grade: 'JG4', level: 'Intermediate', section: 'Student Affairs', experience: '3-4 years', education: 'Bachelor' },
      { title: 'GENERALIST, SAO II', grade: 'JG5', level: 'Intermediate', section: 'Student Affairs', experience: '4-5 years', education: 'Bachelor' },
    ],
    SharedServices: [
      { title: 'HR Specialist I', grade: 'JG1', level: 'Entry-Level', section: 'Human Resources', experience: '0-1 years', education: 'High School' },
      { title: 'HR Specialist II', grade: 'JG2', level: 'Entry-Level', section: 'Human Resources', experience: '1-2 years', education: 'High School' },
      { title: 'HR Specialist III', grade: 'JG3', level: 'Entry-Level', section: 'Human Resources', experience: '2-3 years', education: 'High School' },
      { title: 'HR Generalist I', grade: 'JG4', level: 'Intermediate', section: 'Human Resources', experience: '3-4 years', education: 'Bachelor' },
      { title: 'HR Generalist II', grade: 'JG5', level: 'Intermediate', section: 'Human Resources', experience: '4-5 years', education: 'Bachelor' },
      { title: 'HR Generalist III', grade: 'JG6', level: 'Intermediate', section: 'Human Resources', experience: '5-6 years', education: 'Bachelor' },
      { title: 'Lead I, HR', grade: 'JG7', level: 'Officer', section: 'Human Resources', experience: '6-8 years', education: 'Bachelor' },
      { title: 'FAD Specialist I', grade: 'JG1', level: 'Entry-Level', section: 'Finance & Accounting', experience: '0-1 years', education: 'High School' },
      { title: 'FAD Specialist II', grade: 'JG2', level: 'Entry-Level', section: 'Finance & Accounting', experience: '1-2 years', education: 'High School' },
      { title: 'FAD Generalist I', grade: 'JG4', level: 'Intermediate', section: 'Finance & Accounting', experience: '3-4 years', education: 'Bachelor' },
      { title: 'SCM Specialist I', grade: 'JG1', level: 'Entry-Level', section: 'Supply Chain', experience: '0-1 years', education: 'High School' },
      { title: 'SCM Generalist I', grade: 'JG4', level: 'Intermediate', section: 'Supply Chain', experience: '3-4 years', education: 'Bachelor' },
      { title: 'IT Specialist I', grade: 'JG1', level: 'Entry-Level', section: 'IT', experience: '0-1 years', education: 'High School' },
      { title: 'IT Generalist I', grade: 'JG4', level: 'Intermediate', section: 'IT', experience: '3-4 years', education: 'Bachelor' },
    ],
    CorF: [
      { title: 'PAGA I', grade: 'JG1', level: 'Entry-Level', section: 'Projects & Grants', experience: '0-1 years', education: 'High School' },
      { title: 'PAGA II', grade: 'JG2', level: 'Entry-Level', section: 'Projects & Grants', experience: '1-2 years', education: 'High School' },
      { title: 'PAGA III', grade: 'JG3', level: 'Entry-Level', section: 'Projects & Grants', experience: '2-3 years', education: 'High School' },
      { title: 'Generalist I, PAG', grade: 'JG4', level: 'Intermediate', section: 'Projects & Grants', experience: '3-4 years', education: 'Bachelor' },
      { title: 'BusDA I', grade: 'JG1', level: 'Entry-Level', section: 'Enterprise & BD', experience: '0-1 years', education: 'High School' },
      { title: 'BusDA II', grade: 'JG2', level: 'Entry-Level', section: 'Enterprise & BD', experience: '1-2 years', education: 'High School' },
      { title: 'Generalist I, EBD', grade: 'JG4', level: 'Intermediate', section: 'Enterprise & BD', experience: '3-4 years', education: 'Bachelor' },
      { title: 'LEA I', grade: 'JG1', level: 'Entry-Level', section: 'Linkage & Engagement', experience: '0-1 years', education: 'High School' },
      { title: 'LEA II', grade: 'JG2', level: 'Entry-Level', section: 'Linkage & Engagement', experience: '1-2 years', education: 'High School' },
      { title: 'Generalist I, LE', grade: 'JG4', level: 'Intermediate', section: 'Linkage & Engagement', experience: '3-4 years', education: 'Bachelor' },
    ]
  };

  const currentRoles = selectedBU ? allRolesData[selectedBU] : [];
  const buObj = selectedBU ? businessUnits.find(bu => bu.id === selectedBU) : null;

  // === LANDING PAGE ===
  const renderLandingPage = () => (
    <div style={{
      backgroundColor: colors.cream,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"IBM Plex Sans", sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.2rem',
            color: colors.navy,
            marginBottom: '10px',
            fontWeight: 700
          }}>
            HCD Career Lattice 🎯
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '30px'
          }}>
            Plan Your Career Path in Primary Group of Builders
          </p>

          <div style={{
            backgroundColor: '#FFF9E6',
            border: `2px solid ${colors.orange}`,
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: colors.navy, fontWeight: 500 }}>
              👋 Select your Business Unit to get started and explore your career progression opportunities.
            </p>
          </div>
        </div>

        {/* BU Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {businessUnits.map(bu => (
            <div
              key={bu.id}
              onClick={() => {
                setSelectedBU(bu.id);
                setCurrentView('buSelect');
              }}
              style={{
                backgroundColor: 'white',
                border: `3px solid ${bu.color}`,
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transform: 'scale(1)',
                ':hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{bu.icon}</div>
              <h2 style={{
                fontSize: '1.3rem',
                color: colors.navy,
                marginBottom: '8px',
                fontWeight: 700
              }}>
                {bu.name}
              </h2>
              <p style={{
                fontSize: '0.85rem',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                {bu.description}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: bu.color,
                fontWeight: 600,
                fontSize: '0.9rem',
                marginTop: '16px'
              }}>
                Explore <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          marginTop: '40px'
        }}>
          <p>PGB Human Capital Development • Interactive Career Pathing Tool</p>
        </div>
      </div>
    </div>
  );

  // === BU SELECTION PAGE ===
  const renderBUSelectionPage = () => (
    <div style={{
      backgroundColor: colors.cream,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"IBM Plex Sans", sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header with Back */}
        <div style={{ marginBottom: '30px' }}>
          <button
            onClick={() => setCurrentView('landing')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: colors.light,
              border: 'none',
              borderRadius: '6px',
              padding: '10px 16px',
              cursor: 'pointer',
              color: colors.navy,
              fontWeight: 600,
              fontSize: '0.9rem',
              marginBottom: '20px'
            }}
          >
            <ArrowLeft size={18} /> Back to Business Units
          </button>

          <h1 style={{
            fontSize: '2rem',
            color: colors.navy,
            marginBottom: '10px',
            fontWeight: 700
          }}>
            {buObj?.icon} {buObj?.fullName}
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: '#666',
            marginBottom: '20px'
          }}>
            Select your current position to get personalized career path recommendations
          </p>
        </div>

        {/* Current Position Selection */}
        <div style={{
          backgroundColor: 'white',
          border: `2px solid ${colors.orange}`,
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            color: colors.navy,
            marginBottom: '16px',
            fontWeight: 600
          }}>
            📍 Where Are You Now?
          </h2>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '16px'
          }}>
            Select your current position to see recommended career paths
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {currentRoles.slice(0, 12).map((role, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPosition(role.title);
                  setCustomPath([role.title]); // Start path from current position
                  setCurrentView('buildPath');
                }}
                style={{
                  padding: '12px 16px',
                  backgroundColor: currentPosition === role.title ? colors.orange : colors.light,
                  color: currentPosition === role.title ? colors.cream : colors.navy,
                  border: `2px solid ${colors.border}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
              >
                <div>{role.title}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '4px' }}>
                  {role.grade} • {role.level}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Positions in BU */}
        <div style={{
          backgroundColor: 'white',
          border: `2px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            color: colors.navy,
            marginBottom: '16px',
            fontWeight: 600
          }}>
            📚 All Positions Available
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '8px'
          }}>
            {currentRoles.map((role, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 12px',
                  backgroundColor: colors.light,
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  border: `1px solid ${colors.border}`
                }}
              >
                <div style={{ fontWeight: 600, color: colors.navy }}>{role.title}</div>
                <div style={{ color: '#666', fontSize: '0.75rem' }}>{role.grade}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // === BUILD PATH VIEW ===
  const renderBuildPathPage = () => (
    <div style={{
      backgroundColor: colors.cream,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"IBM Plex Sans", sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <button
          onClick={() => setCurrentView('buSelect')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: colors.light,
            border: 'none',
            borderRadius: '6px',
            padding: '10px 16px',
            cursor: 'pointer',
            color: colors.navy,
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '20px'
          }}
        >
          <ArrowLeft size={18} /> Back to Position Selection
        </button>

        <h1 style={{
          fontSize: '2rem',
          color: colors.navy,
          marginBottom: '30px',
          fontWeight: 700
        }}>
          🛤️ Your Career Path in {buObj?.name}
        </h1>

        {/* Path Display */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: `2px solid ${colors.orange}`,
          overflow: 'hidden',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            color: colors.navy,
            marginBottom: '16px',
            fontWeight: 600
          }}>
            Your Progression
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {customPath.map((roleTitle, index) => {
              const role = currentRoles.find(r => r.title === roleTitle);
              return (
                <div key={index}>
                  <div style={{
                    backgroundColor: colors.light,
                    borderRadius: '8px',
                    padding: '16px',
                    border: `2px solid ${colors.orange}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: colors.orange }}>#{index + 1}</span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.navy, margin: 0 }}>{role?.title}</h3>
                        <span style={{ fontSize: '0.8rem', backgroundColor: colors.orange, color: colors.cream, padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>
                          {role?.grade}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>
                        {role?.level} • {role?.section}
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        onClick={() => setCustomPath(customPath.filter((_, i) => i !== index))}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: '#FFE4C4',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: colors.navy,
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    )}
                  </div>

                  {index < customPath.length - 1 && (
                    <div style={{
                      textAlign: 'center',
                      color: colors.orange,
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      margin: '8px 0'
                    }}>
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add More Roles */}
          <div style={{ marginTop: '20px', padding: '16px', backgroundColor: colors.light, borderRadius: '8px' }}>
            <p style={{ fontSize: '0.9rem', color: colors.navy, fontWeight: 600, marginBottom: '12px' }}>
              Add another role to your progression:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '8px'
            }}>
              {currentRoles.filter(r => !customPath.includes(r.title)).slice(0, 8).map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => setCustomPath([...customPath, role.title])}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'white',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    color: colors.navy,
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.orange;
                    e.target.style.color = colors.cream;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = colors.navy;
                  }}
                >
                  {role.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {customPath.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px'
          }}>
            <button
              onClick={() => {
                const pathContent = customPath.map((roleTitle, index) => {
                  const role = currentRoles.find(r => r.title === roleTitle);
                  return `Step ${index + 1}: ${role.title} (${role.grade}) - ${role.level}`;
                }).join('\n');

                const printWindow = window.open('', '', 'height=600,width=800');
                printWindow.document.write(`
                  <html><head><title>Career Path</title></head><body>
                  <h1>Career Path - ${buObj?.name}</h1>
                  <pre>${pathContent}</pre>
                  </body></html>
                `);
                printWindow.print();
              }}
              style={{
                padding: '12px',
                backgroundColor: colors.orange,
                color: colors.cream,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              🖨️ Print Path
            </button>

            <button
              onClick={() => setShowSupervisorModal(true)}
              style={{
                padding: '12px',
                backgroundColor: '#2E7D32',
                color: colors.cream,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              📧 Send to Supervisor
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // === SUPERVISOR MODAL ===
  const renderSupervisorModal = () => {
    if (!showSupervisorModal) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          {submitted ? (
            <div style={{
              padding: '40px 20px',
              textAlign: 'center',
              backgroundColor: colors.light
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ marginTop: 0, color: colors.navy, fontSize: '1.2rem', fontWeight: 700 }}>
                Success!
              </h3>
              <p style={{ color: '#666' }}>
                Your career plan has been prepared for discussion with your supervisor.
              </p>
            </div>
          ) : (
            <>
              <div style={{
                backgroundColor: colors.navy,
                color: colors.cream,
                padding: '20px',
                borderBottom: `2px solid ${colors.orange}`
              }}>
                <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>
                  Send to Your Supervisor
                </h2>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => {
                  setSubmitted(false);
                  setShowSupervisorModal(false);
                  setSupervisorInfo({ name: '', email: '', aspirations: '', discussionDate: '' });
                }, 3000);
              }} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy }}>
                    Supervisor's Name *
                  </label>
                  <input
                    type="text"
                    value={supervisorInfo.name}
                    onChange={(e) => setSupervisorInfo({ ...supervisorInfo, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy }}>
                    Supervisor's Email *
                  </label>
                  <input
                    type="email"
                    value={supervisorInfo.email}
                    onChange={(e) => setSupervisorInfo({ ...supervisorInfo, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy }}>
                    My Career Aspirations *
                  </label>
                  <textarea
                    value={supervisorInfo.aspirations}
                    onChange={(e) => setSupervisorInfo({ ...supervisorInfo, aspirations: e.target.value })}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy }}>
                    Preferred Discussion Date *
                  </label>
                  <input
                    type="date"
                    value={supervisorInfo.discussionDate}
                    onChange={(e) => setSupervisorInfo({ ...supervisorInfo, discussionDate: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSupervisorModal(false);
                      setSupervisorInfo({ name: '', email: '', aspirations: '', discussionDate: '' });
                    }}
                    style={{
                      padding: '12px',
                      backgroundColor: colors.light,
                      color: colors.navy,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '12px',
                      backgroundColor: '#2E7D32',
                      color: colors.cream,
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Send & Create IDP
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    );
  };

  // === MAIN RENDER ===
  return (
    <>
      {currentView === 'landing' && renderLandingPage()}
      {currentView === 'buSelect' && renderBUSelectionPage()}
      {currentView === 'buildPath' && renderBuildPathPage()}
      {renderSupervisorModal()}
    </>
  );
};

export default HCDCareerLattice;
