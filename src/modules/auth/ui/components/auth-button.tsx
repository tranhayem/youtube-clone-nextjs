import { UserCircleIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export const AuthButton = () => {
  return (
    <Button
      variant="outline"
      className="h-9 px-4 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [_svg]:size-5"
    >
      <UserCircleIcon className="" />
      Sign in
    </Button>
  );
};
