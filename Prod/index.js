document.addEventListener("DOMContentLoaded", async function () {
  const counterElements = document.querySelectorAll(".counter-number");

  async function updateCounter() {
    try {
      let response = await fetch("https://thzhxuveyq6u3ghd54nryw3m4m0ltihi.lambda-url.us-east-1.on.aws/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      
      // Loop through all elements with the class "counter-number" and update their content
      counterElements.forEach((counter) => {
        counter.innerHTML = ` This page has ${data} Views!`;
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  updateCounter();
});
