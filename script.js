fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    // Get the array of paper titles
    const paperTitles = data.books.map(paper => paper.title);
    
    // Display the second and third titles in the HTML page

    const firstTitleDiv = document.getElementById('first-title');
    firstTitleDiv.innerText = paperTitles[0];

    const secondTitleDiv = document.getElementById('second-title');
    secondTitleDiv.innerText = paperTitles[1];
    
    const thirdTitleDiv = document.getElementById('third-title');
    thirdTitleDiv.innerText = paperTitles[2];

    const secTitleDiv = document.getElementById('three-title');
    secTitleDiv.innerText = paperTitles[3];

    const secoTitleDiv = document.getElementById('four-title');
    secoTitleDiv.innerText = paperTitles[4];

    


    const titleList = document.getElementById('paper-titles');
    const ul = document.createElement('ul');
    titleList.appendChild(ul);

    paperTitles.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      ul.appendChild(li);
    });



  });


  
