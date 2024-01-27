import { MessageTick, CallReceived } from "iconsax-react";
import { heading, heading3, paragraph, paragraph1 } from "../../styles/text";
import QuoteForm from "../../components/form/quoteForm";

function ReqQuote() {
  return (
    <div className="w-full flex flex-col items-center my-[5rem]">
      <div className="w-[75%] flex ">
        <div className="w-[60%] flex flex-col ">
          <h1 className={`${heading3} my-2 text-primary mt-3 `}>REQUEST A QUOTE</h1>
          <h2 className={`${heading} my-2`}>
            Need A Free Quote? Please Feel Free to Contact Us{" "}
          </h2>
          <div className="flex  gap-6">
            <div className="flex items-center  my-2 gap-2">
              <MessageTick size="32" color="#FF8A65" variant="Bold" />
              <h3 className={`${paragraph1}`}>Reply within 24 hours</h3>
            </div>
            <div className="flex items-center my-2 gap-2">
              <CallReceived size="32" color="#FF8A65" variant="Bold" />
              <h3 className={`${paragraph1}`}>24 hrs telephone support</h3>
            </div>
          </div>
          <p className={`${paragraph} w-[80%] my-2`}>
            If we can be of assistance, please do not hesitate to contact us. If
            you require any further information, feel free to contact us.
          </p>
          <div className=" my-6 flex items-center gap-6">
            <div className="p-2 bg-[#FF8A65] rounded-[4px]">
              <CallReceived
                color="#FFF"
                className="w-[40px] h-[40px] p-2"
                variant="Bold"
              />
            </div>
            <div>
              <p className={`${heading3}`}>Call to ask question</p>
              <h2 className={`${heading3}  text-primary `}>+977-980xxxxxxx</h2>
            </div>
          </div>
        </div>
        <div className="w-[45%] bg-primary-p6 p-2 border">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

export default ReqQuote;
