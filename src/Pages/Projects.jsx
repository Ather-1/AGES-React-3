import HeroImg from '../assets/Banners/ProjectsBanner.jpg';

import Hero from '../Components/Standards/PageHero.jsx';
import ProjectFilter from '../Components/PageSection/ProjectPage/ProjectFilter.jsx';





const Project = () => {
  return (
    <section>
		<Hero Image={HeroImg} 
            Label={'Our Portfolio'}
            Heading={<>Featured <span className='text-txt1'>Projects</span></>}
            Text={<> We take pride in executing landmark developments with precision and quality. Browse our completed and ongoing works across residential, commercial, and public infrastructure sectors.</>}
		/>


		<ProjectFilter />



	</section>
  )
}

export default Project