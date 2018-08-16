module.exports = data => {
  function averageArr(arr) {
    return (
      arr.reduce(function(a, b) {
        return a + b;
      }) / arr.length
    );
  }
  function satisfactionYears(years, data) {
    let rating = [];

    data.forEach(student => {
      if (student.yearsExperience === years) {
        rating.push(student.satisfaction);
      }
    });

    if (rating.length >= 1) {
      return { satisfaction: averageArr(rating) };
    }
    return {};
  }

  let passing = [];
  let failing = [];

  function passFail(num) {
    for (let i = 0; i < data.length; i++) {
      if (data[i][`project${num}`] === "pass") {
        passing.push(data[i].satisfaction);
      } else {
        failing.push(data[i].satisfaction);
      }
    }
    return {
      passed: { number: passing.length, satisfaction: averageArr(passing) },
      failed: { number: failing.length, satisfaction: averageArr(failing) }
    };
  }

  let demographics = { averageAge: 0, averageSatisfaction: 0 };

  let demoLen = 0;
  let i = 1;
  for (x = 0; x < data.length; x++) {
    demographics.averageAge += data[x].age;
    demographics.averageSatisfaction += data[x].satisfaction;
    demoLen++;
  }

  demographics.averageAge = demographics.averageAge / demoLen;
  demographics.averageSatisfaction = demographics.averageSatisfaction / demoLen;

  let experience = {
    1: satisfactionYears(1, data),
    2: satisfactionYears(2, data),
    3: satisfactionYears(3, data),
    4: satisfactionYears(4, data),
    5: satisfactionYears(5, data),
    6: satisfactionYears(6, data)
  };

  let projects = {
    project1: passFail(1),
    project2: passFail(2),
    project3: passFail(3),
    project4: passFail(4)
  };

  return {
    projects,
    experience,
    demographics
  };
};
