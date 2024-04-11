document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let grossIncome = parseInt(document.getElementById("gross-income").value);
  let extraIncome = parseInt(document.getElementById("extra-income").value);
  let ageGroup = parseInt(document.getElementById("age-group").value);
  let totalDeduction = parseInt(
    document.getElementById("total-deduction").value
  );

  if (isNaN(grossIncome)) {
    document.querySelector(".gross-error").style.display = "block";
  } else {
    document.querySelector(".gross-error").style.display = "none";
  }

  if (isNaN(extraIncome)) {
    document.querySelector(".extra-error").style.display = "block";
  } else {
    document.querySelector(".extra-error").style.display = "none";
  }

  if (isNaN(ageGroup)) {
    document.querySelector(".age-error").style.display = "block";
  } else {
    document.querySelector(".age-error").style.display = "none";
  }

  if (isNaN(totalDeduction)) {
    document.querySelector(".deduction-error").style.display = "block";
  } else {
    document.querySelector(".deduction-error").style.display = "none";
  }

  if (
    !isNaN(grossIncome) &&
    !isNaN(extraIncome) &&
    !isNaN(ageGroup) &&
    !isNaN(totalDeduction)
  ) {
    let overallIncome = grossIncome + extraIncome - totalDeduction;

    if (overallIncome <= 800000) {
      document.querySelector(".overall-income").textContent = overallIncome;
    } else {
      if (ageGroup === 30) {
        document.querySelector(".overall-income").textContent =
          0.3 * (overallIncome - 800000);
      } else if (ageGroup === 40) {
        document.querySelector(".overall-income").textContent =
          0.4 * (overallIncome - 800000);
      } else {
        document.querySelector(".overall-income").textContent =
          0.1 * (overallIncome - 800000);
      }
    }

    document.querySelector(".overlay").style.display = "flex";
  }
});

const modalClose = () => {
  document.querySelector(".overlay").style.display = "none";
};
