document.addEventListener('DOMContentLoaded', () => {
    // By default hide paragraph 2 and image 2
    const innerParagraph2 = document.querySelector('.inner-paragraph2');
    const empImg2 = document.querySelector('.emp-img2');
  
    innerParagraph2.style.display = 'none';
    empImg2.style.display = 'none';
  
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');
    const innerParagraph1 = document.querySelector('.inner-paragraph1');
    const empImg1 = document.querySelector('.emp-img1');
  
    nextBtn.addEventListener('click', () => {
      // Hide Paragraph 1 and Image 1
      innerParagraph1.style.display = 'none';
      empImg1.style.display = 'none';
  
      // Show Paragraph 2 and Image 2
      innerParagraph2.style.display = 'block';
      empImg2.style.display = 'block';
  
      // Add sliding animation
      empImg2.style.transform = 'translateX(0)';
      empImg1.style.transform = 'translateX(-100%)';
    });
  
    prevBtn.addEventListener('click', () => {
      // Hide Paragraph 2 and Image 2
      innerParagraph2.style.display = 'none';
      empImg2.style.display = 'none';
  
      // Show Paragraph 1 and Image 1
      innerParagraph1.style.display = 'block';
      empImg1.style.display = 'block';
  
      // Add sliding animation
      empImg1.style.transform = 'translateX(0)';
      empImg2.style.transform = 'translateX(100%)';
    });
  });
  