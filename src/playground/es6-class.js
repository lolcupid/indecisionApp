class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` My major is ${this.major}.`;
      return description;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let location = super.getGreeting();
    if(this.homeLocation) {
      location += ` I'm from ${this.homeLocation}`;
      return location;
    }
    return location;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Yangon');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());