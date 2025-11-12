import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


function InteractiveHoverButtonDemo({text}: {text: string}) {
  return (
    <div className="relative justify-center">
      <InteractiveHoverButton text={text} />
    </div>
  );
}

export default InteractiveHoverButtonDemo;