fetch("navbar.html")
  .then(res => {
    if (!res.ok) throw new Error("File not found");
    return res.text();
  })
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(err => console.error("Failed to load navbar:", err));