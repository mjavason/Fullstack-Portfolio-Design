function AdminFooterSection() {
  return (
    <footer className="px-36 pt-5 pb-5 text-primary min-h-[10vh] flex flex-col justify-end items-center gap-8">
      <p className="text-sm text-center w-[90vw] md:w-[100%]">
        Copyright ©{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}

export default AdminFooterSection;
