// Elevator constructor
function ElevatorConstructor(maxFloor, minFloor, elevName, currentFloor, destination, departureFloor){

    // this.vacancy = vacancy; true/false
    // this.doorStatus = doorStatus; open/close
    // this.direction = direction; up/down
    this.elevName = elevName; //A,B,C will be provided be user
    this.currentFloor = currentFloor; //1,2,3 will be provided be user
    this.destination = destination; //floor # will be provided be user
    this.departureFloor = departureFloor; //requesters location/floor will be provided be user
    this.minFloor = minFloor || 1; //if not specify set val = 1
    this.maxFloor = maxFloor || 3; //if not specify set val = 3

    this.occupied = function(){
        if(occupied = 0){
            occupied = true;
        } else {
            occupied = false;
        }
    }
    this.direction = function(currentFloor, destination){
            if (currentFloor - destination > 0) {
                direction = 0; //up (3-2 = 1)
            }else {
                direction = 1; //down (1-3 = -2)
            }
        }

    // 4. An elevator cannot proceed above the top floor.
    // 5. An elevator cannot proceed below the ground floor (assume 1 as the min)
    this.destination = function(minFloor, maxFloor){
        destination = destination > minFloor && destination < maxFloor;
    }
    // Each elevator will report as is moves from floor to floor.
    this.movement = function(departureFloor, destination ){
        var distance = destination - departureFloor;

        if (distance > 0){
            console.log(currentFloor, "I moved from floor to floor");
        }
    } //end of movement method

} //end of constructor


function needMaintainance(){
    // use 'for loop' and keep count of each trip.
    // with trips = 100, push it to an occupied[]
}

function occupied(){

}
