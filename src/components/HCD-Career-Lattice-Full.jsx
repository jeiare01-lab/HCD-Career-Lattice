import React, { useState } from 'react';
import { ChevronRight, Plus, Trash2, Zap, BookOpen, Award, Mail, Download, Printer } from 'lucide-react';

const HCDCareerLattice = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [mode, setMode] = useState('lattice');
  const [customPath, setCustomPath] = useState([]);
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

  // Comprehensive role list organized by section and grade
  const allRoles = [
    // TVET Training & Assessment
    { title: 'TAss I', grade: 'JG1', level: 'Entry-Level', function: 'TVET', section: 'Training & Assessment', experience: '0-1 years', education: 'High School' },
    { title: 'TAss II', grade: 'JG2', level: 'Entry-Level', function: 'TVET', section: 'Training & Assessment', experience: '1-2 years', education: 'High School' },
    { title: 'TAss III', grade: 'JG3', level: 'Entry-Level', function: 'TVET', section: 'Training & Assessment', experience: '2-3 years', education: 'High School' },
    { title: 'Trainer I', grade: 'JG4', level: 'Intermediate', function: 'TVET', section: 'Training & Assessment', experience: '3-4 years', education: 'Diploma' },
    { title: 'Trainer II', grade: 'JG5', level: 'Intermediate', function: 'TVET', section: 'Training & Assessment', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Trainer III', grade: 'JG6', level: 'Intermediate', function: 'TVET', section: 'Training & Assessment', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead TA I', grade: 'JG7', level: 'Officer', function: 'TVET', section: 'Training & Assessment', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead TA II', grade: 'JG8', level: 'Officer', function: 'TVET', section: 'Training & Assessment', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead TA III', grade: 'JG9', level: 'Officer', function: 'TVET', section: 'Training & Assessment', experience: '8-10 years', education: 'Bachelor' },
    { title: 'Asst. TVET Supervisor', grade: 'JG10', level: 'Supervisory', function: 'TVET', section: 'Training & Assessment', experience: '8-10 years', education: 'Bachelor' },
    { title: 'TVET Supervisor', grade: 'JG11', level: 'Supervisory', function: 'TVET', section: 'Training & Assessment', experience: '9-11 years', education: 'Bachelor' },
    { title: 'Section Head, TVET', grade: 'JG12', level: 'Supervisory', function: 'TVET', section: 'Training & Assessment', experience: '10+ years', education: 'Master' },
    { title: 'Department Head, TVET', grade: 'JG13', level: 'Managerial', function: 'TVET', section: 'Training & Assessment', experience: '12+ years', education: 'Master' },
    { title: 'Manager, TVET', grade: 'JG14', level: 'Managerial', function: 'TVET', section: 'Training & Assessment', experience: '13+ years', education: 'Master' },
    { title: 'Director, TVET', grade: 'JG15', level: 'Managerial', function: 'TVET', section: 'Training & Assessment', experience: '15+ years', education: 'Master' },

    // TVET Certification & Documentation
    { title: 'CADA I', grade: 'JG1', level: 'Entry-Level', function: 'TVET', section: 'Certification & Documentation', experience: '0-1 years', education: 'High School' },
    { title: 'CADA II', grade: 'JG2', level: 'Entry-Level', function: 'TVET', section: 'Certification & Documentation', experience: '1-2 years', education: 'High School' },
    { title: 'CADA III', grade: 'JG3', level: 'Entry-Level', function: 'TVET', section: 'Certification & Documentation', experience: '2-3 years', education: 'High School' },
    { title: 'Registrar I', grade: 'JG4', level: 'Intermediate', function: 'TVET', section: 'Certification & Documentation', experience: '3-4 years', education: 'Diploma' },
    { title: 'Registrar II', grade: 'JG5', level: 'Intermediate', function: 'TVET', section: 'Certification & Documentation', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Registrar III', grade: 'JG6', level: 'Intermediate', function: 'TVET', section: 'Certification & Documentation', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead CAD Controller I', grade: 'JG7', level: 'Officer', function: 'TVET', section: 'Certification & Documentation', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead CAD Controller II', grade: 'JG8', level: 'Officer', function: 'TVET', section: 'Certification & Documentation', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead CAD Controller III', grade: 'JG9', level: 'Officer', function: 'TVET', section: 'Certification & Documentation', experience: '8-10 years', education: 'Bachelor' },

    // SHS Academic Instruction
    { title: 'AI Associate I', grade: 'JG1', level: 'Entry-Level', function: 'SHS', section: 'Academic Instruction', experience: '0-1 years', education: 'High School' },
    { title: 'AI Associate II', grade: 'JG2', level: 'Entry-Level', function: 'SHS', section: 'Academic Instruction', experience: '1-2 years', education: 'High School' },
    { title: 'AI Associate III', grade: 'JG3', level: 'Entry-Level', function: 'SHS', section: 'Academic Instruction', experience: '2-3 years', education: 'High School' },
    { title: 'Teacher I', grade: 'JG4', level: 'Intermediate', function: 'SHS', section: 'Academic Instruction', experience: '3-4 years', education: 'Bachelor' },
    { title: 'Teacher II', grade: 'JG5', level: 'Intermediate', function: 'SHS', section: 'Academic Instruction', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Teacher III', grade: 'JG6', level: 'Intermediate', function: 'SHS', section: 'Academic Instruction', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead Teacher I', grade: 'JG7', level: 'Officer', function: 'SHS', section: 'Academic Instruction', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead Teacher II', grade: 'JG8', level: 'Officer', function: 'SHS', section: 'Academic Instruction', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead Teacher III', grade: 'JG9', level: 'Officer', function: 'SHS', section: 'Academic Instruction', experience: '8-10 years', education: 'Bachelor' },
    { title: 'Asst. SHS Supervisor', grade: 'JG10', level: 'Supervisory', function: 'SHS', section: 'Academic Instruction', experience: '8-10 years', education: 'Bachelor' },
    { title: 'SHS Supervisor', grade: 'JG11', level: 'Supervisory', function: 'SHS', section: 'Academic Instruction', experience: '9-11 years', education: 'Bachelor' },
    { title: 'Section Head, SHS', grade: 'JG12', level: 'Supervisory', function: 'SHS', section: 'Academic Instruction', experience: '10+ years', education: 'Master' },
    { title: 'Department Head, SHS', grade: 'JG13', level: 'Managerial', function: 'SHS', section: 'Academic Instruction', experience: '12+ years', education: 'Master' },
    { title: 'Manager, SHS', grade: 'JG14', level: 'Managerial', function: 'SHS', section: 'Academic Instruction', experience: '13+ years', education: 'Master' },
    { title: 'Director, SHS', grade: 'JG15', level: 'Managerial', function: 'SHS', section: 'Academic Instruction', experience: '15+ years', education: 'Master' },

    // SHS Student Affairs
    { title: 'SAA I', grade: 'JG1', level: 'Entry-Level', function: 'SHS', section: 'Student Affairs', experience: '0-1 years', education: 'High School' },
    { title: 'SAA II', grade: 'JG2', level: 'Entry-Level', function: 'SHS', section: 'Student Affairs', experience: '1-2 years', education: 'High School' },
    { title: 'SAA III', grade: 'JG3', level: 'Entry-Level', function: 'SHS', section: 'Student Affairs', experience: '2-3 years', education: 'High School' },
    { title: 'GENERALIST, SAO I', grade: 'JG4', level: 'Intermediate', function: 'SHS', section: 'Student Affairs', experience: '3-4 years', education: 'Bachelor' },
    { title: 'GENERALIST, SAO II', grade: 'JG5', level: 'Intermediate', function: 'SHS', section: 'Student Affairs', experience: '4-5 years', education: 'Bachelor' },
    { title: 'GENERALIST, SAO III', grade: 'JG6', level: 'Intermediate', function: 'SHS', section: 'Student Affairs', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead AGO I', grade: 'JG7', level: 'Officer', function: 'SHS', section: 'Student Affairs', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead AGO II', grade: 'JG8', level: 'Officer', function: 'SHS', section: 'Student Affairs', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead AGO III', grade: 'JG9', level: 'Officer', function: 'SHS', section: 'Student Affairs', experience: '8-10 years', education: 'Bachelor' },

    // Shared Services - Finance & Accounting
    { title: 'FAD Specialist I', grade: 'JG1', level: 'Entry-Level', function: 'Shared Services', section: 'Finance & Accounting', experience: '0-1 years', education: 'High School' },
    { title: 'FAD Specialist II', grade: 'JG2', level: 'Entry-Level', function: 'Shared Services', section: 'Finance & Accounting', experience: '1-2 years', education: 'High School' },
    { title: 'FAD Specialist III', grade: 'JG3', level: 'Entry-Level', function: 'Shared Services', section: 'Finance & Accounting', experience: '2-3 years', education: 'High School' },
    { title: 'FAD Generalist I', grade: 'JG4', level: 'Intermediate', function: 'Shared Services', section: 'Finance & Accounting', experience: '3-4 years', education: 'Bachelor' },
    { title: 'FAD Generalist II', grade: 'JG5', level: 'Intermediate', function: 'Shared Services', section: 'Finance & Accounting', experience: '4-5 years', education: 'Bachelor' },
    { title: 'FAD Generalist III', grade: 'JG6', level: 'Intermediate', function: 'Shared Services', section: 'Finance & Accounting', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead I, Finance', grade: 'JG7', level: 'Officer', function: 'Shared Services', section: 'Finance & Accounting', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead II, Finance', grade: 'JG8', level: 'Officer', function: 'Shared Services', section: 'Finance & Accounting', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead III, Finance', grade: 'JG9', level: 'Officer', function: 'Shared Services', section: 'Finance & Accounting', experience: '8-10 years', education: 'Bachelor' },
    { title: 'BP I, Finance', grade: 'JG10', level: 'Supervisory', function: 'Shared Services', section: 'Finance & Accounting', experience: '8-10 years', education: 'Master' },
    { title: 'BP II, Finance', grade: 'JG11', level: 'Supervisory', function: 'Shared Services', section: 'Finance & Accounting', experience: '9-11 years', education: 'Master' },
    { title: 'BP III, Finance', grade: 'JG12', level: 'Supervisory', function: 'Shared Services', section: 'Finance & Accounting', experience: '10+ years', education: 'Master' },
    { title: 'SP I, Finance', grade: 'JG13', level: 'Managerial', function: 'Shared Services', section: 'Finance & Accounting', experience: '12+ years', education: 'Master' },
    { title: 'SP II, Finance', grade: 'JG14', level: 'Managerial', function: 'Shared Services', section: 'Finance & Accounting', experience: '13+ years', education: 'Master' },
    { title: 'SP III, Finance', grade: 'JG15', level: 'Managerial', function: 'Shared Services', section: 'Finance & Accounting', experience: '15+ years', education: 'Master' },

    // Shared Services - Human Resources
    { title: 'HR Specialist I', grade: 'JG1', level: 'Entry-Level', function: 'Shared Services', section: 'Human Resources', experience: '0-1 years', education: 'High School' },
    { title: 'HR Specialist II', grade: 'JG2', level: 'Entry-Level', function: 'Shared Services', section: 'Human Resources', experience: '1-2 years', education: 'High School' },
    { title: 'HR Specialist III', grade: 'JG3', level: 'Entry-Level', function: 'Shared Services', section: 'Human Resources', experience: '2-3 years', education: 'High School' },
    { title: 'HR Generalist I', grade: 'JG4', level: 'Intermediate', function: 'Shared Services', section: 'Human Resources', experience: '3-4 years', education: 'Bachelor' },
    { title: 'HR Generalist II', grade: 'JG5', level: 'Intermediate', function: 'Shared Services', section: 'Human Resources', experience: '4-5 years', education: 'Bachelor' },
    { title: 'HR Generalist III', grade: 'JG6', level: 'Intermediate', function: 'Shared Services', section: 'Human Resources', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead I, HR', grade: 'JG7', level: 'Officer', function: 'Shared Services', section: 'Human Resources', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead II, HR', grade: 'JG8', level: 'Officer', function: 'Shared Services', section: 'Human Resources', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead III, HR', grade: 'JG9', level: 'Officer', function: 'Shared Services', section: 'Human Resources', experience: '8-10 years', education: 'Bachelor' },
    { title: 'BP I, HR', grade: 'JG10', level: 'Supervisory', function: 'Shared Services', section: 'Human Resources', experience: '8-10 years', education: 'Master' },
    { title: 'BP II, HR', grade: 'JG11', level: 'Supervisory', function: 'Shared Services', section: 'Human Resources', experience: '9-11 years', education: 'Master' },
    { title: 'BP III, HR', grade: 'JG12', level: 'Supervisory', function: 'Shared Services', section: 'Human Resources', experience: '10+ years', education: 'Master' },
    { title: 'SP I, HR', grade: 'JG13', level: 'Managerial', function: 'Shared Services', section: 'Human Resources', experience: '12+ years', education: 'Master' },
    { title: 'SP II, HR', grade: 'JG14', level: 'Managerial', function: 'Shared Services', section: 'Human Resources', experience: '13+ years', education: 'Master' },
    { title: 'SP III, HR', grade: 'JG15', level: 'Managerial', function: 'Shared Services', section: 'Human Resources', experience: '15+ years', education: 'Master' },

    // Shared Services - Supply Chain Management
    { title: 'SCM Specialist I', grade: 'JG1', level: 'Entry-Level', function: 'Shared Services', section: 'Supply Chain', experience: '0-1 years', education: 'High School' },
    { title: 'SCM Specialist II', grade: 'JG2', level: 'Entry-Level', function: 'Shared Services', section: 'Supply Chain', experience: '1-2 years', education: 'High School' },
    { title: 'SCM Specialist III', grade: 'JG3', level: 'Entry-Level', function: 'Shared Services', section: 'Supply Chain', experience: '2-3 years', education: 'High School' },
    { title: 'SCM Generalist I', grade: 'JG4', level: 'Intermediate', function: 'Shared Services', section: 'Supply Chain', experience: '3-4 years', education: 'Bachelor' },
    { title: 'SCM Generalist II', grade: 'JG5', level: 'Intermediate', function: 'Shared Services', section: 'Supply Chain', experience: '4-5 years', education: 'Bachelor' },
    { title: 'SCM Generalist III', grade: 'JG6', level: 'Intermediate', function: 'Shared Services', section: 'Supply Chain', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead I, SCM', grade: 'JG7', level: 'Officer', function: 'Shared Services', section: 'Supply Chain', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead II, SCM', grade: 'JG8', level: 'Officer', function: 'Shared Services', section: 'Supply Chain', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead III, SCM', grade: 'JG9', level: 'Officer', function: 'Shared Services', section: 'Supply Chain', experience: '8-10 years', education: 'Bachelor' },
    { title: 'BP I, SCM', grade: 'JG10', level: 'Supervisory', function: 'Shared Services', section: 'Supply Chain', experience: '8-10 years', education: 'Master' },
    { title: 'BP II, SCM', grade: 'JG11', level: 'Supervisory', function: 'Shared Services', section: 'Supply Chain', experience: '9-11 years', education: 'Master' },
    { title: 'BP III, SCM', grade: 'JG12', level: 'Supervisory', function: 'Shared Services', section: 'Supply Chain', experience: '10+ years', education: 'Master' },
    { title: 'SP I, SCM', grade: 'JG13', level: 'Managerial', function: 'Shared Services', section: 'Supply Chain', experience: '12+ years', education: 'Master' },
    { title: 'SP II, SCM', grade: 'JG14', level: 'Managerial', function: 'Shared Services', section: 'Supply Chain', experience: '13+ years', education: 'Master' },
    { title: 'SP III, SCM', grade: 'JG15', level: 'Managerial', function: 'Shared Services', section: 'Supply Chain', experience: '15+ years', education: 'Master' },

    // Shared Services - IT
    { title: 'IT Specialist I', grade: 'JG1', level: 'Entry-Level', function: 'Shared Services', section: 'IT', experience: '0-1 years', education: 'High School' },
    { title: 'IT Specialist II', grade: 'JG2', level: 'Entry-Level', function: 'Shared Services', section: 'IT', experience: '1-2 years', education: 'High School' },
    { title: 'IT Specialist III', grade: 'JG3', level: 'Entry-Level', function: 'Shared Services', section: 'IT', experience: '2-3 years', education: 'High School' },
    { title: 'IT Generalist I', grade: 'JG4', level: 'Intermediate', function: 'Shared Services', section: 'IT', experience: '3-4 years', education: 'Bachelor' },
    { title: 'IT Generalist II', grade: 'JG5', level: 'Intermediate', function: 'Shared Services', section: 'IT', experience: '4-5 years', education: 'Bachelor' },
    { title: 'IT Generalist III', grade: 'JG6', level: 'Intermediate', function: 'Shared Services', section: 'IT', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead I, IT', grade: 'JG7', level: 'Officer', function: 'Shared Services', section: 'IT', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead II, IT', grade: 'JG8', level: 'Officer', function: 'Shared Services', section: 'IT', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead III, IT', grade: 'JG9', level: 'Officer', function: 'Shared Services', section: 'IT', experience: '8-10 years', education: 'Bachelor' },
    { title: 'BP I, IT', grade: 'JG10', level: 'Supervisory', function: 'Shared Services', section: 'IT', experience: '8-10 years', education: 'Master' },
    { title: 'BP II, IT', grade: 'JG11', level: 'Supervisory', function: 'Shared Services', section: 'IT', experience: '9-11 years', education: 'Master' },
    { title: 'BP III, IT', grade: 'JG12', level: 'Supervisory', function: 'Shared Services', section: 'IT', experience: '10+ years', education: 'Master' },
    { title: 'SP I, IT', grade: 'JG13', level: 'Managerial', function: 'Shared Services', section: 'IT', experience: '12+ years', education: 'Master' },
    { title: 'SP II, IT', grade: 'JG14', level: 'Managerial', function: 'Shared Services', section: 'IT', experience: '13+ years', education: 'Master' },
    { title: 'SP III, IT', grade: 'JG15', level: 'Managerial', function: 'Shared Services', section: 'IT', experience: '15+ years', education: 'Master' },

    // Marketing & Communications
    { title: 'MACA I', grade: 'JG1', level: 'Entry-Level', function: 'Shared Services', section: 'Marketing & Comms', experience: '0-1 years', education: 'High School' },
    { title: 'MACA II', grade: 'JG2', level: 'Entry-Level', function: 'Shared Services', section: 'Marketing & Comms', experience: '1-2 years', education: 'High School' },
    { title: 'MACA III', grade: 'JG3', level: 'Entry-Level', function: 'Shared Services', section: 'Marketing & Comms', experience: '2-3 years', education: 'High School' },
    { title: 'MAC-CO I', grade: 'JG4', level: 'Intermediate', function: 'Shared Services', section: 'Marketing & Comms', experience: '3-4 years', education: 'Bachelor' },
    { title: 'MAC-CO II', grade: 'JG5', level: 'Intermediate', function: 'Shared Services', section: 'Marketing & Comms', experience: '4-5 years', education: 'Bachelor' },
    { title: 'MAC-CO III', grade: 'JG6', level: 'Intermediate', function: 'Shared Services', section: 'Marketing & Comms', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead MAC I', grade: 'JG7', level: 'Officer', function: 'Shared Services', section: 'Marketing & Comms', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead MAC II', grade: 'JG8', level: 'Officer', function: 'Shared Services', section: 'Marketing & Comms', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead MAC III', grade: 'JG9', level: 'Officer', function: 'Shared Services', section: 'Marketing & Comms', experience: '8-10 years', education: 'Bachelor' },

    // Corporate Foundation - Projects & Grants
    { title: 'PAGA I', grade: 'JG1', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '0-1 years', education: 'High School' },
    { title: 'PAGA II', grade: 'JG2', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '1-2 years', education: 'High School' },
    { title: 'PAGA III', grade: 'JG3', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '2-3 years', education: 'High School' },
    { title: 'Generalist I, PAG', grade: 'JG4', level: 'Intermediate', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '3-4 years', education: 'Bachelor' },
    { title: 'Generalist II, PAG', grade: 'JG5', level: 'Intermediate', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Generalist III, PAG', grade: 'JG6', level: 'Intermediate', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead PMO I', grade: 'JG7', level: 'Officer', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead PMO II', grade: 'JG8', level: 'Officer', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead PMO III', grade: 'JG9', level: 'Officer', function: 'Corporate Foundation', section: 'Projects & Grants', experience: '8-10 years', education: 'Bachelor' },

    // Corporate Foundation - Enterprise & Business Development
    { title: 'BusDA I', grade: 'JG1', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '0-1 years', education: 'High School' },
    { title: 'BusDA II', grade: 'JG2', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '1-2 years', education: 'High School' },
    { title: 'BusDA III', grade: 'JG3', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '2-3 years', education: 'High School' },
    { title: 'Generalist I, EBD', grade: 'JG4', level: 'Intermediate', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '3-4 years', education: 'Bachelor' },
    { title: 'Generalist II, EBD', grade: 'JG5', level: 'Intermediate', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Generalist III, EBD', grade: 'JG6', level: 'Intermediate', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead EBD I', grade: 'JG7', level: 'Officer', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead EBD II', grade: 'JG8', level: 'Officer', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead EBD III', grade: 'JG9', level: 'Officer', function: 'Corporate Foundation', section: 'Enterprise & BD', experience: '8-10 years', education: 'Bachelor' },

    // Corporate Foundation - Linkage & Engagement
    { title: 'LEA I', grade: 'JG1', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '0-1 years', education: 'High School' },
    { title: 'LEA II', grade: 'JG2', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '1-2 years', education: 'High School' },
    { title: 'LEA III', grade: 'JG3', level: 'Entry-Level', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '2-3 years', education: 'High School' },
    { title: 'Generalist I, LE', grade: 'JG4', level: 'Intermediate', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '3-4 years', education: 'Bachelor' },
    { title: 'Generalist II, LE', grade: 'JG5', level: 'Intermediate', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '4-5 years', education: 'Bachelor' },
    { title: 'Generalist III, LE', grade: 'JG6', level: 'Intermediate', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '5-6 years', education: 'Bachelor' },
    { title: 'Lead CMO I', grade: 'JG7', level: 'Officer', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '6-8 years', education: 'Bachelor' },
    { title: 'Lead CMO II', grade: 'JG8', level: 'Officer', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '7-9 years', education: 'Bachelor' },
    { title: 'Lead CMO III', grade: 'JG9', level: 'Officer', function: 'Corporate Foundation', section: 'Linkage & Engagement', experience: '8-10 years', education: 'Bachelor' },
  ];

  const coreCompetencies = {
    'Planning and Organizing': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' },
    'Decision Making & Problem Solving': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' },
    'Leadership': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' },
    'Innovation': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Intermediate', supervisory: 'Advanced', managerial: 'Advanced' },
    'Communication': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' },
    'Customer Focus': { entry: 'Intermediate', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' },
    'Business Acumen': { entry: 'Basic', intermediate: 'Intermediate', officer: 'Advanced', supervisory: 'Advanced', managerial: 'Advanced' }
  };

  const technicalCompetencies = {
    'Strategic Management': { entry: 'Not required', intermediate: 'Moderately required', officer: 'Highly required', supervisory: 'Highly required', managerial: 'Highly required' },
    'Consensus Building': { entry: 'Not required', intermediate: 'Moderately required', officer: 'Moderately required', supervisory: 'Highly required', managerial: 'Highly required' },
    'Governance Support': { entry: 'Moderately required', intermediate: 'Moderately required', officer: 'Highly required', supervisory: 'Highly required', managerial: 'Highly required' },
    'Project/Program Management': { entry: 'Not required', intermediate: 'Moderately required', officer: 'Highly required', supervisory: 'Highly required', managerial: 'Highly required' },
    'Administrative Management': { entry: 'Not required', intermediate: 'Moderately required', officer: 'Highly required', supervisory: 'Highly required', managerial: 'Highly required' }
  };

  // PGB Learning & Development Portfolio
  const trainingPrograms = {
    entry: {
      program: 'Program On-the-GO',
      cost: '₱800.00',
      priority: 'SPECIALISTS',
      modules: [
        'Work Attitude & Values Enhancement',
        '360° Feedback on Communication',
        'Telephone Courtesy & Netiquette',
        'Microsoft Excel (Basic & Advance Level)',
        'Time Management',
        'Basic Grammar & Report Writing',
        'Business Correspondence',
        '8-Hour Mandatory Employee Orientation on Occupational Safety & Health (8H MEOSH)'
      ]
    },
    intermediate: {
      program: 'Functional Training Programs',
      cost: '₱1,500.00',
      priority: 'GENERALISTS',
      modules: [
        'HR Management 101',
        'Site Management & Administration 101',
        'Labor Relations 101 (Discipline & Disciplinary Action)',
        'Accounting for Non-Accountants',
        'Corporate Finance & Budgeting',
        'Engineering 101',
        'Procurement 101',
        'Hazard Identification, Risk Assessment & Controls (HIRAC)'
      ]
    },
    officer: {
      program: 'Leadership Foundations: Transitioning to Leader',
      cost: '₱1,800.00',
      priority: 'LEADS',
      modules: [
        'Basic Supervision',
        'Developing Extra Ordinary Leaders',
        'Interaction Management (IM) Essentials',
        'Communicating for Leadership Success',
        'Performance Management 101',
        'Delivering Value to the Business',
        '12-Step Problem Solving',
        'Decision Analysis Framework',
        'Presentation Skills',
        'Loss Control Management (LCM)',
        'Environment, Health, Safety & Security Management'
      ]
    },
    supervisory: {
      program: 'PGB Leadership Imperatives: Strengthening your Leadership',
      cost: '₱2,500.00',
      priority: 'BUSINESS PARTNERS',
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
    managerial: {
      program: 'PGB Executive Leadership: Defying Convention',
      cost: '₱3,500.00',
      priority: 'STRATEGIC PARTNERS',
      modules: [
        'Executive Presence',
        'Building a Strong Personal Brand Through People',
        'Strategic Leadership',
        'Using Critical & Strategic Thinking Skills',
        'Fostering Innovation',
        'Turning Weakness & Threats to Greater Opportunities',
        'Making High Quality Decisions',
        'Delegating with Purpose',
        'Intra & Entrepreneurship',
        'Purposeful Curiosity: The power of asking the Right Questions',
        'EHSS as a Strategic Business Partner'
      ]
    }
  };

  const getLevelKey = (level) => {
    const mapping = { 'Entry-Level': 'entry', 'Intermediate': 'intermediate', 'Officer': 'officer', 'Supervisory': 'supervisory', 'Managerial': 'managerial' };
    return mapping[level] || 'entry';
  };

  const getCompetencyGap = (fromRole, toRole) => {
    const from = allRoles.find(r => r.title === fromRole);
    const to = allRoles.find(r => r.title === toRole);
    if (!from || !to) return null;

    const fromKey = getLevelKey(from.level);
    const toKey = getLevelKey(to.level);

    const gaps = {
      core: [],
      technical: [],
      experience: '',
      education: ''
    };

    Object.entries(coreCompetencies).forEach(([comp, levels]) => {
      const fromLevel = levels[fromKey];
      const toLevel = levels[toKey];
      if (fromLevel !== toLevel && ((fromLevel === 'Basic' && toLevel === 'Intermediate') || (fromLevel === 'Intermediate' && toLevel === 'Advanced'))) {
        gaps.core.push({ competency: comp, from: fromLevel, to: toLevel });
      }
    });

    Object.entries(technicalCompetencies).forEach(([comp, levels]) => {
      const fromLevel = levels[fromKey];
      const toLevel = levels[toKey];
      if (fromLevel !== toLevel) {
        gaps.technical.push({ competency: comp, from: fromLevel, to: toLevel });
      }
    });

    const expMatch = from.experience.match(/(\d+)/g);
    const toExpMatch = to.experience.match(/(\d+)/g);
    if (expMatch && toExpMatch) {
      const expYears = parseInt(toExpMatch[1] || toExpMatch[0]) - parseInt(expMatch[1] || expMatch[0]);
      if (expYears > 0) gaps.experience = `${expYears} additional years needed`;
    }

    if (from.education !== to.education) {
      gaps.education = `Upgrade from "${from.education}" to "${to.education}"`;
    }

    return gaps;
  };

  const getColor = (value) => {
    if (value === 'Advanced' || value === 'Highly required') return colors.orange;
    if (value === 'Intermediate' || value === 'Moderately required') return '#FFE4C4';
    return colors.light;
  };

  const getGradeColor = (grade) => {
    const gradeNum = parseInt(grade.replace('JG', ''));
    if (gradeNum <= 3) return '#E8F5E9'; // Entry - light green
    if (gradeNum <= 6) return '#E3F2FD'; // Intermediate - light blue
    if (gradeNum <= 9) return '#F3E5F5'; // Officer - light purple
    if (gradeNum <= 12) return '#FFF3E0'; // Supervisory - light orange
    return '#FFEBEE'; // Managerial - light red
  };

  const currentRole = selectedRole ? allRoles.find(r => r.title === selectedRole) : null;

  const getPathInteraction = (index) => {
    if (index === 0) return null;
    const fromRole = customPath[index - 1];
    const toRole = customPath[index];
    return getCompetencyGap(fromRole, toRole);
  };

  // Grade list
  const grades = ['JG1', 'JG2', 'JG3', 'JG4', 'JG5', 'JG6', 'JG7', 'JG8', 'JG9', 'JG10', 'JG11', 'JG12', 'JG13', 'JG14', 'JG15'];
  
  // Get sections
  const sections = [...new Set(allRoles.map(r => r.section))].sort();

  // Get roles by section and grade
  const getRolesByGradeAndSection = (grade, section) => {
    return allRoles.filter(r => r.grade === grade && r.section === section);
  };

  // Print function
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const pathContent = customPath.map((roleTitle, index) => {
      const role = allRoles.find(r => r.title === roleTitle);
      return `
        <div style="margin: 20px 0; padding: 15px; border: 2px solid #E65100; background: #F5EFE7; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #0D1B3D;">Step ${index + 1}: ${role.title}</h3>
          <p><strong>Grade:</strong> ${role.grade} | <strong>Level:</strong> ${role.level}</p>
          <p><strong>Function:</strong> ${role.function} | <strong>Section:</strong> ${role.section}</p>
          <p><strong>Experience Required:</strong> ${role.experience} | <strong>Education:</strong> ${role.education}</p>
        </div>
      `;
    }).join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>Career Path - PGB HCD</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #0D1B3D; }
            h1 { color: #0D1B3D; border-bottom: 3px solid #E65100; padding-bottom: 10px; }
            h2 { color: #E65100; }
            .summary { background: #FEF9F3; padding: 15px; border-left: 4px solid #E65100; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h1>Career Path - PGB Human Capital Development</h1>
          <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
          
          <div class="summary">
            <h2>Path Summary</h2>
            <p><strong>Total Steps:</strong> ${customPath.length} positions</p>
            <p><strong>Starting Level:</strong> ${allRoles.find(r => r.title === customPath[0]).level}</p>
            <p><strong>Target Level:</strong> ${allRoles.find(r => r.title === customPath[customPath.length - 1]).level}</p>
          </div>

          <h2>Your Career Progression</h2>
          ${pathContent}

          <div class="summary" style="margin-top: 30px;">
            <p><em>This career path was built using the PGB HCD Career Lattice Tool.</em></p>
            <p><em>Discuss this plan with your immediate supervisor to develop your Individual Development Plan (IDP).</em></p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Export as JSON
  const handleExportJSON = () => {
    const pathData = {
      generatedDate: new Date().toISOString(),
      summary: {
        totalSteps: customPath.length,
        startingLevel: allRoles.find(r => r.title === customPath[0])?.level,
        targetLevel: allRoles.find(r => r.title === customPath[customPath.length - 1])?.level
      },
      path: customPath.map((roleTitle, index) => {
        const role = allRoles.find(r => r.title === roleTitle);
        return {
          step: index + 1,
          title: role.title,
          grade: role.grade,
          level: role.level,
          function: role.function,
          section: role.section,
          experience: role.experience,
          education: role.education
        };
      })
    };

    const dataStr = JSON.stringify(pathData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Career-Path-${new Date().getTime()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Export as CSV
  const handleExportCSV = () => {
    const headers = ['Step', 'Position Title', 'Grade', 'Level', 'Function', 'Section', 'Experience Required', 'Education Required'];
    const rows = customPath.map((roleTitle, index) => {
      const role = allRoles.find(r => r.title === roleTitle);
      return [index + 1, role.title, role.grade, role.level, role.function, role.section, role.experience, role.education];
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Career-Path-${new Date().getTime()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Handle supervisor submission
  const handleSupervisorSubmit = (e) => {
    e.preventDefault();
    
    const pathDetails = customPath.map((roleTitle, index) => {
      const role = allRoles.find(r => r.title === roleTitle);
      return `   Step ${index + 1}: ${role.title} (${role.grade}) - ${role.level}`;
    }).join('\n');

    const message = `
CAREER ASPIRATIONS & INDIVIDUAL DEVELOPMENT PLAN (IDP) DISCUSSION REQUEST

Dear ${supervisorInfo.name},

I would like to discuss my career aspirations and development plan with you.

CAREER ASPIRATIONS:
${supervisorInfo.aspirations}

PROPOSED CAREER PATH:
${pathDetails}

DISCUSSION DETAILS:
Proposed Discussion Date: ${supervisorInfo.discussionDate}

I believe this path aligns with my professional goals and the organization's needs. I would appreciate your guidance and support in developing a concrete Individual Development Plan.

Please let me know your availability.

Best regards`;

    console.log('Career Aspiration Message:', {
      to: supervisorInfo.email,
      subject: 'Career Aspirations & IDP Discussion Request',
      body: message
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowSupervisorModal(false);
      setSupervisorInfo({ name: '', email: '', aspirations: '', discussionDate: '' });
    }, 3000);
  };

  return (
    <div style={{
      backgroundColor: colors.cream,
      minHeight: '100vh',
      fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '16px',
      color: colors.navy
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        body { font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Fraunces', serif; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${colors.light}; }
        ::-webkit-scrollbar-thumb { background: ${colors.border}; border-radius: 4px; }
      `}</style>

      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', color: colors.navy, marginBottom: '8px', fontWeight: 700 }}>
          HCD Career Lattice
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '16px' }}>
          Complete Job Grade Classification & Interactive Career Pathing for PGB HCD
        </p>

        {/* Mode Selector */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { setMode('lattice'); setSelectedRole(null); }}
            style={{
              padding: '10px 20px',
              backgroundColor: mode === 'lattice' ? colors.orange : colors.light,
              color: mode === 'lattice' ? colors.cream : colors.navy,
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease'
            }}
          >
            📊 Grade Lattice
          </button>
          <button
            onClick={() => setMode('buildPath')}
            style={{
              padding: '10px 20px',
              backgroundColor: mode === 'buildPath' ? colors.orange : colors.light,
              color: mode === 'buildPath' ? colors.cream : colors.navy,
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease'
            }}
          >
            🛤️ Build My Path
          </button>
        </div>
      </div>

      {/* LATTICE MODE - Grade Classification */}
      {mode === 'lattice' && (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Legend */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px', marginBottom: '16px' }}>
            <div style={{ padding: '8px', backgroundColor: '#E8F5E9', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Entry (JG1-JG3)</div>
            <div style={{ padding: '8px', backgroundColor: '#E3F2FD', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Intermediate (JG4-JG6)</div>
            <div style={{ padding: '8px', backgroundColor: '#F3E5F5', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Officer (JG7-JG9)</div>
            <div style={{ padding: '8px', backgroundColor: '#FFF3E0', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Supervisory (JG10-JG12)</div>
            <div style={{ padding: '8px', backgroundColor: '#FFEBEE', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Managerial (JG13-JG15)</div>
          </div>

          {/* Grade Lattice */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', border: `2px solid ${colors.orange}`, overflow: 'auto', boxShadow: '0 4px 12px rgba(13, 27, 61, 0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `100px repeat(${grades.length}, 100px)`, gap: '1px', backgroundColor: colors.border, padding: '1px' }}>
              {/* Header Row */}
              <div style={{ padding: '12px', backgroundColor: colors.navy, color: colors.cream, fontWeight: 600, fontSize: '0.75rem', textAlign: 'center' }}>Section</div>
              {grades.map(grade => (
                <div key={grade} style={{ padding: '12px', backgroundColor: colors.navy, color: colors.cream, fontWeight: 600, fontSize: '0.8rem', textAlign: 'center' }}>
                  {grade}
                </div>
              ))}

              {/* Data Rows */}
              {sections.map(section => (
                <React.Fragment key={section}>
                  {/* Section Header */}
                  <div style={{
                    padding: '12px',
                    backgroundColor: colors.light,
                    color: colors.navy,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textAlign: 'left',
                    maxHeight: '100px',
                    overflowY: 'auto',
                    borderRight: `2px solid ${colors.border}`
                  }}>
                    {section}
                  </div>

                  {/* Grade Cells */}
                  {grades.map(grade => {
                    const rolesInCell = getRolesByGradeAndSection(grade, section);
                    return (
                      <div
                        key={`${grade}-${section}`}
                        style={{
                          padding: '8px',
                          backgroundColor: getGradeColor(grade),
                          border: `1px solid ${colors.border}`,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          minHeight: '100px',
                          overflowY: 'auto'
                        }}
                      >
                        {rolesInCell.map(role => (
                          <button
                            key={role.title}
                            onClick={() => setSelectedRole(role.title)}
                            style={{
                              padding: '6px',
                              backgroundColor: selectedRole === role.title ? colors.orange : 'white',
                              color: selectedRole === role.title ? colors.cream : colors.navy,
                              border: selectedRole === role.title ? `2px solid ${colors.orange}` : `1px solid ${colors.border}`,
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.7rem',
                              fontWeight: selectedRole === role.title ? 600 : 500,
                              transition: 'all 0.2s ease',
                              fontFamily: 'inherit',
                              lineHeight: '1.2'
                            }}
                            onMouseEnter={(e) => {
                              if (selectedRole !== role.title) {
                                e.target.style.backgroundColor = '#FFE4C4';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (selectedRole !== role.title) {
                                e.target.style.backgroundColor = 'white';
                              }
                            }}
                            title={role.title}
                          >
                            {role.title}
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          {currentRole && (
            <div style={{ marginTop: '16px', backgroundColor: 'white', borderRadius: '12px', border: `2px solid ${colors.orange}`, overflow: 'hidden', boxShadow: '0 4px 12px rgba(13, 27, 61, 0.1)', padding: '20px', maxWidth: '600px' }}>
              {/* Header */}
              <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: `2px solid ${colors.orange}` }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: colors.orange, fontWeight: 600, marginBottom: '4px' }}>
                  {currentRole.function} • {currentRole.section}
                </div>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '1.3rem', fontWeight: 700, color: colors.navy }}>
                  {currentRole.title}
                </h2>
                <div style={{ fontSize: '0.95rem', color: '#666', fontWeight: 600 }}>
                  {currentRole.grade} • {currentRole.level}
                </div>
              </div>

              {/* Requirements */}
              <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: colors.light, borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0, marginBottom: '8px', color: colors.navy, fontWeight: 600, fontSize: '0.9rem' }}>Requirements</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={16} style={{ color: colors.orange }} />
                    <span><strong>Education:</strong> {currentRole.education}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={16} style={{ color: colors.orange }} />
                    <span><strong>Experience:</strong> {currentRole.experience}</span>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ marginTop: 0, marginBottom: '8px', color: colors.navy, fontWeight: 600, fontSize: '0.9rem' }}>Core Competencies</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {Object.keys(coreCompetencies).slice(0, 4).map((comp) => {
                    const levelKey = getLevelKey(currentRole.level);
                    const level = coreCompetencies[comp][levelKey];
                    return (
                      <div key={comp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 500, color: colors.navy, flex: 1 }}>{comp}</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 8px', backgroundColor: getColor(level), borderRadius: '4px', color: getColor(level) === colors.orange ? colors.cream : colors.navy, fontWeight: 500 }}>
                          {level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommended Training */}
              {trainingPrograms[getLevelKey(currentRole.level)] && (
                <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#FFF9E6', borderRadius: '8px', border: `1px solid ${colors.orange}` }}>
                  <h4 style={{ marginTop: 0, marginBottom: '8px', color: colors.navy, fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    📚 Recommended Training
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: colors.navy, fontWeight: 600, marginBottom: '6px' }}>
                    {trainingPrograms[getLevelKey(currentRole.level)].program}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '8px' }}>
                    Cost: {trainingPrograms[getLevelKey(currentRole.level)].cost} • Priority: {trainingPrograms[getLevelKey(currentRole.level)].priority}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.4' }}>
                    {trainingPrograms[getLevelKey(currentRole.level)].modules.slice(0, 3).map((module, idx) => (
                      <div key={idx}>• {module}</div>
                    ))}
                    {trainingPrograms[getLevelKey(currentRole.level)].modules.length > 3 && (
                      <div style={{ fontStyle: 'italic', marginTop: '4px' }}>+ {trainingPrograms[getLevelKey(currentRole.level)].modules.length - 3} more modules</div>
                    )}
                  </div>
                </div>
              )}

              {/* Add to Path Button */}
              <button
                onClick={() => {
                  if (!customPath.includes(currentRole.title)) {
                    setCustomPath([...customPath, currentRole.title]);
                  }
                }}
                disabled={customPath.includes(currentRole.title)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: customPath.includes(currentRole.title) ? colors.border : colors.orange,
                  color: colors.cream,
                  border: 'none',
                  borderRadius: '6px',
                  cursor: customPath.includes(currentRole.title) ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Plus size={18} />
                {customPath.includes(currentRole.title) ? 'Added to Path' : 'Add to My Path'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* BUILD PATH MODE */}
      {mode === 'buildPath' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', border: `2px solid ${colors.orange}`, overflow: 'hidden', boxShadow: '0 4px 12px rgba(13, 27, 61, 0.1)', padding: '20px' }}>
            
            <h2 style={{ fontSize: '1.3rem', marginBottom: '16px', color: colors.navy, fontWeight: 700 }}>
              Build Your Career Path
            </h2>

            {customPath.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: colors.light, borderRadius: '8px' }}>
                <Zap size={40} style={{ color: colors.orange, margin: '0 auto 16px' }} />
                <p style={{ fontSize: '1rem', color: colors.navy, marginBottom: '8px', fontWeight: 600 }}>No path created yet</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Go to "Grade Lattice" and click "Add to My Path" to start building your career progression</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {customPath.map((roleTitle, index) => {
                  const role = allRoles.find(r => r.title === roleTitle);
                  const interaction = getPathInteraction(index);

                  return (
                    <div key={index}>
                      {/* Role Card */}
                      <div style={{
                        backgroundColor: colors.light,
                        borderRadius: '8px',
                        padding: '16px',
                        border: `2px solid ${colors.orange}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: colors.orange }}>#{index + 1}</span>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.navy, margin: 0 }}>{role.title}</h3>
                            <span style={{ fontSize: '0.8rem', backgroundColor: colors.orange, color: colors.cream, padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>{role.grade}</span>
                          </div>
                          <div style={{ fontSize: '0.85rem', color: '#666' }}>
                            {role.function} • {role.section} • {role.level}
                          </div>
                        </div>
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
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>

                      {/* Transition Details */}
                      {interaction && (
                        <div style={{
                          backgroundColor: '#FFF9E6',
                          borderLeft: `4px solid ${colors.orange}`,
                          padding: '12px',
                          margin: '8px 0 12px 0',
                          borderRadius: '6px',
                          fontSize: '0.85rem'
                        }}>
                          <h4 style={{ marginTop: 0, marginBottom: '8px', color: colors.navy, fontWeight: 600 }}>
                            ↑ What it takes to move from {customPath[index - 1]} to {roleTitle}:
                          </h4>

                          {interaction.core.length > 0 && (
                            <div style={{ marginBottom: '8px' }}>
                              <span style={{ fontWeight: 600, color: colors.navy }}>Core Competencies to develop:</span>
                              <ul style={{ margin: '6px 0 0 0', paddingLeft: '20px', color: '#444' }}>
                                {interaction.core.map((gap, idx) => (
                                  <li key={idx} style={{ marginBottom: '4px' }}>
                                    <strong>{gap.competency}</strong>: {gap.from} → {gap.to}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {interaction.technical.length > 0 && (
                            <div style={{ marginBottom: '8px' }}>
                              <span style={{ fontWeight: 600, color: colors.navy }}>Technical Competencies to develop:</span>
                              <ul style={{ margin: '6px 0 0 0', paddingLeft: '20px', color: '#444' }}>
                                {interaction.technical.map((gap, idx) => (
                                  <li key={idx} style={{ marginBottom: '4px' }}>
                                    <strong>{gap.competency}</strong>: {gap.from} → {gap.to}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {(interaction.experience || interaction.education) && (
                            <div>
                              <span style={{ fontWeight: 600, color: colors.navy }}>Additional requirements:</span>
                              <ul style={{ margin: '6px 0 0 0', paddingLeft: '20px', color: '#444' }}>
                                {interaction.experience && <li>{interaction.experience}</li>}
                                {interaction.education && <li>{interaction.education}</li>}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Arrow */}
                      {index < customPath.length - 1 && (
                        <div style={{ textAlign: 'center', color: colors.orange, fontWeight: 700, fontSize: '1.2rem', margin: '8px 0' }}>
                          ↓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Path Summary */}
            {customPath.length > 0 && (
              <div>
                <div style={{ marginTop: '20px', padding: '16px', backgroundColor: colors.light, borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ marginTop: 0, color: colors.navy, fontWeight: 600 }}>📊 Your Path Summary</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
                    <div>
                      <span style={{ fontWeight: 600, color: colors.navy }}>Total Steps:</span> {customPath.length} positions
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: colors.navy }}>Starting Level:</span> {allRoles.find(r => r.title === customPath[0]).level}
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: colors.navy }}>Target Level:</span> {allRoles.find(r => r.title === customPath[customPath.length - 1]).level}
                    </div>
                  </div>
                </div>

                {/* Training Recommendations */}
                <div style={{ padding: '16px', backgroundColor: '#FFF9E6', borderRadius: '8px', marginBottom: '20px', border: `2px solid ${colors.orange}` }}>
                  <h4 style={{ marginTop: 0, marginBottom: '12px', color: colors.navy, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📚 Training Roadmap for Your Path
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[...new Set(customPath.map(roleTitle => {
                      const role = allRoles.find(r => r.title === roleTitle);
                      return role.level;
                    }))].map((level) => {
                      const levelKey = getLevelKey(level);
                      const training = trainingPrograms[levelKey];
                      return (
                        <div key={level} style={{ padding: '12px', backgroundColor: 'white', borderRadius: '6px', borderLeft: `4px solid ${colors.orange}` }}>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: colors.navy, marginBottom: '6px' }}>
                            {level}: {training.program}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '4px' }}>
                            💰 Cost: {training.cost} • Priority: {training.priority}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.4' }}>
                            <strong>Key Modules:</strong> {training.modules.slice(0, 2).join(' • ')}
                            {training.modules.length > 2 && ` + ${training.modules.length - 2} more`}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#E8F5E9', borderRadius: '6px', fontSize: '0.75rem', color: '#2E7D32', fontWeight: 500 }}>
                    ✓ Training programs aligned with PGB Learning & Development Portfolio
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {customPath.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                <button
                  onClick={handlePrint}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: colors.orange,
                    color: colors.cream,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  🖨️ Print Path
                </button>
                
                <button
                  onClick={handleExportJSON}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: colors.orange,
                    color: colors.cream,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  💾 Save (JSON)
                </button>

                <button
                  onClick={handleExportCSV}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: colors.orange,
                    color: colors.cream,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  📊 Export (CSV)
                </button>

                <button
                  onClick={() => setShowSupervisorModal(true)}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: '#2E7D32',
                    color: colors.cream,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  📧 Send to Supervisor
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUPERVISOR MODAL */}
      {showSupervisorModal && (
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
                backgroundColor: colors.light,
                borderRadius: '12px'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  animation: 'pulse 0.5s ease-in'
                }}>
                  ✅
                </div>
                <h3 style={{ marginTop: 0, color: colors.navy, fontSize: '1.2rem', fontWeight: 700 }}>
                  Success!
                </h3>
                <p style={{ color: '#666', marginBottom: 0 }}>
                  Your career aspirations have been prepared. Please share this with your supervisor to discuss your Individual Development Plan.
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
                  <p style={{ margin: '8px 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
                    Discuss your career path and develop your Individual Development Plan
                  </p>
                </div>

                <form onSubmit={handleSupervisorSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Supervisor Name */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy, fontSize: '0.9rem' }}>
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
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                      placeholder="e.g., Paulette D. Liu"
                    />
                  </div>

                  {/* Supervisor Email */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy, fontSize: '0.9rem' }}>
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
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                      placeholder="e.g., paulette.liu@pgb.com"
                    />
                  </div>

                  {/* Career Aspirations */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy, fontSize: '0.9rem' }}>
                      My Career Aspirations & Goals *
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
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                      }}
                      placeholder="Describe your career goals, what attracts you to this path, and how it aligns with PGB's mission..."
                    />
                  </div>

                  {/* Discussion Date */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: colors.navy, fontSize: '0.9rem' }}>
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
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Buttons */}
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
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = colors.border}
                      onMouseLeave={(e) => e.target.style.backgroundColor = colors.light}
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
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      Send & Create IDP
                    </button>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#999', margin: '12px 0 0 0', textAlign: 'center' }}>
                    A formatted message with your career path will be created for discussion
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: '24px', paddingTop: '12px', borderTop: `1px solid ${colors.border}`, textAlign: 'center', color: '#999', fontSize: '0.8rem' }}>
        <p>PGB Human Capital Development Career Lattice • {allRoles.length} total positions • Interactive Career Pathing Tool</p>
      </div>
    </div>
  );
};

export default HCDCareerLattice;
