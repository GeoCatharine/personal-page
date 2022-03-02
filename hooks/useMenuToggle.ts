import { useEffect, useState } from "react";

const useMenuToggle = () => {
  const [isActive, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.position = "fixed"
    } else if (!isActive) {
      document.body.style.position = "relative"
    }
  }, [isActive])

  return [ toggleMenu, isActive ] as const
}

export default useMenuToggle;