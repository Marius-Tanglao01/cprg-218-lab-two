function showImage(imageId) {
  document.querySelectorAll(".image").forEach((img) => {
    img.style.display = "none";
  });

  const imageElement = document.getElementById(imageId);
  if (imageElement) {
    imageElement.style.display = "block";
  } else {
    console.error(`Element with ID ${imageId} not found.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showImage("sheep");
});
