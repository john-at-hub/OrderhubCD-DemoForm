// src/AppWithState.tsx
import { useState } from "react";
import RootLayout from "./RootLayout";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  region: string;
  segment: string;
  clientName: string;
  orderSheet1: string;
  orderSheet2: string;
  notes: string;
};

export default function AppWithState() {
  const [submissions, setSubmissions] = useState([
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-1234",
      region: "North",
      segment: "Enterprise",
      clientName: "ACME Corp",
      orderSheet1: "acme-order-jan.pdf",
      orderSheet2: "acme-order-feb.pdf",
      notes: "Requested Q2 rollout."
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      email: "bob.smith@example.com",
      phone: "555-5678",
      region: "South",
      segment: "SMB",
      clientName: "Beta LLC",
      orderSheet1: "beta-orders.xlsx",
      orderSheet2: "beta-summary.docx",
      notes: "High priority client."
    },
    {
      firstName: "Carol",
      lastName: "Mendez",
      email: "carol.mendez@example.com",
      phone: "555-2468",
      region: "West",
      segment: "Mid-Market",
      clientName: "Gamma Partners",
      orderSheet1: "gamma-estimates.pdf",
      orderSheet2: "gamma-contract.docx",
      notes: "Needs renewal package."
    },
    {
      firstName: "David",
      lastName: "Nguyen",
      email: "david.nguyen@example.com",
      phone: "555-1357",
      region: "East",
      segment: "Enterprise",
      clientName: "Delta Inc.",
      orderSheet1: "delta-agreement.pdf",
      orderSheet2: "delta-addendum.pdf",
      notes: "Confirmed Q3 budget."
    },
    {
      firstName: "Eve",
      lastName: "Lee",
      email: "eve.lee@example.com",
      phone: "555-7890",
      region: "Central",
      segment: "SMB",
      clientName: "Epsilon Co.",
      orderSheet1: "epsilon-2024-orders.pdf",
      orderSheet2: "epsilon-forecast.xlsx",
      notes: "Waiting on legal review."
    }
  ]);

  const handleFormSubmit = (data: FormData) => {
    setSubmissions(prev => [...prev, data]);
  };

  return (
    <RootLayout
      submissions={submissions}
      onFormSubmit={handleFormSubmit}
    />
  );
}
