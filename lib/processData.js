module.exports = data => {
  let projects = {
    project1: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project2: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project3: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project4: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    }
  };

  let experience = { satisfaction: 0 };
  let demographics = { averageAge: 0, averageSatisfaction: 0 };

  let demoLen = 0;
  let i = 1;
  for (x = 0; x < data.length; x++) {
    demographics.averageAge += data[x].age;
    demographics.averageSatisfaction += data[x].satisfaction;
    demoLen++;
  }

  //   let passedP1 = data.filter(student => student.project1 === "pass");

  let exp = data.filter(student => student.yearsExperience === 3);

  let expLen = 0;
  for (i = 0; i < exp.length; i++) {
    experience.satisfaction += exp[i].satisfaction;
    expLen++;
  }

  experience.satisfaction = experience.satisfaction / expLen;

  demographics.averageAge = demographics.averageAge / demoLen;
  demographics.averageSatisfaction = demographics.averageSatisfaction / demoLen;

  let processedData = {
    projects: projects,
    experience: experience,
    demographics: demographics
  };

  return processedData;
};
