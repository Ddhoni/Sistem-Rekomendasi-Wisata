document.addEventListener("DOMContentLoaded", function () {
  // Bagian untuk mengatur tampilan Home dan About
  const homeContent = document.getElementById("homeContent");
  const aboutContent = document.getElementById("aboutContent");
  const navHome = document.getElementById("navHome");
  const navAbout = document.getElementById("navAbout");
  const themeSwitch = document.getElementById("themeSwitch");
  themeSwitch.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  navHome.addEventListener("click", function (e) {
    e.preventDefault();
    homeContent.style.display = "block";
    aboutContent.style.display = "none";
  });

  navAbout.addEventListener("click", function (e) {
    e.preventDefault();
    homeContent.style.display = "none";
    aboutContent.style.display = "block";
  });

  // Bagian untuk mengatur bobot dan inputan
  const locationSelect = document.getElementById("location");
  const weightMoney = document.getElementById("weightMoney");
  const weightTime = document.getElementById("weightTime");
  const weightRating = document.getElementById("weightRating");
  const moneyInput = document.getElementById("money");
  const moneyFormat = document.getElementById("moneyFormat");

  // Array daftar nama lokasi wisata
  const locations = [
    "Bukit Sibea-Bea",
    "Bukit Holbung Samosir",
    "Batu marhosa",
    "Efrata Waterfall",
    "Pemandian Air Panas Rianiate",
    "Pantai Batuhoda",
    // Tambahkan sisa lokasi ke dalam array ini
  ];

  // Menambahkan options baru ke dalam select
  locations.forEach(function (location) {
    let option = new Option(
      location,
      location.toLowerCase().replace(/ /g, "-")
    );
    locationSelect.add(option);
  });
  // Fungsi untuk memformat angka ke dalam format Rupiah
  function formatRupiah(angka) {
    let number_string = angka.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
    return `Rp ${rupiah}`;
  }

  moneyInput.addEventListener("input", function () {
    moneyFormat.textContent = formatRupiah(this.value);
  });

  // Fungsi untuk memperbarui nilai bobot dan menyesuaikan total bobot
  function updateSliderValues() {
    const moneyValue = document.getElementById("moneyValue");
    const timeValue = document.getElementById("timeValue");
    const ratingValue = document.getElementById("ratingValue");

    moneyValue.textContent = weightMoney.value;
    timeValue.textContent = weightTime.value;
    ratingValue.textContent = weightRating.value;
  }

  weightMoney.addEventListener("input", updateSliderValues);
  weightTime.addEventListener("input", updateSliderValues);
  weightRating.addEventListener("input", updateSliderValues);

  // Inisialisasi
  updateSliderValues();
  moneyInput.dispatchEvent(new Event("input"));
});
