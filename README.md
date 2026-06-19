🚀 LocalCloud Control Plane

A local-first DevOps and platform engineering simulation system that replicates core cloud infrastructure behaviors (deployment, service orchestration, monitoring, and lifecycle management) without relying on any external cloud provider.

This project is designed as a hands-on system design + DevOps portfolio artifact, demonstrating how a simplified control plane works internally.

🧠 System Overview

LocalCloud Control Plane simulates a cloud-native environment where users can:

Create and manage services
Simulate deployments
Start and stop workloads
Track service state transitions
Observe logs and system events

It mimics the core behavior of orchestration systems like Kubernetes, but runs entirely locally using Docker + Node.js.

🏗️ Architecture
Frontend (React + Vite)
        │
        ▼
Backend API (Node.js + Express)
        │
        ├── Service Manager (CRUD lifecycle)
        ├── Orchestrator Engine (deployment simulation)
        ├── Logger (event tracking)
        ├── Metrics Simulator (mock observability layer)
        │
        ▼
Local Storage (JSON-based persistence)
⚙️ Core Components
1. Frontend Dashboard
React + Vite UI
Service control panel
Deployment triggers
Live state updates
2. Backend API
Express-based REST API
Service lifecycle management
Deployment simulation engine
Logging subsystem
3. Orchestrator Engine
Simulates deployment pipelines
Changes service states (STOPPED → DEPLOYING → RUNNING)
Version increment simulation
4. Data Layer
Lightweight JSON-based persistence
No external database required
🔥 Key Features
🧩 Service Management
Create services dynamically
Toggle running/stopped state
Delete services (extendable)
🚀 Deployment Simulation
Fake deployment pipeline execution
Version updates (e.g., 1.0.0 → 1.0.1)
Status transitions with delay simulation
📊 Observability (Basic)
Event logging system
Service status tracking
Extensible for metrics dashboards
⚙️ DevOps Simulation
Dockerized architecture
API-based orchestration
Cloud-like control plane behavior
🐳 Running the Project
1. Clone repository
git clone (https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane.git)
cd localcloud-control-plane
2. Start with Docker (Recommended)
docker-compose up --build
3. Manual Setup (Alternative)
Backend
cd backend
npm install
npm start
Frontend
cd frontend
npm install
npm run dev
🌐 Access Points
Service	URL
Frontend UI	http://localhost:5173
Backend API	http://localhost:4000/api
🧪 Example Workflow
Create a service (e.g. auth-service)
Trigger deployment

Watch status transition:

STOPPED → DEPLOYING → RUNNING
Toggle service state
Observe logs and state updates
📦 DevOps Concepts Demonstrated

This project demonstrates:

Control Plane vs Data Plane separation
Service orchestration patterns
Deployment lifecycle simulation
Infrastructure abstraction
Containerized development environments
API-driven infrastructure control
📈 System Design Highlights
Stateless API layer (backend)
Event-driven orchestration simulation
Modular service manager
Extensible architecture for Kubernetes-like expansion
🧭 Future Improvements
🚀 Platform Engineering Enhancements
WebSocket-based real-time logs
Kubernetes-style scheduler simulation
Pod-level abstraction model
📊 Observability
Prometheus-style metrics simulator
Grafana-like dashboard
Real-time CPU/memory mock telemetry
⚙️ CI/CD Simulation
GitHub Actions pipeline integration
Build → Test → Deploy lifecycle mock
🧠 Event System
Message bus (Kafka-style simulation)
Async worker system
🧑‍💻 Tech Stack
Frontend: React, Vite
Backend: Node.js, Express
Orchestration Logic: Custom JS engine
Storage: JSON-based persistence
DevOps: Docker, Docker Compose
🎯 Project Goal

This project is designed to demonstrate:

Platform engineering thinking
DevOps system design understanding
Infrastructure simulation capability
Full-stack integration skills
Cloud architecture fundamentals (locally replicated)
🧠 Why This Matters

Instead of relying on external cloud services, this project shows how:

A simplified control plane can be built from first principles.

It is a zero-cost cloud simulation environment ideal for:

DevOps portfolios
System design interviews
Platform engineering demonstrations

📌 Author

Built as a local DevOps / platform engineering simulation project focused on cloud architecture principles and system design thinking.
