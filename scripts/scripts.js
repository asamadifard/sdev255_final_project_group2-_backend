let courses = [];

// Render courses
function renderCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  courses.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${c.courseNumber} — ${c.courseName}</h3>
      <p>${c.description}</p>
      <p><strong>${c.subjectArea}</strong> • ${c.credits} credits</p>
      <button onclick="editCourse(${index})">Edit</button>
      <button onclick="deleteCourse(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

// Add course
document.getElementById("courseForm").addEventListener("submit", e => {
  e.preventDefault();
  const course = {
    courseNumber: document.getElementById("courseNumber").value,
    courseName: document.getElementById("courseName").value,
    subjectArea: document.getElementById("subjectArea").value,
    credits: document.getElementById("credits").value,
    description: document.getElementById("description").value
  };
  courses.push(course);
  renderCourses();
  e.target.reset();
});

// Edit course
function editCourse(index) {
  const course = courses[index];
  document.getElementById("courseNumber").value = course.courseNumber;
  document.getElementById("courseName").value = course.courseName;
  document.getElementById("subjectArea").value = course.subjectArea;
  document.getElementById("credits").value = course.credits;
  document.getElementById("description").value = course.description;

  // Remove old course and wait for re-submit
  courses.splice(index, 1);
  renderCourses();
}

// Delete course
function deleteCourse(index) {
  courses.splice(index, 1);
  renderCourses();
}

// Initial render
renderCourses();
