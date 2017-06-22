//list of items stored in record shop

//date syntax: Date(<year>, <month>, <day>, <hours>, <minutes>, <seconds>, <milliseconds>)
//date syntax: <month> goes from 0 to 11
var disks = [
    {
		ID: 1,
        price: 11,
        quantity: 20,
		genre: "classic",
		date: new Date(2000, 0, 1, 0, 0, 0, 0) // Start of 2000
	},
    {
		ID: 2,
        price: 210,
        quantity: 1,
		genre: "classic",
		date: new Date(2015, 6, 15, 0, 0, 0, 0)
	},
    {
		ID: 3,
        price: 13,
        quantity: 50,
		genre: "rap",
		date: new Date(2012, 11, 22, 0, 0, 0, 0)
	},
    {
		ID: 4,
        price: 10,
        quantity: 4,
		genre: "cross over",
		date: new Date(2017, 3, 21, 0, 0, 0, 0)
	},
    {
		ID: 5,
        price: 15,
        quantity: 14,
		genre: "lounge",
		date: new Date(2007, 8, 30, 0, 0, 0, 0)
	},
];


/** 
 * @brief getter of disks
 * @return the disks
 */
var getDisks = function getDisks(){
    return disks;
}


/** 
 * @brief it searches one elements in disks
 * @param diskID
 * @return the element searched, null otherwise
 */
var searchDisk = function searchDisk(diskID)
{
    //search for the elements
    var position = searchPos(diskID);
    
    if (position == null)
        return position
    else
        return disks[position];
}

/** 
 * @brief it searches one elements in disks
 * @param diskID
 * @return the position of the element searched, null otherwise
 */
var searchPos = function searchPos(diskID)
{
    //search for the elements
    for (i=0; i < disks.length; i++)
	{
		if (disks[i].ID == diskID)
		{
			return i;
		}
    }
    
    //if this point is reached the element is not found
    return null;
}

/**
 * @brief This function increase the quantity of an element, given its ID. The maximum capacity is 100. 
 * @param itemID
 * @return the item if it is remastered, null if the item does not exist or the new capacity is highier than 100
 */
var remaster = function remaster(item)
{
    //search for the element
    var position = searchPos(item.ID);
    
    if (position!=null && (disks[position].quantity+item.quantity)<=100)
        {
            disks[position].quantity=disks[position].quantity+item.quantity;
            disks[position].date= new Date();
            return disks[position];
        }
    else
        return null;
}

//MY CODE
/**
 * @brief This function sell the disk, decresing the quantity by 1, given its ID. Apply a discount up to 50% based on days passed
 * @param itemID
 * @return the item if it is sols, null if the item does not exist 
 */
var sellDisk = function sellDisk(item)
{
    //search for the element
    var position = searchPos(item.ID);
    var giorni;
    var discount;
    if (position!=null)
        {
            disks[position].quantity=disks[position].quantity-1;
            var x = new Date();
            var y = disk[position].date;
            giorni = (x-y)/(24*3600*1000);
            discount = (0.01*giorni);
            if (discount<=50){
                disk[position].price=disk[position].price-(disk[position].price*discount/100);
            }else{
                discount=50;
                disk[position].price=disk[position].price-(disk[position].price*discount/100);
            }
            return disks[position];
        }
    else
        return null;
}

/** 
 * @brief it searches disks with same genre
 * @param diskGenre
 * @return the elements searched, null otherwise
 */
var searchSimilarDisk = function searchSimilarDisk(diskGenre)
{
    //search for the elements
    for (i=0; i < disks.length; i++)
    {
        if (disks[i].genre == diskGenre)
        {
            return disk[i];
        }
    }
    
    //if this point is reached the element is not found
    return null;
}

//export functions
exports.getDisks = getDisks; 
exports.searchDisk = searchDisk; 
exports.remaster = remaster; 
exports.sellDisk = sellDisk;
exports.searchSimilarDisk = searchSimilarDisk;