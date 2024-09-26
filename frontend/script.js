document.getElementById('submit-button').addEventListener('click', function() {
  console.log("Button clicked");

    const confessionText = document.getElementById('confession-text').value;
    if (!confessionText) {
        alert("null input");
        return;
    }

  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          text: confessionText
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('提交成功!');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('error')
  });
});

