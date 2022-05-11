function openSection(clickId, classPos, showCloseBlock){
	const clickElem = document.getElementsByClassName(clickId);
	const blockId = document.getElementsByClassName(showCloseBlock);
	clickElem[classPos].onclick = function(){
		blockId[classPos].style.display = 'flex';
	}
}

function closeSection(clickId, classPos, showCloseBlock){
	const clickElem = document.getElementsByClassName(clickId);
	const blockId = document.getElementsByClassName(showCloseBlock);

	clickElem[classPos].onclick = function(){
		blockId[classPos].style.display = 'none';
	}
	
	blockId[classPos].onclick = function(e){
		if ( e.target.className != 'item-image' ) {
			blockId[classPos].style.display = 'none';
		};
	};
};

closeSection('item-close', 0, 'item-background');
closeSection('item-close', 1, 'item-background');
closeSection('item-close', 2, 'item-background');
closeSection('item-close', 3, 'item-background');

openSection('advantages-item', 0, 'item-background');
openSection('advantages-item', 1, 'item-background');
openSection('advantages-item', 2, 'item-background');
openSection('advantages-item', 3, 'item-background');