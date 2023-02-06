let contactForm = document.getElementById('contactForm');
contactForm.onsubmit = (e) => {
  e.preventDefault();
  let data = new FormData(contactForm);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
    }
  };
  xhr.open('POST', '/processContact.php', true);
  xhr.send(data);
  return false;
};
