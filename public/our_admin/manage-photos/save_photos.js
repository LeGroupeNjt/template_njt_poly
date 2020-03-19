function update_order_image()
{
	var orderString = "";
	var objects = document.getElementsByTagName('div');
	
	for(var i=0; i<objects.length;i++)
	{
		if(objects[i].className=='arrange')
		{
			if(orderString.length>0)
			{
				orderString = orderString + ',';
			}
			orderString = orderString + objects[i].id;
	
		}			
	}
	//document.getElementById('debug').innerHTML = 'This is the new order of the images(IDs) : <br>' + orderString;
	document.getElementById('imgindex').value = orderString;	
}