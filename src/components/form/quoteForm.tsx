import { StyledInput, StyledTextArea } from "./style";
import CustomButton from "../button/button";
import { StyledSelect } from "./style";

import { useState } from "react";
// Interface for tse form data
interface FormData {
  fullName: string;
  emailAddress: string;
  contactNumber: string;
  service: string;
  message: string;
}

function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    // types of all the input we need
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with formData
    alert("Your Form data has been saved!");
    setFormData({
      fullName: "",
      emailAddress: "",
      contactNumber: "",
      service: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] tl:w-[70%] mbl:w-[100%]">
        <form onSubmit={handleSubmit}>
          <StyledInput
            data-aos="fade-right"
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <StyledInput
            type="number"
            data-aos="fade-up"
            name="contactNumber"
            placeholder="Contact Number"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <StyledSelect
          placeholder='select a service'
            options={[
              { value: "audit", label: "Audit" },
              { value: "tax", label: "Tax" },
              { value: "Risk Advisory", label: "Risk Advisory" },
              { value: "Technology Consulting", label: "Technology Consulting"},
              { value: "Info System Audit", label: "Info System Audit"},
            ]}
          />
          <StyledTextArea
            data-aos="fade-up"
            name="message"
            placeholder="Message"
            required
            className="w-full text-[#111]"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <CustomButton
            data-aos="fade-up"
            color="#fff"
            className="px-[2rem] rounded-[4px] my-[18px]"
            type="submit"
          >
            Request a Quote
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
