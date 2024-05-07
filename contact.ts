interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
  interface Contact {
    name: string;
    email: string;
    phone: string;
    message: string;
    address: Address;
  }
  
  function submitContactForm(event: Event) {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    const street = (document.getElementById('street') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;
    const zipCode = (document.getElementById('zipCode') as HTMLInputElement).value;
  
    const contact: Contact = {
      name,
      email,
      phone,
      message,
      address: {
        street,
        city,
        state,
        zipCode
      }
    };
  
    submitToServer(contact);
  }
  
  function submitToServer(contact: Contact) {
    console.log("Submitting contact form:", contact);
 }
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitContactForm);
  }
  