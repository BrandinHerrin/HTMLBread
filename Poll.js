let pollForm = document.getElementById('pollForm');

pollForm.onsubmit = (e) => {
  e.preventDefault();
  let data = new FormData(pollForm);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let results = JSON.parse(xhr.responseText);
    }
  };
  xhr.open('POST', '/processPoll.php', true);
  xhr.send(data);
  return false;
};