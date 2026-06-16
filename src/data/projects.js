const projects = [
  {
    id: "p1",
    title: "RAG Chatbot — Technology Services",
    short: "Developed a knowledge retrieval system for a global pharmaceutical leader by integrating data from Confluence,Bitbucket, and ticketing systems, enabling instant Q&A and summarisation that reduced information lookup time by over 65%.",
    tech: [, "Langchain","Langfuse","Qdrant","MLFlow","FastAPI","AWS","PostgreSQL"],
    details: [
      "Reduced information lookup time by 65%",
      "Processed over 300,000 documents for knowledge base",
      "Implemented real-time analytics and monitoring",
      "Achieved 97% user satisfaction rate",
      "Reduced information extraction time by 40+ hours weekly."
    ],
    link: "#"
  },
  {
  id: "p2",
  title: "Demand IQ",
  short: "Built an end-to-end demand forecasting platform for medical products, leveraging scalable ETL pipelines, time-series forecasting, and anomaly detection to optimise inventory planning, reduce stockouts, and improve supply chain decision-making.",
  tech: ["Python","SQL","Apache Spark","ETL Pipelines","Prophet","AWS","Azure"],
  details: [
    "Improved inventory planning efficiency by 40% and reduced stockout incidents by 30%",
    "Engineered bronze → silver → gold ETL pipelines, reducing data processing time by 45% and improving data quality by 35%",
    "Developed Prophet-based time-series forecasting models, increasing demand prediction accuracy by 50%",
    "Built anomaly detection systems for stockpiling and drug diversion, reducing suspicious transactions by 25% and improving fraud detection efficiency by 40%",
    "Performed exploratory data analysis to identify demand and regional trends, enabling 20% faster business decision-making"
  ],
  link: "#"
  },
  {
    id: "p3",
    title: "Knowledge IQ",
    short: "Built a document and web content ingestion system with vectorisation for efficient Q&A and summarisation,enabling faster and more accurate information retrieval with source traceability.",
    tech: ["Python", "Flask", "Langchain","Azure","FAISS","Computer Vision"],
    details: [
      "Handled over 50,000 documents",
      "Achieved 95% accuracy in information retrieval",
      "Implemented source traceability for all responses",
      "Reduced response time by 50%"
    ],
    link: "#"
  }
];

export default projects;