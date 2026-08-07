const bars = document.querySelectorAll(".progress-bar");

bars.forEach((bar) => {

    const value = bar.innerHTML;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.transition = "width 1.5s ease";

        bar.style.width = value;

    }, 300);

});