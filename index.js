// Author: Jeetpal Singh, Email: singhjeetpal001@gmail.com 
// This is a template, which can be used to make a good portfolio website by adding additional functionalities

console.log("Script Running...");

// To make our cross symbol go when the sidebar dissappears

document.querySelector(".cross").style.display = "none";
document.querySelector(".icons").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    // If sidebar is hidden then turn the hamburger icon to cross icon
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";

    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});
