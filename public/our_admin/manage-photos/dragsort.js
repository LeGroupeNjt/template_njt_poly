/* Copyright (c) 2005 Tim Taylor Consulting (see LICENSE.txt) */

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

ToolMan._dragsortFactory = {
	makeSortable : function(item) {
		var group = ToolMan.drag().createSimpleGroup(item)

		group.register('dragstart', this._onDragStart)
		group.register('dragmove', this._onDragMove)
		group.register('dragend', this._onDragEnd)

		return group
	},

	/** 
	 * Iterates over a list's items, making them sortable, applying
	 * optional functions to each item.
	 *
	 * example: makeListSortable(myList, myFunc1, myFunc2, ... , myFuncN)
	 */
	makeListSortable : function(list) {
		var helpers = ToolMan.helpers()
		var coordinates = ToolMan.coordinates()
		var items = list.getElementsByTagName("li")

		helpers.map(items, function(item) {
			var dragGroup = dragsort.makeSortable(item)
			dragGroup.setThreshold(4)
			var min, max
			dragGroup.addTransform(function(coordinate, dragEvent) {
				return coordinate.constrainTo(min, max)
			})
			dragGroup.register('dragstart', function() {
				var items = list.getElementsByTagName("li")
				min = max = coordinates.topLeftOffset(items[0])
				for (var i = 1, n = items.length; i < n; i++) {
					var offset = coordinates.topLeftOffset(items[i])
					min = min.min(offset)
					max = max.max(offset)
				}
			})
		})
		for (var i = 1, n = arguments.length; i < n; i++)
			helpers.map(items, arguments[i])
	},

	_onDragStart : function(dragEvent) {
		//var name = $('element_'+dragEvent.group.element.id);
		//alert(name.className);
		//if (name.className == "element") name.className == "element_on";
	},

	_onDragMove : function(dragEvent) {
		var helpers = ToolMan.helpers()
		var coordinates = ToolMan.coordinates()

		var item = dragEvent.group.element
		var xmouse = dragEvent.transformedMouseOffset
		var moveTo = null

		var previous = helpers.previousItem(item, item.nodeName)
		while (previous != null) {
			var bottomRight = coordinates.bottomRightOffset(previous)
			if (xmouse.y <= bottomRight.y && xmouse.x <= bottomRight.x) {
				moveTo = previous
			}
			previous = helpers.previousItem(previous, item.nodeName)
		}
		if (moveTo != null) {
			helpers.moveBefore(item, moveTo)
			return
		}

		var next = helpers.nextItem(item, item.nodeName)
		while (next != null) {
			var topLeft = coordinates.topLeftOffset(next)
			if (topLeft.y <= xmouse.y && topLeft.x <= xmouse.x) {
				moveTo = next
			}
			next = helpers.nextItem(next, item.nodeName)
		}
		if (moveTo != null) {
			helpers.moveBefore(item, helpers.nextItem(moveTo, item.nodeName))
			return
		}
	},

	_onDragEnd : function(dragEvent) {
		ToolMan.coordinates().create(0, 0).reposition(dragEvent.group.element);
		//alert('element_'+dragEvent.group.element.id)$('element_' + id);
		//var name = $('element_'+dragEvent.group.element.id);
		//alert(name.className);
		//if (name.className == "element_on") name.className == "element_blank";
		update_order_image();
		
	}
}
