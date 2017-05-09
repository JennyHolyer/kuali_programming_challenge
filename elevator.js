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

    this.vacancy = function(){
        if(vacancy = 0){
            vacancy = true;
        } else {
            vacancy = false;
        }
    }
