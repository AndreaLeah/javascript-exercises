const findTheOldest = function(people) {
    let oldest = 0;
    let name = 'Placeholder';
    for (let i = 0; i < people.length; i ++) {
        let ageInYears = people[i].yearOfDeath - people[i].yearOfBirth;
        let personName = people[i];
         if (isNaN(ageInYears) == true) {
           ageInYears = 2022-people[i].yearOfBirth;
         }
         if (oldest == 0) {
            oldest = ageInYears;
            name = personName;
         }
        else {
            if (ageInYears > oldest) {
                oldest = ageInYears;
                name = personName;
            }
            else {
                continue
            }}}
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
