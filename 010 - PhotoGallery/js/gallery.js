const photo_detail = document.getElementById("photo-detail");
const close_button = document.querySelector('.close')

const imgs = document.querySelectorAll(".pic img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", (e) => {
    let pic_path = imgs[i].getAttribute("src");
    document
      .querySelector(".pic-detail img")
      .setAttribute("src", pic_path);
  photo_detail.style.display = 'flex';

  });
}

close_button.addEventListener('click', (e)=>{
  photo_detail.style.display = 'none';

})

