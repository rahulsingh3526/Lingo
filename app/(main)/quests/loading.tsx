import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-ful w-full flex justify-center items-center">
      <Loader className="h-6 w-67 text-muted-foreground animate-spin" />
    </div>
  );
};

export default Loading;
