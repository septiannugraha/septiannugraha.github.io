---
layout: post
title: "From Excel Hell to Open Source: Building a Portfolio That Matters"
date: 2024-08-28 20:00:00 +0700
categories: development
author: septiannugraha
tags: portfolio open-source excel
permalink: /development/2024/08/28/from-excel-hell-to-open-source.html
excerpt: "How migrating 2,983 Excel formulas led to building 5 open source projects and a complete career pivot"
---

# From Excel Hell to Open Source: Building a Portfolio That Matters

It started with a client drowning in Excel. 36 interconnected spreadsheets. 2,983 formulas. 8-hour processing times. One person who knew how it worked (and they were on vacation).

Today, I'm releasing five open source projects born from real pain points like this one. Here's the journey and what I learned along the way.

## The Excel Nightmare That Started Everything

The Enterprise Risk Management project wasn't supposed to be complex. "Just make our Excel sheets into a web app," they said. What I discovered was a Byzantine empire of VLOOKUP chains, nested IF statements 10 levels deep, and circular references that somehow worked (until they didn't).

The migration took 12 weeks. But more importantly, it taught me that **every business runs on Excel**, and most of them are drowning in it.

## The Projects

### 1. [Enterprise Risk Management System](https://github.com/septiannugraha/enterprise-risk-management)

The original beast. A complete risk management platform with:
- 9 integrated modules
- Real-time dashboards with Chart.js
- Zero framework dependencies (pure JavaScript)
- Docker containerized deployment

**Key Learning:** Sometimes boring tech is the best tech. No React, no Vue, just vanilla JavaScript that works.

### 2. [Excel to Database Migration Toolkit](https://github.com/septiannugraha/excel-database-toolkit)

Born from necessity. After migrating those 2,983 formulas manually, I built a toolkit to automate it:
- Translates Excel formulas to SQL
- Generates database schemas from spreadsheets
- Identifies dependencies and migration order
- CLI tool for easy automation

**Key Learning:** Turn your pain into a product. Others have the same problem.

### 3. [D&D Combat Simulator](https://github.com/septiannugraha/dnd_simulator)

What happens when your D&D group argues about rules for 30 minutes? You build a simulator with 1000+ rules implemented in code:
- Go backend with concurrent combat resolution
- Next.js frontend with real-time updates
- WebSocket broadcasting for multiplayer
- AI Dungeon Master integration

**Key Learning:** Fun projects teach you more than tutorials. WebSockets, concurrency, and state management all from wanting to automate dice rolls.

### 4. [AI Narrative Engine](https://github.com/septiannugraha/ai-narrative-engine)

Exploring what happens when AI remembers. A narrative generation system with:
- Character memory persistence
- World state management
- LLM orchestration (Gemini/Claude)
- Council Directives prompt framework

**Key Learning:** AI is more than chatbots. The real challenge is maintaining consistency and memory across sessions.

### 5. [Multi-Tenant Architecture](https://github.com/septiannugraha/multi-tenant-architecture)

Built for a client needing to support "200+ shops". Now open source:
- PostgreSQL row-level security
- Kafka event streaming
- Redis caching layer
- Complete tenant isolation

**Key Learning:** Build for scale from day one, even if you only have one user.

## Why Open Source?

I debated this. These projects represent hundreds of hours of work. Why give them away?

1. **Portfolio > Resume** - Code speaks louder than bullet points
2. **Community Karma** - I learned from open source, time to give back
3. **Feedback Loop** - Public code makes you write better code
4. **Opportunity Magnet** - My best clients found me through GitHub

## The Trade-Off Strategy

Not everything is open source. Here's what I keep private:
- Client-specific business logic
- Advanced prompt engineering techniques
- Performance optimizations that took months to figure out
- Production configurations and secrets

The public versions are fully functional but missing the "secret sauce" that makes them worth hiring me for.

## Lessons Learned

### 1. Real Problems > Toy Projects
Every project in my portfolio solves a problem I actually had. No todo lists, no Twitter clones.

### 2. Documentation Sells
A good README is worth 1000 lines of code. Explain the problem, show the solution, prove the impact.

### 3. Diversity Matters
Enterprise system, game, AI experiment, developer tool, architecture pattern. Shows range and adaptability.

### 4. Ship Ugly, Refactor Later
The D&D simulator started as 200 lines of spaghetti code. Now it's a proper architecture. But it shipped on day one.

### 5. Your Pain is Someone's Product
That Excel migration nightmare? Now it's a toolkit that could become a SaaS. Every frustration is an opportunity.

## What's Next?

I'm currently:
- Building a SaaS version of the Excel toolkit
- Exploring narrative AI for training simulations
- Taking on freelance projects (20 hrs/week available)
- Writing about the intersection of business and code

## The Call to Action

If you're drowning in Excel, struggling with multi-tenant architecture, or just want to automate your D&D campaign, check out the repos. Use them, fork them, improve them.

And if you need help with something similar but more complex? That's what I'm here for.

## Connect

- GitHub: [@septiannugraha](https://github.com/septiannugraha)
- LinkedIn: [Septian Adi Nugraha](https://www.linkedin.com/in/septian-adi-nugraha/)
- Email: [Let's talk](mailto:your-email@example.com)

---

*P.S. - Yes, the D&D simulator can handle a Tarrasque fight with 10 players. No, it won't make your dice rolls any luckier.*