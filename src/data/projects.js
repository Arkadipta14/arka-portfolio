const projects = [
  {
    id: "p1",
    title: "Hybrid RAG Chatbot — Healthcare KB",
    short: "Vector + keyword hybrid retrieval with Qdrant + Neo4j linking clinical docs and tickets for faster support.",
    tech: ["Qdrant", "text-embedding-3-large", "Neo4j", "FastAPI"],
    link: "#"
  },
  {
    id: "p2",
    title: "Incident Triage Automation",
    short: "Automated ticket classification + root cause clustering that reduced manual triage by 45%.",
    tech: ["Python", "Scikit-learn", "S3", "Lambda"],
    link: "#"
  },
  {
    id: "p3",
    title: "Model Ops — Canary + Monitoring",
    short: "End-to-end model serving with canary rollout, drift detection and alerting for production LLMs.",
    tech: ["Docker", "Kubernetes", "Prometheus", "Grafana"],
    link: "#"
  }
];

export default projects;
