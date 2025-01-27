import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "tailwindcss/tailwind.css";

const mockData = [
  { month: "Jan", income: 3000, expenses: 2000 },
  { month: "Feb", income: 3200, expenses: 2500 },
  { month: "Mar", income: 4000, expenses: 3000 },
  { month: "Apr", income: 2800, expenses: 2000 },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to FinTrack</h1>
      <p>Your personal finance manager at a glance.</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <Line type="monotone" dataKey="income" stroke="#4caf50" />
            <Line type="monotone" dataKey="expenses" stroke="#f44336" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <Card>
        <CardContent>
          <p>Your budget summary and insights will appear here.</p>
          <Button className="mt-4">Add Expense</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
