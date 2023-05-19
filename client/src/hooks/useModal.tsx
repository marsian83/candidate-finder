import useGlobalContext from "../contexts/globalContext";

export default function useModal() {
  const { popup, setPopup } = useGlobalContext();

  function show(element: JSX.Element) {
    setPopup(element);
  }

  function hide() {
    setPopup(null);
  }

  function Element() {
    return (
      <>
        {popup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000033] z-[1005] flex justify-center items-center">
            {popup}
          </div>
        )}
      </>
    );
  }

  return { show, hide, Element };
}
