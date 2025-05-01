import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ChatInterface from './components/ChatInterface/ChatInterface';
import Testimonial from './components/Testimonial/Testimonial';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
        <main>
          <Hero />
          <ChatInterface />
          <Courses />
          <FAQ />
          <Testimonial />
        </main>
      <Footer />
    </div>
  );
}

export default App;
