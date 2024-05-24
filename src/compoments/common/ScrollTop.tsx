
import { useCallback, useEffect, useState } from "react";
import UseSticky from "../../hooks/UseSticky";

const ScrollTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const [showScroll, setShowScroll] = useState(false);

  const memoizedCheckScrollTop = useCallback(
    () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    },
    [showScroll] // Only recreate if fetchPatientPrescription changes
  );

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", memoizedCheckScrollTop);
    return () => window.removeEventListener("scroll", memoizedCheckScrollTop);
  }, [memoizedCheckScrollTop]);

  return (
    <>
      {sticky &&
        <button id="scrollUp" onClick={scrollTop} style={{ position: "fixed", zIndex: "99999", border: "none" }}
          className={`${sticky ? "d-block" : ""}`}>
          <i className="fas fa-chevron-up"></i>
        </button>
      }
    </>
  );
};

export default ScrollTop;
