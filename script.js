const text = document.querySelector('.sometext');
const firstName = document.getElementById('name');
const imgSara = document.getElementById('imgSara');
const imgJason = document.getElementById('imgJason');
const imgMike = document.getElementById('imgMike');
document.getElementById('imgSara').addEventListener('click', function () {
  text.textContent =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock';
  firstName.textContent = 'Sara W.';
});
imgJason.addEventListener('click', function () {
  text.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?';
  firstName.textContent = 'Jason';
});
imgMike.addEventListener('click', function () {
  text.textContent =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  firstName.textContent = 'Mike';
});
