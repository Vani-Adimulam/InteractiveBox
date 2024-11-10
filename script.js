function toggleBox(boxNumber) {
    const box = document.getElementById(`box${boxNumber}`);
    const isExpanded = box.classList.contains('expanded');
  
    document.querySelectorAll('.box').forEach((otherBox) => {
      otherBox.classList.remove('expanded');
    });
  
    if (!isExpanded) {
      box.classList.add('expanded');
    }
  }
  