
```md
# Meridian-Schedule

A structured scheduling system within the Meridian framework for organizing work, research, and everyday life.

> Meridian-Schedule is an interactive planning prototype that integrates tasks, weekly priorities, and notes into one coherent workflow.

## Overview

Meridian-Schedule is an interactive planning prototype designed to bring scheduling, task management, weekly priorities, and lightweight notes into one coherent workflow.

This project is part of the broader **Meridian** series and currently focuses on a clean frontend prototype built with **React**, **TypeScript**, and **Vite**.

## Features

- dashboard overview
- task cards with status and priority tags
- add-task workflow
- weekly planning editor
- notes editor with live preview
- multi-view sidebar navigation
- local persistence with browser storage

## Current Views

### Dashboard
A high-level overview of:
- today’s tasks
- upcoming tasks
- weekly priorities
- domains overview

### Calendar
A placeholder view for future time-based planning.

### Tasks
A full list of tasks with metadata.

### Weekly Planning
An editable section for weekly priorities.

### Notes
A simple note-writing area with live preview.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- localStorage

## Project Structure

```text
Meridian-Schedule/
├── app/                        # Main frontend application
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskCard.tsx
│   │   ├── data/
│   │   │   └── mockTasks.ts
│   │   ├── types/
│   │   │   └── task.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── index.html
├── docs/                       # Project notes and planning documents
├── components/                 # Early planning notes for UI components
├── pages/                      # Early planning notes for page structure
├── data/                       # Early planning notes / structure drafts
├── types/                      # Early planning notes / type drafts
├── README.md
├── LICENSE
└── .gitignore
````

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShayLiu/Meridian-Schedule.git
cd Meridian-Schedule
```

### 2. Enter the frontend app

```bash
cd app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

Usually:

```text
http://localhost:5173/
```

## Available Commands

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## How It Works

### Sidebar Navigation

The current version uses local React state to switch between views:

* Dashboard
* Calendar
* Tasks
* Weekly Planning
* Notes

These are currently rendered as conditional views inside the main application rather than route-based pages.

### Add Task

The **+ Add Task** button opens a simple task form.

Users can:

* enter a title
* choose a domain
* choose a date
* choose a priority
* save the task into app state

### Weekly Planning

The Weekly Planning section allows editing three weekly priorities.

Saved priorities are reflected in:

* the Weekly Planning view
* the Dashboard

### Notes

The Notes section includes:

* a textarea for writing
* a live preview area
* browser-local persistence

### Local Persistence

The app currently stores data in browser local storage, including:

* tasks
* weekly planning
* notes

## Current Status

Meridian-Schedule is currently in the **prototype stage**.

The current version already supports:

* multi-view navigation
* interactive task creation
* editable weekly planning
* editable notes
* task display with metadata
* local browser persistence

The current version does not yet include:

* backend database
* authentication
* route-based navigation
* full calendar logic
* deployment configuration
* task editing or deletion

## Roadmap

### Phase 1

* project structure
* documentation
* frontend prototype

### Phase 2

* task cards
* interactive navigation
* add-task workflow
* editable weekly planning
* editable notes

### Phase 3

* local persistence
* improved filtering
* better UI hierarchy
* reusable components

### Phase 4

* route-based pages
* real calendar structure
* deployment
* optional backend integration

## Future Improvements

* task filtering by domain, status, and priority
* editable task status
* task deletion and task updates
* improved calendar layout
* responsive mobile layout
* reusable form and layout components
* deployment to Vercel or GitHub Pages

## Vision

Meridian-Schedule is not only a scheduling tool, but part of a broader personal system for building structure, continuity, and direction across work and life.

It is intended to grow into a flexible planning environment that connects:

* scheduling
* task systems
* weekly rhythm
* notes
* long-term organization

## License

MIT
