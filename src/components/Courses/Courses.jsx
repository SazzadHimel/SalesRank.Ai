import React from 'react';
import './Courses.css';
import webDesignImg from '../../assets/image_2.png';
import advancedJsImg from '../../assets/image_3.png';

const Courses = () => {
  const courses = [
    {
      title: "Web Design Fundamentals",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      duration: "4 Weeks",
      level: "Beginner",
      instructor: "By John Smith",
      image: webDesignImg
    },
    {
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts including ES6+, async programming, design patterns, and performance optimization for modern web applications.",
      duration: "6 Weeks",
      level: "Intermediate",
      instructor: "By Sarah Johnson",
      image: advancedJsImg
    }
  ];

  return (
    <section className="courses-section container">
      <h2>Our Courses</h2>
      <div className="intro-container">
        <p className="courses-intro">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse nv elit fringilla feugiat senectus in.
        </p>
        <button className="view-all-btn">View all</button>
      </div>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-container">
              <img 
                src={course.image} 
                alt={course.title}
                className="course-image"
              />
            </div>
            <div className="course-content">
              <div className="course-meta">
                <div className="meta-left">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <span className="instructor">{course.instructor}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="get-course-btn">Get it Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;