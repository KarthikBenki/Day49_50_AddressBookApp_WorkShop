let contactObject = {}
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#name').value.split(" ");
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Contact()).firstName = names[0];
            (new Contact()).lastName = names[1];
            nameError.textContent = '';
        } catch (e) {
            nameError.textContent = e;
        }
    });

    // const addressElement = document.querySelector('#address');
    // const addressError = document.querySelector('#address-error');
    // addressElement.addEventListener('input', function () {
    //     let address = document.querySelector('#address').value;
    //     if (addressElement.value.length == 0) {
    //         addressError.textContent = '';
    //         return;
    //     }
    //     try {
    //         (new Contact()).address = address;
    //         addressError.textContent = '';
    //         return;
    //     } catch (e) {
    //         addressError.textContent = e;
    //     }
    // });


    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function () {
        let phone = document.querySelector('#phone').value;

        try {
            (new Contact()).phone = phone;
            phoneError.textContent = '';
        } catch (e) {
            phoneError.textContent = e;
        }
    });

   

    // const emailElement = document.querySelector('#email');
    // const emailError = document.querySelector('.email-error');
    // emailElement.addEventListener('input', function () {
    //     let email = document.querySelector('#email').value;
    //     try {
    //         (new Contact()).email = email;
    //         emailError.textContent = "";
    //     } catch (e) {
    //         emailError.textContent = e;
    //     }

    // });
})

const save = (event)=>{
//     event.preventDefault();
//   event.stopPropagation();
  try{
    setContactObject();
    createAddressBook();
  }catch(e){
    console.log(e);
    return;
  }
}

const setContactObject = () => {
    let names = getInputValueById('#name').split(" ");
    contactObject._firstName = names[0];
    contactObject._lastName = names[1];
    contactObject._address = getInputValueById('#address');
    contactObject._city = getInputValueById('#city');
    contactObject._state = getInputValueById('#state');
    contactObject._zip = getInputValueById('#zip');
    contactObject._phone = getInputValueById('#phone');
    contactObject._email = getInputValueById('#email');
    // alert(JSON.stringify(contactObject))
  }

  const createAddressBook = () =>{
      let addressbook = new Contact();
      let names = getInputValueById('#name').split(" ");
    addressbook._firstName = names[0];
    addressbook._lastName = names[1];
    addressbook._address = getInputValueById('#address');
    addressbook._city = getInputValueById('#city');
    addressbook._state = getInputValueById('#state');
    addressbook._zip = getInputValueById('#zip');
    addressbook._phone = getInputValueById('#phone');
    addressbook._email = getInputValueById('#email');
    alert(addressbook)

  }

  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }