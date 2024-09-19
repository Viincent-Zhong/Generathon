import Image from "next/image"

export default function TextContent () {
    return (
        <div className="ml-24 mt-36 w-3/4 bg-slate-100 rounded-sm p-10">
                <div className="">
                    <h1 id="section-introduction" className="scroll-mt-36 font-mono font-bold text-5xl ">Vincent Zhong</h1>
                    <p className="mt-10">
                        <a className="font-mono text-2xl">
                        Yeah that's me Vincent Zhong! An humble guy who's trying his best to lead a happy life.<br/>
                        On this page I won't talk about my whole life, but just a chapter of my life that I wanted to share.
                        </a>
                        <br/><br/>
                        <a className="font-italic text-2xl">
                        Keep in mind that I'm not a professional writer, I never did this before, so please be patient with me.
                        Maybe sometimes you the stories will be all over the place, but I'll try my best to make it as clear as possible.
                        </a>
                        <br/><br/><br/>
                        <a className="font-bold text-2xl">
                            Anyways, let's get started!
                        </a>
                        <br/><br/>
                        <a id="section-start" className="scroll-mt-36 font-mono text-4xl underline">
                            Half 2023 - Half 2024
                        </a>
                        <a className="font-mono text-2xl">
                            , this year was a turning point in my personal life, filled with unforgettable experiences and memories.
                            <br/><br/>
                            At first, the year started off pretty rough. I was quite stressed because of my studies,
                            but still I managed to get through it thanks to my friends and family. And amongst all that
                            there was one thing I was excited for, my year abroad in South Korea at the fabulous
                            university of Keimyung  
                        </a>
                        <a className="text-lg font-italic"> (... yeah It's not Seoul)</a>
                        <a className="font-mono text-2xl">
                            . We had a numerous number of choices to choose from,and not to brag
                            but I was also a bit spoiled with choices since I did quite well at school.
                            <br/>
                            But well I still chose Korea.
                            <br/><br/>
                            My criterias were very simple, go far away as possible from home and experience
                            a new culture, meet new peoples and yeah... Get out of my comfort zone.
                            <br/>
                            At first I was a bit worried, since I was always this kind of shy people,
                            who didn't have a lot of self-confidence. And the fact that I had no friends
                            from my school to come with me didn't help that.
                            <br/><br/>
                        </a>
                        <a className="text-xl italic">
                            Will I be able to make friends?   What will happens if I end up alone for the whole year ?
                        </a>
                        <a className="text-2xl font-mono">
                            <br/><br/>
                            Well it was just small toughts that were crossing my mind, but I was still excited to go.
                            I also wanted to change. I had previously started to go to the gym around 2 months
                            before because I felt bad about my body, and I completely became addicted to it.
                            <br/>
                            So I was already starting to change, and I wanted to continue that in Korea.
                            <br/><br/>
                        </a>
                        <a id="section-korea" className="scroll-mt-36 font-mono text-4xl underline">
                            My flight to Korea
                            <br/><br/>
                        </a>
                        <a className="font-mono text-2xl">
                            On the way to the airport, I didn't have this much of reaction, of course I was feeling
                            a bit excited but that's all. I think at that time I wasn't realizing that I was going to leave
                            my country for a whole year.
                            <br/>
                            But when it was time to say goodbye to my family, that's when I started to realize.
                            <br/>
                            I'm going to leave my home, my family with who I have been living for almost all my life....
                        </a>
                    </p>
                        <div className="lg:mt-10 lg-w-full h-0 lg:h-[28rem] flex justify-center">
                            <div className="w-2/3 h-full bg-gradient-to-r from-cyan-200 to-cyan-100 rounded-xl">
                                <div className="relative w-full h-full rounded-xl -mt-8 -ml-8">
                                    <Image className="rounded-xl" src={'/images/plane.jpg'} sizes="h-full w-full" fill={true} alt=" "/>
                                </div>
                            </div>
                        </div>
                    <p>
                        <a className="text-4xl font-thin">
                            <br/><br/>
                            And...!! I arrived in Korea!
                        </a>
                        <a className="font-mono text-2xl">
                            I'm in a new country! I'm in Korea! That's what I was thinking. Now time to go to
                            my appartment.
                            <br/><br/>
                            Arrived at my appartment, unpacked my luggages, and then slept, a good first night.
                            <br/>
                            ...The next day, that's when I realized that I was now alone in a country where I
                            know no one and nothing, my parents which I also meet in morning and say hello are not here.
                            My dogs which I always cuddle with are not here. I'm alone, and I'm starting to feel
                            a bit anxious. That's how a week passed, where I didn't do much apart from exploring the area
                            since I was alone and came a week before the start of classes.
                            <br/><br/>
                        </a>
                            <a id="section-first-semester" className="scroll-mt-36 text-3xl">
                                First semester
                            </a>
                        <a className="font-mono text-2xl">
                            <br/><br/>
                            And well, the first day of class arrived, I'm meeting all the other exchange students and I
                            was feeling good. I got rid of my mindset of being scared to approach people, I took my
                            courage and started to talk to peoples. I made new friends!
                            <br/>
                            ...That's pretty much how my first semester went, meeting new friends, travelling, studying
                            and going to the GYM.
                            <br/>
                        </a>
                        <a className="font-mono text-xl italic">
                            <br/>
                            Funny things, I was still going to the gym, and in my group of friends, people were starting
                            to call me the gym guy. And bit by bit, all my friends started to go to the gym also.
                            But I'm still not used to people seeing me as kind of the sporty guy, since I was always on the
                            fat side being at 93kg for 1.75 meters.
                            <br/>
                            Now I'm at 72kg and I feel energetic and more confident.
                        </a>
                        <a id="section-second-semester" className="scroll-mt-36 text-3xl">
                            <br/><br/>
                            My second semester, the start of a new chapter in my life
                        </a>
                        <a className="font-mono text-2xl">
                            <br/><br/>
                            During this first semester I had changed a lot. I was more confident,
                            I was more open to people. I kind of passed from the shy guy to the guy who's
                            outgoing and friendly.
                            <br/>
                            So during this second semester the streak continued. I joined a club,
                            an english conversations clubs with hundreds of people and I absolutely loved it.
                        </a>
                        <a className="text-5xl">
                            <br/>
                            KHE !!!!
                        </a>
                        <a className="font-mono text-2xl">
                            <br/>
                            In my first semester I didn't have this many korean friends, but thanks to this club
                            I have a tons now.
                            <br/>
                            And thanks to this club I met my girlfriend, a fantastic girl who I absolutely adore.
                            <br/><br/>
                            This was a turning point in my life. Before I was always this kind of guy who
                            didn't think much about my future and just lived day by day. Being with her made me
                            rethink about my whole life, my future and my goals.
                            <br/><br/>
                        </a>
                        <a id="section-new-me" className="scroll-mt-36 text-4xl underline">
                            A new me, filled with determination and motivation
                        </a>
                        <a className="font-mono text-2xl">
                            <br/><br/>
                            Goals. Life. Future. I wanted to change, I wanted to be a better version of myself.
                            I'm now more determined than ever to reach my goals, more motivated than ever and 
                            working harder than ever to reach them.
                            <br/><br/>
                            My goals ?
                            <br/>
                            Moving to Korea, having a sustainable job, working for a company which holds the same interests as me,
                            having a family and being happy.
                        </a>

                        <a id="section-conclusion" className="scroll-mt-36 text-4xl font-bold">
                            <br/><br/>
                            That's it
                        </a>
                        <a className="font-mono text-2xl">
                            <br/><br/>
                            In the span of a year I grew a lot. I want to thanks all my friends I met.
                            I want to thanks SPORT for making me a better person, it taught me a lot.
                            <br/>
                            Discipline, sharing, dedication.
                            <br/>
                            And I want to thanks my girlfriend, for being there for me, for being my life supplier,
                            my motivation.
                        </a>

                        <a className="text-3xl font-italic">
                            <br/><br/>
                            Thank you to have read this, I wanted to share a bit of my story. I hope you enjoyed it.
                            Just remembering all that made me get some tears.
                            The story ended up being quite short, I had so much to say that I lost myself in my toughts.
                            But my main story is here. 
                            <br/><br/><br/>
                            I'm Vincent Zhong, and I'm ready to take on the world.
                        </a>                            
                    </p>
                </div>
            </div>
    )
}