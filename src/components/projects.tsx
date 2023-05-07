import { useState } from "react";

interface Project {
  identifier: string;
  link: string;
}

const projects: Project[] = [
  {
    identifier: 'Project #1',
    link: 'https://github.com/users/josecastromedi/projects/1'
  },
  {
    identifier: 'Project #2',
    link: 'https://github.com/users/josecastromedi/projects/2'
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    if (currentSlide === projects.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = (): void => {
    if (currentSlide === 0) {
      setCurrentSlide(projects.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section>
      <h3>Projects done on Github</h3>
      <div>
        <button onClick={prevSlide} style={{ backgroundColor: 'white', color: 'black', padding: '5px', border: 'none', borderRadius: '10px' }}>&lt;</button>
        <div>
          <h3>{projects[currentSlide].identifier}</h3>
          <a href={projects[currentSlide].link}>View more</a>
        </div>
        <button onClick={nextSlide} style={{ backgroundColor: 'white', color: 'black', padding: '5px', border: 'none', borderRadius: '10px' }}>&gt;</button>
      </div>
    </section>
  );
};

export default Carousel;
