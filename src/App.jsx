import quotation from './assets/bg-pattern-quotation.svg'
import danielPicture from "./assets/image-daniel.jpg";
import jeanettePicture from "./assets/image-jeanette.jpg";
import JonathanPicture from "./assets/image-jonathan.jpg";
import patrickPicture from "./assets/image-patrick.jpg";
import kiraPicture from "./assets/image-kira.jpg";

function App() {
  return (
    <>
      <main className="bg-neutral-LightGrayishBlue p-32  min-h-screen">
        <section className=" text-body font-neutral  grid gap-8 tablet:grid-cols-4 tablet:grid-rows-2">
          <article className="bg-primary-violet rounded-lg flex flex-col gap-8 p-12 text-neutral-LightGrayishBlue relative tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2 ">
            <div className="flex gap-4  items-center ">
              <img
                src={danielPicture}
                alt="daniel picture"
                width={50} 
                className="border-2 border-solid border-neutral-LightGray rounded-full"
              />
              <div className='z-10'>
                <h2 className="text-h2"> Daniel Clifford</h2>
                <p className="text-neutral-LightGray">Verified Graduate</p>
              </div>
            <img src={quotation} alt="quotation mark" className='absolute right-0 top-0 px-4 ' />
            </div>
            <h1 className="text-h1 font-bold">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h1>
            <blockquote className="text-neutral-LightGray ">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </blockquote>
          </article>
          <article className="bg-primary-grayishBlue rounded-lg flex flex-col gap-8 p-8 text-neutral-LightGrayishBlue tablet:col-start-3 tablet:col-end-4 tablet:row-start-1 tablet:row-end-2 ">
            <div className="flex gap-4  items-center ">
              <img
                src={JonathanPicture}
                width={50} alt=""
                className="border-2 border-solid border-neutral-LightGray rounded-full"
              />
              <div>
                <h2 className="text-h2">Jonathan Walters</h2>
                <p className="text-neutral-LightGray">Verified Graduate</p>
              </div>
            </div>
            <h1 className="text-h1 font-bold">
              The team was very supportive and kept me motivated
            </h1>
            <blockquote className="text-neutral-LightGray f">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </blockquote>
          </article>
          <article className="  rounded-lg bg-primary-White flex flex-col gap-8 p-8 text-primary-blackishBlue tablet:col-start-1 tablet:col-end-2 tablet:row-start-2 tablet:row-end-3">
            <div className="flex gap-4  items-center ">
              <img
                src={jeanettePicture}
                width={50} alt=""
                className="border-2 border-solid border-neutral-LightGray rounded-full"
              />
              <div>
                <h2 className="text-h2"> Jeanette Harmon</h2>
                <p className="text-neutral-LightGray">Verified Graduate</p>
              </div>
            </div>
            <h1 className="text-h1 font-bold">
              An overall wonderful and rewarding experience
            </h1>
            <blockquote className="text-primary-grayishBlue ">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </blockquote>
          </article>
          <article className="bg-primary-blackishBlue rounded-lg flex flex-col gap-8 p-8 text-neutral-LightGrayishBlue tablet:col-start-2 tablet:col-end-4 tablet:row-start-2 tablet:row-end-3">
            <div className="flex gap-4  items-center ">
              <img
                src={patrickPicture}
                width={50} alt=""
                className="border-2 border-solid border-neutral-LightGray rounded-full"
              />
              <div>
                <h2 className="text-h2"> Patrick Abrams</h2>
                <p className="text-neutral-LightGray">Verified Graduate</p>
              </div>
            </div>
            <h1 className="text-h1 font-bold">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h1>
            <blockquote className="text-neutral-LightGray ">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </blockquote>
          </article>
          <article className=" bg-primary-White rounded-lg  flex flex-col gap-8 p-8 text-primary-blackishBlue tablet:col-start-4 tablet:col-end-5 tablet:row-start-1 tablet:row-end-3">
            <div className="flex gap-4  items-center ">
              <img
                src={kiraPicture}
                width={50} alt=""
                className="border-2 border-solid border-neutral-LightGray rounded-full"
              />
              <div>
                <h2 className="text-h2"> Kira Whittle</h2>
                <p className="text-neutral-LightGray">Verified Graduate</p>
              </div>
            </div>
            <h1 className="text-h1 font-bold">
              Such a life-changing experience. Highly recommended!
            </h1>
            <blockquote className="text-primary-grayishBlue  ">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </blockquote>
          </article>
        </section>
      </main>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
