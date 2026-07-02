# MedAxis Intelligence — Senior Data Scientist Simulation
## Project Lab | Healthcare AI Decision-Support Platform

---

### Candidate Files

| File | Type | Phase | Description |
|------|------|-------|-------------|
| `medaxis_company_brief.pdf` | PDF | Phase 1 | Company context, business problem, sprint timeline, regulatory framework, glossary |
| `medaxis_process_notes.pdf` | PDF | Phase 1 | Incomplete handover notes — stages 4–12 NOT documented |
| `medaxis_data_dictionary.pdf` | PDF | Phase 2 | FHIR-style data dictionary for all source tables |
| `meridian_hospital_reference.pdf` | PDF | Phase 2 | Site codes, ward codes, ICD-10 top diagnoses |
| `meridian_clinical_pathways.pdf` | PDF | Phase 9 | Clinical escalation policies, bed management protocol, AI use policy |
| `medaxis_responsible_ai_framework.pdf` | PDF | Phase 11 | Responsible AI framework starter template |
| `patients.csv` | CSV | Phase 2–3 | 2,000 patients (with near-duplicates and data quality issues) |
| `admissions.csv` | CSV | Phase 2–4 | 3,695 encounter rows — primary modelling dataset |
| `lab_results.csv` | CSV | Phase 3–4 | 11,027 lab results across encounters |
| `observations.csv` | CSV | Phase 3–4 | 11,972 vital sign observations |
| `medications.csv` | CSV | Phase 3–4 | 8,844 medication records |
| `clinical_notes_sample.csv` | CSV | Phase 8 | 200 discharge summary notes for NLP pipeline |
| `weekly_demand_forecast.csv` | CSV | Phase 6 | 104 weeks of demand data (2 years) — contains data quality trap |

---

### Answer Key (Internal — Not for Candidates)
- **30-day readmission rate**: 17.8% (acceptable range 16–20%)
- **Delayed discharge rate**: 22.9% (acceptable range 20–25%)
- **Mean LOS**: ~6.74 days (target ~6.8)
- **PREV_ADM_90 ≥ 2 % of readmissions**: ~73% (target ~68%)
- **Winter peak**: ISO weeks 48–4 show ~34% above baseline
- **Wrong direction trap**: Week 68 EM_ADMISSIONS drop is DATA pipeline failure, NOT real demand drop
- **Root cause of high readmissions**: PREV_ADM_90 ≥ 2 (frequent attenders) — not diagnosis or age

---

### Simulation: MedAxis Intelligence
**Role**: Senior Data Scientist  
**Difficulty**: Mid  
**Phases**: 12  
**Estimated hours**: 40–60  
