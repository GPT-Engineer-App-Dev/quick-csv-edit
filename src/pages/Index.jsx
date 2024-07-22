import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">Your Blank Canvas</h1>
        <p className="mt-2">Chat with the agent to start making edits.</p>
        <Button className="mt-4">Get Started</Button>
      </div>
    </div>
  );
};

export default Index;