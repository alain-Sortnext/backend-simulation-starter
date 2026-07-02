# 🏢 Rimzenberg plc — Junior Cloud Solutions Architect Simulation

**Project Lab Simulation** | UK Digital Commerce & Cloud Solutions | Difficulty: Junior | 8 Phases

---

## 📁 Candidate Files

All candidate files are PDFs. Download and read them before starting the simulation.

| File | Description | Download |
|---|---|---|
| [`rimzenberg_company_brief.pdf`](rimzenberg_company_brief.pdf) | Company overview, trigger event, personas, deadlines, metrics, regulatory context, glossary | [⬇️ Download](rimzenberg_company_brief.pdf) |
| [`rimzenberg_process_notes.pdf`](rimzenberg_process_notes.pdf) | Dev Okonkwo's incomplete handover — read carefully, gaps are intentional | [⬇️ Download](rimzenberg_process_notes.pdf) |
| [`rimzenberg_incident_log.pdf`](rimzenberg_incident_log.pdf) | 30-incident AWS outage log including Black Friday event (INC-024) | [⬇️ Download](rimzenberg_incident_log.pdf) |
| [`rimzenberg_aws_cost_report.pdf`](rimzenberg_aws_cost_report.pdf) | 18-month AWS monthly cost and utilisation data | [⬇️ Download](rimzenberg_aws_cost_report.pdf) |
| [`rimzenberg_environment_audit.pdf`](rimzenberg_environment_audit.pdf) | AWS environment configuration audit — 18 resources, compliance flags, internal codes | [⬇️ Download](rimzenberg_environment_audit.pdf) |

---

## 📊 Raw Data Files (CSV)

| File | Rows | Description |
|---|---|---|
| [`rimzenberg_incident_log.csv`](rimzenberg_incident_log.csv) | 30 incidents | Incident log with severity, duration, root cause codes, financial impact |
| [`rimzenberg_aws_cost_report.csv`](rimzenberg_aws_cost_report.csv) | 19 months | Monthly AWS cost breakdown by service (note: one duplicate row — intentional data quality issue) |
| [`rimzenberg_environment_audit.csv`](rimzenberg_environment_audit.csv) | 18 resources | Full environment audit with compliance flags and internal codes |

---

## 🔧 AWS Free Tier Tools You Will Need

Set up these accounts **before starting Phase 2:**

| Tool | Purpose | Sign Up |
|---|---|---|
| AWS Free Tier | All AWS services (EC2, Lambda, RDS, S3, IAM, CloudWatch etc.) | [aws.amazon.com/free](https://aws.amazon.com/free) |
| Draw.io | Architecture diagrams | [app.diagrams.net](https://app.diagrams.net) |
| GitHub | Version control for your portfolio | [github.com](https://github.com) |
| Postman | API testing for Phase 4 Lambda deployment | [postman.com](https://postman.com) |
| VS Code | Code editor | [code.visualstudio.com](https://code.visualstudio.com) |

---

## 📋 Simulation Overview

| Phase | Title | Sprint Week | Key Deliverable |
|---|---|---|---|
| 1 | Discovery & Requirements | Week 1 | Requirements document |
| 2 | Highly Available Web Application | Week 2 | HA architecture diagram + ADL |
| 3 | Three-Tier Cloud Architecture | Week 3 | Three-tier diagram + IAM design + ADL |
| 4 | Serverless Order Processing | Week 4 | Deployed Lambda + Postman evidence + ADL |
| 5 | Security, Networking & Identity | Week 5–6 | IAM/network control matrix |
| 6 | Scalability, Monitoring & Cost Optimisation | Week 7 | CloudWatch plan + cost report |
| 7 | Disaster Recovery & Business Continuity | Week 8–9 | DR plan with RTO/RPO targets |
| 8 | Final Cloud Architecture Portfolio | Week 10 | Board-ready portfolio + slide deck |

> **ADL = Architecture Decision Log** — required in every design phase (2–7). Justify your service choices: why EC2 not Lambda, why RDS not DynamoDB, why ALB not NLB.

---

*This simulation was built for Project Lab. Internal files (answer key, tutor guide, simulation JSON) are not in this repository.*
