import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HCDLatticeComplete() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [selectedPillar, setSelectedPillar] = useState('tvet');
  const [selectedLevel, setSelectedLevel] = useState(null);

  const NAVY = '#0D1B3D';
  const ORANGE = '#E65100';
  const CREAM = '#FEF9F3';

  const pillars = {
    tvet: {
      name: 'TVET',
      fullName: 'Technical Vocational Education & Training',
      icon: '🛠️',
      color: '#E65100',
      roles: [
        { id: 'TVET-001', title: 'Training Assistant', level: 'SPECIALIST', jg: 'JG1' },
        { id: 'TVET-002', title: 'Training Instructor', level: 'SPECIALIST', jg: 'JG2' },
        { id: 'TVET-003', title: 'Senior Instructor', level: 'GENERALIST', jg: 'JG3' },
        { id: 'TVET-004', title: 'Curriculum Specialist', level: 'GENERALIST', jg: 'JG4' },
        { id: 'TVET-005', title: 'Training Program Manager', level: 'LEAD', jg: 'JG5' },
        { id: 'TVET-006', title: 'Head of Curriculum', level: 'LEAD', jg: 'JG6' },
        { id: 'TVET-007', title: 'TVET Program Manager', level: 'BUSINESS PARTNER', jg: 'JG7' },
        { id: 'TVET-008', title: 'TVET Operations Manager', level: 'BUSINESS PARTNER', jg: 'JG8' },
        { id: 'TVET-009', title: 'TVET Director', level: 'STRATEGIC PARTNER', jg: 'JG9' },
        { id: 'TVET-010', title: 'Head of TVET', level: 'STRATEGIC PARTNER', jg: 'JG10' },
      ]
    },
    shs: {
      name: 'SHS',
      fullName: 'Senior High School',
      icon: '📚',
      color: '#00B4D8',
      roles: [
        { id: 'SHS-001', title: 'Educational Support Officer', level: 'SPECIALIST', jg: 'JG1' },
        { id: 'SHS-002', title: 'Educator', level: 'SPECIALIST', jg: 'JG2' },
        { id: 'SHS-003', title: 'Senior Educator', level: 'GENERALIST', jg: 'JG3' },
        { id: 'SHS-004', title: 'Guidance Counselor', level: 'GENERALIST', jg: 'JG4' },
        { id: 'SHS-005', title: 'Program Coordinator', level: 'LEAD', jg: 'JG5' },
        { id: 'SHS-006', title: 'Head of Programs', level: 'LEAD', jg: 'JG6' },
        { id: 'SHS-007', title: 'SHS Program Manager', level: 'BUSINESS PARTNER', jg: 'JG7' },
        { id: 'SHS-008', title: 'SHS Operations Manager', level: 'BUSINESS PARTNER', jg: 'JG8' },
        { id: 'SHS-009', title: 'SHS Director', level: 'STRATEGIC PARTNER', jg: 'JG9' },
        { id: 'SHS-010', title: 'Head of Education', level: 'STRATEGIC PARTNER', jg: 'JG10' },
      ]
    },
    shared_services: {
      name: 'Shared Services',
      fullName: 'HR, Finance, IT, Operations',
      icon: '🏢',
      color: '#06A87D',
      roles: [
        { id: 'SS-001', title: 'Administrative Assistant', level: 'SPECIALIST', jg: 'JG1' },
        { id: 'SS-002', title: 'Coordinator', level: 'SPECIALIST', jg: 'JG2' },
        { id: 'SS-003', title: 'Senior Coordinator', level: 'GENERALIST', jg: 'JG3' },
        { id: 'SS-004', title: 'Specialist', level: 'GENERALIST', jg: 'JG4' },
        { id: 'SS-005', title: 'Senior Specialist', level: 'LEAD', jg: 'JG5' },
        { id: 'SS-006', title: 'Lead Specialist', level: 'LEAD', jg: 'JG6' },
        { id: 'SS-007', title: 'Manager', level: 'BUSINESS PARTNER', jg: 'JG7' },
        { id: 'SS-008', title: 'Senior Manager', level: 'BUSINESS PARTNER', jg: 'JG8' },
        { id: 'SS-009', title: 'Director', level: 'STRATEGIC PARTNER', jg: 'JG9' },
        { id: 'SS-010', title: 'Head of Function', level: 'STRATEGIC PARTNER', jg: 'JG10' },
      ]
    },
    corp_foundation: {
      name: 'Corporate Foundation',
      fullName: 'CSR & Workforce Development',
      icon: '🤝',
      color: '#D62828',
      roles: [
        { id: 'CF-001', title: 'Program Support Officer', level: 'SPECIALIST', jg: 'JG1' },
        { id: 'CF-002', title: 'Program Coordinator', level: 'SPECIALIST', jg: 'JG2' },
        { id: 'CF-003', title: 'Senior Coordinator', level: 'GENERALIST', jg: 'JG3' },
        { id: 'CF-004', title: 'Program Manager', level: 'GENERALIST', jg: 'JG4' },
        { id: 'CF-005', title: 'Senior Program Manager', level: 'LEAD', jg: 'JG5' },
        { id: 'CF-006', title: 'Head of Programs', level: 'LEAD', jg: 'JG6' },
        { id: 'CF-007', title: 'Foundation Manager', level: 'BUSINESS PARTNER', jg: 'JG7' },
        { id: 'CF-008', title: 'Senior Foundation Manager', level: 'BUSINESS PARTNER', jg: 'JG8' },
        { id: 'CF-009', title: 'Foundation Director', level: 'STRATEGIC PARTNER', jg: 'JG9' },
        { id: 'CF-010', title: 'Head of Foundation', level: 'STRATEGIC PARTNER', jg: 'JG10' },
      ]
    }
  };

  const currentPillar = pillars[selectedPillar];

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ backgroundColor: NAVY, color: 'white', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '32px' }}>HCD CAREER LATTICE LIVE</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.9 }}>All Pillars | 5 Levels | 21 Competencies | 40 Roles</p>
      </div>

      <div style={{ display: 'flex', backgroundColor: CREAM, borderBottom: `3px solid ${ORANGE}` }}>
        {[
          { id: 'explorer', label: '🔍 Role Explorer' },
          { id: 'competencies', label: '📊 Competency Matrix' },
          { id: 'assessment', label: '✅ Self Assessment' },
          { id: 'paths', label: '🎯 Career Paths' }
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
            <p style={{ color: '#666', marginBottom: '20px' }}>Browse roles and explore career progression across all 5 levels</p>
            {['SPECIALIST', 'GENERALIST', 'LEAD', 'BUSINESS PARTNER', 'STRATEGIC PARTNER'].map(level => {
              const rolesInLevel = currentPillar.roles.filter(r => r.level === level);
              return (
                <div key={level} style={{ marginBottom: '20px' }}>
                  <div 
                    style={{ backgroundColor: NAVY, color: 'white', padding: '12px 16px', borderRadius: '4px', fontWeight: 'bold', marginBottom: '12px', cursor: 'pointer' }} 
                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                  >
                    {level} ({rolesInLevel.length} roles)
                  </div>
                  {selectedLevel === level && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
                      {rolesInLevel.map(role => (
                        <div key={role.id} style={{ border: `2px solid ${ORANGE}`, borderRadius: '6px', padding: '12px', backgroundColor: CREAM }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                            <h4 style={{ margin: 0, color: NAVY, fontSize: '13px' }}>{role.title}</h4>
                            <span style={{ backgroundColor: ORANGE, color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' }}>{role.jg}</span>
                          </div>
                          <p style={{ margin: 0, fontSize: '11px', color: '#666' }}>{role.id}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'competencies' && (
          <div>
            <h2 style={{ color: NAVY }}>📊 Competency Framework</h2>
            <p style={{ color: '#666' }}>21 competencies evolving across 5 career levels</p>
            <div style={{ backgroundColor: CREAM, padding: '20px', borderRadius: '6px', borderLeft: `5px solid ${ORANGE}` }}>
              <p>Download the career pathing guides from GitHub for complete competency matrix details</p>
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div>
            <h2 style={{ color: NAVY }}>✅ Self-Assessment</h2>
            <p style={{ color: '#666' }}>Evaluate your competencies and career level</p>
            <div style={{ backgroundColor: CREAM, padding: '20px', borderRadius: '6px', borderLeft: `5px solid ${ORANGE}` }}>
              <p>Download the pillar-specific assessment tools from GitHub to evaluate yourself on all 21 competencies</p>
            </div>
          </div>
        )}

        {activeTab === 'paths' && (
          <div>
            <h2 style={{ color: NAVY }}>🎯 Career Pathways</h2>
            <p style={{ color: '#666' }}>Typical progression across career levels</p>
            {['Technical Specialist Track', 'Management Track', 'Executive Track'].map((path, idx) => (
              <div key={idx} style={{ padding: '15px', backgroundColor: CREAM, borderRadius: '6px', marginBottom: '10px', borderLeft: `5px solid ${ORANGE}` }}>
                <h3 style={{ color: NAVY, margin: '0 0 5px 0' }}>{path}</h3>
                <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>Typical progression with competency development at each stage</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ backgroundColor: NAVY, color: 'white', padding: '20px', textAlign: 'center', marginTop: '40px', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>HCD Career Lattice Live | © 2026 Primary Group of Builders</p>
        <p style={{ margin: '5px 0 0 0', opacity: 0.8 }}>All 4 Pillars | 40 Roles | 5 Levels | 21 Competencies</p>
      </div>
    </div>
  );
}
