
//const container=document.querySelector('#container');
//const red=document.createElement('div');
//red.innerHTML= '<h1>Red</h1>';
//red.style.backgroundColor='red';
//const blue=document.createElement('div');
//blue.style.backgroundColor='blue';
//blue.innerHTML='<h2>Blue</h2>';
//container.appendChild(red);
//container.appendChild(blue);
//red.classList.add('red');
//const green=document.createElement('div');
//green.innerHTML=`<h3>Green</h3>`;
//container.insertBefore(green,blue);
//green.style.backgroundColor='green';
//const blueBtn=document.createElement('button');
//blue.appendChild(blueBtn);
//blueBtn.innerHTML='Click Me!';
//blueBtn.addEventListener('click', ()=>{
//    blue.classList.toggle('blue');
//})
//const gridContainer=document.getElementById( 'grid-container' );

 function generateGrid(){
  const rows=parseInt(document.getElementById( "rows" ).value ) ;
  const columns=parseInt(document.getElementById("columns").value);
  const gridContainer=document.getElementById('grid-container');
  function getColor(row, col) {
    return (row + col) % 2 === 0 ? 'white' : 'black';
  }
  
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row'); 
  
    for (let j = 0; j < columns; j++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');
      grid.style.backgroundColor = getColor(i, j);
      row.appendChild(grid);
    }
  
    gridContainer.appendChild(row);
  }
}