let dateTime = document.getElementById('dateTime');
// Use AJAX to get the server time and update the dateTime element with the current time
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    dateTime.innerHTML = xhr.responseText;
  }
};
xhr.open('GET', '/getDateTime.php', true);
xhr.send();