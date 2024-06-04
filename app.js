// HTML Elements
const underworkwid = document.getElementById("Under-work");
const msg = document.getElementById("msg");

// Event Listener
underworkwid.addEventListener("mouseenter", function(){
 msg.style.display = "block";
});
underworkwid.addEventListener("mouseleave", function(){
    msg.style.display = "none";
   });
const donewid1 = document.getElementById("Done-wid1");
const Donemsg1 = document.getElementById("Done-msg1");
donewid1.addEventListener("mouseenter", function(){
    Donemsg1.style.display = "block";
   });
   donewid1.addEventListener("mouseleave", function(){
    Donemsg1.style.display = "none";
      });
const donewid2 = document.getElementById("Done-wid2");
const Donemsg2 = document.getElementById("Done-msg2");
donewid2.addEventListener("mouseenter", function(){
    Donemsg2.style.display = "block";
   });
   donewid2.addEventListener("mouseleave", function(){
    Donemsg2.style.display = "none";
      });
