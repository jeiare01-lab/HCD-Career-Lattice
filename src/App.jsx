import React, { useState } from 'react';

export default function HCDLatticeComplete() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [selectedPillar, setSelectedPillar] = useState('tvet');
  const [selectedFamily, setSelectedFamily] = useState(null);

  const NAVY = '#0D1B3D';
  const ORANGE = '#E65100';
  const CREAM = '#FEF9F3';

  const pillars = {
    tvet: {
      name: 'TVET',
      fullName: 'Technical Vocational Education & Training',
      icon: '🛠️',
      color: '#E65100',
      families: {
        'SPECIALIST (JG2-JG3)': [
          { title: 'TAS II', jg: 'JG2', function: 'Training & Assessment' },
          { title: 'TAs III', jg: 'JG3', function: 'Training & Assessment' },
          { title: 'CADA II', jg: 'JG2', function: 'Certification & Documentation' },
          { title: 'CADA III', jg: 'JG3', function: 'Certification & Documentation' },
        ],
        'GENERALIST (JG4-JG6)': [
          { title: 'Trainer I', jg: 'JG4', function: 'Training & Assessment' },
          { title: 'Trainer II', jg: 'JG5', function: 'Training & Assessment' },
          { title: 'Register I', jg: 'JG4', function: 'Certification & Documentation' },
          { title: 'Register II', jg: 'JG5', function: 'Certification & Documentation' },
          { title: 'GENERALIST, SAO I', jg: 'JG5', function: 'Assessment' },
          { title: 'GENERALIST, SAO II', jg: 'JG6', function: 'Assessment' },
        ],
        'LEAD (JG7-JG9)': [
          { title: 'Lead TA I', jg: 'JG7', function: 'Training & Assessment' },
          { title: 'Lead CAD Controller I', jg: 'JG7', function: 'Certification & Documentation' },
          { title: 'Lead AGO I', jg: 'JG8', function: 'Assessment' },
          { title: 'Lead TA II', jg: 'JG8', function: 'Training & Assessment' },
          { title: 'Lead TA III', jg: 'JG9', function: 'Training & Assessment' },
        ],
        'BUSINESS PARTNER (JG10-JG12)': [
          { title: 'TVET Supervisor', jg: 'JG10', function: 'Training & Assessment' },
          { title: 'TVET Supervisor', jg: 'JG11', function: 'Certification & Documentation' },
          { title: 'Asst. TVET Supervisor', jg: 'JG10', function: 'Assessment' },
          { title: 'Section Head, TVET', jg: 'JG11', function: 'Multiple' },
        ],
        'STRATEGIC PARTNER (JG13-JG15)': [
          { title: 'Department Head, TVET', jg: 'JG13', function: 'Strategic' },
          { title: 'Manager, TVET', jg: 'JG14', function: 'Management' },
          { title: 'Director, TVET', jg: 'JG15', function: 'Executive' },
        ],
      }
    },
    shs: {
      name: 'SHS',
      fullName: 'Academics - Senior High School',
      icon: '📚',
      color: '#00B4D8',
      families: {
        'SPECIALIST (JG2-JG3)': [
          { title: 'AI Associate II', jg: 'JG2', function: 'Academic Instruction' },
          { title: 'AI Associate III', jg: 'JG3', function: 'Academic Instruction' },
          { title: 'SAA II', jg: 'JG2', function: "Student's Affairs" },
          { title: 'SAA III', jg: 'JG3', function: "Student's Affairs" },
        ],
        'GENERALIST (JG4-JG6)': [
          { title: 'Teacher I', jg: 'JG4', function: 'Academic Instruction' },
          { title: 'Teacher II', jg: 'JG5', function: 'Academic Instruction' },
          { title: 'GENERALIST, SAO I', jg: 'JG5', function: "Student's Affairs" },
          { title: 'GENERALIST, SAO II', jg: 'JG6', function: "Student's Affairs" },
          { title: 'Lead AGO I', jg: 'JG6', function: 'Guidance & Counselling' },
        ],
        'LEAD (JG7-JG9)': [
          { title: 'Lead Teacher I', jg: 'JG7', function: 'Academic Instruction' },
          { title: 'Lead Teacher II', jg: 'JG8', function: 'Academic Instruction' },
          { title: 'Lead AGO II', jg: 'JG8', function: 'Guidance & Counselling' },
          { title: 'Lead AGO III', jg: 'JG9', function: 'Guidance & Counselling' },
        ],
        'BUSINESS PARTNER (JG10-JG12)': [
          { title: 'SHS Supervisor', jg: 'JG10', function: 'Academic Instruction' },
          { title: 'SHS Supervisor', jg: 'JG11', function: "Student's Affairs" },
          { title: 'Section Head, SHS', jg: 'JG11', function: 'Multiple' },
        ],
        'STRATEGIC PARTNER (JG13-JG15)': [
          { title: 'Department Head, SHS', jg: 'JG13', function: 'Strategic' },
          { title: 'Manager, SHS', jg: 'JG14', function: 'Management' },
          { title: 'Director, SHS', jg: 'JG15', function: 'Executive' },
        ],
      }
    },
    shared_services: {
      name: 'Shared Services',
      fullName: 'Administration & Support Functions',
      icon: '🏢',
      color: '#06A87D',
      families: {
        'SPECIALIST (JG2-JG3)': [
          { title: 'ORA II', jg: 'JG2', function: 'Administration & Governance' },
          { title: 'ORA III', jg: 'JG3', function: 'Administration & Governance' },
          { title: 'Registrar I', jg: 'JG2', function: 'Registrar' },
          { title: 'MAC CO I', jg: 'JG2', function: 'Marketing & Communications' },
        ],
        'GENERALIST (JG4-JG6)': [
          { title: 'Generalist I', jg: 'JG4', function: 'Administration & Governance' },
          { title: 'Generalist II', jg: 'JG5', function: 'Administration & Governance' },
          { title: 'Librarian I', jg: 'JG4', function: 'Resource Center' },
          { title: 'Librarian II', jg: 'JG5', function: 'Resource Center' },
          { title: 'Generalist I, EBD', jg: 'JG5', function: 'Multiple' },
        ],
        'LEAD (JG7-JG9)': [
          { title: 'Lead MAC CO I', jg: 'JG7', function: 'Marketing & Communications' },
          { title: 'Lead MAC CO II', jg: 'JG8', function: 'Marketing & Communications' },
          { title: 'Lead PAG', jg: 'JG8', function: 'Administration' },
          { title: 'Lead PMO I', jg: 'JG8', function: 'Projects' },
        ],
        'BUSINESS PARTNER (JG10-JG12)': [
          { title: 'MAC Supervisor', jg: 'JG10', function: 'Marketing & Communications' },
          { title: 'Lead MAC Supervisor', jg: 'JG11', function: 'Administration' },
          { title: 'Section Head, MAC', jg: 'JG11', function: 'Multiple' },
        ],
        'STRATEGIC PARTNER (JG13-JG15)': [
          { title: 'Department Head, MAC', jg: 'JG13', function: 'Strategic' },
          { title: 'Manager, MAC', jg: 'JG14', function: 'Management' },
          { title: 'Director, MAC', jg: 'JG15', function: 'Executive' },
        ],
      }
    },
    corp_foundation: {
      name: 'Corporate Foundation',
      fullName: 'CSR & Workforce Development',
      icon: '🤝',
      color: '#D62828',
      families: {
        'SPECIALIST (JG2-JG3)': [
          { title: 'BuDA II', jg: 'JG2', function: 'Projects & Grants' },
          { title: 'BuDA III', jg: 'JG3', function: 'Projects & Grants' },
          { title: 'LeA II', jg: 'JG2', function: 'Linkage & Engagement' },
          { title: 'LeA III', jg: 'JG3', function: 'Linkage & Engagement' },
        ],
        'GENERALIST (JG4-JG6)': [
          { title: 'Generalist I', jg: 'JG4', function: 'Projects & Grants' },
          { title: 'Generalist II', jg: 'JG5', function: 'Projects & Grants' },
          { title: 'Generalist I, EBD', jg: 'JG4', function: 'Enterpries & Business Development' },
          { title: 'Generalist I, LeD', jg: 'JG5', function: 'Linkage & Engagement' },
          { title: 'Generalist I, LeA', jg: 'JG4', function: 'Linkage & Engagement' },
        ],
        'LEAD (JG7-JG9)': [
          { title: 'Lead PAG', jg: 'JG7', function: 'Projects & Grants' },
          { title: 'Lead PMO I', jg: 'JG8', function: 'Projects & Grants' },
          { title: 'Lead EBD', jg: 'JG8', function: 'Enterpries & Business Development' },
          { title: 'Lead LeD I', jg: 'JG8', function: 'Linkage & Engagement' },
        ],
        'BUSINESS PARTNER (JG10-JG12)': [
          { title: 'Staff, Supervisor', jg: 'JG10', function: 'Projects & Grants' },
          { title: 'Staff, Supervisor', jg: 'JG11', function: 'Enterpries & Business Development' },
          { title: 'Section Head, LeD', jg: 'JG11', function: 'Linkage & Engagement' },
        ],
        'STRATEGIC PARTNER (JG13-JG15)': [
          { title: 'Department Head, CorF', jg: 'JG13', function: 'Strategic' },
          { title: 'Manager, CorF', jg: 'JG14', function: 'Management' },
          { title: 'Director, CorF', jg: 'JG15', function: 'Executive' },
        ],
      }
    }
  };

  const currentPillar = pillars[selectedPillar];

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ backgroundColor: NAVY, color: 'white', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '32px' }}>HCD CAREER LATTICE LIVE</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.9 }}>All Pillars | 5 Job Families | JG2-JG15 | Exact Role Titles</p>
      </div>

      <div style={{ display: 'flex', backgroundColor: CREAM, borderBottom: `3px solid ${ORANGE}` }}>
        {[
          { id: 'explorer', label: '🔍 Role Explorer' },
          { id: 'competencies', label: '📊 Job Families' },
          { id: 'assessment', label: '✅ Career Grades' },
          { id: 'paths', label: '🎯 Functions' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '15px',
              border: 'none',
              backgroundColor: activeTab === tab.id ? ORANGE : CREAM,
              color: activeTab === tab.id ? 'white' : NAVY,
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              fontSize: '13px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', backgroundColor: 'white', borderBottom: '1px solid #ddd', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Object.entries(pillars).map(([key, pillar]) => (
          <button
            key={key}
            onClick={() => setSelectedPillar(key)}
            style={{
              padding: '8px 16px',
              border: `2px solid ${pillar.color}`,
              backgroundColor: selectedPillar === key ? pillar.color : 'white',
              color: selectedPillar === key ? 'white' : pillar.color,
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '12px'
            }}
          >
            {pillar.icon} {pillar.name}
          </button>
        ))}
      </div>

      <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto' }}>
        {activeTab === 'explorer' && (
          <div>
            <h2 style={{ color: NAVY, marginBottom: '10px' }}>
              {currentPillar.icon} {currentPillar.fullName}
            </h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Browse all roles by job family with exact titles and grade levels</p>
            {Object.entries(currentPillar.families).map(([family, roles]) => (
              <div key={family} style={{ marginBottom: '20px' }}>
                <div 
                  style={{ backgroundColor: NAVY, color: 'white', padding: '12px 16px', borderRadius: '4px', fontWeight: 'bold', marginBottom: '12px', cursor: 'pointer' }} 
                  onClick={() => setSelectedFamily(selectedFamily === family ? null : family)}
                >
                  {family} ({roles.length} roles)
                </div>
                {selectedFamily === family && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                    {roles.map((role, idx) => (
                      <div key={idx} style={{ border: `2px solid ${ORANGE}`, borderRadius: '6px', padding: '12px', backgroundColor: CREAM }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                          <h4 style={{ margin: 0, color: NAVY, fontSize: '14px', fontWeight: 'bold' }}>{role.title}</h4>
                          <span style={{ backgroundColor: ORANGE, color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' }}>{role.jg}</span>
                        </div>
                        <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>📌 {role.function}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'competencies' && (
          <div>
            <h2 style={{ color: NAVY }}>📊 Job Families Overview</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Five career progression levels from entry to executive</p>
            {['SPECIALIST (JG2-JG3)', 'GENERALIST (JG4-JG6)', 'LEAD (JG7-JG9)', 'BUSINESS PARTNER (JG10-JG12)', 'STRATEGIC PARTNER (JG13-JG15)'].map(family => (
              <div key={family} style={{ padding: '15px', backgroundColor: CREAM, borderRadius: '6px', marginBottom: '10px', borderLeft: `5px solid ${ORANGE}` }}>
                <h3 style={{ color: NAVY, margin: '0 0 5px 0' }}>{family}</h3>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'assessment' && (
          <div>
            <h2 style={{ color: NAVY }}>✅ Career Grades (JG2-JG15)</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Job grades define responsibility levels and compensation</p>
            <div style={{ backgroundColor: CREAM, padding: '20px', borderRadius: '6px', borderLeft: `5px solid ${ORANGE}` }}>
              <p>Each role is assigned a specific job grade (JG2 through JG15) that reflects responsibility level, scope, and compensation band.</p>
            </div>
          </div>
        )}

        {activeTab === 'paths' && (
          <div>
            <h2 style={{ color: NAVY }}>🎯 Career Functions</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Specialized functions within each pillar</p>
            {['Training & Assessment', 'Certification & Documentation', 'Academic Instruction', 'Administration & Governance', 'Projects & Grants', 'Linkage & Engagement'].map((func, idx) => (
              <div key={idx} style={{ padding: '12px', backgroundColor: CREAM, borderRadius: '4px', marginBottom: '8px', borderLeft: `5px solid ${ORANGE}` }}>
                {func}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ backgroundColor: NAVY, color: 'white', padding: '20px', textAlign: 'center', marginTop: '40px', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>HCD Career Lattice Live | © 2026 Primary Group of Builders</p>
        <p style={{ margin: '5px 0 0 0', opacity: 0.8 }}>All Pillars | 5 Job Families | JG2-JG15 Grades | Exact Role Titles</p>
      </div>
    </div>
  );
}
