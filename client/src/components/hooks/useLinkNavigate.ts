import { useNavigate } from "react-router-dom";

/**
 * Helper function to navigate to a route using react-router-dom's useNavigate hook
 * @param { string } route - The route to navigate to
 */
const useLinkNavigate = (route: string) => {
  const navigate = useNavigate();
  if(!route) return;

  return () => {
    navigate(route);
  }
}

export default useLinkNavigate;

