# ✨ Features Guide — HCD Career Lattice v1.1

**Complete breakdown of all features and how to use them.**

---

## 📊 **FEATURE 1: GRADE LATTICE VIEW**

**What it is:** Interactive grid showing all 147+ HCD positions organized by grade and section.

### **How to Access**
1. Open app
2. Click **"📊 Grade Lattice"** tab (top)

### **Grid Layout**
```
Horizontal: JG1 | JG2 | JG3 | JG4 | JG5 | JG6 | ... | JG15
Vertical: All sections (Training & Assessment, Finance, HR, IT, etc.)
```

### **Features**
- **Color-coded by level** — Instantly see career level
- **Scrollable** — Scroll left/right and up/down
- **Clickable cells** — Click any role
- **Multiple roles per cell** — Some grades have 3-5 roles
- **Mobile responsive** — Works on all screen sizes

### **What You Can Do**
✅ Browse all positions
✅ See role organization
✅ Understand grade progression
✅ Click role → see details
✅ Discover new positions

### **Role Detail Panel**
When you click a role, a panel opens showing:
- Role title
- Grade (JG1-JG15)
- Career level
- Function & section
- Experience required
- Education required
- Core competencies with levels
- **Recommended training program** ⭐

### **Example**
Click "Trainer II" (JG5):
- Title: Trainer II
- Grade: JG5
- Level: Intermediate
- Experience: 4-5 years
- Education: Bachelor
- Competencies shown with proficiency levels
- Training: "Functional Training Programs (₱1,500)"

---

## 🛤️ **FEATURE 2: PATH BUILDER**

**What it is:** Tool to design your custom career progression path.

### **How to Access**
1. From Grade Lattice → Click any role
2. Detail panel opens → Click **"+ Add to My Path"**
3. Click **"🛤️ Build My Path"** tab to view

### **What Path Shows**
For each role in your path:
```
┌─────────────────────┐
│ Step #1             │
│ Role Title          │
│ Grade • Level       │
│ [Remove Button]     │
└─────────────────────┘
         ↓
   [Transition Details]
   [Competency Gaps]
   [Experience Needed]
         ↓
┌─────────────────────┐
│ Step #2             │
│ Next Role           │
└─────────────────────┘
```

### **Features**
✅ Add roles in sequence
✅ Reorder roles (remove and re-add)
✅ Remove individual roles
✅ See transition details between each step
✅ Automatic competency gap calculation
✅ Experience gap analysis
✅ Education requirements shown

### **Example Path**
```
Step 1: TAss III (JG3 - Entry-Level)
         ↓ Gap: 1-2 years experience, Leadership Basic→Intermediate
Step 2: Trainer I (JG4 - Intermediate)
         ↓ Gap: 2 years experience, Project Mgmt None→Moderately
Step 3: Lead Trainer II (JG8 - Officer)
```

---

## 🔗 **FEATURE 3: TRANSITION DETAILS**

**What it is:** Gap analysis between each step in your path.

### **What It Shows**
Between each role transition, you see:

#### **Core Competency Gaps**
Example:
```
• Planning and Organizing: Basic → Intermediate
• Leadership: Basic → Advanced
• Decision Making: Intermediate → Advanced
```

#### **Technical Competency Gaps**
Example:
```
• Project/Program Management: Not required → Moderately required
• Governance Support: Moderately → Highly required
```

#### **Experience Gap**
Example:
```
Additional experience needed: 2 years
```

#### **Education Gap**
Example:
```
Upgrade from: Bachelor to Master
```

### **How to Read**
- Arrow shows direction of development
- Blank means no change needed at that transition
- Red text highlights gaps you need to fill

---

## 📚 **FEATURE 4: TRAINING ROADMAP** ⭐ **NEW!**

**What it is:** Shows all training programs needed for your career path.

### **Where It Appears**
1. **In Role Details** — Recommended training for that level
2. **In Path Builder** — "Training Roadmap for Your Path" section (when path has roles)

### **What It Shows in Role Detail**
```
📚 Recommended Training

Functional Training Programs
Cost: ₱1,500.00 • Priority: GENERALISTS

Key Modules:
• HR Management 101
• Site Management & Administration 101
• Labor Relations 101
+ 5 more modules
```

### **What It Shows in Path**
```
📚 Training Roadmap for Your Path

Entry-Level: Program On-the-GO
💰 Cost: ₱800.00 • Priority: SPECIALISTS
Key Modules: Work Attitude & Values + 360° Feedback + 6 more

Intermediate: Functional Training Programs
💰 Cost: ₱1,500.00 • Priority: GENERALISTS
Key Modules: HR Management 101 + Site Management 101 + 6 more

Officer: Leadership Foundations
💰 Cost: ₱1,800.00 • Priority: LEADS
Key Modules: Basic Supervision + Developing Leaders + 9 more
```

### **Features**
✅ Shows program name
✅ Displays cost per program
✅ Shows target audience
✅ Lists sample modules (first 3)
✅ Shows total module count
✅ Multiple levels visible if path spans levels
✅ Helps with L&D budgeting

### **Training Programs Overview**
| Level | Program | Cost | Modules |
|-------|---------|------|---------|
| Entry | Program On-the-GO | ₱800 | 8 |
| Intermediate | Functional Training | ₱1,500 | 8 |
| Officer | Leadership Foundations | ₱1,800 | 11 |
| Supervisory | Leadership Imperatives | ₱2,500 | 7 |
| Managerial | Executive Leadership | ₱3,500 | 11 |

---

## 📊 **FEATURE 5: PATH SUMMARY**

**What it is:** Quick statistics about your career path.

### **Shows**
```
📊 Your Path Summary

Total Steps: 3 positions
Starting Level: Entry-Level
Target Level: Officer
```

### **Use Cases**
- Quick reference for path length
- See starting and ending career levels
- Understand career jump/progression

---

## 🖨️ **FEATURE 6: PRINT PATH**

**What it is:** Export your path as a professional PDF document.

### **How to Use**
1. Build a path (add at least 1 role)
2. Click **"🖨️ Print Path"** button
3. Browser print dialog opens
4. Click **"Print"** or **"Save as PDF"**

### **What You Get**
Professional PDF with:
- ✅ PGB branding
- ✅ All path steps with details
- ✅ Grade, level, function, section for each role
- ✅ Experience requirements
- ✅ Education requirements
- ✅ Date generated
- ✅ IDP reminder note
- ✅ Career progression summary

### **File Name**
Suggested: `Career-Path-[timestamp].pdf`

### **Use For**
- Print for personal records
- Share in meetings
- Prepare for supervisor discussion
- Professional documentation

---

## 💾 **FEATURE 7: SAVE AS JSON**

**What it is:** Download your path as structured data format.

### **How to Use**
1. Build a path
2. Click **"💾 Save (JSON)"** button
3. File downloads automatically

### **What You Get**
Structured JSON file with:
```json
{
  "generatedDate": "2026-07-09T16:17:54Z",
  "summary": {
    "totalSteps": 3,
    "startingLevel": "Entry-Level",
    "targetLevel": "Officer"
  },
  "path": [
    {
      "step": 1,
      "title": "TAss III",
      "grade": "JG3",
      "level": "Entry-Level",
      "function": "TVET",
      "section": "Training & Assessment",
      "experience": "2-3 years",
      "education": "High School"
    },
    ...
  ]
}
```

### **File Name**
`Career-Path-[timestamp].json`

### **Use For**
- Keep structured backup
- Import into other systems
- Data portability
- Personal records

---

## 📊 **FEATURE 8: EXPORT AS CSV**

**What it is:** Download your path in spreadsheet format.

### **How to Use**
1. Build a path
2. Click **"📊 Export (CSV)"** button
3. File downloads automatically

### **What You Get**
Spreadsheet with columns:
- Step
- Position Title
- Grade
- Level
- Function
- Section
- Experience Required
- Education Required

### **File Name**
`Career-Path-[timestamp].csv`

### **Open With**
- Excel
- Google Sheets
- Any spreadsheet app
- Text editor

### **Use For**
- Create pivot tables
- Share in spreadsheet format
- Track multiple paths
- Data analysis

---

## 📧 **FEATURE 9: SEND TO SUPERVISOR**

**What it is:** Formal Individual Development Plan (IDP) discussion request.

### **How to Use**
1. Build your desired path
2. Click **"📧 Send to Supervisor"** button
3. Modal form opens
4. Fill in details:
   - Supervisor's Name (required)
   - Supervisor's Email (required)
   - Career Aspirations & Goals (required) — textarea
   - Preferred Discussion Date (required) — date picker
5. Click **"Send & Create IDP"**

### **What Gets Generated**
Professional email with:
```
CAREER ASPIRATIONS & INDIVIDUAL DEVELOPMENT PLAN (IDP) DISCUSSION REQUEST

Dear [Supervisor Name],

I would like to discuss my career aspirations and development plan with you.

CAREER ASPIRATIONS:
[Your aspirations text]

PROPOSED CAREER PATH:
   Step 1: [Role] (Grade)
   Step 2: [Role] (Grade)
   Step 3: [Role] (Grade)

DISCUSSION DETAILS:
Proposed Discussion Date: [Your date]

[Professional closing]
```

### **How to Send**
- Message displays in form
- Copy text manually, or
- Paste into your email, or
- Share with supervisor

### **Success Message**
After submitting, see:
```
✅ Success!
Your career aspirations have been prepared. Please share this with your 
supervisor to discuss your Individual Development Plan.
```

### **What Supervisor Sees**
- Your career goals
- Complete career path with all roles and grades
- Training roadmap implications
- Proposed discussion date
- Professional request format

---

## 🎨 **FEATURE 10: COLOR-CODED LEVELS**

**What it is:** Visual indication of career level.

### **Color Legend**
```
🟢 Green    = Entry-Level (JG1-3) — Specialist
🔵 Blue     = Intermediate (JG4-6) — Generalist
🟣 Purple   = Officer (JG7-9) — Lead
🟠 Orange   = Supervisory (JG10-12) — Business Partner
🔴 Red      = Managerial (JG13-15) — Strategic Partner
```

### **Where It Appears**
- Grade lattice grid cells
- Path builder role cards
- Detail panels
- Training sections

### **Use For**
- Quick visual identification
- Understand career progression
- See level jumps in path

---

## 📱 **FEATURE 11: MOBILE RESPONSIVENESS**

**What it is:** Full functionality on all devices.

### **Works On**
- Desktop (Windows, Mac, Linux)
- Tablet (iPad, Android)
- Mobile (iPhone, Android phones)
- Landscape and portrait

### **Features**
✅ Scrollable lattice grid
✅ Touch-friendly buttons
✅ Readable text at all sizes
✅ Modal forms optimize for mobile
✅ No zoom needed for interaction
✅ All export functions work
✅ Print optimized for mobile

### **Android Specific**
- Tested on Android devices
- Touch targets 44px minimum
- Scroll performance optimized
- Portrait and landscape support

---

## 🎯 **FEATURE 12: COMPETENCY FRAMEWORK**

**What it is:** Comprehensive skill requirements at each level.

### **7 Core Competencies**
Tracked across all levels:
1. Planning and Organizing
2. Decision Making & Problem Solving
3. Leadership
4. Innovation
5. Communication
6. Customer Focus
7. Business Acumen

### **5 Technical Competencies**
Role-specific requirements:
1. Strategic Management
2. Consensus Building
3. Governance Support
4. Project/Program Management
5. Administrative Management

### **Proficiency Levels**
- **Core:** Basic → Intermediate → Advanced
- **Technical:** Not required → Moderately required → Highly required

### **Where Shown**
- Role detail panel (core competencies)
- Path transitions (what to develop)
- Gap analysis (competency growth needed)

---

## 🔄 **FEATURE 13: AUTOMATIC GAP CALCULATION**

**What it is:** System automatically identifies what you need to develop between roles.

### **Calculates**
- Competency level differences
- Experience year gaps
- Education level differences
- Technical skill requirements

### **Shows**
For each transition:
```
↑ Moving from Role A to Role B:

Core Competencies to develop:
• Competency Name: Level1 → Level2

Technical Competencies to develop:
• Competency Name: Level1 → Level2

Additional requirements:
• X years of experience needed
• Education upgrade needed
```

### **Smart Features**
✅ Only shows necessary gaps
✅ Accounts for level progression
✅ Identifies missing requirements
✅ Shows what's already aligned

---

## 🌐 **FEATURE 14: ZERO BACKEND DESIGN**

**What it is:** Complete offline functionality, no server required.

### **Benefits**
✅ No login needed
✅ No data collection
✅ Works offline (after load)
✅ No internet dependencies
✅ Completely private
✅ No personal data stored
✅ Fast loading (client-side only)

### **Data Storage**
- All data in browser memory
- Export to save outside app
- No cloud upload
- No tracking cookies

---

## 🎓 **FEATURE 15: 147+ POSITION DATABASE**

**What it is:** Complete HCD organizational structure.

### **Coverage**
| Function | Sections | Positions |
|----------|----------|-----------|
| TVET | 2 | 30 |
| SHS | 5 | 45 |
| Shared Services | 5 | 75+ |
| Corporate Foundation | 3 | 27+ |

### **Grades**
All grades JG1-JG15 represented across all sections.

### **Data Per Role**
- Title
- Grade
- Career level
- Function & section
- Experience requirement
- Education requirement
- Associated competencies
- Recommended training program

---

## 🚀 **QUICK FEATURE CHECKLIST**

Use this to ensure you're using all features:

- [ ] Explored Grade Lattice
- [ ] Clicked multiple roles
- [ ] Saw role details
- [ ] Checked training recommendations
- [ ] Built a path (2-3 roles)
- [ ] Viewed competency gaps
- [ ] Saw training roadmap
- [ ] Printed a path
- [ ] Exported as JSON
- [ ] Exported as CSV
- [ ] Filled supervisor form
- [ ] Tested on mobile
- [ ] Checked all colors
- [ ] Scrolled full lattice
- [ ] Removed roles from path

---

**All features ready to use!** Check QUICK_START.md or USER_GUIDE.md for walkthroughs.
