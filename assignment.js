function kilometerToMeter(kilometer){
    if(kilometer < 0)
    {
        return "Length can't be negative!"; // warning message
    }
    else{
        var meter = (kilometer*1000); // 1 km = 1000 meter
        return meter;
    }
}

function budgetCalculator(watch, phone, laptop){
    // if the number of elements is negative, make it to 0. So that the cost doesn't affect.
    if(watch < 0){
        watch = 0;
    }
    if(phone < 0){
        phone = 0;
    }
    if(laptop < 0)
    {
        laptop = 0;
    }
    var watchCost  = (watch*50);
    var phoneCost  = (phone*100);
    var laptopCost = (laptop*500);
    var totalCost  = (watchCost+phoneCost+laptopCost);
    return totalCost;
}

function hotelCost(days){
    // if the number of days is negative, return the warning message.
    if(days < 0)
    {
        return "Day's can't be negative!"; //warning message
    }
    var totalCost = 0;
    if(days <= 10)
    {
        totalCost = (days*100);
    }
    else if(days <= 20){
        var firstCost  = (10*100)
        var secondCost = ((days-10)*80);
        totalCost      = (firstCost+secondCost); 
    }
    else{
        var firstCost  = (10*100)
        var secondCost = (10*80);
        var remCost    = ((days-20)*50);
        totalCost      = (firstCost+secondCost+remCost);
    }
    return totalCost;
}

function megaFriend(friendsList){
    if(friendsList.length == 0){
        return "You don't have any friend!"; //warning message
    }
    else{
        var ans = "";
        for(var i = 0;  i < friendsList.length; i++){
            var currFriend = friendsList[i];
            if(currFriend.length > ans.length){
                ans = currFriend; // friend who has the longest name
            }
        }
        return ans;
    }
}
