(() => {
  // ../frontend/frontend/public/js/service_worker/sw.bundle.js
  if (navigator.serviceWorker) {
    console.log("Service workers supported");
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("https://demo.mtrh.go.ke/files/test.js").then((reg) => console.log("Service worker registered")).catch((err) => console.log(` Error occured ${err}`));
    });
  } else {
    console.log("SERVICE WORKER NOT SUPPORTED");
  }
})();
//# sourceMappingURL=sw.bundle.DCT26M25.js.map
