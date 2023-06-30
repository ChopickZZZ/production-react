import { AppButton } from "shared/ui/AppButton/AppButton";
import { useEffect, useState } from "react";

// Test component
export const BugButton = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <AppButton onClick={throwError}>Throw erorr</AppButton>;
};
