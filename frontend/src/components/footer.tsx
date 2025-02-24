function FooterSection() {
  return (
    <footer className="px-36 pt-10 pb-5 text-[#21243D] min-h-[45vh] flex flex-col justify-end items-center gap-8">
      <div className="flex gap-10 justify-center text-4xl md:text-5xl">
        <i className="cursor-pointer fab fa-facebook-square"></i>
        <i className="cursor-pointer fab fa-instagram"></i>
        <i className="cursor-pointer fab fa-twitter"></i>
        <i className="cursor-pointer fab fa-linkedin"></i>
      </div>
      <p className="text-sm md:text-lg text-center w-[90vw] md:w-[100%]">
        Copyright ©2025 All rights reserved
      </p>
    </footer>
  );
}

export default FooterSection;
