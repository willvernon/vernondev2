
import Image from 'next/image'
import resume from 'public/static/Resume.png'
import Link from 'next/link'
import avatar from '../public/MeMoji-Mac.png'
import DownloadButton from '@components/ResumeDownload'

export default function Uses() {
	return (
		<article className="mx-auto mt-16 mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
			<Image
				className="rounded-3xl"
				src={resume}
				alt="/"
				width={2164 / 2}
				height={1546 / 2}
				priority
			/>
			
			<br />
			<br />
			<h1 className="mb-4 text-3xl font-bold tracking-tight text-[#e64c33]  md:text-5xl">
				My Gear
			</h1>
			<h4 className="mt-2 text-lg mb-8 text-gray-300 ">
				Here&apos;s what tech I&apos;m currently using for coding, work, and
				life in general. It changes and adapts widely based on learning new
				tech and my love for learning new things to maximize quality of life
				and productivity.
			</h4>

			<Image
				className="rounded-lg"
				alt={`My computer desk`}
				src={`/static/images/setup.png`}
				width={2164 / 2}
				height={1546 / 2}
				priority
			/>
			<div className="prose w-full dark:prose-dark">
				<h2 id="computer-office" className="text-[#e64c33] font-bold">
					Computer / Office
				</h2>
				<ul className="text-2xl leading-relaxed">
					<li>16&quot; Macbook Pro M1-pro</li>
					<li>13.6&quot; Macbook air M2</li>
					<li>iPad Pro M1</li>
					<li>32&quot; Dell 4k HDR Curved Monitor</li>
					<li>Vertical Asus Gaming Monitor</li>
					<li>Logitech MX Master 3 Mouse</li>
					<li>NuPhy Air 75 Mechanical Keyboard **</li>
					<li>Apple Magic Trackpad</li>
				</ul>
				<br />
				<h2 id="coding" className="text-[#e64c33] font-bold">
					Coding
				</h2>
				<ul className="text-2xl leading-relaxed">
					<li>Editor: VSCode</li>
					<li>Gitkraken or GH Client</li>
					<li>Theme: My Personal custom Andromeda</li>
					<li>Terminal: Warp / zsh </li>
				</ul>
				<br />
				<h2 id="software" className="text-[#e64c33] font-bold">
					Software
				</h2>
				<ul className="text-2xl leading-relaxed">
					<li>BitWarden</li>
					<li>Proton **Highly Recommend</li>
					<li>Arc Browser **Highly Recommend</li>
					<li>Raycast **Highly Recommend</li>
					<li>Notion</li>
					<li>Bear</li>
					<li>Things</li>
				</ul>
				<br />
				<h2 id="other-tech" className="text-[#e64c33] font-bold">
					Other Tech
				</h2>
				<ul className="text-2xl leading-relaxed">
					<li>Apple Airpods Pro</li>
					<li>Apple Watch</li>
					<li>Apple iPhone</li>
					<li>Hyperdrive USB-C dock</li>
				</ul>
			</div>
		</article>
	)
}
