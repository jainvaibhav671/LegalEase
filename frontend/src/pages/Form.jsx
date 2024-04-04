import React, { useState } from "react";
import DocumentForm from "./DocumentForm";
import DocumentForm1 from "./Documentform1";
import DocumentForm2 from "./Documentform2";
import DocumentForm3 from "./Documentform3";
import DocumentForm4 from "./Documentform4";
import { Button } from "components";

export default function Form() {
  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    <DocumentForm />,
    <DocumentForm1 />,
    <DocumentForm2 />,
    <DocumentForm3 />,
    <DocumentForm4 />,
  ];

  return (
    <div className="flex flex-col">
      {forms[currentForm]}
      <div className="flex gap-4">
        <Button
          onClick={() => setCurrentForm(currentForm + 1)}
          className="tracking-[0.24px] min-w-[155px] border-2 border-black"
          style={{
            display: currentForm == 0 ? "none" : "block",
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => setCurrentForm(currentForm - 1)}
          className="tracking-[0.24px] min-w-[155px] border-2 border-black"
          style={{
            display: currentForm == forms.length - 1 ? "none" : "block",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
