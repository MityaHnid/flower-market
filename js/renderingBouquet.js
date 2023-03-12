 
function renderingBouquet() {
   const BOUQUETSMALL = document.querySelectorAll('.smallBouquet div');
 const PAGINATIONBOUQUET = document.querySelectorAll('.wrapperPaginationBouquet div');
 const BOUQUETBIG = document.querySelectorAll('.bigBouquet div');

 BOUQUETSMALL.forEach((item, index) =>{
    item.addEventListener('click', () =>{

        const addActive = function (nodeList){
            nodeList.forEach((i) =>{
                i.classList.remove('active');
            });
            nodeList[index].classList.add('active');
        }

        addActive(PAGINATIONBOUQUET);
        addActive(BOUQUETBIG);
    });
 })  
}

export default renderingBouquet();




	