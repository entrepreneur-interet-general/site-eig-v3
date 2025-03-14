const Isotope = require("isotope-layout");

export default class Grid {
  constructor() {
    this.resized = true;
    this.timeout = null;
    this.$filters = document.querySelectorAll(".js-filter");

    this.setupIsotope();
    this.setupToggle();
    this.applyQueryParams();
  }

  setupToggle() {
    document.querySelectorAll(".js-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.classList.contains("fr-mt-4v")) {
          button.classList.remove("fr-mt-4v");
          button.textContent = "Afficher plus";
        } else {
          button.classList.add("fr-mt-4v");
          button.textContent = "Afficher moins";
        }
      });
    });
  }

  setupIsotope() {
    const $isotope = document.querySelector(".js-grid");

    if (!$isotope) return;

    // window.addEventListener('resize', () => this.resized = true);
    this.setEqualHeight();

    this.isotope = new Isotope($isotope, {
      layoutMode: "fitRows",
      getSortData: {
        name: ".fr-card__link",
        promo: "[data-promo]",
      },
      sortAscending: {
        promo: false,
        name: true,
      },
      sortBy: ["promo", "name"],
    });

    // document.querySelector('.js-filter').addEventListener('change', (e) => {
    //   this.filter(e.target.value);
    //   this.filter();
    // });

    this.$filters.forEach((select) => {
      select.addEventListener("change", () => {
        this.filter();
      });
    });
  }

  // refresh() {
  //   console.log('refr');
  //   if(this.resized) {
  //     requestAnimationFrame(this.setEqualHeight);
  //   }
  //   clearTimeout(this.timeout);
  //   this.timeout = setTimeout(this.refresh, 100);
  //   this.resized = false;
  // }

  setEqualHeight() {
    const cards = document.querySelectorAll(".js-grid .fr-card");
    var elems = [].slice.call(cards);

    var tallest = Math.max.apply(
      Math,
      elems.map(function (elem, index) {
        elem.style.minHeight = ""; // clean first
        return elem.offsetHeight;
      })
    );

    elems.forEach(function (elem, index, arr) {
      elem.style.minHeight = tallest + "px";
    });
  }

  updateQueryString(param, value) {
    const paramNameUrlEquivalence = {
      promos: "promo",
      expertises: "expertise",
    };
    const url = new URL(window.location);
    if (value && value !== "*") {
      url.searchParams.set(
        paramNameUrlEquivalence[param],
        value.replace("promotion-", "")
      );
    } else {
      url.searchParams.delete(paramNameUrlEquivalence[param]);
    }
    window.history.replaceState({}, "", url);
  }

  applyQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const promoValue = urlParams.get("promo"); // here there is no "s" at the end
    const expertisesValue = urlParams.get("expertise");
    const filters = [];
    const filtersAsArray = Array.from(this.$filters);

    if (promoValue) {
      const promoSelect = filtersAsArray.find(
        (select) => select.id === "promos"
      );
      if (promoSelect) {
        const promoRealValue = `promotion-${promoValue}`;
        promoSelect.value = promoRealValue;
        filters.push("." + promoRealValue);
      }
    }
    if (expertisesValue) {
      const expertiseSelect = filtersAsArray.find(
        (select) => select.id === "expertises"
      );
      if (expertiseSelect) {
        expertiseSelect.value = expertisesValue;
        filters.push("." + expertisesValue);
      }
    }
    this.isotope.arrange({
      filter: filters.length > 0 ? filters.join("") : "*",
    });
  }

  filter() {
    const filters = [];
    this.$filters.forEach((select) => {
      this.updateQueryString(select.id, select.value);
      if (select.value !== "*") {
        filters.push("." + select.value);
      }
    });

    this.isotope.arrange({
      filter: filters.length > 0 ? filters.join("") : "*",
    });
  }
}

new Grid();
