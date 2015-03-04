/**
 * Created by ravi.hamsa on 04/03/15.
 */

//real time bidding implementation

var acceptBidding = function(){
    //do something important
}

var handleBiddingFailure = function(){
    //handle bidding problems;
}

var biddingDone = false;

$.ajax('call-bidding-server1', function server1Handler(resp){
    if(biddingDone){
        return;
    }
    if(resp.success){
        biddingDone = true;
        acceptBidding();
    }else {
        handleBiddingFailure();
    }
})

$.ajax('call-bidding-server2', function server2Handler(resp){
    if(biddingDone){
        return;
    }
    if(resp.success){
        biddingDone = true;
        acceptBidding();
    }else{
        handleBiddingFailure();
    }
})

$.ajax('call-bidding-server3', function server3Handler(resp){
    if(biddingDone){
        return;
    }
    if(resp.success){
        biddingDone = true;
        acceptBidding();
    }else{
        handleBiddingFailure();
    }
})

$.ajax('call-bidding-server4', function server4Handler(resp){
    if(biddingDone){
        return;
    }
    if(resp.success){
        biddingDone = true;
        acceptBidding();
    }else{
        handleBiddingFailure();
    }
})


//imaging how would you cancel the process in btw
