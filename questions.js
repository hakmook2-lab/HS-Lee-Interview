// 면접 질문 데이터 — 질문·모범답변을 고치려면 이 파일만 수정하세요.
// n: 번호, cat: 분류, title: 한글 제목, en: 영문 질문, intent: 질문 의도, points: 답변 포인트,
// note: 참고, struct: 답변 구조, ans: 모범답변 문단, follow: 꼬리질문, fa: 꼬리질문 대응
window.QS = [
  {
    "n": 1,
    "cat": "오프닝·영어소통",
    "title": "자기소개 및 지원동기",
    "en": "To start, could you briefly introduce yourself and tell us why you are interested in this role?",
    "intent": "첫인상, 발음·유창성, 2분 안에 핵심을 구조화하는 능력 확인. 사실상 영어 실력 1차 평가 구간",
    "points": [
      "현재 → 과거 → 미래 3단 구조: 개별요금 마케팅·SPA 협상(현재) → Coral South FID 참여·감사·전략기획(과거) → Coral FLNG S.A. 기여 방안(미래)",
      "분량은 90초~2분, 키워드는 JV governance, cost control, stakeholder coordination 3개로 압축",
      "학력·연도 나열보다 Coral 사업과의 연결고리를 첫 30초 안에 제시"
    ],
    "note": "",
    "struct": "감사 인사 → 현재 업무 → 과거 핵심 경력(전략·감사) → Coral 연결 → 지원동기",
    "ans": [
      "Thank you for having me. My name is Hyun Seung Lee, and I'm a senior manager at KOGAS. I have about 19 years of experience in the gas business.",
      "Right now, I work in gas marketing. I design pricing options for power companies and lead SPA negotiations with them. Before that, I worked in corporate strategy, where I ran executive meetings and reporting systems, and in technical audit, where I reviewed overseas assets, including procurement and cost control.",
      "Most importantly, in 2016 I worked on the Coral South project in our Africa Business Team. I supported the FID process, handled cash calls and budgets, and helped set up our Maputo office. So Coral is very special to me.",
      "I'm interested in this role because it brings together everything I've done — meetings, administration, planning and partner coordination. I saw this project at the start, and now I'd like to help it run well every day."
    ],
    "follow": "What exactly was your personal role in the FID process?",
    "fa": "I prepared the FID reports for KOGAS management and the Board, checked the budget and the risks, and worked with partners on the participation structure."
  },
  {
    "n": 2,
    "cat": "오프닝·영어소통",
    "title": "다양한 경력의 연결성",
    "en": "Your background is quite diverse — geology, technical audit, corporate strategy, the labor union and gas marketing. How do these experiences connect to a business support role?",
    "intent": "경력의 일관성과 행정·조달 분야 전문성 부족 우려 검증. 노조 이력에 대한 질문이 함께 나올 수 있음",
    "points": [
      "공통분모를 \"복잡한 조직이 좋은 결정을 내리도록 돕는 일\"로 한 문장 정리",
      "기술 배경은 기술보고서 이해 → 경영진 보고로 연결되는 강점으로 제시",
      "노조 정책기획국장 경력은 해외근무자 처우 개선, 정부·국회 대응 문서 작성 등 이해관계자 소통 경험으로 담백하게 설명(방어적·장황한 설명 금지)"
    ],
    "note": "",
    "struct": "다양성 인정 → 공통분모 한 문장 → 경력별 배운 점 → 노조 경력 담백하게 → 직무 연결",
    "ans": [
      "That's true — my career has been quite diverse. But there is one common point: in every job, I helped a complex organization make good decisions.",
      "As a geologist, I learned to understand technical data. In technical audit, I learned how to check risks, procurement and costs. In corporate strategy, I learned how to run executive meetings and get different departments to agree. And in marketing, I learned how to negotiate with outside partners.",
      "I also worked for two years as policy director of our labor union. I wrote policy papers, worked with the government and the National Assembly, and helped improve support for staff working overseas. It taught me how to listen to different groups and find a fair solution.",
      "A business support manager needs exactly this mix — understanding the technical side, keeping control of costs and rules, and helping people work together."
    ],
    "follow": "Which one of these experiences is the most relevant to this job, and why?",
    "fa": "Corporate strategy, because I set up and ran executive meetings and reporting systems. That is the core of this job."
  },
  {
    "n": 3,
    "cat": "오프닝·영어소통",
    "title": "현재 업무를 비전문가에게 설명",
    "en": "Can you explain your current job to me as if I had no background in the gas industry?",
    "intent": "외국인 CEO가 자주 쓰는 쉬운 영어(Plain English) 설명력 점검. 다국적 조직에서는 화려한 표현보다 명확성이 우선",
    "points": [
      "전문용어(개별요금제, 직수입 등)는 풀어서 설명, 필요하면 비유 사용",
      "3문장 이내로 끝내고 질문을 기다리는 태도가 효과적"
    ],
    "note": "",
    "struct": "회사가 하는 일 → 일반 고객과 차이 → 본인 역할 → 한 문장 정리",
    "ans": [
      "Sure. KOGAS buys LNG from overseas and sells natural gas to customers in Korea, such as power plants and city gas companies. Normally, all customers pay the same average price.",
      "But some power companies want a price based on a specific LNG contract, so they can plan their own costs better. My team designs this kind of offer. I study the customer's needs, set the contract terms, and lead the negotiation until we sign the sales contract.",
      "In simple words, I help a big gas supplier and a big customer find a deal that works for both of them."
    ],
    "follow": "What was the hardest part of explaining this to your customers?",
    "fa": "Explaining why the price formula is fair. I used simple examples with real numbers, and that helped a lot."
  },
  {
    "n": 4,
    "cat": "오프닝·영어소통",
    "title": "Coral 사업 최신 현황과 과제",
    "en": "You worked on Coral in 2016 and 2017. A lot has changed since then. What do you know about where Coral is today, and what challenges do you expect?",
    "intent": "약 10년 공백에 대한 준비성·최신 동향 이해 검증. 답변 수준이 곧 지원 진정성으로 평가됨",
    "points": [
      "Coral South: 2022년 생산 개시, 2026.1월 기준 누적 135회 이상 LNG 선적",
      "Coral North: 최종투자결정 완료, 2026.1월 삼성중공업 거제조선소에서 선체 진수, 2028년 완공 목표, 액화능력 3.6 MTPA → 두 설비 합계 모잠비크 LNG 생산 약 7 MTPA",
      "파트너: Eni(운영사), CNPC, KOGAS, ENH, XRG — 파트너 구성 변화도 숙지",
      "예상 과제: 카보델가두 지역 치안, 안정적 운영·비용 통제, 현지화(Local Content) 요구, 2호기 건설과 병행하는 조직·행정 부담"
    ],
    "note": "Coral FLNG S.A.의 Business Support가 Coral North 준비까지 지원하는지는 단순 추정이므로, 면접 전 공사 해외사업 담당부서를 통해 확인 권고",
    "struct": "변화 인정 → Coral South·North 현황 숫자 → 과제 3가지 → Business Support 역할 연결",
    "ans": [
      "Yes, a lot has changed. When I was in the Africa team, we were still preparing the FID. Now Coral South has been producing since 2022 and has shipped more than 135 cargoes. Coral North has taken FID, its hull was launched in Korea this January, and the target is 2028. Together, the two units will bring Mozambique to about 7 million tonnes per year.",
      "I see three main challenges. First, keeping Coral South safe and reliable while the company also prepares for a second facility. Second, security in Cabo Delgado, which affects logistics, travel and service contracts. Third, cost control and the government's local content expectations.",
      "For business support, this means clear meeting systems, strong contract and cost management, and good internal controls, so the company can grow without losing control."
    ],
    "follow": "How could the Business Support function help while Coral North is being built?",
    "fa": "By setting up clear processes for contracts, procurement and reporting early, so the organization can grow without confusion."
  },
  {
    "n": 5,
    "cat": "회의체 운영",
    "title": "Management Meeting 운영 절차",
    "en": "How would you prepare and run a Management Meeting so that decisions are made on time? Please walk us through before, during and after the meeting.",
    "intent": "직무기술서 첫 번째 업무(회의체 운영관리)에 대한 실무 체계 확인",
    "points": [
      "사전: 안건 접수 마감일 운영, 회의 3~5일 전 사전자료(Pre-read) 배포, 안건마다 '필요한 결정사항' 명시",
      "진행: 시간 관리, 안건별 결론·담당자·기한을 회의 중 확인",
      "사후: 24~48시간 내 회의록 배포, Action Tracker로 이행 점검, 다음 회의 첫 안건으로 미결사항 보고",
      "기획조정부 시절 경영진 회의체 운영 경험을 실제 사례로 연결"
    ],
    "note": "",
    "struct": "3단계 제시 → 사전 → 진행 → 사후 → 경험·교훈",
    "ans": [
      "I'd manage it in three steps.",
      "Before the meeting, I'll collect agenda items with a clear deadline and send the papers three to five days early. Each paper should say clearly what decision is needed.",
      "During the meeting, I'll help the chair manage time. At the end of each item, I'll confirm the decision, the owner and the deadline, so everyone leaves with the same understanding.",
      "After the meeting, I'll send the minutes within one or two days and update an action tracker. Open items will be the first topic at the next meeting.",
      "I did similar work in our corporate planning team, where I set up and ran executive meetings. The lesson was simple: good preparation saves time, and follow-up makes decisions real."
    ],
    "follow": "What would you do if a decision keeps being postponed?",
    "fa": "I'd find out why — missing information or real disagreement — and prepare what's needed. If it still doesn't move, I'd ask the chair to set a clear deadline."
  },
  {
    "n": 6,
    "cat": "회의체 운영",
    "title": "파트너 간 이견 조정",
    "en": "Partners sometimes have different views on an agenda item. How would you help them reach agreement?",
    "intent": "JV 사업법인 직원으로서의 중립성과 조정력 확인",
    "points": [
      "회의 전 쟁점 파악·사전 조율(Pre-alignment), 사실·데이터 중심 자료 준비",
      "결정권은 경영진·파트너에 있고 본인은 진행자(Facilitator)임을 명확히 표현",
      "개별요금제 추진 시 사내부서·수요자·회계법인 간 협상 주관 경험을 사례로 제시"
    ],
    "note": "",
    "struct": "사전 개별 협의 → 사실·대안 자료 → 공통목표 강조 → 결정권은 경영진(중립) → 사례",
    "ans": [
      "First, I'd try to understand each partner's concerns before the meeting, not during it. I'd talk to the partner representatives one by one and find out what they really worry about.",
      "Second, I'd prepare the paper with clear facts and numbers, and show the options with their pros and cons. When everyone sees the same facts, the gap often becomes smaller.",
      "Third, in the meeting, I'd keep the focus on the common goal — safe and profitable operation.",
      "But to be clear, the decision belongs to management and the partners. My role is to make the process fair and clear, not to take sides. I used this approach when I developed our individual tariff system. Internal teams, customers and our accounting firm had different views, and early one-to-one talks helped us reach agreement."
    ],
    "follow": "Have you ever had to stay neutral when your own company had a strong view?",
    "fa": "Yes. In the audit team, I had to report the facts objectively, even when they were not what my own company wanted to hear."
  },
  {
    "n": 7,
    "cat": "회의체 운영",
    "title": "40쪽 보고서를 1쪽으로 요약",
    "en": "Suppose the CEO asks you for a one-page summary of a 40-page report by tomorrow morning. How would you do it?",
    "intent": "우선순위 판단, 영문 보고서 작성 능력 확인. 면접 후 실제 요약 과제가 주어지기도 함",
    "points": [
      "목적 확인(의사결정용인지 참고용인지) → BLUF 방식으로 결론 먼저",
      "핵심 3가지, 리스크, 필요한 결정사항 순서로 구성하고 숫자는 반드시 재확인",
      "원문 쪽수 표시로 CEO가 바로 찾아볼 수 있게 작성"
    ],
    "note": "",
    "struct": "목적 확인 → 읽는 순서 → 1쪽 구성 4요소 → 숫자 검증 → 경험",
    "ans": [
      "First, I'd ask one quick question: is this summary for a decision or just for information? That changes what goes on top.",
      "Then I'd read the executive summary and conclusions first, and go through the main sections to find the key numbers and risks.",
      "The one-page summary would have four parts: the bottom line at the top, three key points, the main risks, and the decision or action needed from you. I'd add page references so you can check details quickly.",
      "Before sending it, I'd double-check every number against the original. A short summary with a wrong number is worse than no summary. In our corporate planning team, I wrote many one-page reports for senior management, so I'm used to this kind of deadline."
    ],
    "follow": "If you found an error in the original report, what would you do?",
    "fa": "I'd still deliver on time, but I'd flag the error clearly in the summary and inform the report owner."
  },
  {
    "n": 8,
    "cat": "행정 지원",
    "title": "모잠비크 조달 리스크와 통제",
    "en": "What are the main procurement risks for a company operating in Mozambique, and how would you manage them?",
    "intent": "조달 실무 이해도와 반부패·현지화·투명성 감각 확인",
    "points": [
      "리스크: 부패·이해충돌, 특정 공급자 의존, 현지화 규정 준수, 물류·치안에 따른 납기 지연, 환율 변동",
      "통제: 경쟁입찰, 평가기준 사전 확정, 평가위원회와 계약부서 분리(직무분리), 공급자 사전 실사(Due Diligence), 계약 후 성과관리",
      "기술감사팀 시절 조달 절차·원가통제 감사 경험을 근거로 제시"
    ],
    "note": "",
    "struct": "리스크 4가지 → 핵심 통제 4가지 → 계약 후 관리 → 감사 경험",
    "ans": [
      "I see four main risks: corruption and conflicts of interest, depending too much on one supplier, delays from logistics and security in the north, and meeting local content rules while keeping cost and quality.",
      "To manage them, I'd focus on basic controls. Competitive bidding, with evaluation criteria fixed before bids are opened. Separation of duties — the people who evaluate bids should not be the ones who sign contracts. Due diligence on new vendors, including ownership checks. And proper records for every step, so any decision can be explained later.",
      "After signing, I'd also track supplier performance, not just price. When I was in the technical audit team, I audited procurement and cost control for overseas assets, so I know where problems usually happen."
    ],
    "follow": "How would you balance local content requirements with cost and quality?",
    "fa": "I'd include clear local content criteria in the bid evaluation and support local suppliers with training, but I'd never lower safety or quality standards."
  },
  {
    "n": 9,
    "cat": "행정 지원",
    "title": "서비스 계약 성과 부진 대응",
    "en": "One of our service contractors — for example, transport or accommodation — keeps underperforming, but the cost keeps going up. What would you do?",
    "intent": "General Service 계약·비용관리 실무의 단계적 대응 능력 확인",
    "points": [
      "데이터 확인: 계약상 KPI·SLA 대비 실적과 비용 증가 원인 분석",
      "계약 검토: 벌칙(Penalty), 개선계획 요구, 해지 요건 조항 확인",
      "협의: 공급자에게 기한이 있는 개선계획 요구, 동시에 대체 공급자 시장조사",
      "통영기지 행정팀의 운영예산·시설·물류 관리 경험 연결"
    ],
    "note": "",
    "struct": "데이터 확인 → 계약 조항 검토 → 개선계획 요구·대안 확보 → 경영진 보고 → 경험",
    "ans": [
      "I'd start with the facts. I'd check the contractor's performance against the KPIs and service levels in the contract, and find out why the cost is rising — scope changes, price increases, or weak control on our side.",
      "Next, I'd review the contract terms: penalties, the right to ask for an improvement plan, and termination conditions.",
      "Then I'd meet the contractor, share the data, and ask for a written improvement plan with a clear deadline. At the same time, I'd check the market for other suppliers, so we have a backup plan. Finally, I'd report the situation and my recommendation to management.",
      "At the Tong-Yeong LNG terminal, I managed site administration and logistics budgets, and this step-by-step approach worked well with our service providers."
    ],
    "follow": "What KPIs would you put into a new service contract?",
    "fa": "On-time service rate, number of complaints, safety incidents, and cost per unit — each with a clear penalty or incentive."
  },
  {
    "n": 10,
    "cat": "행정 지원",
    "title": "내부통제 실효성 점검",
    "en": "How would you make sure our internal control system works in practice, not only on paper?",
    "intent": "감사 경력을 내부통제 운영 지원에 활용할 수 있는지 확인",
    "points": [
      "리스크 기반 점검: 지급·조달·출장비 등 고위험 업무 우선, 샘플 테스트와 실제 업무 흐름 확인(Walkthrough)",
      "권한·직무분리: DOA 준수, 작성자·승인자 분리 여부 점검",
      "사후관리: 지적사항 개선 이행 추적, 직원 교육, 경영진의 솔선(Tone at the top)",
      "주주감사(Shareholders' Audit) 참여 및 사후 개선조치 모니터링 경험 제시"
    ],
    "note": "",
    "struct": "핵심 원칙 → 고위험 분야 샘플 테스트 → 개선 추적·교육 → 경영진 지원 → 감사 경험",
    "ans": [
      "A control only works if people actually follow it. So I'd test the controls, not just read the procedures.",
      "I'd start with high-risk areas like payments, procurement and travel expenses. I'd pick sample transactions and follow them from start to finish, to see whether approvals match the delegation of authority and duties are properly separated.",
      "When I find gaps, I'd agree on actions with the process owners, set deadlines, and track them until they're closed. I'd also give short training, because many problems come from people simply not knowing the rules. Strong support from senior management is also essential.",
      "I took part in shareholder audits of overseas JV assets and monitored corrective actions after audits, so I've seen both the auditor's view and the business view."
    ],
    "follow": "What would you do if a senior manager ignores a control finding?",
    "fa": "I'd talk to them directly first and explain the risk. If nothing changes, I'd escalate it to the CEO or the audit committee according to our rules."
  },
  {
    "n": 11,
    "cat": "행정 지원",
    "title": "내부규정(P&P) 개정 추진",
    "en": "Many of our policies and procedures need to be updated. How would you approach this without slowing down the business?",
    "intent": "직무기술서상 경영기획 지원(규정 수립·관리) 역량과 변화관리 능력 확인",
    "points": [
      "현황 진단: 규정 목록, 담당부서, 최종 개정일 정리",
      "우선순위: 감사 지적·고위험 규정부터 개정, 현지 법규 변경 반영",
      "실행: 실무부서 참여 초안 → 법무·파트너 검토 → 단계적 시행·교육 → 정기 재검토 주기 설정"
    ],
    "note": "",
    "struct": "목록화 → 우선순위 → 실무자 참여 초안·검토 → 교육·정기 재검토 → 원칙",
    "ans": [
      "I'd do it step by step. First, I'd list all policies and procedures — who owns each one and when it was last updated.",
      "Second, I'd set priorities. High-risk procedures, audit findings and areas affected by new local laws would come first.",
      "Third, the people who actually use each procedure should help write the draft. Then Legal, the relevant partners and management would review it.",
      "Finally, we'd roll it out with short training and set a regular review cycle, for example every two years. This way, we fix the most important rules first without stopping daily work. Simple, clear procedures are more likely to be followed."
    ],
    "follow": "How do you get people to actually follow a new procedure?",
    "fa": "Keep it simple, explain why the rule exists, train people, and check compliance regularly."
  },
  {
    "n": 12,
    "cat": "사업계획·예산",
    "title": "데이터로 의사결정을 바꾼 경험·AI 활용",
    "en": "Tell us about a time you used data to change a management decision. What tools do you use for analysis — and do you use any AI tools?",
    "intent": "분석력과 디지털·AI 활용 역량(최근 외국기업 단골 질문) 확인",
    "points": [
      "STAR 구조로 1개 사례: 전략·평가체계 개선 또는 직수입 설비 인수 시 법률·세무·재무 쟁점 검토 사례 활용",
      "Excel·PowerPoint 고급 활용 수준을 구체적으로(모델링, 시나리오 분석 등) 설명",
      "AI 활용 시 기밀자료 입력 금지, 결과 직접 검증 원칙을 반드시 함께 언급"
    ],
    "note": "",
    "struct": "STAR 사례(직수입 설비 인수) → 분석 도구 → AI 활용 원칙 2가지",
    "ans": [
      "Last year, KOGAS took over a gas supply facility for a customer's direct LNG import for the first time. There were many open questions in legal, tax, finance and technical areas.",
      "My task was to check whether the deal made sense and under what conditions. I collected data from each area, built a simple cost and risk comparison, and worked with legal, tax and accounting experts. The analysis showed [핵심 발견사항], so management changed [조건 또는 일정] before approval. As a result, we completed the first acquisition of this kind [성과].",
      "For tools, I mainly use Excel for analysis and PowerPoint for reporting. I also use AI tools to draft, summarize and check documents faster. But I follow two rules: I never put confidential data into public AI tools, and I always check the results myself."
    ],
    "follow": "How do you check that AI-generated output is correct?",
    "fa": "I compare it with the original source, check the numbers myself, and never use it as the final answer."
  },
  {
    "n": 13,
    "cat": "사업계획·예산",
    "title": "일반관리비 15% 절감 요구 대응",
    "en": "Imagine LNG prices fall sharply and the partners ask us to cut G&A costs by 15% next year. Where would you start?",
    "intent": "비용 감각과 우선순위 판단, 경영진 의사결정 지원 방식 확인",
    "points": [
      "비용 구조 분석(고정·변동, 계약별) 후 절감 가능 항목 도출",
      "보호 항목: 안전·보안·컴플라이언스 비용은 절감 대상에서 제외",
      "서비스 계약 재협상·통합, 출장·외부용역 축소 등 2~3개 대안과 영향을 제시하고 결정은 경영진에게"
    ],
    "note": "",
    "struct": "비용구조 분석 → 보호 항목 → 절감 후보 → 2~3개 대안 제시 → 결정은 경영진",
    "ans": [
      "First, I'd look at the cost structure — which costs are fixed, which are variable, and which are tied to contracts.",
      "Second, I'd protect safety, security and compliance costs. Cutting those can create much bigger costs later.",
      "Then I'd look for savings elsewhere: renegotiating or combining service contracts, reducing travel and outside consultants, and removing unused services or licenses.",
      "Instead of one plan, I'd give management two or three options — for example, a 10, 15 and 20 percent case — with the impact of each. Then management can decide with clear information. Cost cuts should be smart, not just the same cut everywhere."
    ],
    "follow": "Which costs would you never cut?",
    "fa": "Safety, security and compliance. Those protect our people and our license to operate."
  },
  {
    "n": 14,
    "cat": "행동면접",
    "title": "가장 어려웠던 협상",
    "en": "Tell us about the most difficult negotiation you have led. What was the result, and what would you do differently?",
    "intent": "본인이 실제로 기여한 부분(I)과 결과의 구체성 확인",
    "points": [
      "발전사와의 SPA 협상 사례를 STAR 구조로: 상황 → 본인 과제 → 본인 행동 → 결과(숫자·기간)",
      "\"We\" 대신 \"I\"로 본인 역할 명확화, 마지막에 교훈 1가지"
    ],
    "note": "",
    "struct": "STAR — 상황(이해 충돌) → 과제 → 행동(진짜 니즈 파악·교환 조건) → 결과(숫자) → 교훈",
    "ans": [
      "Last year, I led a gas sales negotiation with a large power company under our new individual tariff system. It was difficult because the customer wanted a lower price and more flexible volumes, while KOGAS needed to protect cost recovery and supply security.",
      "My task was to reach a deal that worked for both sides. I started by understanding what the customer really needed. It wasn't only price — they needed predictable costs for their power plant. So I offered [가격 산식 또는 물량 유연성] in exchange for [계약기간 연장 등 반대급부]. I also checked every term with our internal teams before offering it.",
      "As a result, we signed the SPA [체결 기간·물량 등 성과]. If I did it again, I'd involve Legal and Finance even earlier, to save time at the final stage."
    ],
    "follow": "What did the other side want most, and how did you find out?",
    "fa": "Stable, predictable costs. I found out by asking open questions and listening first, not by pushing our offer."
  },
  {
    "n": 15,
    "cat": "행동면접",
    "title": "업무상 실수와 교훈",
    "en": "Tell us about a mistake you made at work. What did you learn from it?",
    "intent": "책임감·자기성찰과 재발방지 사고방식 확인",
    "points": [
      "작지만 실제 있었던 실수를 선택(윤리 관련 실수는 피함)",
      "책임 인정 → 신속한 수습 → 절차 개선으로 재발 방지 순서로 설명, 변명·남 탓 금지"
    ],
    "note": "",
    "struct": "실수 인정 → 즉시 보고·수정 → 재발방지 습관 → 교훈 (윤리 관련 실수는 금지)",
    "ans": [
      "Early in my career, I sent a technical review to management based on partner data, without checking one key assumption myself. Later, I found the assumption was outdated, and part of my conclusion was wrong.",
      "I told my manager right away, corrected the review, and explained the change to everyone who had received it. Luckily, no decision had been made yet.",
      "Since then, I always check key numbers and assumptions at the source, and I use a simple checklist before sending any report to management. It's a small habit, but it has prevented many problems."
    ],
    "follow": "How did your manager react?",
    "fa": "He appreciated that I reported it quickly. It actually built more trust between us."
  },
  {
    "n": 16,
    "cat": "행동면접",
    "title": "권한 없이 협조를 이끈 경험",
    "en": "Describe a time when you had to get support from people who did not report to you.",
    "intent": "Business Support 직무의 본질인 권한 없는 영향력(Influence without authority) 확인",
    "points": [
      "기획조정부 시절 전사 현안 조정 사례: 부서별 이해관계 파악 → 상대방 목표에 도움이 되는 점 설명 → 작은 합의부터 확대",
      "끝까지 협조하지 않은 경우의 보고·에스컬레이션 방법도 함께 준비"
    ],
    "note": "",
    "struct": "상황(전사 현안, 권한 없음) → 개별 면담·상대 이익 설명 → 작은 합의부터 → 결과 → 교훈",
    "ans": [
      "In our corporate planning team, I was responsible for solving company-wide issues that involved many departments. None of those people reported to me.",
      "One example was [과제 — 예: 내부평가체계를 전략·사업계획과 연계하도록 개선]. Each department had its own priorities, and some were worried about extra work. I met each department head one by one, listened to their concerns, and showed how the change would help their own goals. I started with small agreements and shared progress openly.",
      "In the end, [결과 — 예: 새 체계가 전사에 도입됨]. I learned that people support a change when they see it as their own solution."
    ],
    "follow": "What did you do when someone still refused to cooperate?",
    "fa": "I respected their view and looked for a smaller first step. When that didn't work, I asked the decision-maker to set the direction."
  },
  {
    "n": 17,
    "cat": "윤리·안전·다문화",
    "title": "세컨디로서 KOGAS와 회사 이해 충돌",
    "en": "You will be seconded from KOGAS, one of the shareholders. What would you do if KOGAS's interests and Coral FLNG's interests are different?",
    "intent": "운영사 CEO가 세컨디에게 반드시 확인하는 핵심 질문 — 충성도, 기밀유지, 투명성",
    "points": [
      "근무 중에는 Coral FLNG S.A. 직원으로서 회사 이익과 규정 우선",
      "기밀정보는 파견계약·JOA·SHA 등 정해진 범위와 공식 채널로만 공유",
      "이해충돌 발생 시 상사에게 투명하게 공개(Disclose), 필요 시 해당 안건에서 회피",
      "동시에 파트너 간 신뢰를 높이는 가교(Bridge) 역할을 강점으로 제시"
    ],
    "note": "",
    "struct": "질문 중요성 인정 → 회사 우선 원칙 → 공식 채널·기밀유지 → 이해충돌 공개·회피 → 가교 역할",
    "ans": [
      "This is a very important question. While I'm at Coral FLNG, I'm an employee of Coral FLNG. My first duty is to this company and its rules.",
      "KOGAS is a shareholder and will receive information — but only through official channels, and within the rules of the secondment agreement and the shareholder agreements. I won't share confidential information outside those rules.",
      "If I see a real conflict of interest, I'll tell my manager openly and, if needed, step back from that decision.",
      "At the same time, I can be a useful bridge. I understand how KOGAS thinks, so I can help both sides understand each other and build trust."
    ],
    "follow": "If KOGAS headquarters asks you informally for internal information, what would you say?",
    "fa": "I'd politely say no and ask them to make the request through the official shareholder channel."
  },
  {
    "n": 18,
    "cat": "윤리·안전·다문화",
    "title": "급행료(Facilitation Payment) 요구 대응",
    "en": "A government official suggests that a small 'facilitation payment' would speed up a permit we urgently need. How would you respond?",
    "intent": "에너지 메이저의 반부패 무관용 원칙 체화 여부 확인. 망설임 자체가 감점 요인",
    "points": [
      "즉시 거절 — 소액이라도 불가함을 명확히",
      "회사 윤리규정·반부패 규정(FCPA, UK Bribery Act, 현지 법령) 준수, 컴플라이언스 부서 보고 및 기록",
      "공식 절차를 통한 대안 모색(상급기관 협조 요청, 일정 재조정)"
    ],
    "note": "",
    "struct": "즉시·명확한 거절 → 법·규정 근거 → 컴플라이언스 보고·기록 → 정상적 해결방안 → 한 문장 결론",
    "ans": [
      "I would say no — clearly and politely. Even a small payment is a bribe. It is not acceptable under company rules or anti-corruption laws, such as the FCPA, the UK Bribery Act and Mozambican law.",
      "Then I'd report the situation to Compliance and my manager right away, and keep a record of what happened.",
      "To solve the delay, I'd use proper ways — for example, making sure our application is complete, asking for support from higher levels of the authority through official channels, or adjusting our schedule.",
      "A delay is a business problem we can manage. A bribery case can damage the whole company and the project."
    ],
    "follow": "What if your manager says it's normal practice here?",
    "fa": "I'd still refuse and report it to Compliance. \"Normal practice\" is never an excuse."
  },
  {
    "n": 19,
    "cat": "윤리·안전·다문화",
    "title": "비운영 부서의 HSE 기여",
    "en": "Safety is our top priority. As someone in a non-operational role, how would you contribute to a strong HSE culture?",
    "intent": "운영사의 최우선 가치인 안전문화 이해도 확인",
    "points": [
      "누구나 위험 시 작업을 중지할 수 있는 권한(Stop Work Authority) 이해 표현",
      "행정 영역의 안전: 출장·이동 관리(Journey Management), 숙소·보안 계약 관리, 비상대응 훈련 지원",
      "아차사고 보고 장려, 통영기지의 HSE·비상대비 지원 경험 연결"
    ],
    "note": "",
    "struct": "본인 솔선(작업중지권) → 지원서비스 안전관리(이동·숙소·보안) → 훈련·아차사고 보고 → 경험",
    "ans": [
      "Even in a non-operational role, there's a lot I can do. First, I'll follow the rules myself and use my stop work authority if I see something unsafe. That applies to everyone, including office staff.",
      "Second, many safety risks are connected to support services — transport, accommodation, travel and security. In Cabo Delgado, journey management and security are especially important. I'll make sure these contracts include clear HSE requirements and that contractors follow them.",
      "Third, I'll support emergency drills and encourage people to report near misses without fear. At the Tong-Yeong LNG terminal, I supported HSE protocols and emergency preparedness, so I know safety culture is built by many small actions every day."
    ],
    "follow": "Tell me about a time you raised a safety concern.",
    "fa": "[실제 사례로 교체] At the terminal, I saw a contractor working at height without proper safety equipment. I stopped the work and called the supervisor. It took ten minutes, but it was the right decision."
  },
  {
    "n": 20,
    "cat": "윤리·안전·다문화",
    "title": "다국적 환경 적응과 포르투갈어 계획",
    "en": "You'll work with colleagues from Italy, Mozambique, China and Korea, and much of daily life here is in Portuguese. How will you adapt — and what is your plan for Portuguese?",
    "intent": "적응력·현지화 의지 확인. 포르투갈어는 우대조건이므로 구체적 계획 제시가 중요",
    "points": [
      "아프리카사업팀 시절 마푸토 사무소 설립 등 다문화 협업 경험 제시",
      "현지 직원 존중과 역량 개발(Local talent development) 의지 표현",
      "포르투갈어는 부임 전 기초과정 수강, 6개월 내 일상 업무 대화 수준 등 기간·목표를 숫자로 제시, 간단한 인사말 시연도 효과적"
    ],
    "note": "",
    "struct": "다문화 경험 → 소통 원칙 → 현지 직원 존중·육성 → 포르투갈어 계획(기간·목표) → 인사말 시연",
    "ans": [
      "I enjoy working in multinational teams. In the Africa Business Team, I worked with partners from Italy, China, Portugal and Mozambique, and I helped set up our Maputo office. I learned to speak simply, listen carefully, and confirm things in writing.",
      "I also believe respect for local staff is key. I'd like to share what I know and help develop Mozambican colleagues, because they are the future of this project.",
      "For Portuguese, I'll start lessons before I arrive. My goal is to handle daily work conversations within six months and keep improving after that. And I can already say: Bom dia, muito prazer em conhecê-los."
    ],
    "follow": "How would you help develop Mozambican staff in your team?",
    "fa": "Give them real responsibility, coach them regularly, and share knowledge through simple guides and on-the-job training."
  }
];
