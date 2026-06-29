# 🚀 LocalCloud Control Plane

A **local-first platform engineering and DevOps simulation system** that replicates core cloud control-plane behaviors deployment orchestration, service lifecycle management, observability, and infrastructure control without relying on external cloud providers.

This project demonstrates how modern cloud orchestration platforms such as Kubernetes operate internally by implementing a simplified control plane using **Node.js**, **React**, and **Docker**.

---

## 📖 Overview

Modern cloud platforms abstract infrastructure complexity behind APIs and control planes.
**LocalCloud Control Plane** recreates that architecture locally, allowing users to manage services as if operating a lightweight cloud platform.

Users can:

* Create and manage services
* Simulate deployments
* Start or stop workloads
* Observe service lifecycle transitions
* Track system logs and events
* Monitor simulated infrastructure state

The goal is to provide a practical demonstration of **platform engineering principles**, **service orchestration**, and **cloud-native architecture**.

---

## 🧠 Core Concept

This project models the separation between:

### Control Plane

Responsible for:

* Service orchestration
* Desired state management
* Deployment lifecycle
* Scheduling decisions
* Event processing

### Data Plane (Simulated)

Responsible for:

* Running workloads
* Service runtime state
* Execution lifecycle

This architecture mirrors how platforms like Kubernetes coordinate infrastructure at scale.

---

# 🏗 Architecture

```text
Frontend Dashboard (React + Vite)
            │
            ▼
Backend API (Node.js + Express)
            │
    ┌───────┼────────┐
    │       │        │
    ▼       ▼        ▼
Service  Orchestrator Logger
Manager    Engine
            │
            ▼
    Metrics Simulator
            │
            ▼
 Local JSON Persistence
```

---

## ⚙️ Core Components

---

### 1. Frontend Dashboard

Interactive control panel built with **React + Vite**.

Features:

* Service creation
* Deployment triggers
* State monitoring
* Lifecycle visualization
* Live service updates

---

### 2. Backend API

RESTful API built with **Node.js + Express**.

Responsibilities:

* Manage services
* Process control commands
* Trigger deployments
* Persist service state
* Serve orchestration data

Example endpoints:

```bash
GET    /api/services
POST   /api/services
POST   /api/deploy/:serviceId
PATCH  /api/services/:id
DELETE /api/services/:id
```

---

### 3. Orchestrator Engine

The heart of the control plane.

Responsible for simulating deployment workflows and lifecycle transitions.

Example state flow:

```text
STOPPED → DEPLOYING → RUNNING
```

Capabilities:

* Deployment simulation
* Version incrementing
* Delayed state transitions
* Lifecycle event emission

---

### 4. Logger Subsystem

Tracks operational events across the platform.

Examples:

* Service created
* Deployment started
* Deployment completed
* Service stopped

Useful for:

* Audit trails
* Debugging
* Observability simulation

---

### 5. Metrics Simulator

Mock observability layer for infrastructure monitoring.

Tracks:

* Service status
* Deployment counts
* Runtime events

Designed for future integration with:

* Prometheus
* Grafana

---

### 6. Persistence Layer

Lightweight JSON-based storage.

Benefits:

* Zero external dependencies
* Fast local development
* Easy debugging
* Simplified state persistence

No external database required.

---

# 🔥 Key Features

---

## 🧩 Service Management

Create services dynamically.

Features:

* Register new services
* Update service metadata
* Delete services
* Start / stop workloads

---

## 🚀 Deployment Simulation

Simulates cloud deployment pipelines.

Includes:

* Version upgrades
  `1.0.0 → 1.0.1`
* State transitions
* Deployment delays
* Failure handling (extendable)

---

## 📊 Observability

Basic monitoring capabilities:

* Event logs
* Service health status
* Deployment history

---

## ⚙️ DevOps Simulation

Infrastructure concepts demonstrated:

* Containerized workloads
* API-driven orchestration
* Cloud control-plane design
* Deployment automation

---

# 🐳 Running the Project

## Clone Repository

```bash
git clone https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane.git
cd LocalCloud-Control-Plane
```

---

## Option 1: Docker (Recommended)

```bash
docker-compose up --build
```

---

## Option 2: Manual Setup

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Access Points

| Service     | URL                         |
| ----------- | --------------------------- |
| Frontend UI | `http://localhost:5173`     |
| Backend API | `http://localhost:4000/api` |

---

# 🧪 Example Workflow

### Step 1 — Create Service

Example:

```text
auth-service
```

---

### Step 2 — Trigger Deployment

Start deployment via UI or API.

---

### Step 3 — Observe Lifecycle

```text
STOPPED
   ↓
DEPLOYING
   ↓
RUNNING
```

---

### Step 4 — Inspect Logs

Review deployment events and state transitions.

---

# 📦 DevOps Concepts Demonstrated

This project showcases:

* Control Plane vs Data Plane separation
* Service orchestration patterns
* Deployment lifecycle management
* Infrastructure abstraction
* Containerized development workflows
* API-driven infrastructure control

---

# 📈 System Design Highlights

### Stateless API Layer

Backend services remain stateless for easier scaling.

### Event-Driven Orchestration

State transitions are event-based.

### Modular Architecture

Each subsystem is independently extensible.

### Extensible Platform Design

Architecture supports Kubernetes-like expansion.

---

# 🧭 Future Enhancements

---

## 🚀 Platform Engineering

* Scheduler simulation
* Pod abstraction
* Replica management
* Auto-scaling simulation

---

## 📊 Observability

* Prometheus-style metrics
* Grafana dashboards
* CPU / memory telemetry
* Alert simulation

---

## ⚙️ CI/CD Simulation

Integrate:

* [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com) pipelines
* Build → Test → Deploy workflows
* Rollback strategies

---

## 🧠 Event System

Planned additions:

* Kafka-style message bus
* Async workers
* Event replay system

---

# 🧑‍💻 Tech Stack

### Frontend

* React
* Vite

### Backend

* Node.js
* Express

### Infrastructure

* Docker
* Docker Compose

### Storage

* JSON persistence

---

# 🎯 Project Goals

This project demonstrates:

✅ Platform engineering mindset
✅ DevOps architecture design
✅ Infrastructure simulation capability
✅ Full-stack integration
✅ Cloud architecture fundamentals

---

# 💡 Why This Project Matters

Most portfolio projects consume cloud services.

This project does something different.

Instead of using managed services, **LocalCloud Control Plane builds core cloud orchestration concepts from first principles**, demonstrating a deeper understanding of how infrastructure platforms work internally.

This makes it especially useful for:

* DevOps portfolios
* Platform engineering interviews
* System design discussions
* Cloud architecture demonstrations

---

# 👨‍💻 Author

**Franklin Chinonso Osuji**
AWS-Certified Cloud & DevOps Engineer

> Built to demonstrate cloud architecture thinking, infrastructure orchestration, and platform engineering principles through local-first system simulation.


