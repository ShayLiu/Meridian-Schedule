# Meridian-Schedule

Meridian-Schedule is a structured scheduling system within the Meridian framework, designed to organize work, research, and everyday life in one coherent workflow.

## Overview

This project began as a personal planning prototype and is gradually evolving into an interactive scheduling interface. It is intended to support:

- daily scheduling
- task management
- weekly planning
- lightweight notes
- domain-based organization across different areas of life

The current version focuses on a clean frontend prototype built with React, TypeScript, and Vite.

## Current Features

- dashboard overview
- sidebar navigation across multiple views
- task cards with status and priority tags
- add-task form
- weekly planning editor
- notes editor with live preview
- local browser storage for tasks, weekly planning, and notes

## Views

### Dashboard
A high-level overview of:
- today’s tasks
- upcoming tasks
- weekly priorities
- life/work domains

### Calendar
A placeholder view for future time-based schedule planning.

### Tasks
A full list of current tasks.

### Weekly Planning
An editable weekly priorities section.

### Notes
A simple note-writing area with live preview.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Project Structure

```text
Meridian-Schedule/
├── app/                  # Main frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
├── docs/                 # Project notes and planning documents
├── components/           # Early planning notes for UI components
├── pages/                # Early planning notes for views
├── data/                 # Early planning notes / structure drafts
├── types/                # Early planning notes / type drafts
└── README.md



Local Development
cd app
npm install
npm run dev

Then open the local address shown in the terminal, usually:

http://localhost:5173/
