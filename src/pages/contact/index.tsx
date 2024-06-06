import ContactForm from "../../components/form/contactForm"

function Contact() {
  return (
    <div>
      <div className="">
        {/* <img src={mainImg} className="h-[430px] w-full" alt="mainImage" /> */}
        <h1 className="subtitle-text text-center mt-10">
          Contact us
        </h1>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
