export default function About() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            To make government welfare schemes accessible, understandable, and claimable for every citizen of India.
          </p>
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none mt-12">
          <h2>The Problem We're Solving</h2>
          <p>
            India has hundreds of incredible welfare schemes designed to help citizens across various demographics—from students and farmers to entrepreneurs and senior citizens. However, millions of eligible people never claim these benefits simply because they don't know they exist, or they find the eligibility criteria and application processes too complex to navigate.
          </p>
          
          <h2>How Benefits Navigator Helps</h2>
          <p>
            We built this platform to bridge the gap between government initiatives and the people they are meant to serve. Our tool offers:
          </p>
          <ul>
            <li><strong>Smart Discovery:</strong> A simple wizard that matches your profile against a comprehensive database of schemes.</li>
            <li><strong>AI Assistance:</strong> An intelligent chatbot that can explain complex scheme details in plain language.</li>
            <li><strong>Clear Action Steps:</strong> Simplified checklists of required documents and step-by-step application guides.</li>
          </ul>

          <h2>Open Data & Transparency</h2>
          <p>
            We aggregate information from official government portals and present it in an easy-to-digest format. We are not affiliated with the government, but we act as a bridge to make public data more actionable.
          </p>
        </div>
      </div>
    </div>
  );
}
