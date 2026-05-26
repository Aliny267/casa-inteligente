import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-2 mt-auto ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Trabalho apresentado à disciplina de frameworks</p>
  </aside>
</footer>
  );
}

export default Footer;
