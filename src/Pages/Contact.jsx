import Hero from '../Components/Standards/PageHero.jsx';
import FirmFrame from '../Components/Standards/FirmFrame.jsx';
import Location from '../Components/PageSection/ContactPage/Location.jsx';
import Form from '../Components/PageSection/ContactPage/Form.jsx';
import BeforeFooter from '../Components/Standards/BeforeFooter.jsx';
import {firmFrameData} from '../SiteData/SiteData.js';
import HeroImg  from '../assets/Banners/ContactBanner.jpg';

const Contact = () => {
  return (
    <section>
      <Hero Image={HeroImg} 
            Label={'Get In Touch'}
            Heading={<>Contact <span className='text-txt1'>Us</span></>}
            Text={<> We are always here to help you with our civil engineering services.
             Feel free to reach out for inquiries, project discussions or any assistance.</>} />
              
              
              <div className='LRP grid md:grid-cols-[1.2fr_2fr] gap-4'>



                <div className='flex flex-col items-start gap-2'>
                  {firmFrameData.map((item) => (
                    <FirmFrame key={item.id} ICON={item.icon} Heading={item.title} Text={item.lines} />
                  ))}

				<Location />
                </div>

                <div>
                    <Form />
                </div>


              </div>

			<div>
				<BeforeFooter Heading={"Prefer to talk?"} Text={"Call the head office during business hours and ask for the partner in charge of your discipline."} Btn1={"+92 915853837"} Btn2={"Service Scope"} />
			</div>
      
    </section>
  )
}

export default Contact