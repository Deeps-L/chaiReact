import { useState, useCallback, useEffect, useRef } from "react";

function PwdGen() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("");

  //   useRef hook

  const passwordRef = useRef(null);

  const pwdGenerator = useCallback(() => {
    let Password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (char) str += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";


    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Password += str.charAt(char);
    }

    setPassword(Password);
  }, [length, numAllow, char, setPassword]);


  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);


  useEffect(() => {
    pwdGenerator();
  }, [length, numAllow, char, pwdGenerator]);
  return (
    <div className="fixed inset-0 w-full max-w-md rounded-lg mx-auto shadow-md px-2 my-8 text-orange-500 bg-gray-700">
      <h1 className="mb-5">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          placeholder="password"
          className="outline-none px-3 py-2 w-full"
          readOnly
          ref={passwordRef}
        />

        <button
          className="outline-none bg-blue-700 text-white rounded-none pr-3 py-2 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id="numInp"
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="charInp"
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}
export default PwdGen;
