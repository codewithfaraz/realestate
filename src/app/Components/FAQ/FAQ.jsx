export default function FAQ(props) {
  return (
    <section id="faq">
      <div className="flex-flex-col w-1/ bg-black p-5 space-y-5">
        <h1 className="text-white text-xl">{props.question}</h1>
        <p className=" text-sm text-gray60">{props.answer}</p>
        <a href="" className="text-white bg-dark p-3 inline-block rounded-md">
          Learn more
        </a>
      </div>
    </section>
  );
}
