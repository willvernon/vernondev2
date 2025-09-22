'use client'
import Link from 'next/link'
// import ProjectsCard from '@components/projects/project'
import SoloCard from '@components/projects/SoloCard'
import scientia from '@public/projects/scientia.png'
import nhash from '@public/projects/NHASH.png'
import linen from '@public/projects/linen.png'
import dennys from '@public/projects/dennys/hero.png'
import boswells from '@public/projects/boswells/hero.png'
import FeatureCard from '@components/projects/FeatureCard'
import bblgx from '@public/projects/bblgx.png'
import sneakerx from '@public/projects/Sneakerx.png'
import demo from '@public/projects/Demo.png'
import genie from '@public/projects/genie-ai/Genie-AI.png'
import draft from '@public/static/draft_success.png'
import statTerm from '@public/projects/stat-term/hero.png'
import TopChoice from '@components/projects/topchoice'

export default function Dashboard() {
	return (
		<div className="mx-auto mb-16 flex max-w-4xl flex-col items-start justify-center">
			<h1 className="mb-4 text-3xl font-bold tracking-tight text-white dark:text-white md:text-5xl">
				Project Showcase
			</h1>
			<div className="mb-8">
				<p className="mb-4 text-gray-400 dark:text-gray-400">
					These are only a few projects of mine that show a few different
					skills between them. I&apos;ll be adding more and more as i go
					and have time to build case studies. *<br /> Also Check out
					my&nbsp;
					<Link
						href="/blog"
						className="text-gray-300 underline dark:text-gray-100"
					>
						Dev log showcasing my projects more detail.
					</Link>
				</p>
			</div>
			<div className="flex gap-6 flex-row w-full justify-center mt-6">
				<TopChoice
					gradient="from-[#E64D33] via-[#3B82F6] to-[#946ee7]"
					image={draft}
					link="/projects/draft-success"
					github="https://github.com/willvernon/draft_pick_success"
				/>
			</div>
			<div className="flex gap-6 flex-wrap justify-center md:flex-row mt-6">
				<FeatureCard
					gradient="from-[#3B82F6] to-[#1E40AF]"
					image={statTerm}
					link="/projects/stat-term"
					github="https://github.com/willvernon/stat-term"
				/>
				{/* <FeatureCard
                    // vercel="https://custon-linen.vercel.app/"
                    gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
                    image={dc}
                    link="/projects/digitalcraftsmen"
                    github="https://github.com/willvernon/dc-website"
                /> */}
				<FeatureCard
					// vercel="https://sneakerx-three.vercel.app/"
					gradient="from-[#818CF8] to-[#f07b45]"
					image={sneakerx}
					link="/projects/sneakerx"
					github="https://github.com/willvernon/Sneakerx"
				/>
			</div>

			<h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-white dark:text-white">
				Other Projects
			</h2>
			<p className="mb-4 text-gray-400 dark:text-gray-400">
				Curious what I have worked on or currently working on? Here&apos;s
				some of my projects on Github.
			</p>
			<div className="grid md:grid-cols-6  grid-cols-1">
				<div className="col-span-3 my-3 ">
					<SoloCard
						header="Company Website"
						link="/projects/bblgx-web"
						tools="Built w/ NextJS, Figma, & Tailwind"
						image={bblgx}
					/>
				</div>
				<div className="col-span-3 my-3 ">
					<SoloCard
						header="Management App"
						link="/projects/bblgx"
						tools="Built w/ Figma, & Swift"
						image={demo}
					/>
				</div>
				<div className="col-span-3 my-3">
					<SoloCard
						header="NHASH Display"
						link="/projects/nhash"
						tools="Built w/ HTML"
						image={nhash}
					/>
				</div>
				<div className="col-span-3 my-3">
					<SoloCard
						header="Dennys Marina"
						link="/projects/dennys"
						tools="Built w/ HTML, Figma, & Twig"
						image={dennys}
					/>
				</div>
				<div className="col-span-3 my-3 ">
					<SoloCard
						header="Boswells Golf"
						link="/projects/boswells"
						tools="Built w/ HTML, Figma, & Twig"
						image={boswells}
					/>
				</div>
				<div className="col-span-3 my-3 h-36 ">
					<SoloCard
						header="Scientia Tracker"
						link="/projects/scientia"
						tools="Built w/ React Native"
						image={scientia}
					/>
				</div>
			</div>
		</div>
	)
}
