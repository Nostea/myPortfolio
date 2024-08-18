const Pill = ({ text }) => {
  return (
    <p className="my-1 w-fit rounded-full bg-green-100 px-4 py-1 text-sm text-green-600 antialiased max-mobile:text-sm max-mobile:font-light">
      {text}
    </p>
  );
};

export default Pill;
