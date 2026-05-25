import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-2 ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Trabalho apresentado à disciplina de frameworks</p>
  </aside>
</footer>
  );
}

export default Footer;
