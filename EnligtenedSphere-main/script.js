
const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.menuBtn');

function toggleSidebar(){
    sidebar.style.display = 'flex';
}

sidebarButton.addEventListener('touchstart', function (event) {
    event.preventDefault;
    toggleSidebar();
});

function hideMobileMenu(){
    sidebar.style.display = 'none';
}
const closeSidebar = document.querySelector('.hideMenu');
closeSidebar.addEventListener('touchstart', function (event){
   event.preventDefault;
   hideMobileMenu();
})


function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tica.ante19@gmail.com",
        Password : "6B48D1F22197EC2BD794E51B4F3CD3C18E18",
        To : 'tica.ante003@gmail.com',
        From : document.querySelector('.subInput').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
 

function searchArticles() {
    const searchInput = document.querySelector('.searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.contUl .item');

    articles.forEach(article => {
        const title = article.querySelector('.headline').textContent.toLowerCase();

        if (title.includes(searchInput)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
    console.log('search opaljen');
    hideDropdown();
}

 document.querySelector('.searchInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        searchArticles();
    }
});


 
function toggleDropdown() {
    
    const dropDown = document.querySelector('.dropDown');
    if (dropDown.style.display === 'flex') {
      dropDown.style.display = 'none';
    } else {
      dropDown.style.display = 'flex'; 
    }
  }
  

  document.querySelector('.sortBtn').addEventListener('click', toggleDropdown);
  
  const dropDown = document.querySelector('.dropDown');
  function hideDropdown() {
    dropDown.style.display = 'none';
  }


 const blogList = document.querySelector('.contUl');
     
      const newestButton = document.querySelector('.fromOld');
      const oldestButton = document.querySelector('.fromNew');

      newestButton.addEventListener('click', () => {
          sortBlogCards(true);
      });

      oldestButton.addEventListener('click', () => {
          sortBlogCards(false);
      });


      function sortBlogCards(newestFirst) {

          const cards = Array.from(blogList.querySelectorAll('.item'));

          cards.sort((cardA, cardB) => {
              const dateA = getDateValue(cardA.querySelector('.date').textContent);
              const dateB = getDateValue(cardB.querySelector('.date').textContent);
              if (newestFirst) {
                  return dateB - dateA;
              } else {
                  return dateA - dateB;
              }
          });

          cards.forEach(card => {
              blogList.appendChild(card);
          });
      }

      function getDateValue(dateString) {
          const [day, month, year] = dateString.split('/');
          return new Date(`${year}-${month}-${day}`);
      }
 