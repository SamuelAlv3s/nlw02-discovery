document.querySelector('#add-time')
.addEventListener('click', cloneField);

function cloneField(){

   const newFieldontainer = document.querySelector('.schedule-item').cloneNode(true);

   const fields = newFieldontainer.querySelectorAll('input');

   fields.forEach((field) => {
        field.value = '';
   });

    document.querySelector('#schedule-items').appendChild(newFieldontainer);
}