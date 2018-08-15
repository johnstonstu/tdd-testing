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

  let experience = {};
  let demographics = {};

  let len = 0;
  let i = 1;
  for (x = 0; x < data.length; x++) {
    if (data[x].project1 === "pass") {
      projects.project1.passed.number++;
      data[x].satisfaction;
    }
    if (data[x].project2 === "pass") projects.project2.passed.number++;
    if (data[x].project3 === "pass") projects.project3.passed.number++;
    if (data[x].project4 === "pass") projects.project4.passed.number++;
    if (data[x].project1 === "fail") projects.project1.failed.number++;
    if (data[x].project2 === "fail") projects.project2.failed.number++;
    if (data[x].project3 === "fail") projects.project3.failed.number++;
    if (data[x].project4 === "fail") projects.project4.failed.number++;
  }

  let processedData = {
    projects: projects,
    experience: experience,
    demographics: demographics
  };
  return processedData;
};
