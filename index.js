
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver{
    constructor(name,startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf (endYear){
        return endYear - this.startDate.getFullYear() - 1;
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    if(this.beginningLocation.horizontal === this.endingLocation.horizontal){
        return verticalDistance;
    }else if (this.beginningLocation.vertical === this.endingLocation.vertical){
        return horizontalDistance;
    }else{
        return verticalDistance + horizontalDistance;
    }
  }

  estimatedTime(peak){
    if(peak){
        return this.blocksTravelled()/2
    } else {
        return this.blocksTravelled()/3
    }
  }
}