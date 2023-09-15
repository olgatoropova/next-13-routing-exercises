import React from 'react';

import Link from 'next/link';

function ScreenSaverSelection() {
	return (
		<main className="screen-saver-wrapper">
			<h1>Choose your color:</h1>
			<ul>
				<li>
					<Link href="/exercises/01-screensaver/yellow">yellow</Link>
				</li>
				<li>
					<Link href="/exercises/01-screensaver/purple">purple</Link>
				</li>
				<li>
					<Link href="/exercises/01-screensaver/pink">pink</Link>
				</li>
				<li>
					<Link href="/exercises/01-screensaver/white">white</Link>
				</li>
			</ul>
		</main>
	);
}

export default ScreenSaverSelection;
