 // Scroll Animation
 const hidden = document.querySelectorAll(".hidden");

 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         entry.target.classList.toggle("show", entry.isIntersecting)
        //  if (entry.isIntersecting) observer.unobserve(entry.target)
     })
 },
 {
    threshold: 0.5,
 }
 );


 hidden.forEach(hide => {
     observer.observe(hide)

 })