import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import QuestionQuote from './components/QuestionQuote';
import TheoryBase from './components/TheoryBase';
import PracticalExamples from './components/PracticalExamples';
import ComparisonTable from './components/ComparisonTable';
import Conclusion from './components/Conclusion';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-background text-white min-h-screen font-sans selection:bg-accentBlue/30">
      <Hero />
      <Introduction />
      <QuestionQuote />
      <TheoryBase />
      <PracticalExamples />
      <ComparisonTable />
      <Conclusion />
      <FinalMessage />
      <Footer />
    </main>
  );
}

export default App;
